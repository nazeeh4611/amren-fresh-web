import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  tone = "dark",
  as: Heading = "h2",
  className,
}: {
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Heading
        className={cn(
          "font-condensed text-5xl sm:text-6xl lg:text-7xl",
          tone === "dark" ? "text-forest" : "text-paper",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-xl text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-muted" : "text-paper/70",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
