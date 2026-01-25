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
        <section aria-labelledby="hero-heading" className="space-y-3">
          <p className="text-xs font-mono uppercase tracking-[0.24em] text-neutral-500">
            Leonardo Pasqualin · Leo / leopaz
          </p>
          <h1
            id="hero-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl"
          >
            I design and govern systems where humans and AI can’t quietly ruin things.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
            I&apos;m Leonardo Pasqualin (most people call me Leo), a builder-operator
            obsessed with making work predictable: clear pipelines, hard guardrails,
            strong journaling, and the ability to undo bad decisions—whether they came
            from a human or a model.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" aria-labelledby="projects-heading" className="space-y-6">
          <div className="space-y-2">
            <h2
              id="projects-heading"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400"
            >
              Projects & Artifacts
            </h2>
            <p className="max-w-2xl text-sm text-neutral-400">
              A small set of concrete things I use to keep AI, automation, and people
              from doing dumb, irreversible work.
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

        {/* Experience / how you work */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="space-y-4"
        >
          <h2
            id="experience-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400"
          >
            How I Work
          </h2>

          <p className="max-w-2xl text-sm text-neutral-300">
            My background is a mix of operations, systems design, and AI-first workflows.
            I care less about titles and more about whether the system can be trusted
            when things go sideways.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 text-sm text-neutral-300">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Governance first
              </h3>
              <p>
                I assume humans and models will eventually do something stupid. So every
                workflow gets guardrails, journaling, and clear ownership before it
                gets &quot;optimized.&quot;
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 text-sm text-neutral-300">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Deterministic where it matters
              </h3>
              <p>
                I like AI for analysis and suggestion, but routing, access, and
                execution stay deterministic. If we can&apos;t reason about it, we
                shouldn&apos;t ship it.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 text-sm text-neutral-300">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Tool-agnostic, guardrail-biased
              </h3>
              <p>
                Whether it&apos;s Next.js, n8n, or a command-line tool, I care that the
                system is observable, testable, and easy to roll back—not which logo is
                on the landing page.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 text-sm text-neutral-300">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                No guru energy
              </h3>
              <p>
                No courses, no funnels, no inflated case studies. Just artifacts,
                systems, and real constraints.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-heading" className="space-y-4">
          <h2
            id="contact-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400"
          >
            Contact
          </h2>

          <p className="max-w-2xl text-sm text-neutral-300">
            If you&apos;re working on something where AI, automation, and operations
            collide—and you actually want guardrails, not hype—reach out.
          </p>

          <div className="text-sm text-neutral-300">
            <div>
              Email:{" "}
              <a
                href="mailto:you@leopaz.dev"
                className="underline underline-offset-4 hover:text-neutral-100"
              >
                you@leopaz.dev
              </a>
            </div>
            <div className="mt-1 text-xs text-neutral-500">
              Replace with whatever address / alias you actually want public.
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
