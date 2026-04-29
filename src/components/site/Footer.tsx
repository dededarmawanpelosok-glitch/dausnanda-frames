import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="px-3 sm:px-5 pb-5">
      <div className="mx-auto max-w-6xl panel p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 size-72 glow-orange opacity-50 pointer-events-none" />
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              <span className="text-base font-semibold">Dausnanda<span className="text-primary">.</span></span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Cinematic documentation for events that only happen once.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:col-span-2 text-sm">
            <div>
              <p className="eyebrow mb-3">Navigate</p>
              <ul className="space-y-2 text-foreground/80">
                <li><Link to="/work" className="hover:text-primary">Work</Link></li>
                <li><Link to="/services" className="hover:text-primary">Services</Link></li>
                <li><Link to="/about" className="hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">Reach out</p>
              <ul className="space-y-2 text-foreground/80">
                <li><a href="mailto:hello@dausnanda.com" className="hover:text-primary">hello@dausnanda.com</a></li>
                <li><a href="#" className="hover:text-primary">WhatsApp</a></li>
                <li><a href="#" className="hover:text-primary">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-hairline flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dausnanda — Firdaus Ananda. All rights reserved.</p>
          <p>Crafted for brands, institutions, and live performances.</p>
        </div>
      </div>
    </footer>
  );
}
