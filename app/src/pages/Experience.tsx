import { MapPin } from "lucide-react";
import CTABanner from "../components/CTABanner";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <>
      <PageHeader
        code="02"
        eyebrow="Career"
        title="Ten roles, four countries, one steady climb."
        description="From junior architect to BIM Manager for some of the region's largest infrastructure programmes — the complete timeline, November 2010 to present."
      />

      <section className="pb-24">
        <div className="container-page">
          <ol className="space-y-8 border-l border-white/10 pl-8 sm:pl-10">
            {experience.map((item, i) => (
              <Reveal key={item.company + item.period} delay={Math.min(i, 6) * 0.05}>
                <li className="relative">
                  <span
                    className={`absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 sm:-left-[2.95rem] ${
                      item.current ? "border-gold-500 bg-gold-500 shadow-glow" : "border-blue-400/70 bg-ink-900"
                    }`}
                  />
                  <div className="card p-5 sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-base font-semibold text-mist-100 sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-gold-500">{item.company}</p>
                      </div>
                      {item.current && (
                        <span className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold text-gold-400">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-mist-400">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} />
                        {item.location}
                      </span>
                      <span className="font-mono">{item.period}</span>
                      <span className="text-mist-500">·</span>
                      <span>{item.duration}</span>
                    </div>

                    {item.bullets.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-mist-300">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
