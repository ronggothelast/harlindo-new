import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  variant?: "default" | "amber";
  className?: string;
}

/**
 * Mandatory pattern from high-end-visual-design skill
 * Pill-shaped microscopic badge for major H1/H2s
 * Spec: rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]
 */
export function Eyebrow({
  children,
  variant = "default",
  className,
}: EyebrowProps) {
  return (
    <div className={cn(variant === "amber" ? "eyebrow-amber" : "eyebrow", className)}>
      <span className="inline-block w-1 h-1 rounded-full bg-current opacity-60" />
      {children}
    </div>
  );
}
