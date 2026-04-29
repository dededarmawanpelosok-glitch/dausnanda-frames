import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import portrait from "@/assets/about-portrait.jpg";
import lens from "@/assets/texture-lens.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Firdaus Ananda · Dausnanda" },
      { name: "description", content: "Dausnanda is the creative identity of Firdaus Ananda — videographer, editor, and documentation team lead specialising in cinematic event films." },
      { property: "og:title", content: "About — Dausnanda" },
      { property: "og:description", content: "Videographer, editor, documentation lead. Cinematic event documentation across brand, corporate, institutional, and live performance work." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="px-3 sm:px-5">
        <div className="mx-auto max-w-6xl panel grid lg:grid-cols-12 overflow-hidden">
          <div className="lg:col-span-5 relative min-h-[420px]">
            <img src={portrait} alt="Firdaus Ananda" className="absolute inset-0 size-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14">
            <p className="eyebrow">About</p>
            <h1 className="display-hero mt-4 text-3xl sm:text-5xl text-balance">
              Firdaus Ananda — the eye behind Dausnanda.
            </h1>
            <p className="mt-5 text-foreground/85 leading-relaxed text-lg">
              Dausnanda is a cinematic documentation practice focused on events that only happen once. The work spans brand launches, corporate culture films, institutional moments, and large-scale live performances.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The approach is film-first — pre-production discipline, calm coordination on the day, and editing that respects the moment. Output is built to be used: by leadership, press, and the brand itself.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-10">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 panel p-6 sm:p-10">
            <p className="eyebrow">Practice</p>
            <h2 className="display-lg mt-3 text-2xl sm:text-3xl">A small, deliberate way of working.</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Selective", d: "We take on a small number of events each year so we can do them properly." },
                { t: "Cinematic", d: "Story-led edits, considered color, restrained motion." },
                { t: "Coordinated", d: "On large stages, the documentation team is led with the same discipline as a film crew." },
                { t: "Useful", d: "Every deliverable is shaped for a real channel — leadership, press, social, archive." },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-elevated border border-hairline p-5">
                  <div className="font-medium">{x.t}</div>
                  <p className="text-sm text-muted-foreground mt-2">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 panel relative overflow-hidden">
            <img src={lens} alt="Cinema lens detail" className="absolute inset-0 size-full object-cover opacity-80" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/40 to-transparent" />
            <div className="relative p-6 sm:p-8 h-full flex flex-col justify-end min-h-[320px]">
              <p className="eyebrow">Toolkit</p>
              <p className="mt-3 text-xl text-foreground/95">Cinema cameras, prime glass, and an editorial edit room — kept lean enough to move with the room.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-10">
        <div className="mx-auto max-w-6xl panel p-6 sm:p-10">
          <p className="eyebrow">Roles</p>
          <h2 className="display-lg mt-3 text-2xl sm:text-3xl">What I'm hired to do.</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            {[
              { t: "Videographer", d: "Lead camera on launches, corporate events, and institutional coverage." },
              { t: "Video Editor", d: "Cinematic post — story, pacing, color, and sound." },
              { t: "Documentation Director", d: "Crew direction for large-scale live events and multi-stage productions." },
            ].map((r) => (
              <div key={r.t} className="rounded-2xl bg-elevated border border-hairline p-5">
                <div className="text-primary text-xs tracking-[0.2em] uppercase">Role</div>
                <div className="mt-2 text-base font-medium">{r.t}</div>
                <p className="mt-2 text-muted-foreground">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-10 mb-16">
        <div className="mx-auto max-w-6xl panel p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 size-64 glow-orange opacity-40 pointer-events-none" />
          <p className="text-2xl sm:text-3xl text-balance max-w-2xl">Have a moment that needs to be captured right? Let's talk.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium">Start a Project →</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
