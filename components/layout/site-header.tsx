import type { Brand } from "@/types/site";

type SiteHeaderProps = {
  brand: Brand;
};

export function SiteHeader({ brand }: SiteHeaderProps) {
  return (
    <header className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/6 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs tracking-[0.3em] text-amber-200 uppercase">{brand.eyebrow}</p>
        <p className="mt-1 text-lg font-semibold text-white">{brand.name}</p>
      </div>

      <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
        {brand.navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
