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

          <p className="text-lg font-medium leading-relaxed text-neutral-200">
            Fix broken CRM, intake, and follow-up systems that leak revenue.
          </p>

          <div className="space-y-3 text-sm leading-relaxed text-neutral-300">
            <p>
              CRM cleanup, intake routing, and follow-up systems for sales-driven service businesses.
            </p>
            <p>
              If your inbox is overloaded, your CRM is a mess, or things are
              slipping through the cracks, I help you clean it up and make it run properly.
            </p>
          </div>

          <ul className="space-y-2 text-sm leading-relaxed text-neutral-400">
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>Reduced CRM update time by ~50% by restructuring workflows and data handling</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>Rebuilt CRM with ~7,000 records and clean segmentation</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>Built intake → routing → follow-up system handling ~25,000 contacts</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>Managed high-volume workflows across 100+ accounts without breakdowns</span>
            </li>
          </ul>

          <div className="pt-2">
            <a
              href="mailto:leo@bbstrats.com"
              className="inline-block rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_1px_3px_rgba(0,0,0,0.4)] transition hover:bg-neutral-200 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_2px_8px_rgba(0,0,0,0.5)]"
            >
              Book a workflow review
            </a>
          </div>
        </section>

        {/* What I Do */}
        <section id="what-i-do" aria-labelledby="work-heading" className="space-y-4">
          <h2
            id="work-heading"
            className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            What I Do
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-neutral-300">
            <p>
              I work with owner-led, sales-driven businesses to clean up the operational
              systems that create missed follow-ups, duplicated work, bad data, and slow execution.
            </p>

            <ul className="space-y-2 text-neutral-400">
              <li className="flex gap-3">
                <span className="shrink-0 text-neutral-600">–</span>
                <span>Clean up CRM data and structure</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-neutral-600">–</span>
                <span>Fix broken intake and communication workflows</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-neutral-600">–</span>
                <span>Build routing and follow-up systems</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-neutral-600">–</span>
                <span>Reduce manual workload through practical automation</span>
              </li>
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
            className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            How It Works
          </h2>

          <div className="grid gap-3 md:grid-cols-3">
            {[
              { n: "1", title: "Review", body: "I look at your current setup: CRM, inbox, workflows, tools, and handoffs." },
              { n: "2", title: "Fix", body: "We clean up the system: data, structure, communication flow, and responsibilities." },
              { n: "3", title: "Automate", body: "Once the foundation is stable, we automate the parts that actually make sense." },
            ].map((step) => (
              <div
                key={step.n}
                className="group rounded-xl border border-neutral-800 bg-neutral-950/60 p-4 backdrop-blur-sm transition duration-200 hover:-translate-y-px hover:border-neutral-600/80 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
              >
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="font-mono text-[0.65rem] tracking-wide text-neutral-600">{step.n}.</span>
                  <h3 className="text-sm font-semibold text-neutral-100">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-500">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Example */}
        <section aria-labelledby="example-heading" className="space-y-4">
          <h2
            id="example-heading"
            className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            Example
          </h2>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-5 backdrop-blur-sm transition duration-200 hover:-translate-y-px hover:border-neutral-600/80 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <h3 className="text-sm font-semibold text-neutral-100">
              Client Operations — Marketing / Events
            </h3>

            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-400">
              {[
                "Managed high-volume inbox with 1,000+ emails per week",
                "Built prioritization and routing system",
                "Coordinated assistants and maintained quality control",
                "Handled client communication, follow-ups, and CRM updates",
                "Managed critical documents including permits, vendor agreements, and registrations",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="shrink-0 text-neutral-600">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 border-t border-neutral-800 pt-3.5 text-sm leading-relaxed text-neutral-300">
              Result: the owner stepped out of daily operations while inbox, follow-ups, and execution continued without dropped tasks.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about-section" aria-labelledby="about-heading" className="space-y-4">
          <h2
            id="about-heading"
            className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            About
          </h2>

          <div className="space-y-3 text-sm leading-relaxed text-neutral-300">
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

        {/* What I Don't Do */}
        <section aria-labelledby="what-i-dont-do-heading" className="space-y-4">
          <h2
            id="what-i-dont-do-heading"
            className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            What I Don&apos;t Do
          </h2>

          <ul className="space-y-2 text-sm leading-relaxed text-neutral-400">
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>I don&apos;t build custom software from scratch</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>I don&apos;t add tools before fixing the system</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>I don&apos;t manage ongoing operations or teams</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>I don&apos;t take on projects without clear ownership</span>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact-section" aria-labelledby="contact-heading" className="space-y-3">
          <h2
            id="contact-heading"
            className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
          >
            Contact
          </h2>

          <div className="text-sm leading-relaxed text-neutral-300">
            <p>
              Email:{" "}
              <a
                href="mailto:leo@bbstrats.com"
                className="underline underline-offset-4 decoration-neutral-600 hover:text-neutral-100 hover:decoration-neutral-400 transition-colors"
              >
                leo@bbstrats.com
              </a>
            </p>
            <p className="mt-2 text-neutral-500">
              Send me a quick overview of your current workflow. I will tell you
              what is likely broken and where to start.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
