import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Coaching", to: "/snooker-coaching" as const },
  { label: "About John", to: "/about-john" as const },
  { label: "Insights", to: "/snooker-insights" as const },
];

export function BrandMark() {
  return (
    <Link to="/" className="brand-mark" aria-label="JN Snooker home">
      <span className="brand-monogram">JN</span>
      <span className="brand-name">SNOOKER</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header ${scrolled || open ? "site-header-solid" : ""}`}>
      <div className="site-header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: "is-active" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-outline desktop-book" to="/book-snooker-coaching">
          Book coaching <ArrowRight size={15} aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          <Link className="button button-primary" to="/book-snooker-coaching">Book coaching</Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <BrandMark />
          <p>Practical one-to-one snooker coaching in Darlington, County Durham and surrounding North East areas.</p>
        </div>
        <FooterLinks title="Explore" links={navItems} />
        <div>
          <p className="footer-heading">Coaching</p>
          <ul><li>Cue action</li><li>Positional play</li><li>Break building</li><li>Match play</li><li>Practice</li></ul>
        </div>
        <div>
          <p className="footer-heading">Legal</p>
          <ul><li>Privacy policy</li><li>Cookie policy</li><li>Terms</li></ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} John Nicholson Snooker Coaching</span>
        <span>Darlington · County Durham</span>
      </div>
    </footer>
  );
}

export function StickyActionBar() {
  return (
    <aside className="sticky-action-wrap" aria-label="Coaching actions">
      <div className="sticky-action-bar">
        <Link className="sticky-action sticky-action-primary" to="/book-snooker-coaching">
          <CalendarDays size={18} aria-hidden="true" />
          <span>Book session</span>
        </Link>
        <Link className="sticky-action sticky-action-secondary" to="/book-snooker-coaching">
          <MessageCircle size={18} aria-hidden="true" />
          <span>Contact John</span>
        </Link>
      </div>
    </aside>
  );
}

function FooterLinks({ title, links }: { title: string; links: typeof navItems }) {
  return <div><p className="footer-heading">{title}</p><ul>{links.map((link) => <li key={link.to}><Link to={link.to}>{link.label}</Link></li>)}</ul></div>;
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /><StickyActionBar /></>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow"><span aria-hidden="true" />{children}</p>;
}

export function ArrowLink({ children, to, secondary = false }: { children: ReactNode; to: "/book-snooker-coaching" | "/snooker-coaching" | "/about-john" | "/snooker-insights"; secondary?: boolean }) {
  return <Link to={to} className={`button ${secondary ? "button-outline" : "button-primary"}`}>{children}<ArrowRight size={16} aria-hidden="true" /></Link>;
}

export const coachingAreas = ["Stance", "Alignment", "Grip", "Cue action", "Aiming", "Cue-ball control", "Positional play", "Break building", "Safety play", "Shot selection", "Match play", "Confidence", "Practice routines"];

export const processSteps = [
  ["01", "Assess", "Look at your current technique, habits and playing level."],
  ["02", "Identify", "Find the issues having the biggest effect on your consistency."],
  ["03", "Coach", "Work through practical adjustments and targeted drills."],
  ["04", "Practise", "Leave with clear routines you can continue independently."],
];