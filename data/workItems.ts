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
  githubUrl?: string;
};

export const workItems: WorkItem[] = [
  {
    id: "prompt-governor",
    title: "The Prompt Governor",
    summary: "A governance layer for AI prompting that makes \"vibes-based\" prompts illegal. This is the core system. The artifacts below are extracted control surfaces or applied examples.",
    whatThisShows: "How I think about guardrails, accountability, and making AI workflows auditable.",
    href: "/docs/prompt-governor.pdf",
    kind: "pdf",
    featured: true,
  },
  {
    id: "governors-checklist",
    title: "Governor's Checklist",
    summary: "An operational control extracted from The Prompt Governor.",
    whatThisShows: "How I enforce accountability before execution.",
    href: "/docs/governors-checklist.pdf",
    kind: "pdf",
  },
  {
    id: "automation-readiness-gate",
    title: "Automation Readiness Gate",
    summary: "An operational control extracted from The Prompt Governor.",
    whatThisShows: "How I prevent people from automating chaos and calling it efficiency.",
    href: "/docs/automation-readiness-gate.pdf",
    kind: "pdf",
  },
  {
    id: "prompt-failure-diagnostic",
    title: "Prompt Failure Diagnostic Sheet",
    summary: "An operational control extracted from The Prompt Governor.",
    whatThisShows: "How I turn AI \"hallucinations\" into measurable failure modes.",
    href: "/docs/prompt-failure-diagnostic.pdf",
    kind: "pdf",
  },
  {
    id: "siftwise",
    title: "Siftwise",
    summary: "A deterministic file-intelligence system. Enforces explicit proposal vs execution separation, governance checks before any action, journaling, reversibility, and deterministic fallbacks when confidence is low.",
    whatThisShows: "A practical testbed for AI governance principles under real constraints. Standalone product, referenced here as a systems artifact.",
    href: "#",
    kind: "system",
    featured: true,
    githubUrl: "https://github.com/lpasqualin/siftwise",
  },
  {
    id: "governed-sop",
    title: "Governed Sales Order Workflow (Sanitized)",
    summary: "A production sales-order system redesigned to be observable, testable, and automation-ready — without premature autonomy.",
    whatThisShows: "How I translate governance theory into real operational systems that humans and future agents can safely execute.",
    href: "/docs/governed-sales-order-workflow.pdf",
    kind: "sop",
  },
];
