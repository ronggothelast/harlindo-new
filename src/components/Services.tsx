import { ArrowUpRight, Lightning, Wrench, Gear, Toolbox } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Eyebrow } from "./Eyebrow";
import { services } from "@/data/business";

const iconMap: Record<string, Icon> = {
  Lightning,
  Wrench,
  Gear,
  Toolbox,
};

export function Services() {
  return (
    <section
      id="layanan"
      className="relative py-32 lg:py-40"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7 space-y-6">
            <Eyebrow>Layanan Kami</Eyebrow>
            <h2
              id="services-title"
              className="text-4xl lg:text-6xl font-bold leading-[1.05] tracking-tightest"
            >
              Berbagai Pelayanan
              <br />
              <span className="text-fg-secondary font-light italic">
                Genset di HarlindoJaya.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-12">
            <p className="text-base lg:text-lg text-fg-secondary leading-relaxed">
              HarlindoJaya menyediakan berbagai layanan profesional untuk
              memenuhi kebutuhan Anda dalam bidang engine works dan body works,
              serta layanan perawatan dan pemeliharaan genset. Kami juga
              menawarkan layanan pendukung, termasuk penyewaan genset,
              sinkronisasi dan instalasi panel, serta layanan teknis lainnya.
            </p>
          </div>
        </div>

        {/* Asymmetrical bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Lightning;
            // First card spans 7 cols, others split
            const span =
              i === 0
                ? "lg:col-span-7 lg:row-span-2"
                : i === 1
                  ? "lg:col-span-5"
                  : i === 2
                    ? "lg:col-span-7"
                    : "lg:col-span-5";

            return (
              <article
                key={s.id}
                className={`group ${span} relative rounded-[2rem] bg-bg-surface/50 border border-line p-1.5 shadow-card-deep transition-all duration-500 ease-haptic hover:border-amber/30`}
              >
                <div className="rounded-[calc(2rem-0.375rem)] bg-bg-card shadow-card-inset h-full p-8 lg:p-10 flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div className="h-14 w-14 rounded-2xl bg-amber/5 border border-amber/20 flex items-center justify-center group-hover:bg-amber/10 transition-colors duration-500">
                      <Icon weight="light" size={28} className="text-amber" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                      0{i + 1} / 0{services.length}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-tight mb-3">
                    {s.name}
                  </h3>
                  <p className="text-base text-fg-secondary leading-relaxed mb-6 flex-1">
                    {s.description}
                  </p>

                  {s.features && s.features.length > 0 && (
                    <ul className="space-y-2 pt-4 border-t border-line/50">
                      {s.features.slice(0, 3).map((f) => (
                        <li
                          key={f}
                          className="text-sm text-fg-secondary flex items-center gap-3"
                        >
                          <span className="h-1 w-1 rounded-full bg-amber flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex items-center gap-2 text-amber text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Konsultasi Layanan <ArrowUpRight size={14} weight="light" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
