import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  href: string;
  variant?: "amber" | "ghost";
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Mandatory Pill Button with Button-in-Button trailing icon
 * Spec from high-end-visual-design skill:
 * - rounded-full pill
 * - icon nested in own circular wrapper
 * - magnetic hover physics (translate diagonal + scale)
 * - active:scale-[0.98] for physical press
 */
export function PillButton({
  href,
  variant = "amber",
  external = false,
  children,
  icon,
  className,
}: PillButtonProps) {
  const buttonClass = variant === "amber" ? "btn-amber" : "btn-ghost";

  const content = (
    <>
      <span className="pl-2">{children}</span>
      <span className="btn-icon-wrap">
        {icon || <ArrowUpRight weight="light" size={16} />}
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonClass, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(buttonClass, className)}>
      {content}
    </Link>
  );
}
