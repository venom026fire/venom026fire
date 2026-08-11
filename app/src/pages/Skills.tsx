import { BarChart3, Compass, GitMerge, Move3d, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import CTABanner from "../components/CTABanner";
import LazyScene from "../components/three/LazyScene";
import CornerFrame from "../components/ui/CornerFrame";
import DimensionDivider from "../components/ui/DimensionDivider";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import { skillGroups } from "../data/content";

const GROUP_ICONS = [Compass, PenTool, GitMerge, BarChart3];

export default function Skills() {
  const [resolved, setResolved] = useState(false);

  return (
    <>
      <PageHeader
        code="04"
        eyebrow="Toolkit"
        title="Software fluency built over 15 years on-site and in-model."
        description="Self-rated out of 10, grouped by where each tool sits in the BIM pipeline — from authoring through coordination to delivery analytics."
      />

      <section className="pb-16">
        <div className="container-page">
          <DimensionDivider label="Coordination in practice" />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <CornerFrame tone="blue" className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-glow">
                <LazyScene
                  loader={() => import("../components/three/ClashScene")}
                  sceneProps={{ resolved }}
                  className="aspect-[16/10] w-full"
                  label="Loading clash model…"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/70 px-2.5 py-1 font-mono text-[10px] text-mist-400">
                  <Move3d size={12} className="text-blue-400" />
                  Drag to rotate
                </span>
              </CornerFrame>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display text-xl font-semibold text-mist-100">
                A duct running straight through a column — the daily reality of clash detection.
              </h2>
              <p className="mt-3 leading-relaxed text-mist-400">
                Navisworks flags the intersection, the discipline teams get a coordinated report, and the
                model is adjusted before it ever reaches site. Toggle it below.
              </p>
              <button
                type="button"
                onClick={() => setResolved((v) => !v)}
                className={resolved ? "btn-ghost mt-6" : "btn-primary mt-6"}
              >
                {resolved ? "Reintroduce clash" : "Resolve clash"}
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page space-y-14">
          <DimensionDivider label="Full toolkit" />

          {skillGroups.map((group, gi) => {
            const Icon = GROUP_ICONS[gi] ?? Compass;
            return (
              <Reveal key={group.title} delay={gi * 0.05}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                    <Icon size={18} />
                  </span>
                  <h2 className="font-display text-lg font-semibold text-mist-100">{group.title}</h2>
                </div>

                <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-baseline justify-between text-sm">
                        <span className="font-medium text-mist-200">{skill.name}</span>
                        <span className="font-mono text-xs text-mist-500">{skill.level}/10</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-gold-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level * 10}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
