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
            <p className="mt-2 text-xs text-neutral-500">
              I read everything. Replies may be slow.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
