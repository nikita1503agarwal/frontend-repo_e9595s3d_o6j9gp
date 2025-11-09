import React from 'react';

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12 xl:px-16">
        <a href="#hero" className="text-lg font-semibold tracking-wide text-white">
          Prismatic
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#studios" className="transition hover:text-white">Studios</a>
          <a href="#approach" className="transition hover:text-white">Approach</a>
          <a href="#work" className="transition hover:text-white">Work</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/20"
        >
          Start a Venture
        </a>
      </div>
    </header>
  );
}
