import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Dausnanda Cinematic Documentation" },
      { name: "description", content: "Selected cinematic work by Dausnanda — brand launches, corporate culture films, and large-scale live event documentation." },
      { property: "og:title", content: "Work — Dausnanda" },
      { property: "og:description", content: "Selected cinematic event documentation projects." },
    ],
  }),
  component: WorkPage,
});

const archive = [
  { client: "Traveloka", note: "Brand activation coverage" },
  { client: "Takeda", note: "Corporate moment documentation" },
];

function WorkPage() {
  return (
    <SiteLayout>
      <section className="px-3 sm:px-5">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Selected Work</p>
          <h1 className="display-hero mt-4 text-4xl sm:text-6xl lg:text-7xl text-balance max-w-4xl">
            Cinematic documentation, project by project.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            A focused archive of recent work — brand launches, corporate culture films, and large-scale live events. Visuals shown as cinematic placeholders pending client release.
          </p>
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-12">
        <div className="mx-auto max-w-6xl space-y-6">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group block panel overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative">
                  <VideoEmbed youtubeId={p.youtubeId} title={p.client} ratio="16/9" label={p.role} />
                </div>
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="text-primary tracking-[0.25em]">#{String(i + 1).padStart(2, "0")}</span>
                      <span>{p.year}</span>
                    </div>
                    <h2 className="mt-4 text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-primary transition">
                      {p.client}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">{p.category}</p>
                    <p className="mt-4 text-foreground/85">{p.blurb}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <span key={h.label} className="text-xs rounded-full bg-elevated border border-hairline px-3 py-1.5 text-foreground/80">
                        {h.label}: <span className="text-foreground">{h.value}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-16 mb-16">
        <div className="mx-auto max-w-6xl panel p-6 sm:p-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Archive 2025</p>
              <h2 className="display-lg mt-3 text-2xl sm:text-3xl">Other recent projects.</h2>
            </div>
            <p className="hidden sm:block text-xs text-muted-foreground max-w-xs text-right">
              Visuals available on request, pending client approval.
            </p>
          </div>
          <ul className="mt-6 divide-y divide-hairline border-t border-hairline">
            {archive.map((a) => (
              <li key={a.client} className="flex items-center justify-between py-4 gap-4">
                <div className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span className="font-medium">{a.client}</span>
                </div>
                <span className="text-sm text-muted-foreground">{a.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
