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
    summary: "A governance layer for AI prompting that makes \"vibes-based\" prompts illegal.",
    whatThisShows: "How I think about guardrails, accountability, and making AI workflows auditable.",
    href: "/docs/prompt-governor.pdf",
    kind: "pdf",
    featured: true,
  },
  {
    id: "governors-checklist",
    title: "Governor’s Checklist",
    summary: "A pre-flight checklist before you let humans or agents touch real workflows.",
    whatThisShows: "My bias toward concrete checklists over hand-wavy \"best practices\".",
    href: "/docs/governors-checklist.pdf",
    kind: "pdf",
  },
  {
    id: "automation-readiness-gate",
    title: "Automation Readiness Gate",
    summary: "A simple gate that decides if something deserves automation yet.",
    whatThisShows: "How I prevent people from automating chaos and calling it efficiency.",
    href: "/docs/automation-readiness-gate.pdf",
    kind: "pdf",
  },
  {
    id: "prompt-failure-diagnostic",
    title: "Prompt Failure Diagnostic Sheet",
    summary: "A structured way to debug bad AI outputs without superstition.",
    whatThisShows: "My approach to turning AI \"hallucinations\" into measurable failure modes.",
    href: "/docs/prompt-failure-diagnostic.pdf",
    kind: "pdf",
  },
  {
    id: "siftwise-architecture",
    title: "Siftwise — File Intelligence Architecture",
    summary: "A deterministic pipeline for ingest → analyze → propose → govern → execute.",
    whatThisShows: "How I design AI systems with journaling, undo, and clear separation of concerns.",
    href: "/docs/siftwise-architecture.pdf",
    kind: "system",
    featured: true,
  },
  {
    id: "governed-sop",
    title: "Governed SOP (Sanitized)",
    summary: "A real-world SOP redesigned to be observable, testable, and agent-friendly.",
    whatThisShows: "How I translate messy operations into clear steps tools and agents can actually follow.",
    href: "/docs/governed-sop.pdf",
    kind: "sop",
  },
];
