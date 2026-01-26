// app/page.tsx

import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";
import { WorkCard } from "@/components/WorkCard";
import { workItems } from "@/data/workItems";

export default function HomePage() {
  const featured = workItems.filter((w) => w.featured);
  const others = workItems.filter((w) => !w.featured);

  return (
    <Layout>
      <Nav />

      {/* Hero */}
      <main className="space-y-16">
        <section aria-labelledby="hero-heading" className="space-y-4">
          <h1
            id="hero-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl"
          >
            Leo Pasqualin
          </h1>
          <p className="text-sm font-medium text-neutral-400">
            Systems Architect focused on AI governance, failure modes, and recoverable automation
          </p>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-neutral-300">
            <p>
              I design systems where AI can propose actions without silently causing irreversible damage.
            </p>
            <p>
              My work centers on determinism, explicit constraints, auditability, and human-in-the-loop control.
            </p>
            <p>
              Most of what I build exists to answer one question: &quot;What happens when this system is wrong?&quot;
            </p>
          </div>
          <div className="pt-2">
            <a
              href="mailto:leo@bbstrats.com"
              className="inline-block rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
            >
              Contact
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" aria-labelledby="projects-heading" className="space-y-6">
          <div className="space-y-2">
            <h2
              id="projects-heading"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400"
            >
              Projects
            </h2>
            <p className="max-w-2xl text-sm text-neutral-400">
              These artifacts are working documents: playbooks, diagnostic tools, and guardrails used to design and evaluate complex systems.
            </p>
          </div>

          {/* Featured row */}
          {featured.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              {featured.map((item) => (
                <WorkCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {/* Rest of grid */}
          {others.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {others.map((item) => (
                <WorkCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="space-y-4"
        >
          <h2
            id="about-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400"
          >
            About
          </h2>

          <div className="max-w-2xl space-y-3 text-sm text-neutral-300">
            <p>
              I work at the intersection of systems design, automation, and AI governance.
            </p>
            <p>
              My background is not in chasing novelty, but in preventing fragile systems—especially those that fail quietly, at scale, and without clear ownership.
            </p>
            <p>I care about:</p>
            <ul className="list-inside space-y-1 text-neutral-400">
              <li>– Clear system boundaries</li>
              <li>– Explicit responsibility</li>
              <li>– Recoverability over cleverness</li>
              <li>– Humans remaining accountable, even when AI is involved</li>
            </ul>
            <p>
              Most of my work is exploratory by design. Some of it becomes products. All of it is governed.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-heading" className="space-y-3">
          <h2
            id="contact-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400"
          >
            Contact
          </h2>

          <div className="text-sm text-neutral-300">
            <p>
              Email:{" "}
              <a
                href="mailto:leo@bbstrats.com"
                className="underline underline-offset-4 hover:text-neutral-100"
              >
                leo@bbstrats.com
              </a>
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              I read everything. Replies may be slow.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
