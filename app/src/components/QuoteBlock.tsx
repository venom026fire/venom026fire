import { Quote as QuoteIcon } from "lucide-react";
import CornerFrame from "./ui/CornerFrame";
import Reveal from "./ui/Reveal";
import quotePortrait from "../assets/quote-portrait.webp";
import { profile, quote } from "../data/content";

export default function QuoteBlock() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-blueprint bg-grid opacity-40" />
      <div className="container-page relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <Reveal className="mx-auto w-full max-w-xs lg:mx-0">
          <CornerFrame tone="blue" className="overflow-hidden rounded-2xl border border-white/10 shadow-glow">
            <img
              src={quotePortrait}
              alt={profile.name}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </CornerFrame>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <QuoteIcon className="mx-auto text-gold-500 lg:mx-0" size={32} />
          <p className="mt-6 font-display text-2xl font-semibold leading-snug text-mist-100 sm:text-3xl">
            "{quote.text}"
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-widest text-mist-500">— {quote.author}</p>
        </Reveal>
      </div>
    </section>
  );
}
