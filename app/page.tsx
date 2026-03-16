import { getDeploymentNotes } from "@/app/actions";
import { LandingPageClient } from "@/components/client/landing-page-client";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { ArchitectureSection } from "@/components/sections/architecture-section";
import { ResumePreviewSection } from "@/components/sections/resume-preview-section";
import { getLandingPageData } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [data, deploymentNotes] = await Promise.all([
    getLandingPageData(),
    getDeploymentNotes()
  ]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_28%),linear-gradient(135deg,_#07111f,_#0f172a_45%,_#1e293b)] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <SiteHeader brand={data.brand} />

        <div className="flex-1 space-y-10 pb-10 pt-8">
          <HeroSection hero={data.hero} />

          <LandingPageClient
            architecture={data.architecture}
            highlightStats={data.highlightStats}
          />

          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <ArchitectureSection architecture={data.architecture} />
            <ResumePreviewSection resume={data.resume} />
          </div>

          <section className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur">
            <p className="text-sm tracking-[0.25em] text-slate-400 uppercase">Server Notes</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Template guidance from a server module</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {deploymentNotes.map((note) => (
                <article
                  key={note}
                  className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 text-sm leading-7 text-slate-300"
                >
                  {note}
                </article>
              ))}
            </div>
          </section>
        </div>

        <SiteFooter footer={data.footer} />
      </div>
    </main>
  );
}
