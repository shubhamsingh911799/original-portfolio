import { useEffect, useState } from "react";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { navSections, profile, resumeUrl } from "@/config/portfolio";
import { cn } from "@/lib/utils";

function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-primary to-accent2 transition-[width] duration-150"
      style={{ width: `${pct}%` }}
    />
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "glass" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-[92rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-3.5 sm:px-10 lg:flex lg:justify-between"
      >
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <img
            src="/avatar.jpg"
            alt="Kumar Shubham"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-lg border border-primary/50 object-cover object-center"
          />
          <span className="truncate font-display text-sm font-semibold tracking-tight">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navSections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors",
                  active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "mx-auto mt-1 block h-px w-full origin-left bg-primary transition-transform",
                    active === id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={resumeUrl ?? "#resume"}
            {...(resumeUrl ? { target: "_blank", rel: "noreferrer noopener" } : {})}
            className="hidden items-center gap-2 rounded-lg bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <FileText className="h-4 w-4" /> Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-border lg:hidden">
          <ul className="mx-auto max-w-[92rem] px-6 py-3 sm:px-10">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-2 py-2.5 text-sm",
                    active === id ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={resumeUrl ?? "#resume"}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-foreground px-3.5 py-2.5 text-sm font-medium text-background"
              >
                <FileText className="h-4 w-4" /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
      <ScrollProgress />
    </header>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <a
      href="#home"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-muted-foreground shadow-lg transition-colors hover:text-primary"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </a>
  );
}
