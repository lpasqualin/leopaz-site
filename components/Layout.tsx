// components/Layout.tsx

import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100">
      {/* Fixed background gradients */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Bottom-left glow */}
        <div
          className="absolute left-[-6rem] bottom-[-6rem] h-[18rem] w-[32rem] -rotate-10
                     bg-gradient-to-tr from-emerald-400/50 via-emerald-500/20 to-transparent blur-3xl"
        />

        {/* Top-right glow */}
        <div
          className="absolute right-[-4rem] top-[-8rem] h-[16rem] w-[28rem] rotate-6
                     bg-gradient-to-bl from-sky-400/45 via-sky-500/18 to-transparent blur-3xl"
        />
      </div>

      {/* Content (above gradients) */}
      <div className="relative z-10 mx-auto max-w-4xl px-12 pb-16 pt-8">
        {children}
      </div>
    </div>
  );
}
