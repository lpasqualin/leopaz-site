// app/page.tsx

import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";

export default function HomePage() {
  return (
    <Layout>
      <Nav />

      <main className="space-y-16">
        {/* Hero */}
        <section aria-labelledby="hero-heading" className="space-y-5">
          <h1
            id="hero-heading"
            className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl"
          >
            Leo Pasqualin
          </h1>

          <p className="max-w-2xl text-lg font-medium leading-relaxed text-neutral-200">
            I fix messy operations and automate the work that slows you down.
          </p>

          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-neutral-300">
            <p>
              CRM cleanup, intake routing, follow-up systems, and workflow automation
              for service businesses.
            </p>
            <p>
              If your inbox is overloaded, your CRM is a mess, or things are
              slipping through the cracks, I help you clean it up and make it run properly.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="mailto:leo@bbstrats.com"
              className="inline-block rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
            >
              Send me your workflow
            </a>
          </div>
        </section>

        {/* What I Do */}
        <section id="work" aria-labelledby="work-heading" className="space-y-4">
          <h2
            id="work-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400"
          >
            What I Do
          </h2>

          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-neutral-300">
            <p>
              I work with small and mid-sized businesses to clean up the operational
              systems that create missed follow-ups, duplicated work, bad data, and slow execution.
            </p>

            <ul className="list-inside space-y-1 text-neutral-400">
              <li>– Clean up CRM data and structure</li>
              <li>– Fix broken intake and communication workflows</li>
              <li>– Build routing and follow-up systems</li>
              <li>– Reduce manual workload through practical automation</li>
            </ul>

            <p>
              Most systems do not need more tools first. They need clearer structure,
              ownership, and process discipline.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section aria-labelledby="process-heading" className="space-y-4">
          <h2
            id="process-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400"
          >
            How It Works
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
              <h3 className="text-sm font-semibold text-neutral-100">1. Review</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                I look at your current setup: CRM, inbox, workflows, tools, and handoffs.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
              <h3 className="text-sm font-semibold text-neutral-100">2. Fix</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                We clean up the system: data, structure, communication flow, and responsibilities.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
              <h3 className="text-sm font-semibold text-neutral-100">3. Automate</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Once the foundation is stable, we automate the parts that actually make sense.
              </p>
            </div>
          </div>
        </section>

        {/* Example */}
        <section aria-labelledby="example-heading" className="space-y-4">
          <h2
            id="example-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400"
          >
            Example
          </h2>

          <div className="max-w-2xl rounded-xl border border-neutral-800 bg-neutral-950/60 p-5">
            <h3 className="text-sm font-semibold text-neutral-100">
              Client Operations — Marketing / Events
            </h3>

            <ul className="mt-3 list-inside space-y-1 text-sm leading-relaxed text-neutral-400">
              <li>– Managed high-volume inbox with 1,000+ emails per week</li>
              <li>– Built prioritization and routing system</li>
              <li>– Coordinated assistants and maintained quality control</li>
              <li>– Handled client communication, follow-ups, and CRM updates</li>
              <li>– Managed critical documents including permits, vendor agreements, and registrations</li>
            </ul>

            <p className="mt-4 text-sm leading-relaxed text-neutral-300">
              Result: the owner was removed from day-to-day operations while communication,
              follow-up, and execution stayed consistent.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-heading" className="space-y-4">
          <h2
            id="about-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400"
          >
            About
          </h2>

          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-neutral-300">
            <p>
              I come from a background in B2B sales and operations, where I have spent years
              dealing with real-world problems: missed follow-ups, messy CRMs, broken
              communication, and constant manual work.
            </p>
            <p>
              Most businesses do not have a tooling problem. They have a structure problem.
            </p>
            <p>
              I focus on fixing that first, then automating what actually makes sense.
              Simple systems. Clear ownership. Reliable execution.
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

          <div className="max-w-2xl text-sm leading-relaxed text-neutral-300">
            <p>
              Email:{" "}
              <a
                href="mailto:leo@bbstrats.com"
                className="underline underline-offset-4 hover:text-neutral-100"
              >
                leo@bbstrats.com
              </a>
            </p>
            <p className="mt-2 text-neutral-400">
              Send me a quick overview of your current workflow. I will tell you
              what is likely broken and where to start.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}