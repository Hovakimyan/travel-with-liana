"use client";

import { useEffect } from "react";

/**
 * Single client island that wires up the page's two interactive behaviors:
 *  1. The fixed topbar grows a hairline border on scroll past 12px.
 *  2. The Reels grid plays each clip on hover (desktop) or focus (keyboard),
 *     pauses on leave/blur. Touch devices toggle on tap. Space/Enter on a
 *     focused reel toggles play. prefers-reduced-motion skips auto-play.
 *
 * The DOM lives in the server component (page.tsx). This component only
 * attaches event listeners — keeping the static page server-rendered while
 * the JS for interactivity runs only on the client.
 */
export default function Interactivity() {
  useEffect(() => {
    // ---- Topbar scroll shadow ----
    const topbar = document.getElementById("tl-topbar");
    const onScroll = () => {
      if (!topbar) return;
      if (window.scrollY > 12) topbar.classList.add("scrolled");
      else topbar.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ---- Reels hover-to-play ----
    const reels = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reel]"),
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const supportsHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    type Cleanup = () => void;
    const cleanups: Cleanup[] = [];

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
          /* some browsers throw if metadata isn't ready yet */
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

    return () => {
      window.removeEventListener("scroll", onScroll);
      cleanups.forEach((c) => c());
    };
  }, []);

  return null;
}
