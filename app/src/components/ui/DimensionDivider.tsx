type Props = { label: string; className?: string };

export default function DimensionDivider({ label, className }: Props) {
  return (
    <div className={`flex items-center ${className ?? ""}`}>
      <span className="h-2 w-px bg-mist-500/40" />
      <div className="h-px flex-1 bg-mist-500/20" />
      <span className="mx-4 shrink-0 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-mist-500">
        {label}
      </span>
      <div className="h-px flex-1 bg-mist-500/20" />
      <span className="h-2 w-px bg-mist-500/40" />
    </div>
  );
}
