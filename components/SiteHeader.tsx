"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const nav = [
  { href: "/lessons", label: "Lessons" },
  { href: "/instructors", label: "Instructors" },
  { href: "/studio", label: "Studio" },
  { href: "/lesson-policies", label: "Policies" },
  { href: "/payments", label: "Payments" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeNav = useCallback(() => setOpen(false), []);

  return (
    <>
    <header
      className={[
        "site-header",
        scrolled ? "is-scrolled" : "",
        open ? "nav-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="header-inner">
        <Link className="logo" href="/" aria-label="Amped Music School home" onClick={closeNav}>
          <span className="logo-mark" aria-hidden="true">
            ♪
          </span>
          <span className="logo-text">Amped</span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bar" />
          <span className="sr-only">Menu</span>
        </button>
        <nav id="site-nav" className={["site-nav", open ? "is-open" : ""].filter(Boolean).join(" ")}>
          <ul className="nav-list">
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "is-active" : ""}
                onClick={closeNav}
              >
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "is-active" : ""}
                  onClick={closeNav}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={["nav-cta", pathname === "/contact" ? "is-active" : ""].filter(Boolean).join(" ")}
                onClick={closeNav}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    {open ? (
      <button
        type="button"
        className="nav-backdrop"
        aria-label="Close menu"
        onClick={closeNav}
      />
    ) : null}
    </>
  );
}
