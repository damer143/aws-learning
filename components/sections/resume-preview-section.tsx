import type { ResumeContent } from "@/types/site";

type ResumePreviewSectionProps = {
  resume: ResumeContent;
};

export function ResumePreviewSection({ resume }: ResumePreviewSectionProps) {
  return (
    <section id="resume" className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm tracking-[0.25em] text-slate-400 uppercase">Resume Asset</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">{resume.title}</h2>
        </div>
        <a
          href={resume.path}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35"
        >
          Open PDF
        </a>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{resume.description}</p>

      <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white">
        <iframe title={resume.title} src={resume.path} className="h-[34rem] w-full" />
      </div>
    </section>
  );
}
