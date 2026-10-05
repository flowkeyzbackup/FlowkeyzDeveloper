export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div
      className="group overflow-hidden border-y border-line py-4"
      aria-label={`Technologies: ${items.join(", ")}`}
    >
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm text-muted group-hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            {item}
            <span className="text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}