import { Boxes } from "lucide-react";

export default function SceneFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-mist-500">
        <Boxes size={36} className="animate-pulse text-gold-500/60" />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Loading model…</span>
      </div>
    </div>
  );
}
