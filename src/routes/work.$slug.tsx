import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    const title = `${p.client} — Dausnanda Case Study`;
    return {
      meta: [
        { title },
        { name: "description", content: p.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: p.blurb },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="px-5 max-w-3xl mx-auto py-20 text-center">
        <p className="eyebrow">404</p>
        <h1 className="display-lg mt-3 text-3xl">Case study not found.</h1>
        <Link to="/work" className="mt-6 inline-flex rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm">Back to work</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="px-5 max-w-3xl mx-auto py-20 text-center">
        <h1 className="display-lg text-3xl">Something went wrong.</h1>
        <p className="mt-3 text-muted-foreground text-sm">{error.message}</p>
      </div>
    </SiteLayout>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <SiteLayout>
      <section className="px-3 sm:px-5">
        <div className="mx-auto max-w-6xl panel overflow-hidden relative">
          <div className="relative">
            <MediaPlaceholder src={project.cover} alt={project.client} ratio="21/9" priority />
          </div>
          <div className="p-6 sm:p-10 lg:p-14">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full bg-elevated border border-hairline px-3 py-1.5 text-primary">{project.category}</span>
              <span>{project.role}</span>
              <span>·</span>
              <span>{project.year}</span>
              {project.location && (<><span>·</span><span>{project.location}</span></>)}
            </div>
            <h1 className="display-hero mt-5 text-3xl sm:text-5xl lg:text-6xl text-balance max-w-4xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-muted-foreground text-lg">{project.blurb}</p>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-10">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 panel p-6 sm:p-10 space-y-5 text-foreground/85 leading-relaxed">
            <p className="eyebrow">The story</p>
            {project.narrative.map((p, i) => (<p key={i} className={i === 0 ? "text-xl text-foreground" : ""}>{p}</p>))}
          </div>
          <aside className="lg:col-span-4 space-y-4">
            <div className="panel p-6">
              <p className="eyebrow">Project facts</p>
              <dl className="mt-4 space-y-3 text-sm">
                <Fact k="Client" v={project.client} />
                <Fact k="Category" v={project.category} />
                <Fact k="Role" v={project.role} />
                <Fact k="Year" v={project.year} />
                {project.location && <Fact k="Location" v={project.location} />}
              </dl>
            </div>
            <div className="panel p-6">
              <p className="eyebrow">Deliverables</p>
              <ul className="mt-4 space-y-2 text-sm">
                {project.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-10">
        <div className="mx-auto max-w-6xl grid grid-cols-12 gap-4">
          <MediaPlaceholder src={project.cover} alt={project.client} ratio="16/9" className="col-span-12 lg:col-span-8" />
          <div className="col-span-12 lg:col-span-4 panel p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-16 -top-16 size-64 glow-orange opacity-40" />
            <div>
              <p className="eyebrow">Highlights</p>
              <ul className="mt-4 space-y-3 text-sm">
                {project.highlights.map((h) => (
                  <li key={h.label} className="flex items-center justify-between gap-3 border-b border-hairline pb-3 last:border-0">
                    <span className="text-muted-foreground">{h.label}</span>
                    <span className="text-foreground">{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-16 mb-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-6 gap-4">
            <h2 className="display-lg text-2xl sm:text-3xl">Other selected work</h2>
            <Link to="/work" className="text-sm text-foreground/80 hover:text-primary">All work →</Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {others.map((o) => (
              <Link key={o.slug} to="/work/$slug" params={{ slug: o.slug }} className="group">
                <MediaPlaceholder src={o.cover} alt={o.client} ratio="16/9" label={o.role} />
                <div className="mt-3">
                  <div className="text-xs text-muted-foreground">{o.category}</div>
                  <div className="text-lg font-medium group-hover:text-primary">{o.client}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-hairline pb-3 last:border-0">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-foreground text-right">{v}</dd>
    </div>
  );
}
