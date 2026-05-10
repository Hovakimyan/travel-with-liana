"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface NavItem {
  readonly label: string;
  readonly href: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  items: readonly NavItem[];
  connectHref: string;
  currentPath: string;
}

export default function MobileMenu({
  open,
  onClose,
  items,
  connectHref,
  currentPath,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape; trap focus inside the panel while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    // Move focus into the panel on open.
    requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    });
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const isActive = (href: string) =>
    currentPath === href || currentPath.startsWith(href + "/");

  return (
    <>
      <div
        className={`tl-mobile-backdrop${open ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="tl-mobile-menu"
        className={`tl-mobile-menu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal={open}
        aria-label="Site navigation"
        // When closed, hide from a11y tree
        aria-hidden={!open}
      >
        <nav className="tl-mobile-nav" aria-label="Primary mobile">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={isActive(item.href) ? "is-active" : undefined}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={connectHref}
          className="tl-mobile-connect"
          tabIndex={open ? 0 : -1}
        >
          Let&rsquo;s connect &rarr;
        </a>
        <p className="tl-mobile-tagline">collect moments, not things ✈</p>
      </div>
    </>
  );
}
