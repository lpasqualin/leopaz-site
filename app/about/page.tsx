// app/about/page.tsx

import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";

export default function AboutPage() {
  return (
    <Layout>
      <Nav />
      <main className="space-y-6">
        <section className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-50">
            About
          </h1>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-neutral-300">
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
      </main>
    </Layout>
  );
}
