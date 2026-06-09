import type { Metadata } from "next";
import Image from "next/image";
import { TasteShell } from "@/components/taste/TasteShell";
import { TastePageHero } from "@/components/taste/TastePageHero";
import { TasteCTA } from "@/components/taste/TasteCTA";
import { services, whatsappLink } from "@/data/business";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Berbagai Pelayanan Genset di HarlindoJaya — Rental, Overhaul, Perawatan & Perbaikan Mekanis, dan Body Repair.",
};

const serviceImages = [
  "/images/services/service-img1.webp",
  "/images/services/service-img2.webp",
  "/images/services/service-img3.webp",
  "/images/services/service-img4.webp",
];

export default function TasteLayananPage() {
  return (
    <TasteShell>
      <TastePageHero
        eyebrow="Layanan Lengkap"
        title={
          <>
            Berbagai Pelayanan Genset
            <br />
{" "}
            <span className="text-[var(--taste-amber)] italic font-light">
              di HarlindoJaya.
            </span>
          </>
        }
        description="HarlindoJaya menyediakan berbagai layanan profesional untuk memenuhi kebutuhan Anda dalam bidang engine works dan body works, serta layanan perawatan dan pemeliharaan genset."
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 space-y-24 lg:space-y-32">
          {services.map((s, i) => {
            const isReverse = i % 2 === 1;
            return (
              <article
                key={s.id}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReverse ? "lg:[&>*:first-child]:order-last" : ""
                }`}
              >
                <div className="lg:col-span-7">
                  <div className="taste-card !p-2 overflow-hidden">
                    <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden bg-[var(--canvas-white)]">
                      <Image
                        src={serviceImages[i % serviceImages.length]}
                        alt={s.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 60vw, 100vw"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <div className="taste-mono text-[12px] uppercase tracking-[0.2em] text-[var(--muted-slate)]">
                    Layanan 0{i + 1} / 0{services.length}
                  </div>
                  <h2 className="taste-display text-[32px] lg:text-[48px]">
                    {s.name}
                  </h2>
                  <p className="taste-body text-[16px]">{s.description}</p>
                  <ul className="pt-4 border-t border-[var(--whisper-border-strong)] space-y-3">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-[14px] text-[var(--charcoal-ink)]"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-[var(--taste-amber)] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <a
                      href={whatsappLink(
                        `Halo HarlindoJaya, kami tertarik dengan layanan ${s.name}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="taste-btn-primary"
                    >
                      Konsultasi {s.name}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <TasteCTA />
    </TasteShell>
  );
}
