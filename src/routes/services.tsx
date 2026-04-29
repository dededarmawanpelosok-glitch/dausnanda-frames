import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dausnanda Cinematic Documentation" },
      { name: "description", content: "Brand launch films, corporate event recap, institutional coverage, live performance capture, post-production, and documentation direction." },
      { property: "og:title", content: "Services — Dausnanda" },
      { property: "og:description", content: "Three project modes for cinematic event documentation: Essential Coverage, Cinematic Event Film, Full Documentation Direction." },
    ],
  }),
  component: ServicesPage,
});

const offers = [
  { tag: "Launch", title: "Brand Launch Films", body: "Cinematic launch coverage for brands and products — built for press, social, and the room.", points: ["Pre-launch planning", "Multi-cam capture", "Hero recap film", "Vertical & social cuts"] },
  { tag: "Corporate", title: "Corporate Event Recap", body: "Internal kickoffs, town halls, anniversaries — documented with warmth and edited with rhythm.", points: ["Run-of-show alignment", "Candid + formal coverage", "Awards moment edits", "Internal share assets"] },
  { tag: "Institution", title: "Institutional Coverage", body: "Government, education, NGO and conference events — captured with clarity, accuracy, and respect.", points: ["Speaker & panel coverage", "Audience reaction", "Press-ready stills", "Recap films"] },
  { tag: "Live", title: "Live Performance Capture", body: "Multi-camera coverage for concerts, jams, and large stages — with documentation team coordination.", points: ["Multi-stage coordination", "Audio sync workflow", "Recap + highlight cuts", "Backstage documentation"] },
  { tag: "Post", title: "Post-Production", body: "Editing, color, and sound. Story-led cuts that honour the event and travel well across formats.", points: ["Cinematic edit", "Color grade", "Sound design & mix", "Format adaptation"] },
  { tag: "Direction", title: "Documentation Direction", body: "Leading documentation crews on the ground — angles, redundancy, and a single coherent story.", points: ["Crew positioning", "Camera redundancy", "Run-of-show ownership", "Unified deliverable plan"] },
];

const modes = [
  { name: "Essential Coverage", line: "Documentation that just needs to be done right.", body: "A focused single-camera or compact crew shoot with a clean recap edit. For internal events, briefings, and smaller activations.", items: ["Single shoot day", "Recap film up to 2 min", "Selected stills", "Standard color & sound"] },
  { name: "Cinematic Event Film", line: "When the event is the story and the film carries the brand.", body: "Multi-angle coverage, pre-production, and an editorial edit shaped for press release, leadership review, and social.", items: ["Multi-cam coverage", "Hero film + vertical cuts", "Curated stills set", "Cinematic color & sound design"], featured: true },
  { name: "Full Documentation Direction", line: "Large-scale events that need a leader on the ground.", body: "End-to-end documentation direction — crew coordination, redundancy, multi-stage coverage, and a complete delivery package.", items: ["Documentation team lead", "Multi-stage coverage", "Hero + recap + highlights", "Press, social & archive deliverables"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="px-3 sm:px-5">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Services</p>
          <h1 className="display-hero mt-4 text-4xl sm:text-6xl lg:text-7xl text-balance max-w-4xl">
            Cinematic documentation, scoped to your event.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            Six core capabilities. Three project modes. No fixed pricing — every event is shaped to brief, scale, and crew needs.
          </p>
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-12">
        <div className="mx-auto max-w-6xl grid grid-cols-12 gap-4">
          {offers.map((o, i) => (
            <article key={o.title} className={[
              "panel p-6 sm:p-8",
              i % 3 === 0 ? "col-span-12 lg:col-span-5" : i % 3 === 1 ? "col-span-12 lg:col-span-7" : "col-span-12",
            ].join(" ")}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.25em] uppercase text-primary">{o.tag}</span>
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h2 className="mt-4 text-2xl font-medium tracking-tight">{o.title}</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl">{o.body}</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
                {o.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 rounded-2xl bg-elevated border border-hairline px-4 py-2.5">
                    <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-6 gap-4">
            <div>
              <p className="eyebrow">Project Modes</p>
              <h2 className="display-lg mt-3 text-3xl sm:text-5xl">Three ways to engage.</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            {modes.map((m) => (
              <div key={m.name} className={["rounded-3xl p-6 sm:p-8 relative overflow-hidden border", m.featured ? "bg-primary text-primary-foreground border-primary" : "bg-panel border-hairline"].join(" ")}>
                {m.featured && <span className="absolute top-5 right-5 text-[10px] tracking-[0.2em] uppercase bg-background/20 rounded-full px-2 py-1">Most chosen</span>}
                <h3 className="text-xl font-medium">{m.name}</h3>
                <p className={["mt-2 text-sm", m.featured ? "text-primary-foreground/80" : "text-muted-foreground"].join(" ")}>{m.line}</p>
                <p className={["mt-5 text-sm leading-relaxed", m.featured ? "text-primary-foreground/90" : "text-foreground/80"].join(" ")}>{m.body}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {m.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className={["mt-2 size-1.5 rounded-full shrink-0", m.featured ? "bg-primary-foreground/80" : "bg-primary"].join(" ")} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={["mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium", m.featured ? "bg-background text-foreground" : "bg-primary text-primary-foreground"].join(" ")}>
                  Discuss this mode <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-16 mb-16">
        <div className="mx-auto max-w-6xl panel p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="eyebrow">Not sure which fits?</p>
            <p className="mt-3 text-2xl sm:text-3xl text-balance max-w-2xl">Send a brief — we'll come back with the right mode for the event.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium">
            Start a Project <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
