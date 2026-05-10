import Link from "next/link";

const footerNav = [
  { href: "/lessons", label: "Lessons" },
  { href: "/instructors", label: "Instructors" },
  { href: "/studio", label: "Studio photos" },
  { href: "/lesson-policies", label: "Policies" },
  { href: "/payments", label: "Payments" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-mark" aria-hidden="true">
            ♪
          </span>
          <span>Amped Music School</span>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="footer-tagline">Private lessons · Richmond, Rhode Island</p>
        <p className="footer-copy">
          © 2013–{new Date().getFullYear()} Amped Music School.
        </p>
      </div>
    </footer>
  );
}
