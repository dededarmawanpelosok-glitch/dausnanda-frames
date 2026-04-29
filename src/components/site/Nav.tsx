import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4">
      <div
        className={[
          "mx-auto max-w-6xl flex items-center justify-between gap-3 px-3 sm:px-4 py-2.5 rounded-full transition-all",
          scrolled
            ? "bg-panel/80 backdrop-blur-xl border border-hairline shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
            : "bg-panel/40 backdrop-blur-md border border-transparent",
        ].join(" ")}
      >
        <Link to="/" className="flex items-center gap-2 pl-1.5">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_18px_rgba(255,106,0,0.8)]" />
          <span className="text-[15px] font-semibold tracking-tight">
            Dausnanda<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-1.5 rounded-full hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground bg-elevated" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-95 transition"
          >
            Start a Project
            <span aria-hidden>→</span>
          </Link>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex size-9 items-center justify-center rounded-full bg-elevated border border-hairline"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block w-4 h-px bg-foreground" />
              <span className="block w-4 h-px bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto mt-2 max-w-6xl rounded-3xl bg-panel/95 backdrop-blur-xl border border-hairline p-3">
          <div className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-foreground/90 rounded-2xl hover:bg-elevated"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-4 py-3 text-sm font-medium"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
