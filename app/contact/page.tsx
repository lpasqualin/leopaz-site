// app/contact/page.tsx

import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";

export default function ContactPage() {
  return (
    <Layout>
      <Nav />
      <main className="space-y-6">
        <section className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-50">
            Contact
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
            If you have something concrete in mind—governed AI workflows, automation
            under real constraints, or refactoring chaotic operations into something
            testable—send a short message with real details.
          </p>
          <p className="text-sm text-neutral-300">
            Email:{" "}
            <a
              href="mailto:leo@bbstrats.com"
              className="underline underline-offset-4 hover:text-neutral-100"
            >
              leo@bbstrats.com
            </a>
          </p>
        </section>
      </main>
    </Layout>
  );
}
