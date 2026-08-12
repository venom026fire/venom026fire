import { AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import { projectCategories, projects } from "../data/content";

export default function Projects() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? projects : projects.filter((p) => p.category === category)),
    [category],
  );

  return (
    <>
      <PageHeader
        code="03"
        eyebrow="Selected Work"
        title={`${projects.length} projects across five countries and every scale.`}
        description="From metro networks and nuclear power stations to heritage forts and landmark towers — filter by discipline, then open a project for the full brief."
      />

      <section className="pb-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap gap-2.5">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                    category === cat
                      ? "border-gold-500 bg-gold-500/15 text-gold-400"
                      : "border-white/10 text-mist-400 hover:border-white/25 hover:text-mist-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
