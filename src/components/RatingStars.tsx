import { toStars } from "@/lib/format";

export default function RatingStars({ rating }: { rating: number }) {
  const { full, half, empty } = toStars(rating);
  return (
    <div className="flex items-center text-amber-500 text-sm">
      {"★".repeat(full)}
      {half ? "☆" : ""}
      {"✩".repeat(empty)}
      <span className="ml-2 text-zinc-600">{rating.toFixed(1)}</span>
    </div>
  );
}
// RatingStars component to display product ratings with stars in a visual way.