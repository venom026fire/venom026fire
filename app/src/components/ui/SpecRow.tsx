type Props = { label: string; value: string };

export default function SpecRow({ label, value }: Props) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-white/[0.06] py-3 last:border-b-0">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-500">{label}</span>
      <span className="text-right text-sm text-mist-200">{value}</span>
    </div>
  );
}
