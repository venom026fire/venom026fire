import { Quote as QuoteIcon } from "lucide-react";
import Reveal from "./ui/Reveal";
import { quote } from "../data/content";

export default function QuoteBlock() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-blueprint bg-grid opacity-40" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <QuoteIcon className="mx-auto text-gold-500" size={32} />
          <p className="mt-6 font-display text-2xl font-semibold leading-snug text-mist-100 sm:text-3xl">
            "{quote.text}"
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-widest text-mist-500">— {quote.author}</p>
        </Reveal>
      </div>
    </section>
  );
}
