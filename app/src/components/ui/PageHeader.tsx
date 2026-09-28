import Reveal from "./Reveal";

type Props = { code?: string; eyebrow: string; title: string; description?: string; backgroundImage?: string };

export default function PageHeader({ code, eyebrow, title, description, backgroundImage }: Props) {
  return (
    <div className="relative overflow-hidden pb-14 pt-32 sm:pt-40">
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/85 to-ink-900" />
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-blueprint bg-grid opacity-30" />
      )}
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
