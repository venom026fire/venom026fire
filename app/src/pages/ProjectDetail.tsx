import { ArrowLeft, MapPin, Move3d } from "lucide-react";
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

            <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-500">
              <span className="rounded border border-gold-500/40 px-2 py-1">Project</span>
              <span>{project.category}</span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-mist-100 sm:text-4xl lg:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-gold-500">{project.credit}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-mist-400">
              <MapPin size={14} />
              {project.location}
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <CornerFrame tone="blue" className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-glow">
              <LazyScene
                loader={() => import("../components/three/CategoryScene")}
                sceneProps={{ category: project.category }}
                className="aspect-[16/7] w-full sm:aspect-[16/5]"
                label="Loading category model…"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/70 px-2.5 py-1 font-mono text-[10px] text-mist-400">
                <Move3d size={12} className="text-blue-400" />
                Drag to rotate
              </span>
              <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-ink-900/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-mist-500">
                Illustrative — {project.category}
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
