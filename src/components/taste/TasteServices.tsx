import Image from "next/image";
import { services } from "@/data/business";

const serviceImages = [
  "/images/services/service-img1.png",
  "/images/services/service-img2.png",
  "/images/services/service-img3.png",
  "/images/services/service-img4.png",
];

export function TasteServices() {
  return (
    <section
      id="layanan"
      className="relative py-24 lg:py-32 border-t border-[var(--whisper-border-strong)]"
      aria-labelledby="taste-services-title"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section header — asymmetric eyebrow + title left, body right */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--taste-amber)] taste-pulse-dot"
                aria-hidden
              />
              <span className="taste-eyebrow">Layanan Kami</span>
            </div>
            <h2
              id="taste-services-title"
              className="taste-display text-[clamp(2rem,4.5vw,3.75rem)]"
            >
              Berbagai Pelayanan
              <br />
              <span className="text-[var(--steel-secondary)] font-light italic">
                Genset di HarlindoJaya.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="taste-body text-[16px]">
              HarlindoJaya menyediakan berbagai layanan profesional untuk
              memenuhi kebutuhan Anda dalam bidang engine works dan body works,
              serta layanan perawatan dan pemeliharaan genset. Kami juga
              menawarkan layanan pendukung, termasuk penyewaan genset,
              sinkronisasi dan instalasi panel, serta layanan teknis lainnya.
            </p>
          </div>
        </div>

        {/* Zig-zag editorial layout — alternating image/text */}
        <div className="space-y-20 lg:space-y-32">
          {services.map((s, i) => {
            const isReverse = i % 2 === 1;
            return (
              <article
                key={s.id}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isReverse ? "lg:[&>*:first-child]:order-last" : ""
                }`}
              >
                {/* Image — 6 cols */}
                <div className="lg:col-span-6">
                  <div className="taste-card !p-2 overflow-hidden">
                    <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden bg-[var(--canvas-white)]">
                      <Image
                        src={serviceImages[i % serviceImages.length]}
                        alt={s.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Content — 5 cols, offset 1 col on right side */}
                <div
                  className={`lg:col-span-5 ${
                    isReverse ? "lg:col-start-2" : "lg:col-start-8"
                  } space-y-5`}
                >
                  <div className="taste-mono text-[12px] text-[var(--muted-slate)] tracking-[0.18em] uppercase">
                    0{i + 1} / 0{services.length}
                  </div>
                  <h3 className="taste-display text-[28px] lg:text-[40px]">
                    {s.name}
                  </h3>
                  <p className="taste-body text-[16px]">{s.description}</p>
                  <ul className="pt-4 border-t border-[var(--whisper-border-strong)] space-y-2.5">
                    {s.features.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-[14px] text-[var(--charcoal-ink)]"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-[var(--taste-amber)] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
