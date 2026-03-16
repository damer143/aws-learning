"use client";

import { useState } from "react";
import type { ArchitectureItem, HighlightStat } from "@/types/site";

type LandingPageClientProps = {
  architecture: ArchitectureItem[];
  highlightStats: HighlightStat[];
};

export function LandingPageClient({
  architecture,
  highlightStats
}: LandingPageClientProps) {
  const [selectedLayer, setSelectedLayer] = useState(architecture[0]?.id ?? "");
  const activeLayer =
    architecture.find((item) => item.id === selectedLayer) ?? architecture[0];

  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur">
        <p className="text-sm tracking-[0.25em] text-amber-200 uppercase">CSR Island</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Interactive client component</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          This section is rendered on the client with React state, while the page itself is still
          delivered through an SSR server component. That gives you a clean pattern for mixing SEO
          and first-load rendering with richer UI behavior.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {highlightStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-slate-950/45 p-4"
            >
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-slate-950/45 p-6 backdrop-blur">
        <p className="text-sm tracking-[0.25em] text-slate-400 uppercase">Scaffold Layers</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {architecture.map((item) => {
            const isActive = item.id === activeLayer?.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedLayer(item.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-amber-300 bg-amber-300 text-slate-950"
                    : "border-white/15 bg-white/5 text-slate-200 hover:border-white/35"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {activeLayer ? (
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-amber-200">{activeLayer.badge}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{activeLayer.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{activeLayer.description}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
