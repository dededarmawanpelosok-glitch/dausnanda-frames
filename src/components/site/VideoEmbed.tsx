import { useState } from "react";

type Props = {
  youtubeId: string;
  title: string;
  ratio?: "16/9" | "4/5" | "1/1" | "21/9";
  label?: string;
  className?: string;
  priority?: boolean;
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]",
};

export function VideoEmbed({ youtubeId, title, ratio = "16/9", label, className = "", priority }: Props) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const thumbHi = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-hairline bg-elevated grain group",
        ratioClass[ratio],
        className,
      ].join(" ")}
    >
      {active ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 size-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`Play video: ${title}`}
        >
          <picture>
            <source srcSet={thumbHi} media="(min-width: 768px)" />
            <img
              src={thumb}
              alt={title}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.02]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = thumb;
              }}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />

          <div className="absolute inset-0 grid place-items-center">
            <span className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-3 pr-5 py-2.5 text-sm font-medium shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] transition group-hover:scale-105">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-background/25">
                <svg viewBox="0 0 24 24" className="size-4 ml-0.5" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Play film
            </span>
          </div>

          {label && (
            <span className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur px-3 py-1.5 text-xs text-foreground/90 border border-hairline">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              {label}
            </span>
          )}
          <span className="absolute right-4 bottom-4 text-[10px] tracking-[0.25em] uppercase text-foreground/70">
            YouTube · HD
          </span>
        </button>
      )}
    </div>
  );
}