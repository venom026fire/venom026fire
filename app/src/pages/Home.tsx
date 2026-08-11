import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Move3d } from "lucide-react";
import { Link } from "react-router-dom";
import CTABanner from "../components/CTABanner";
import ProjectCard from "../components/ProjectCard";
import QuoteBlock from "../components/QuoteBlock";
import LazyScene from "../components/three/LazyScene";
import CornerFrame from "../components/ui/CornerFrame";
import DimensionDivider from "../components/ui/DimensionDivider";
import Reveal from "../components/ui/Reveal";
import StatCounter from "../components/ui/StatCounter";
import workstation from "../assets/workstation.webp";
import { experience, profile, projects } from "../data/content";

const HERO_STATS = [
  { value: 15, suffix: "+", label: "Years in BIM & VDC" },
  { value: 19, suffix: "", label: "Landmark projects" },
  { value: 5, suffix: "", label: "Countries based in" },
];

const GLANCE_STATS = [
  { value: experience.length, suffix: "", label: "Roles held", description: "Jr. architect to BIM Manager" },
  { value: 300, suffix: "+", label: "Largest team led", description: "Across 6 countries, one tower" },
  { value: 200, suffix: "+", label: "Team on Singapore Metro", description: "As Technical Consultant" },
  { value: 500, suffix: "", label: "Deepest LOD delivered", description: "As-built, from LiDAR scan data" },
];

const featured = projects.filter((p) => p.featured).slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-screen items-center overflow-hidden pb-16 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-blueprint bg-grid opacity-60" />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-gold-500/10 blur-[110px]" />
        <div className="pointer-events-none absolute right-[-6rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">{profile.role}</span>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-mist-100 sm:text-5xl lg:text-[3.3rem]">
              {profile.yearsExperience} years turning ambitious infrastructure
              <span className="text-gold-500"> into built reality.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">{profile.tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-mist-400">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                <MapPin size={14} className="text-gold-500" />
                {profile.location} · {profile.secondaryLocation}
              </span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href={profile.resumeFile} download className="btn-primary">
                <Download size={16} />
                Download Résumé
              </a>
              <Link to="/projects" className="btn-ghost">
                View Projects
                <ArrowRight size={16} />
              </Link>
            </div>

            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-mist-100 sm:text-3xl">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <div className="mt-1 text-xs leading-snug text-mist-400">{stat.label}</div>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-gold-500/20 via-transparent to-blue-500/20 blur-2xl" />
            <CornerFrame className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink-800 shadow-glow">
              <LazyScene
                loader={() => import("../components/three/BlueprintScene")}
                className="aspect-[4/5] w-full"
                label="Loading station model…"
              />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/70 px-2.5 py-1 font-mono text-[10px] text-mist-400">
                  <Move3d size={12} className="text-blue-400" />
                  Drag to rotate
                </span>
              </div>
            </CornerFrame>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-mist-500">
              Illustrative model — elevated transit station
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <DimensionDivider label="Who is Prithijit" />

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal>
              <CornerFrame className="overflow-hidden rounded-2xl border border-white/10 shadow-glow">
                <img
                  src={workstation}
                  alt={`${profile.name} reviewing a BIM model on-screen`}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </CornerFrame>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="section-heading">
                From junior architect in Kolkata to BIM Manager across four countries.
              </h2>
              <p className="mt-4 leading-relaxed text-mist-300">
                Prithijit builds and leads the BIM function inside design consultancies and on-site
                construction teams — model standards, clash resolution, digital-twin handover — for metro
                systems, airports, nuclear power stations and heritage restorations.
              </p>
              <Link to="/about" className="btn-ghost mt-6">
                Read the full story
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <DimensionDivider label="Career at a glance" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GLANCE_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <dd className="font-display text-3xl font-bold text-mist-100">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-2 text-sm font-medium text-gold-500">{stat.label}</dt>
                  <p className="mt-1 text-xs text-mist-500">{stat.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <DimensionDivider label="Selected work" />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link to="/projects" className="btn-ghost">
              View all 19 projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <QuoteBlock />
      <CTABanner />
    </>
  );
}
