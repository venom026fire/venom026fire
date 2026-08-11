import Reveal from "./Reveal";

type Props = { code?: string; eyebrow: string; title: string; description?: string };

export default function PageHeader({ code, eyebrow, title, description }: Props) {
  return (
    <div className="relative pb-14 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-blueprint bg-grid opacity-30" />
      <div className="container-page relative">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
            {code && <span className="rounded border border-gold-500/40 px-2 py-1">Sheet {code}</span>}
            <span>{eyebrow}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-mist-100 sm:text-5xl">{title}</h1>
          {description && <p className="mt-4 max-w-2xl leading-relaxed text-mist-400">{description}</p>}
        </Reveal>
      </div>
    </div>
  );
}
