import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 py-24 md:px-10 lg:px-12 xl:px-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur-md">
          Prismatic • Luxury Creative System
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          A cinematic, AI‑driven ecosystem turning ideas into ventures
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          Specialist studios working in concert — strategy, design, engineering, and growth — fused by intelligent tooling for speed and precision.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#studios"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Explore Studios
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#approach"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            Our Approach
          </a>
        </div>
      </div>
    </section>
  );
}
