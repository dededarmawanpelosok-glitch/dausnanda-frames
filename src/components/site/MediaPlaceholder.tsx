type Props = {
  src?: string;
  alt: string;
  label?: string;
  ratio?: "16/9" | "4/5" | "1/1" | "3/4" | "21/9";
  className?: string;
  priority?: boolean;
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "21/9": "aspect-[21/9]",
};

export function MediaPlaceholder({ src, alt, label, ratio = "16/9", className = "", priority }: Props) {
  return (
    <figure
      className={[
        "relative overflow-hidden rounded-3xl border border-hairline bg-elevated grain",
        ratioClass[ratio],
        className,
      ].join(" ")}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-muted-foreground text-xs uppercase tracking-[0.2em]">
          Media
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent pointer-events-none" />
      {label && (
        <figcaption className="absolute left-4 bottom-4 right-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur px-3 py-1.5 text-xs text-foreground/90 border border-hairline">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            {label}
          </span>
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </figcaption>
      )}
    </figure>
  );
}
