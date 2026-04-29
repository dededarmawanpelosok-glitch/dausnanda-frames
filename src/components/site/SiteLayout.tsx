import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}
