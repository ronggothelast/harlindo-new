import { ReactNode } from "react";

interface TastePageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}

export function TastePageHero({
  eyebrow,
  title,
  description,
}: TastePageHeroProps) {
  return (
    <section className="relative pt-12 lg:pt-20 pb-12 lg:pb-16 border-b border-[var(--whisper-border-strong)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--taste-amber)] taste-pulse-dot"
                aria-hidden
              />
              <span className="taste-eyebrow">{eyebrow}</span>
            </div>
            <h1 className="taste-display text-[clamp(2.5rem,6.5vw,5.5rem)]">
              {title}
            </h1>
          </div>
          {description && (
            <div className="lg:col-span-4">
              <p className="taste-body text-[16px]">{description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
