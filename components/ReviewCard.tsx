import { Star, Quote } from "lucide-react";

export type Review = {
  name: string;
  vehicle: string;
  text: string;
  tags: string[];
};

export default function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="glass-card flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </span>
        <Quote className="h-6 w-6 text-white/10" />
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">“{review.text}”</p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {review.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gradient text-sm font-bold text-ink">
          {initials}
        </span>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-white">{review.name}</div>
          <div className="text-xs text-zinc-500">{review.vehicle}</div>
        </div>
      </div>
    </div>
  );
}
