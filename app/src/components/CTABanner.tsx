import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./ui/Reveal";
import { profile } from "../data/content";

export default function CTABanner() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="card relative overflow-hidden p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute inset-0 bg-blueprint bg-grid opacity-30" />
            <div className="relative">
              <h2 className="font-display text-2xl font-bold text-mist-100 sm:text-3xl">
                Let's build something worth modelling.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-mist-400">
                Open to BIM leadership, VDC strategy and delivery-management conversations.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <Mail size={16} />
                  Email {profile.name.split(" ")[0]}
                </a>
                <Link to="/contact" className="btn-ghost">
                  All contact details
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
