// data/workItems.ts

export type WorkItemKind = "pdf" | "system" | "sop";

export type WorkItem = {
  id: string;
  title: string;
  summary: string;
  whatThisShows: string;
  href: string;
  kind: WorkItemKind;
  featured?: boolean;
};

export const workItems: WorkItem[] = [
  {
    id: "prompt-governor",
    title: "The Prompt Governor",
    summary: "A governance layer for AI prompting that makes \"vibes-based\" prompts illegal. This is the core system. The artifacts below are extracted control surfaces or applied examples.",
    whatThisShows: "How I think about guardrails, accountability, and making AI workflows auditable.",
    href: "/docs/The Prompt Governor by Leonardo Pasqualin.pdf",
    kind: "pdf",
    featured: true,
  },
  {
    id: "governors-checklist",
    title: "Governor's Checklist",
    summary: "An operational control extracted from The Prompt Governor.",
    whatThisShows: "How I enforce accountability before execution.",
    href: "/docs/The Governor's Checklist.pdf",
    kind: "pdf",
  },
  {
    id: "automation-readiness-gate",
    title: "Automation Readiness Gate",
    summary: "An operational control extracted from The Prompt Governor.",
    whatThisShows: "How I prevent people from automating chaos and calling it efficiency.",
    href: "/docs/Automation Readiness Gate.pdf",
    kind: "pdf",
  },
  {
    id: "prompt-failure-diagnostic",
    title: "Prompt Failure Diagnostic Sheet",
    summary: "An operational control extracted from The Prompt Governor.",
    whatThisShows: "How I turn AI \"hallucinations\" into measurable failure modes.",
    href: "/docs/Prompt Failure Diagnostic Sheet.pdf",
    kind: "pdf",
  },
  {
    id: "siftwise-architecture",
    title: "Siftwise — File Intelligence Architecture",
    summary: "A deterministic pipeline for ingest → analyze → propose → govern → execute.",
    whatThisShows: "How I design AI systems with journaling, undo, and clear separation of concerns.",
    href: "#",
    kind: "system",
    featured: true,
  },
  {
    id: "governed-sop",
    title: "Governed Sales Order Workflow (Sanitized)",
    summary: "A production sales-order system redesigned to be observable, testable, and automation-ready — without premature autonomy.",
    whatThisShows: "How I translate governance theory into real operational systems that humans and future agents can safely execute.",
    href: "/docs/Mirage Returns - Current SOP.pdf",
    kind: "sop",
  },
];
