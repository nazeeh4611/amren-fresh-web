import { cn } from "@/lib/utils";

/** Small "swipe" cue shown above horizontal sliders on small screens only. */
export function SwipeHint({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-[11px] uppercase",
        tone === "dark" ? "text-muted" : "text-paper/55",
        className,
      )}
      aria-hidden="true"
    >
      Swipe
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
        <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </p>
  );
}
