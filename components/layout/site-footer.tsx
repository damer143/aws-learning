import type { FooterContent } from "@/types/site";

type SiteFooterProps = {
  footer: FooterContent;
};

export function SiteFooter({ footer }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 py-6 text-sm text-slate-400">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.copy}</p>
        <div className="flex flex-wrap gap-4">
          {footer.links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
