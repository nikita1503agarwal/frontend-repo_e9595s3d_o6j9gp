import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold">Prismatic</h3>
            <p className="mt-1 text-sm text-white/70">Building ventures that feel inevitable.</p>
          </div>
          <a
            href="mailto:hello@prismatic.systems"
            className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/20"
          >
            hello@prismatic.systems
          </a>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} Prismatic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
