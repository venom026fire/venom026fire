import { profile } from "../../data/content";
import DiscordIcon from "../icons/DiscordIcon";
import { FacebookIcon, LinkedinIcon, XIcon, YoutubeIcon } from "../icons/BrandIcons";

const ICONS = {
  linkedin: LinkedinIcon,
  twitter: XIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  discord: DiscordIcon,
};

type Props = { className?: string };

export default function SocialLinks({ className }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      {profile.socials.map((social) => {
        const Icon = ICONS[social.icon as keyof typeof ICONS];
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist-400 transition hover:border-gold-500/50 hover:text-gold-500"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
