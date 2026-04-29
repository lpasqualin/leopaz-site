// app/work/page.tsx

import { Layout } from "@/components/Layout";
import { Nav } from "@/components/Nav";
import { WorkCard } from "@/components/WorkCard";
import { workItems } from "@/data/workItems";

export default function WorkPage() {
  const featured = workItems.filter((w) => w.featured);
  const artifacts = workItems.filter((w) => !w.featured);

  return (
    <Layout>
      <Nav />

      <main className="space-y-14">
        {/* Page header */}
        <section className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-50">
            Projects
          </h1>
          <p className="text-sm leading-relaxed text-neutral-500">
            Systems, frameworks, and artifacts from real operational work. Each one is built
            around the same principle: structure before automation.
          </p>
        </section>

        {/* Featured */}
        <section className="space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Featured
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <WorkCard key={item.id} item={item} featured />
            ))}
          </div>
        </section>

        {/* Artifacts */}
        <section className="space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            Artifacts
          </h2>
          <div className="flex flex-col gap-2.5">
            {artifacts.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
