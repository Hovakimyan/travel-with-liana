"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

// Site nav. Single source of truth — also fed to MobileMenu.
export const NAV_ITEMS = [
  { label: "Destinations", href: "/destinations" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Collabs", href: "/collabs" },
] as const;

const CONNECT_HREF = "mailto:hello@travelwithliana.example";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header
        className={`tl-topbar${scrolled ? " scrolled" : ""}`}
        id="tl-topbar"
      >
        <Link
          href="/"
          className="tl-mark"
          aria-label="Travel with Liana home"
        >
          Travel&nbsp;with&nbsp;<em>Liana</em>
        </Link>

        <nav className="tl-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={isActive(item.href) ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href={CONNECT_HREF} className="tl-cta-pill">
          Let&rsquo;s connect
        </a>

        <button
          type="button"
          className="tl-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="tl-mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`bars${menuOpen ? " is-open" : ""}`}>
            <span></span>
          </span>
        </button>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={NAV_ITEMS}
        connectHref={CONNECT_HREF}
        currentPath={pathname}
      />
    </>
  );
}
