"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Cross-page client island. Wires up:
 *  1. Reels hover-to-play on [data-reel] elements (homepage only).
 *  2. Scroll-triggered reveal animations on [data-reveal] elements
 *     (any page can opt in). Honors prefers-reduced-motion.
 *
 * Re-runs on every pathname change because client-side navigation
 * with App Router does NOT unmount the layout — without this the
 * IntersectionObserver would still be watching elements from the
 * previous page (now removed from the DOM), and new sections would
 * stay at their initial opacity-0 + translate state forever, making
 * pages appear broken on soft nav even though they render fine on
 * hard refresh.
 *
 * The fixed-topbar scroll-shadow lives in SiteHeader.tsx — that
 * component is a client component anyway (for the mobile menu and
 * usePathname-driven active state), and its scroll listener
 * re-evaluates on path change for the same reason.
 */
export default function Interactivity() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const supportsHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    type Cleanup = () => void;
    const cleanups: Cleanup[] = [];

    // ---- Reels hover-to-play ----
    const reels = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reel]"),
    );
    reels.forEach((reel) => {
      const video = reel.querySelector<HTMLVideoElement>(
        "[data-reel-video]",
      );
      if (!video) return;

      const start = () => {
        if (reduceMotion) return;
        try {
          video.currentTime = 0;
        } catch {
          /* metadata not yet ready */
        }
        const p = video.play();
        if (p && typeof p.then === "function") {
          p.then(() => reel.classList.add("is-playing")).catch(() => {});
        } else {
          reel.classList.add("is-playing");
        }
      };
      const stop = () => {
        video.pause();
        reel.classList.remove("is-playing");
      };
      const toggle = () => {
        if (video.paused) start();
        else stop();
      };
      const onClick = (e: MouseEvent) => {
        e.preventDefault();
        toggle();
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          toggle();
        }
      };

      if (supportsHover) {
        reel.addEventListener("mouseenter", start);
        reel.addEventListener("mouseleave", stop);
        cleanups.push(() => reel.removeEventListener("mouseenter", start));
        cleanups.push(() => reel.removeEventListener("mouseleave", stop));
      } else {
        reel.addEventListener("click", onClick);
        cleanups.push(() => reel.removeEventListener("click", onClick));
      }
      reel.addEventListener("focus", start);
      reel.addEventListener("blur", stop);
      reel.addEventListener("keydown", onKey);
      cleanups.push(() => reel.removeEventListener("focus", start));
      cleanups.push(() => reel.removeEventListener("blur", stop));
      cleanups.push(() => reel.removeEventListener("keydown", onKey));
    });

    // ---- Scroll-triggered reveal ----
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    // Reset any prior is-revealed flags so re-mounts (after client-side
    // navigation) re-evaluate fresh based on the new page's viewport.
    reveals.forEach((el) => el.classList.remove("is-revealed"));

    if (reveals.length > 0) {
      if (reduceMotion) {
        // Show everything immediately when reduced-motion is requested.
        reveals.forEach((el) => el.classList.add("is-revealed"));
      } else if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        );
        reveals.forEach((el) => observer.observe(el));
        cleanups.push(() => observer.disconnect());
      } else {
        // No IntersectionObserver — graceful fallback shows everything.
        reveals.forEach((el) => el.classList.add("is-revealed"));
      }
    }

    return () => {
      cleanups.forEach((c) => c());
    };
  }, [pathname]);

  return null;
}
