import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "../data/content";
import CornerFrame from "./ui/CornerFrame";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <CornerFrame tone="blue">
        <Link
          to={`/projects/${project.slug}`}
          className="card group flex h-full flex-col p-5 transition-colors hover:border-gold-500/30"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              <span className="inline-block w-fit rounded-full bg-blue-500/10 px-2.5 py-1 text-[11px] font-medium text-blue-400">
                {project.category}
              </span>
              {project.status === "ongoing" && (
                <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gold-500/15 px-2.5 py-1 text-[11px] font-medium text-gold-400">
                  <Sparkles size={11} />
                  In Progress
                </span>
              )}
            </div>
            <ArrowUpRight
              size={16}
              className="mt-0.5 shrink-0 text-mist-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-500"
            />
          </div>

          <h3 className="mt-3 font-display text-base font-semibold leading-snug text-mist-100">{project.name}</h3>
          <p className="mt-1 text-sm font-medium text-gold-500">{project.credit}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-400">{project.summary}</p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-mist-500">
            <MapPin size={13} />
            {project.location}
          </p>
        </Link>
      </CornerFrame>
    </motion.div>
  );
}
