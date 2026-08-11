import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; tone?: "gold" | "blue" };

export default function CornerFrame({ children, className, tone = "gold" }: Props) {
  const color = tone === "gold" ? "border-gold-500/70" : "border-blue-400/70";

  return (
    <div className={`relative ${className ?? ""}`}>
      <span className={`pointer-events-none absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 ${color}`} />
      <span className={`pointer-events-none absolute -right-2 -top-2 h-4 w-4 border-r-2 border-t-2 ${color}`} />
      <span className={`pointer-events-none absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 ${color}`} />
      <span className={`pointer-events-none absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 ${color}`} />
      {children}
    </div>
  );
}
