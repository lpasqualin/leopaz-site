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
            I work on operational systems — CRM, intake, routing, and follow-up — where execution breaks down.
          </p>

          <div className="space-y-3 text-sm leading-relaxed text-neutral-300">
            <p>
              Most issues are not tooling problems. They are structure, ownership, and workflow problems.
            </p>
            <p>
              I focus on making systems run cleanly first, then applying automation where it actually holds.
            </p>
            <p>
              This work is applied through Beacon Bridge Strategies (BBS).
            </p>
          </div>

          <p className="text-sm leading-relaxed text-neutral-400">Examples of operational systems I&apos;ve worked on:</p>

          <ul className="space-y-2 text-sm leading-relaxed text-neutral-400">
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>Reduced CRM update time by ~50% by restructuring workflows, ownership, and data handling</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>Rebuilt a CRM with ~7,000 records into a clean, segmented system that could actually be used day-to-day</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>Designed an intake → routing → follow-up system handling ~25,000 contacts without breakdowns</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 text-neutral-600">–</span>
              <span>Automated order intake and PO processing for a manufacturing business with 2,000+ dealer accounts</span>
            </li>
          </ul>
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
              I work on the operational layer of a business — where CRM, intake, communication, and follow-up systems start to break down.
            </p>

            <p>
              Most of the issues show up in the gaps between systems: CRM not reflecting real activity, email threads disconnected from customer records, orders not flowing cleanly into ERP, and follow-ups getting lost between tools.
            </p>

            <ul className="space-y-2 text-neutral-400">
              <li className="flex gap-3">
                <span className="shrink-0 text-neutral-600">–</span>
                <span>Clean up CRM structure and data integrity</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-neutral-600">–</span>
                <span>Fix intake, routing, and communication workflows</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-neutral-600">–</span>
                <span>Make core systems (CRM, email, ERP) communicate reliably where it matters</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-neutral-600">–</span>
                <span>Build follow-up systems that actually execute</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-neutral-600">–</span>
                <span>Apply automation once the system is stable</span>
              </li>
            </ul>

            <p>
              Most systems do not need more tools first. They need clearer structure, ownership, and controlled communication between systems.
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

          <p className="text-sm leading-relaxed text-neutral-300">I approach this work in three phases:</p>

          <div className="grid gap-3 md:grid-cols-3">
            {[
              { n: "1", title: "Audit", body: "Understand how the current system actually operates — not how it is supposed to work. Identify where things break, where information is lost, and where manual work is being created." },
              { n: "2", title: "System Design", body: "Restructure the workflow so core systems (CRM, email, ERP, intake) behave consistently and information flows cleanly between them. Define ownership, data flow, and where automation actually makes sense." },
              { n: "3", title: "Implementation", body: "Apply the changes in phases — cleaning data, fixing workflows, and introducing automation without breaking existing operations." },
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
            <div className="space-y-3 text-sm leading-relaxed text-neutral-400">
              <p>A high-volume DTC manufacturing business had processed dealer orders manually for decades.</p>
              <p>Orders came in via email, data was re-entered into the ERP, and the entire process depended on reps to track, validate, and execute.</p>
              <p>We introduced a structured intake layer to detect incoming orders, extract key data, generate ERP draft orders, and trigger follow-up tasks where needed.</p>
              <p>Reps shifted from manual entry to review and approval, with clear visibility into what required attention.</p>
              <p>Order handling became predictable, data quality improved, processing time dropped significantly, and the system no longer relied on inbox-driven execution.</p>
            </div>
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
              I&apos;ve spent years working inside businesses where CRM, communication, and operational systems don&apos;t behave the way they should.
            </p>
            <p>
              Missed follow-ups, unreliable data, constant back-and-forth between tools, and too much manual work just to keep things moving.
            </p>
            <p>
              Most businesses do not have a tooling problem. They have a structure problem.
            </p>
            <p>
              I focus on fixing that first — making systems behave consistently, defining ownership, and creating clear flow between them.
            </p>
            <p>
              Automation only works once the system is stable. Otherwise, it adds another layer of failure.
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
              <span>I don&apos;t take on work without clear ownership</span>
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
              If you want a second set of eyes on a workflow, send it over.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
