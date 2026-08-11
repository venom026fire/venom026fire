import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center pt-16">
      <div className="container-page text-center">
        <Reveal>
          <span className="font-mono text-sm text-gold-500">404</span>
          <h1 className="mt-3 font-display text-3xl font-bold text-mist-100 sm:text-4xl">
            This sheet isn't in the set.
          </h1>
          <p className="mt-3 text-mist-400">The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
