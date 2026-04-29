// components/Nav.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const linkClass = (href: string) => {
    const active = pathname === href || (href === "/work" && pathname.startsWith("/work"));
    return [
      "transition-colors duration-150 pb-0.5 border-b",
      active
        ? "text-neutral-100 border-neutral-500/50"
        : "text-neutral-400 border-transparent hover:text-neutral-100 hover:border-neutral-500/40",
    ].join(" ");
  };

  return (
    <header className="mb-10 flex items-center justify-between">
      <Link
        href="/"
        className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-neutral-200"
      >
        Leo Pasqualin
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        <Link href="/work" className={linkClass("/work")}>
          Projects
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
