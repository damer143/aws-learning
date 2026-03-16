import type { HeroContent } from "@/types/site";

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="overview" className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-white/6 p-8 backdrop-blur xl:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1 text-sm tracking-[0.2em] text-amber-200 uppercase">
          {hero.eyebrow}
        </p>
        <div className="space-y-4">
          <h1 className="max-w-4xl text-5xl leading-tight font-semibold text-white sm:text-6xl">
            {hero.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">{hero.description}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          {hero.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              download={action.download}
              className={
                action.variant === "primary"
                  ? "inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                  : "inline-flex items-center justify-center rounded-full border border-slate-400/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-200 hover:bg-slate-100/5"
              }
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
        {hero.panels.map((panel) => (
          <div key={panel.title} className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
            <p className="text-sm text-slate-400">{panel.title}</p>
            <p className="mt-2 text-lg font-semibold text-white">{panel.value}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{panel.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
