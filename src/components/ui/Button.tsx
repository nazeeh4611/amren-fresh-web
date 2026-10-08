import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "leaf";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  "aria-disabled"?: boolean;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "border border-forest bg-forest text-paper hover:border-forest-darker hover:bg-forest-darker",
  secondary: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
  ghost: "border border-paper/30 text-paper hover:border-paper",
  leaf: "border border-lime bg-lime text-forest-darker hover:border-lime-light hover:bg-lime-light",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-[3px] font-semibold tracking-tight transition-colors duration-150",
    size === "lg" ? "px-6 py-3.5 text-[15px]" : "px-4 py-2.5 text-sm",
    variantClasses[variant],
    className,
  );

  if (external || href.startsWith("http")) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
