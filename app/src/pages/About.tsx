import { Award, Boxes, CheckCheck, GraduationCap, Landmark, Layers, MapPin } from "lucide-react";
import CTABanner from "../components/CTABanner";
import CornerFrame from "../components/ui/CornerFrame";
import DimensionDivider from "../components/ui/DimensionDivider";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import heroPortrait from "../assets/hero-portrait.webp";
import { bio, capabilities, education, process, profile } from "../data/content";

const ICONS = { boxes: Boxes, landmark: Landmark, layers: Layers, "check-check": CheckCheck };
const EDU_ICONS = [GraduationCap, Award];

export default function About() {
  return (
    <>
      <PageHeader
        code="01"
        eyebrow="About"
        title="Fifteen years bridging architectural vision and buildable BIM delivery."
        description="From a drafting table in Kolkata to directing BIM strategy for metro networks, nuclear plants and heritage forts — the long version."
      />

      <section className="pb-20">
        <div className="container-page grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <CornerFrame className="overflow-hidden rounded-2xl border border-white/10 shadow-glow">
              <img
                src={heroPortrait}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[3/4] w-full object-cover object-top"
                loading="lazy"
              />
            </CornerFrame>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.basedCountries.map((country) => (
                <span
                  key={country}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-mist-400"
                >
                  <MapPin size={12} className="text-gold-500" />
                  {country}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="space-y-5">
            {bio.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={i * 0.08}>
                <p className="leading-relaxed text-mist-300">{paragraph}</p>
              </Reveal>
            ))}

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {capabilities.map((cap, i) => {
                const Icon = ICONS[cap.icon as keyof typeof ICONS];
                return (
                  <Reveal key={cap.title} delay={0.05 * i}>
                    <div className="card h-full p-5">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display text-sm font-semibold text-mist-100">{cap.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-mist-400">{cap.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <DimensionDivider label="How a model matures" />
          <Reveal className="mx-auto mt-4 max-w-2xl text-center">
            <p className="text-mist-400">
              Every project moves through the same five gates — the vocabulary that shows up across almost
              every project on this site.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-5">
            {process.map((step, i) => (
              <Reveal key={step.stage} delay={i * 0.06}>
                <div className="card relative h-full p-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400">
                    {step.stage}
                  </span>
                  <h3 className="mt-2 font-display text-sm font-semibold text-mist-100">{step.label}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-mist-500">{step.description}</p>
                  {i < process.length - 1 && (
                    <span className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-mist-500/40 to-transparent sm:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <DimensionDivider label="Education & certification" />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {education.map((item, i) => {
              const Icon = EDU_ICONS[i] ?? GraduationCap;
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="card flex h-full items-start gap-4 p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-mist-100">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium text-gold-500">{item.institution}</p>
                      <p className="mt-2 text-xs text-mist-400">
                        {item.location} · {item.period}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
