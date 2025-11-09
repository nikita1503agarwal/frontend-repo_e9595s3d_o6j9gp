import React from 'react';

export default function Approach() {
  return (
    <section id="approach" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
          Speed and precision, orchestrated by intelligence
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-white/70">
          We architect repeatable systems for building and scaling new ventures. Human creative direction meets AI‑assisted execution — a workflow that learns and compounds.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: 'Discover', text: 'Map opportunities, align narrative, set measurable targets.' },
            { label: 'Design', text: 'Prototype fast; validate desirability, feasibility, viability.' },
            { label: 'Deploy', text: 'Ship, learn, and iterate with telemetry wired into every layer.' },
          ].map((step) => (
            <div key={step.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <div className="text-xs font-medium uppercase tracking-widest text-white/70">{step.label}</div>
              <div className="mt-2 text-white">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
