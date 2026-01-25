// components/Nav.tsx

import Link from "next/link";

export function Nav() {
  return (
    <header className="mb-10 flex items-center justify-between">
      <Link
        href="/"
        className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-400"
      >
        leo paz
      </Link>

      <nav className="flex items-center gap-6 text-sm text-neutral-400">
        <a href="#projects" className="transition hover:text-neutral-100">
          Projects
        </a>
        <a href="#experience" className="transition hover:text-neutral-100">
          Experience
        </a>
        <a href="#contact" className="transition hover:text-neutral-100">
          Contact
        </a>
      </nav>
    </header>
  );
}
