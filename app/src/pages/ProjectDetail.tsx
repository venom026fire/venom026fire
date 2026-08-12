import { ArrowLeft, ArrowUpRight, MapPin, Move3d, Sparkles } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import CTABanner from "../components/CTABanner";
import ProjectCard from "../components/ProjectCard";
import LazyScene from "../components/three/LazyScene";
import CornerFrame from "../components/ui/CornerFrame";
import DimensionDivider from "../components/ui/DimensionDivider";
import Reveal from "../components/ui/Reveal";
import SpecRow from "../components/ui/SpecRow";
import { projects } from "../data/content";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const related = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <div className="relative pb-20 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-blueprint bg-grid opacity-30" />
        <div className="container-page relative">
          <Reveal>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-mist-400 hover:text-gold-500">
              <ArrowLeft size={15} />
              All projects
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
              <span className="rounded border border-gold-500/40 px-2 py-1">Project</span>
              <span>{project.category}</span>
              {project.status === "ongoing" && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 px-2.5 py-1 text-[11px] normal-case tracking-normal text-gold-400">
                  <Sparkles size={11} className="animate-pulse" />
                  In Progress
                </span>
              )}
            </div>

            <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-mist-100 sm:text-4xl lg:text-5xl">
              {project.name}
            </h1>
            {project.formerName && (
              <p className="mt-1 text-sm text-mist-500">Formerly the {project.formerName}</p>
            )}
            <p className="mt-3 text-lg font-medium text-gold-500">{project.credit}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-mist-400">
              <MapPin size={14} />
              {project.location}
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <CornerFrame tone="blue" className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-glow">
              {project.coverImage ? (
                <img
                  src={project.coverImage}
                  alt={project.name}
                  className="aspect-[16/7] w-full object-cover sm:aspect-[16/5]"
                  loading="lazy"
                />
              ) : (
                <LazyScene
                  loader={() => import("../components/three/CategoryScene")}
                  sceneProps={{ category: project.category }}
                  className="aspect-[16/7] w-full sm:aspect-[16/5]"
                  label="Loading category model…"
                />
              )}
              {!project.coverImage && (
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/70 px-2.5 py-1 font-mono text-[10px] text-mist-400">
                  <Move3d size={12} className="text-blue-400" />
                  Drag to rotate
                </span>
              )}
              <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-ink-900/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-mist-500">
                {project.coverImage ? project.renderCredit ?? "Architectural visualization" : `Illustrative — ${project.category}`}
              </span>
            </CornerFrame>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal delay={0.05}>
              <CornerFrame className="card p-6 sm:p-8">
                <h2 className="font-display text-lg font-semibold text-mist-100">Brief</h2>
                <p className="mt-4 leading-relaxed text-mist-300">{project.description}</p>
              </CornerFrame>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card p-6">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist-500">Project Spec</h2>
                <div className="mt-3">
                  {project.role && <SpecRow label="Role" value={project.role} />}
                  {project.scale && <SpecRow label="Scale" value={project.scale} />}
                  {project.lod && <SpecRow label="LOD" value={project.lod} />}
                  {project.team && <SpecRow label="Team" value={project.team} />}
                  {project.tools && <SpecRow label="Tools" value={project.tools} />}
                  <SpecRow label="Location" value={project.location} />
                  <SpecRow label="Credit" value={project.credit} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {project.subBuildings && project.subBuildings.length > 0 && (
        <section className="pb-20">
          <div className="container-page">
            <DimensionDivider label="Project components" />

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {project.subBuildings.map((building, i) => (
                <Reveal key={building.name} delay={Math.min(i, 5) * 0.05}>
                  <div className="card h-full overflow-hidden">
                    {building.images && building.images.length > 0 && (
                      <div
                        className={`grid gap-0.5 ${building.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
                      >
                        {building.images.slice(0, 4).map((src, imgI) => (
                          <img
                            key={imgI}
                            src={src}
                            alt={`${building.name} — visualization ${imgI + 1}`}
                            className="aspect-[4/3] w-full object-cover"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-display text-base font-semibold text-mist-100">{building.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-mist-400">{building.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.sources && project.sources.length > 0 && (
        <section className="pb-20">
          <div className="container-page">
            <DimensionDivider label="Further reading" />
            <Reveal className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card flex items-center justify-between gap-3 p-4 text-sm text-mist-300 transition hover:border-gold-500/30 hover:text-mist-100"
                >
                  {source.label}
                  <ArrowUpRight size={15} className="shrink-0 text-mist-500" />
                </a>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="pb-20">
          <div className="container-page">
            <DimensionDivider label={`More in ${project.category}`} />
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
