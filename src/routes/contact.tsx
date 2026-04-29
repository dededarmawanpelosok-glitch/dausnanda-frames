import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactPanel } from "./index";
import contactImg from "@/assets/contact-stage.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dausnanda" },
      { name: "description", content: "Brief Dausnanda for cinematic event documentation. Brand launches, corporate, institutional, and live performance projects." },
      { property: "og:title", content: "Contact — Dausnanda" },
      { property: "og:description", content: "Tell us about the moment you need to capture right." },
      { property: "og:image", content: contactImg },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="px-3 sm:px-5">
        <div className="mx-auto max-w-6xl panel overflow-hidden relative">
          <img src={contactImg} alt="Stage with atmospheric lighting" className="absolute inset-0 size-full object-cover opacity-50" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/70 to-panel/30" />
          <div className="relative p-6 sm:p-12 lg:p-16">
            <p className="eyebrow">Contact</p>
            <h1 className="display-hero mt-4 text-4xl sm:text-6xl lg:text-7xl text-balance max-w-4xl">
              Tell us about the moment.
            </h1>
            <p className="mt-5 text-foreground/85 max-w-xl text-lg">
              Brand launch, corporate event, institutional moment, or live performance — share the brief and we'll come back with a tailored approach.
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-5 mt-8 mb-16">
        <ContactPanel />
      </section>
    </SiteLayout>
  );
}
