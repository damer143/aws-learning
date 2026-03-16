import type { ArchitectureItem } from "@/types/site";

type ArchitectureSectionProps = {
  architecture: ArchitectureItem[];
};

export function ArchitectureSection({ architecture }: ArchitectureSectionProps) {
  return (
    <section id="architecture" className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur">
      <p className="text-sm tracking-[0.25em] text-slate-400 uppercase">Architecture</p>
      <h2 className="mt-3 text-3xl font-semibold text-white">Built as a reusable starter</h2>
      <div className="mt-6 space-y-4">
        {architecture.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-white/10 bg-slate-950/45 p-5"
          >
            <p className="text-xs tracking-[0.25em] text-amber-200 uppercase">{item.badge}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
