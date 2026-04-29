// components/WorkCard.tsx

import type { WorkItem } from "@/data/workItems";

const kindLabel: Record<string, string> = { pdf: "PDF", system: "System", sop: "SOP" };

const kindStyles: Record<string, string> = {
  pdf:    "bg-emerald-400/10 border-emerald-400/25 text-emerald-300/90",
  system: "bg-sky-400/10 border-sky-400/25 text-sky-300/90",
  sop:    "bg-stone-400/10 border-stone-400/25 text-stone-300/70",
};

type WorkCardProps = {
  item: WorkItem;
  featured?: boolean;
};

export function WorkCard({ item, featured = false }: WorkCardProps) {
  const isSystem = item.kind === "system";
  const hasLink = item.href && item.href !== "#";

  return (
    <div
      className={[
        "group flex flex-col gap-3 rounded-xl border border-neutral-800 backdrop-blur-sm",
        "transition duration-200 hover:-translate-y-px hover:border-neutral-600/80 hover:shadow-[0_6px_32px_rgba(0,0,0,0.5)]",
        featured ? "bg-neutral-950/70 p-6" : "bg-neutral-950/55 p-5",
      ].join(" ")}
    >
      {/* Title + badge */}
      <div className="flex items-start justify-between gap-4">
        <h3 className={featured ? "text-base font-semibold leading-snug text-neutral-100" : "text-sm font-semibold leading-snug text-neutral-100"}>
          {item.title}
        </h3>
        <span
          className={[
            "shrink-0 rounded font-mono text-[0.6rem] uppercase tracking-[0.15em] px-2 py-0.5 border",
            kindStyles[item.kind] ?? kindStyles.sop,
          ].join(" ")}
        >
          {kindLabel[item.kind]}
        </span>
      </div>

      {/* Summary */}
      <p className="text-sm leading-relaxed text-neutral-500">{item.summary}</p>

      {/* What this shows */}
      <p className="text-xs italic leading-relaxed text-neutral-600">{item.whatThisShows}</p>

      {/* Footer */}
      <div className="pt-1">
        {isSystem ? (
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-neutral-600">
            Standalone product
          </span>
        ) : hasLink ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-neutral-600 transition hover:text-neutral-400"
          >
            View PDF
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-50">
              <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ) : null}
      </div>
    </div>
  );
}
