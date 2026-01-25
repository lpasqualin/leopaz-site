// components/WorkCard.tsx

import Link from "next/link";
import type { WorkItem } from "@/data/workItems";

type WorkCardProps = {
  item: WorkItem;
};

const kindLabel: Record<WorkItem["kind"], string> = {
  pdf: "PDF artifact",
  system: "System architecture",
  sop: "SOP",
};

export function WorkCard({ item }: WorkCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 transition hover:-translate-y-1 hover:border-neutral-500 hover:bg-neutral-900/80">
      <header className="mb-3">
        <div className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
          {kindLabel[item.kind]}
        </div>
        <h3 className="text-base font-semibold text-neutral-50">
          {item.title}
        </h3>
      </header>

      <p className="mb-3 text-sm text-neutral-300">
        {item.summary}
      </p>

      <p className="mb-4 text-xs text-neutral-500">
        <span className="font-medium text-neutral-400">What this shows: </span>
        {item.whatThisShows}
      </p>

      <div className="mt-auto flex items-center justify-between text-xs">
        <Link
          href={item.href}
          className="inline-flex items-center gap-1 font-medium text-neutral-300 underline-offset-4 hover:underline"
        >
          View artifact
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </article>
  );
}
