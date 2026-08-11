import { Link } from "react-router-dom";
import { navLinks, profile } from "../../data/content";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="container-page">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-sm font-semibold text-mist-200">{profile.name}</p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-mist-500">{profile.role}</p>
            <SocialLinks className="mt-4" />
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-mist-400 transition hover:text-gold-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-xs text-mist-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {profile.domain}</p>
          <p>
            Design &amp; development by{" "}
            <a
              href="https://avishakeadhikary.github.io/"
              target="_parent"
              rel="noreferrer"
              className="underline decoration-white/20 underline-offset-2 hover:text-gold-500"
            >
              Avishake Adhikary
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
