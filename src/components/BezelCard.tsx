import { cn } from "@/lib/utils";

interface BezelCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  as?: "div" | "article" | "section";
}

/**
 * Mandatory Double-Bezel Card pattern from high-end-visual-design skill
 * Outer Shell: subtle bg, hairline border, p-1.5 padding, rounded-[2rem]
 * Inner Core: distinct bg, inner highlight shadow, rounded-[calc(2rem-0.375rem)]
 */
export function BezelCard({
  children,
  className,
  innerClassName,
  as = "div",
}: BezelCardProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag
      className={cn(
        "rounded-[2rem] bg-bg-surface/50 border border-line p-1.5 shadow-card-deep",
        className,
      )}
    >
      <div
        className={cn(
          "rounded-[calc(2rem-0.375rem)] bg-bg-card shadow-card-inset h-full",
          innerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
