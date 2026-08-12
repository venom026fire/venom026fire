import { Download, FileText, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import SocialLinks from "../components/layout/SocialLinks";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <>
      <PageHeader
        code="05"
        eyebrow="Get in touch"
        title="Let's build something worth modelling."
        description="Open to BIM leadership, VDC strategy and delivery-management conversations — reach out directly or grab the full résumé and project portfolio below."
      />

      <section className="pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition hover:border-gold-500/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs text-mist-500">Email</p>
                  <p className="text-sm font-medium text-mist-100">{profile.email}</p>
                </div>
              </a>

              {profile.phones.map((phone) => (
                <a
                  key={phone.label}
                  href={phone.href}
                  className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition hover:border-gold-500/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-mist-500">Phone · {phone.label}</p>
                    <p className="text-sm font-medium text-mist-100">{phone.number}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-mist-300">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs text-mist-500">Based in</p>
                  <p className="text-sm font-medium text-mist-100">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card relative h-full overflow-hidden p-8">
              <div className="pointer-events-none absolute inset-0 bg-blueprint bg-grid opacity-30" />
              <div className="relative">
                <h2 className="font-display text-lg font-semibold text-mist-100">Documents</h2>
                <p className="mt-2 text-sm text-mist-400">
                  Full career history, project list and a PDF walkthrough of selected work.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={profile.resumeFile}
                    download
                    className="flex items-center gap-4 rounded-xl border border-dashed border-white/15 p-4 text-mist-300 transition hover:border-gold-500/40 hover:text-mist-100"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                      <Download size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-medium">Download full résumé</p>
                      <p className="text-xs text-mist-500">PDF · career history &amp; project list</p>
                    </div>
                  </a>

                  <a
                    href={profile.portfolioFile}
                    download
                    className="flex items-center gap-4 rounded-xl border border-dashed border-white/15 p-4 text-mist-300 transition hover:border-gold-500/40 hover:text-mist-100"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                      <FileText size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-medium">Download portfolio PDF</p>
                      <p className="text-xs text-mist-500">Visual walkthrough of selected projects</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
