// app/about/page.tsx

import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";

export default function AboutPage() {
  return (
    <Layout>
      <Nav />
      <main className="space-y-6">
        <section className="space-y-3">
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-50">
            About
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
            I&apos;m Leo Paz, a systems-minded builder based in Florida. Most of my work
            sits between operations, AI, and automation—designing pipelines where work
            is observable, governed, and reversible.
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-300">
            This site is a small portfolio of the artifacts and systems I&apos;ve
            designed. No hype, no funnels—just the kind of work I want to do more of.
          </p>
        </section>
      </main>
    </Layout>
  );
}
