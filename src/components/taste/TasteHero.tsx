import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/data/business";

export function TasteHero() {
  return (
    <section
      className="relative pt-12 lg:pt-20 pb-16 lg:pb-24 overflow-hidden"
      aria-labelledby="taste-hero-title"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Eyebrow row — asymmetric, top-left */}
        <div className="grid lg:grid-cols-12 gap-8 mb-10 lg:mb-16 items-end">
          <div className="lg:col-span-7 flex items-center gap-3">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--taste-amber)] taste-pulse-dot"
              aria-hidden
            />
            <span className="taste-eyebrow">
              #01. Rental Genset & Layanan Pendukung
            </span>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <span className="taste-mono text-[12px] text-[var(--steel-secondary)]">
              Klapanunggal · Kab. Bogor · Jawa Barat
            </span>
          </div>
        </div>

        {/* Main asymmetric split — text 7, visual 5 */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-10 taste-reveal">
            <h1
              id="taste-hero-title"
              className="taste-display text-[clamp(2.75rem,7vw,5.75rem)]"
            >
              Siap menjadi
              <br />
{" "}
              mitra
              <span className="taste-inline-img" aria-hidden>
                <Image
                  src="/images/services/service-img1.webp"
                  alt=""
                  width={120}
                  height={120}
                />
              </span>
              terbaik
              <br />
{" "}
              <span className="text-[var(--taste-amber)] italic font-light">
                anda!
              </span>
            </h1>

            <p className="taste-body text-[17px] lg:text-[19px] max-w-xl">
              Instalasi, Jual Beli, dan Service Genset, Power House, Overhaul,
              Paralelisasi, Sistem Peringatan Otomatis & Perangkat Pemutus,
              serta Instalasi Industri.
            </p>

            <div className="pt-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="taste-btn-primary"
              >
                Dapatkan Penawaran Sekarang
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

          {/* Right visual — single editorial image with whisper card */}
          <div className="lg:col-span-5 taste-reveal taste-reveal-delay-2">
            <div className="taste-card !p-2 overflow-hidden">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[var(--canvas-white)]">
                <Image
                  src="/images/hero/header-img1.webp"
                  alt="Unit genset HarlindoJaya"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              {/* Stat row inside card */}
              <div className="grid grid-cols-3 px-4 py-5">
                {[
                  { v: "5.0", u: "Rating Klien" },
                  { v: "10+", u: "Tahun" },
                  { v: "24/7", u: "Aftersales" },
                ].map((s) => (
                  <div
                    key={s.u}
                    className="px-1 first:pl-0 last:pr-0 [&:not(:first-child)]:border-l border-[var(--whisper-border-strong)] text-center first:text-left last:text-right"
                  >
                    <div className="taste-mono text-[20px] font-semibold text-[var(--charcoal-ink)] tracking-tight">
                      {s.v}
                    </div>
                    <div className="taste-eyebrow !text-[9.5px] mt-0.5">
                      {s.u}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
