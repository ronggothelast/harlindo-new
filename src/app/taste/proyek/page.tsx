import type { Metadata } from "next";
import Image from "next/image";
import { TasteShell } from "@/components/taste/TasteShell";
import { TastePageHero } from "@/components/taste/TastePageHero";
import { TasteCTA } from "@/components/taste/TasteCTA";
import { clients } from "@/data/business";

export const metadata: Metadata = {
  title: "Proyek & Klien",
  description:
    "Beberapa pekerjaan yang telah HarlindoJaya selesaikan — Halliburton, Pfizer, YKK, Prima Energi Bawean, Gilgal Center, dan PT HAN Konstruksi.",
};

const projectImages = [
  "/images/clients/work-img1.webp",
  "/images/clients/work-img2.webp",
  "/images/clients/work-img3.webp",
  "/images/clients/work-img4.webp",
  "/images/clients/work-img5.webp",
  "/images/clients/work-img6.webp",
];

export default function TasteProyekPage() {
  return (
    <TasteShell>
      <TastePageHero
        eyebrow="Lihat Kami di Bekerja"
        title={
          <>
            Beberapa pekerjaan
            <br />
{" "}
            <span className="text-[var(--taste-amber)] italic font-light">
              yang telah kami selesaikan.
            </span>
          </>
        }
        description="Portofolio proyek kami mencerminkan pengalaman dan presisi yang kami terapkan di setiap pekerjaan."
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 space-y-20 lg:space-y-28">
          {clients.map((c, i) => {
            const isReverse = i % 2 === 1;
            return (
              <article
                key={c.name}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReverse ? "lg:[&>*:first-child]:order-last" : ""
                }`}
              >
                <div className="lg:col-span-7">
                  <div className="taste-card !p-2 overflow-hidden">
                    <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-[var(--canvas-white)]">
                      <Image
                        src={projectImages[i % projectImages.length]}
                        alt={`Proyek ${c.name}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 60vw, 100vw"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-5">
                  <div className="taste-mono text-[12px] uppercase tracking-[0.2em] text-[var(--muted-slate)]">
                    Klien {String(i + 1).padStart(2, "0")} / 0{clients.length}
                  </div>
                  <h2 className="taste-display text-[28px] lg:text-[40px]">
                    {c.name}
                  </h2>
                  <p className="taste-body text-[15px]">{c.project}</p>
                  <div className="pt-5 border-t border-[var(--whisper-border-strong)] grid grid-cols-2 gap-4 text-[13px]">
                    <div>
                      <div className="taste-eyebrow !text-[10px] mb-1">
                        Sektor
                      </div>
                      <div className="text-[var(--charcoal-ink)] font-medium">
                        {c.sector}
                      </div>
                    </div>
                    <div>
                      <div className="taste-eyebrow !text-[10px] mb-1">
                        Lokasi
                      </div>
                      <div className="text-[var(--charcoal-ink)] font-medium">
                        {c.location}
                      </div>
                    </div>
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
