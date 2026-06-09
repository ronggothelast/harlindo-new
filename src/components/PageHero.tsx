import { Eyebrow } from "./Eyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-amber/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-4xl space-y-8">
          <Eyebrow variant="amber">{eyebrow}</Eyebrow>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tightest">
            {title}
          </h1>
          {description && (
            <p className="text-lg lg:text-xl text-fg-secondary max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
