import { Star } from "lucide-react";
import { reviews } from "@/lib/business";

// Duplicated for seamless CSS marquee loop.
const row = [...reviews, ...reviews];

export default function ReviewMarquee() {
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {row.map((r, i) => (
          <div
            key={i}
            className="glass-card flex w-80 shrink-0 flex-col p-5"
          >
            <span className="flex">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
              ))}
            </span>
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-zinc-300">“{r.text}”</p>
            <div className="mt-4 text-sm font-semibold text-white">{r.name}</div>
            <div className="text-xs text-zinc-500">{r.vehicle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
