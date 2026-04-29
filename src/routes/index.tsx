import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { projects } from "@/data/projects";
import heroImg from "@/assets/hero-cinema.jpg";
import lensImg from "@/assets/texture-lens.jpg";
import portraitImg from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dausnanda — Cinematic Event Documentation" },
      {
        name: "description",
        content:
          "Dausnanda creates cinematic documentation for brand launches, corporate events, institutions, and live performances — from live capture to polished final cuts.",
      },
      { property: "og:title", content: "Dausnanda — Cinematic Event Documentation" },
      {
        property: "og:description",
        content:
          "Capturing moments that move fast and matter deeply. Cinematic videography by Firdaus Ananda.",
      },
    ],
  }),
  component: HomePage,
});

const trustNames = [
  "BYON by BSI",
  "Indo Kordsa",
  "Saburai Grand Jam",
  "Traveloka",
  "Takeda",
  "Presisi",
  "Women's Health Expo 2025",
];

const services = [
  {
    title: "Brand Launch Films",
    body: "Treating product and brand launches as cinematic moments — built for press, social, and the room.",
    tag: "Launch",
  },
  {
    title: "Corporate Event Recap",
    body: "Internal kickoffs, town halls, anniversaries — captured with warmth and edited with rhythm.",
    tag: "Corporate",
  },
  {
    title: "Institutional Coverage",
    body: "Government, education, NGO events — documented with clarity, accuracy, and respect.",
    tag: "Institution",
  },
  {
    title: "Live Performance Capture",
    body: "Multi-cam coverage for concerts, jams, and large stages with documentation team coordination.",
    tag: "Live",
  },
  {
    title: "Post-Production",
    body: "Editing, color, sound. Story-led cuts that honour the event and travel well across formats.",
    tag: "Post",
  },
  {
    title: "Documentation Direction",
    body: "Leading documentation crews on the ground — angles, redundancy, and a single coherent story.",
    tag: "Direction",
  },
];

const process = [
  { n: "01", t: "Brief & Intent", d: "We align on the moment, the audience, and what success actually looks like." },
  { n: "02", t: "Pre-Production", d: "Run-of-show, shotlist, crew positions, gear redundancy, contingency plans." },
  { n: "03", t: "On the Day", d: "Live capture, calm coordination, and a documentation crew that reads the room." },
  { n: "04", t: "Edit & Deliver", d: "Cinematic recap, social cuts, stills — packaged for press, leadership, and channels." },
];

const modes = [
  {
    name: "Essential Coverage",
    line: "Documentation that just needs to be done right.",
    body: "A focused single-camera or compact crew shoot with a clean recap edit. For internal events, briefings, and smaller activations.",
    items: ["Single shoot day", "Recap film up to 2 min", "Selected stills", "Standard color & sound"],
  },
  {
    name: "Cinematic Event Film",
    line: "When the event is the story and the film carries the brand.",
    body: "Multi-angle coverage, pre-production, and an editorial edit shaped for press release, leadership review, and social.",
    items: ["Multi-cam coverage", "Hero film + vertical cuts", "Curated stills set", "Cinematic color & sound design"],
    featured: true,
  },
  {
    name: "Full Documentation Direction",
    line: "Large-scale events that need a leader on the ground.",
    body: "End-to-end documentation direction — crew coordination, redundancy, multi-stage coverage, and a complete delivery package.",
    items: ["Documentation team lead", "Multi-stage coverage", "Hero + recap + highlights", "Press, social & archive deliverables"],
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="px-3 sm:px-5">
        <div className="mx-auto max-w-6xl relative overflow-hidden rounded-[40px] border border-hairline bg-panel grain">
          <img
            src={heroImg}
            alt="Videographer capturing a live event under stage lights"
            width={1920}
            height={1080}
            className="absolute inset-0 size-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/20" />
          <div className="absolute -left-32 -bottom-32 size-[28rem] glow-orange opacity-70 pointer-events-none" />
          <div className="absolute -right-24 top-10 size-[22rem] glow-blue opacity-50 pointer-events-none" />

          <div className="relative px-5 sm:px-10 lg:px-14 pt-16 sm:pt-24 pb-10 sm:pb-14">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/40 backdrop-blur px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                Booking selected projects — 2025/26
              </span>
            </div>

            <h1 className="display-hero mt-6 text-balance text-[44px] sm:text-[68px] lg:text-[92px] max-w-5xl">
              Capturing moments that move <span className="text-primary">fast</span> and matter <em className="not-italic text-foreground/90">deeply</em>.
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground text-pretty">
              Dausnanda creates cinematic documentation for brand launches, corporate events, institutions, and live performances — from live capture to polished final cuts.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#showreel"
                className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-2 pr-5 py-2 text-sm font-medium hover:opacity-95 transition"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-background/20">
                  <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Showreel
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-elevated/60 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-elevated transition"
              >
                Start a Project <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
              {[
                { k: "01", t: "Live Capture" },
                { k: "02", t: "Cinematic Edit" },
                { k: "03", t: "Crew Direction" },
                { k: "04", t: "Brand-Ready" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-hairline bg-background/40 backdrop-blur px-4 py-3">
                  <div className="text-[10px] text-primary tracking-[0.2em]">#{s.k}</div>
                  <div className="text-sm mt-1 text-foreground/90">{s.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="px-3 sm:px-5 mt-6">
        <div className="mx-auto max-w-6xl panel px-5 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="eyebrow shrink-0">Trusted on projects with</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/80">
            {trustNames.map((n) => (
              <span key={n} className="inline-flex items-center gap-2">
                <span className="size-1 rounded-full bg-muted-foreground/70" />
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="px-3 sm:px-5 mt-16 sm:mt-28">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <p className="eyebrow">The manifesto</p>
            <h2 className="display-lg mt-4 text-3xl sm:text-4xl">A film-first approach to event documentation.</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-balance leading-[1.15] text-foreground/90 font-medium tracking-tight">
              Every event has <span className="text-primary">one chance</span> to be captured right. We treat that one chance like a film set — calm, coordinated, and built around the moments that matter.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { t: "Selective", d: "We don't take on everything — only events we can do well." },
                { t: "Cinematic", d: "Story-led cuts, considered color, restrained motion." },
                { t: "Reliable", d: "Redundancy, run-of-show discipline, and calm crews." },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-elevated border border-hairline p-5">
                  <div className="text-foreground font-medium">{x.t}</div>
                  <p className="text-sm text-muted-foreground mt-2">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT REEL */}
      <section id="showreel" className="px-3 sm:px-5 mt-16 sm:mt-28">
        <div className="mx-auto max-w-6xl flex items-end justify-between gap-4 mb-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="display-lg mt-3 text-3xl sm:text-5xl">Recent cinematic projects.</h2>
          </div>
          <Link to="/work" className="hidden sm:inline-flex text-sm text-foreground/80 hover:text-primary">
            View all work →
          </Link>
        </div>

        <div className="mx-auto max-w-6xl -mx-3 sm:mx-0 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 px-3 sm:px-0 snap-x snap-mandatory">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[32%] group"
              >
                <div className="relative">
                  <MediaPlaceholder src={p.cover} alt={p.client} ratio="4/5" label={p.role} />
                  <div className="absolute top-4 left-4 text-[10px] tracking-[0.25em] text-primary uppercase">#{String(i + 1).padStart(2, "0")}</div>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-muted-foreground">{p.category}</div>
                  <div className="text-lg font-medium mt-1 group-hover:text-primary transition">{p.client}</div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.blurb}</p>
                </div>
              </Link>
            ))}
            {/* Archive card */}
            <div className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[32%]">
              <div className="aspect-[4/5] rounded-3xl border border-hairline bg-elevated p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-12 -top-12 size-56 glow-orange opacity-50" />
                <div>
                  <div className="text-[10px] tracking-[0.25em] text-primary uppercase">#04</div>
                  <div className="mt-3 text-xs text-muted-foreground">Other Projects 2025</div>
                  <div className="mt-1 text-lg font-medium">Archive proof</div>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li>— Traveloka</li>
                  <li>— Takeda</li>
                  <li>— Presisi</li>
                  <li>— Women's Health Expo 2025</li>
                </ul>
                <p className="text-xs text-muted-foreground">Visuals available on request, pending client approval.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP BENTO */}
      <section className="px-3 sm:px-5 mt-16 sm:mt-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-6 gap-4">
            <div>
              <p className="eyebrow">Flagship</p>
              <h2 className="display-lg mt-3 text-3xl sm:text-5xl">Three projects that shaped 2025.</h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <Link to="/work/$slug" params={{ slug: "saburai" }} className="col-span-12 lg:col-span-8 group">
              <MediaPlaceholder src={projects[2].cover} alt="Saburai Grand Jam" ratio="21/9" label="Lead Documentation" />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Music / Live Event</div>
                  <div className="text-lg font-medium group-hover:text-primary">Saburai Grand Jam</div>
                </div>
                <div className="text-xs text-muted-foreground">2025</div>
              </div>
            </Link>
            <Link to="/work/$slug" params={{ slug: "byon" }} className="col-span-12 sm:col-span-6 lg:col-span-4 group">
              <MediaPlaceholder src={projects[0].cover} alt="BYON by BSI" ratio="4/5" label="Brand Launch" />
              <div className="mt-3">
                <div className="text-xs text-muted-foreground">Brand Launch</div>
                <div className="text-lg font-medium group-hover:text-primary">BYON by BSI</div>
              </div>
            </Link>
            <Link to="/work/$slug" params={{ slug: "kordsa" }} className="col-span-12 sm:col-span-6 lg:col-span-7 group">
              <MediaPlaceholder src={projects[1].cover} alt="Indo Kordsa" ratio="16/9" label="Corporate Recap" />
              <div className="mt-3">
                <div className="text-xs text-muted-foreground">Corporate Culture</div>
                <div className="text-lg font-medium group-hover:text-primary">Indo Kordsa</div>
              </div>
            </Link>
            <div className="col-span-12 lg:col-span-5 panel p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-16 -top-16 size-64 glow-blue opacity-50" />
              <div>
                <p className="eyebrow">Notes from the field</p>
                <p className="mt-4 text-xl text-foreground/90 text-balance">
                  "We don't chase coverage. We chase the few frames that say everything about the night."
                </p>
              </div>
              <div className="mt-6 text-sm text-muted-foreground">— Firdaus Ananda</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT IDENTITY PANEL */}
      <section className="px-3 sm:px-5 mt-16 sm:mt-28">
        <div className="mx-auto max-w-6xl panel grid lg:grid-cols-12 overflow-hidden">
          <div className="lg:col-span-5 relative min-h-[360px]">
            <img src={portraitImg} alt="Firdaus Ananda" loading="lazy" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-10">
            <p className="eyebrow">About Dausnanda</p>
            <h2 className="display-lg mt-4 text-3xl sm:text-4xl">Firdaus Ananda — videographer, editor, documentation lead.</h2>
            <p className="mt-5 text-foreground/85 leading-relaxed">
              Dausnanda is the creative identity of Firdaus Ananda. The work focuses on cinematic event documentation — brand launches, corporate culture, institutional moments, and large-scale live performances.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The approach is film-first: pre-production discipline, calm coordination on the day, and editing that respects the moment. The output is built to be used — by leadership, press, and the brand itself.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {[
                { k: "1,000+", t: "musicians captured" },
                { k: "MURI", t: "record context" },
                { k: "End-to-end", t: "capture & edit" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-elevated border border-hairline p-4">
                  <div className="text-primary font-medium">{x.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{x.t}</div>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Link to="/about" className="inline-flex items-center gap-2 text-sm text-foreground/90 hover:text-primary">
                Read more about the work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="px-3 sm:px-5 mt-16 sm:mt-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-6 gap-4">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="display-lg mt-3 text-3xl sm:text-5xl">What we capture.</h2>
            </div>
            <Link to="/services" className="hidden sm:inline-flex text-sm text-foreground/80 hover:text-primary">All services →</Link>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={[
                  "panel p-6 sm:p-7 relative overflow-hidden",
                  i === 0 ? "col-span-12 sm:col-span-6 lg:col-span-5" :
                  i === 1 ? "col-span-12 sm:col-span-6 lg:col-span-4" :
                  i === 2 ? "col-span-12 lg:col-span-3" :
                  i === 3 ? "col-span-12 sm:col-span-6 lg:col-span-4" :
                  i === 4 ? "col-span-12 sm:col-span-6 lg:col-span-4" :
                            "col-span-12 lg:col-span-4",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-primary">{s.tag}</span>
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="px-3 sm:px-5 mt-16 sm:mt-28">
        <div className="mx-auto max-w-6xl panel p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute -right-32 -bottom-32 size-[26rem] glow-orange opacity-40 pointer-events-none" />
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <p className="eyebrow">Process</p>
              <h2 className="display-lg mt-3 text-3xl sm:text-4xl">From brief to broadcast-ready.</h2>
              <p className="mt-4 text-muted-foreground text-sm max-w-sm">
                A four-step rhythm we use across launches, corporate events, and large stages.
              </p>
            </div>
            <ol className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {process.map((p) => (
                <li key={p.n} className="rounded-2xl bg-elevated border border-hairline p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-primary text-sm font-medium">{p.n}</span>
                    <span className="size-1.5 rounded-full bg-primary" />
                  </div>
                  <div className="mt-3 text-foreground font-medium">{p.t}</div>
                  <p className="text-sm text-muted-foreground mt-2">{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PROJECT MODES */}
      <section className="px-3 sm:px-5 mt-16 sm:mt-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-6 gap-4">
            <div>
              <p className="eyebrow">Project Modes</p>
              <h2 className="display-lg mt-3 text-3xl sm:text-5xl">Three ways to work together.</h2>
            </div>
            <p className="hidden sm:block text-sm text-muted-foreground max-w-xs text-right">
              No fixed pricing — every event is scoped to brief, scale, and crew needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            {modes.map((m) => (
              <div
                key={m.name}
                className={[
                  "rounded-3xl p-6 sm:p-8 relative overflow-hidden border",
                  m.featured
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-panel border-hairline",
                ].join(" ")}
              >
                {m.featured && (
                  <span className="absolute top-5 right-5 text-[10px] tracking-[0.2em] uppercase bg-background/20 text-primary-foreground rounded-full px-2 py-1">
                    Most chosen
                  </span>
                )}
                <h3 className="text-xl font-medium">{m.name}</h3>
                <p className={["mt-2 text-sm", m.featured ? "text-primary-foreground/80" : "text-muted-foreground"].join(" ")}>{m.line}</p>
                <p className={["mt-5 text-sm leading-relaxed", m.featured ? "text-primary-foreground/90" : "text-foreground/80"].join(" ")}>{m.body}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {m.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className={["mt-2 size-1.5 rounded-full shrink-0", m.featured ? "bg-primary-foreground/80" : "bg-primary"].join(" ")} />
                      <span className={m.featured ? "text-primary-foreground/95" : "text-foreground/90"}>{it}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={[
                    "mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium",
                    m.featured
                      ? "bg-background text-foreground"
                      : "bg-primary text-primary-foreground",
                  ].join(" ")}
                >
                  Discuss this mode <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCALE & TRUST */}
      <section className="px-3 sm:px-5 mt-16 sm:mt-28">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-hairline">
            <img src={lensImg} alt="Cinema lens detail" loading="lazy" className="size-full object-cover aspect-[4/5]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute left-5 bottom-5 right-5">
              <p className="eyebrow">Scale & trust</p>
              <p className="mt-2 text-2xl font-medium">Built for events that don't get a second take.</p>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { k: "1,000+", t: "musicians coordinated on a single stage" },
              { k: "Multi-cam", t: "live capture across stages and angles" },
              { k: "Brand-grade", t: "edits used by leadership, press, and social" },
              { k: "Calm crew", t: "documentation team direction on the day" },
            ].map((s) => (
              <div key={s.t} className="panel p-6">
                <div className="text-2xl font-medium text-primary">{s.k}</div>
                <p className="text-sm text-muted-foreground mt-2">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PANEL */}
      <section className="px-3 sm:px-5 mt-16 sm:mt-28 mb-16">
        <ContactPanel />
      </section>
    </SiteLayout>
  );
}

export function ContactPanel() {
  return (
    <div className="mx-auto max-w-6xl panel relative overflow-hidden">
      <div className="absolute -left-32 -bottom-32 size-[28rem] glow-orange opacity-40 pointer-events-none" />
      <div className="absolute -right-24 -top-24 size-[22rem] glow-blue opacity-30 pointer-events-none" />
      <div className="grid lg:grid-cols-12 gap-0">
        <div className="lg:col-span-5 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-hairline">
          <p className="eyebrow">Get in touch</p>
          <h2 className="display-lg mt-3 text-3xl sm:text-4xl text-balance">
            Tell us about the moment you need to capture right.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Brand launch, internal event, institutional moment, or live performance — share the brief and we'll come back with a tailored approach.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://wa.me/0000000000"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              WhatsApp Dausnanda
            </a>
            <a
              href="mailto:hello@dausnanda.com"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-elevated px-5 py-3 text-sm font-medium"
            >
              Email
            </a>
          </div>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="eyebrow">Based in</dt>
              <dd className="mt-1 text-foreground/90">Indonesia — available nationwide.</dd>
            </div>
            <div>
              <dt className="eyebrow">Response</dt>
              <dd className="mt-1 text-foreground/90">Within one business day.</dd>
            </div>
          </dl>
        </div>

        <form
          className="lg:col-span-7 p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Field label="Name" name="name" />
          <Field label="Company / Brand" name="company" />
          <Field label="Email" name="email" type="email" />
          <Field label="Event date" name="date" type="text" placeholder="e.g. October 2026" />
          <Field
            label="Event type"
            name="type"
            placeholder="Brand launch / Corporate / Institution / Live"
            full
          />
          <div className="sm:col-span-2">
            <label htmlFor="message" className="text-xs text-muted-foreground tracking-wide">Brief</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about the moment, scale, and what success looks like."
              className="mt-2 w-full rounded-2xl bg-elevated border border-hairline px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-3 pt-2">
            <p className="text-xs text-muted-foreground">We typically reply within a business day.</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Send brief <span aria-hidden>→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label, name, type = "text", placeholder, full,
}: { label: string; name: string; type?: string; placeholder?: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={name} className="text-xs text-muted-foreground tracking-wide">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl bg-elevated border border-hairline px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
