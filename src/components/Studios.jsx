import React from 'react';
import { Rocket, Brain, Palette, LineChart } from 'lucide-react';

const studios = [
  {
    icon: Rocket,
    title: 'Venture Engineering',
    desc: 'Rapid prototyping and product systems built with precision and scale in mind.',
  },
  {
    icon: Brain,
    title: 'Intelligence',
    desc: 'Applied AI for insight, automation, and decision‑making across the venture stack.',
  },
  {
    icon: Palette,
    title: 'Brand & Experience',
    desc: 'Narratives, interfaces, and identities crafted to feel inevitable and iconic.',
  },
  {
    icon: LineChart,
    title: 'Growth',
    desc: 'Go‑to‑market mechanics that compound: acquisition, conversion, and retention.',
  },
];

export default function Studios() {
  return (
    <section id="studios" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 xl:px-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
          Specialist studios working in concert
        </h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Modular capabilities designed to operate as one — from strategy to ship.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {studios.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
            >
              <s.icon className="h-6 w-6 text-white" />
              <h3 className="mt-4 text-lg font-medium text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
