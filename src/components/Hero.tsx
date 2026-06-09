import Image from "next/image";
import { ArrowUpRight, Lightning, Wrench } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "./Eyebrow";
import { contact, whatsappLink } from "@/data/business";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Ambient glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 h-[800px] w-[800px] rounded-full bg-amber/10 blur-[180px] animate-ambient-glow" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-sky-200/30 blur-[140px]" />
      </div>


      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: Editorial copy */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber border border-amber/20">
          <Wrench weight="bold" size={14} />
          <span>Rental Genset & Layanan Pendukung</span>
        </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tightest text-balance"
          >
            Siap menjadi mitra terbaik <span className="text-amber italic font-light pb-1">anda!</span>
          </h1>

          <p className="text-base lg:text-lg text-fg-secondary max-w-xl leading-relaxed">
            Instalasi, Jual Beli, dan Service Genset, Power House, Overhaul,
            Paralelisasi, Sistem Peringatan Otomatis & Perangkat Pemutus,
            serta Instalasi Industri.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber"
            >
              <span className="pl-2">Dapatkan Penawaran Sekarang</span>
              <span className="btn-icon-wrap">
                <ArrowUpRight weight="light" size={16} />
              </span>
            </a>

            <a href="/layanan" className="btn-ghost">
              <span className="pl-2">Pelajari Lebih Lanjut</span>
              <span className="btn-icon-wrap">
                <ArrowUpRight weight="light" size={16} />
              </span>
            </a>
          </div>

          {/* Key specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-12 border-t border-line/50 max-w-2xl">
            {[
              { v: "5.0", u: "Terakreditasi" },
              { v: "60Hz", u: "220V 3 Phase" },
              { v: "50Hz", u: "380V 3 Phase" },
              { v: "24 Jam", u: "Layanan & Aftersales" },
            ].map((s) => (
              <div key={s.u} className="space-y-1">
                <div className="text-xl lg:text-2xl font-bold text-fg-primary tracking-tight">
                  {s.v}
                </div>
                <div className="text-xs text-fg-muted">
                  {s.u}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Image with bezel */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-line bg-bg-surface/40 p-1.5 shadow-card-deep">
            <div className="relative h-full w-full rounded-[calc(2rem-0.375rem)] overflow-hidden bg-bg-card">
              <Image
                src="/images/hero/header-img1.webp"
                alt="HarlindoJaya genset operational"
                fill
                priority
                className="object-cover opacity-95"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              {/* Vignette */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-bg-card/80 via-transparent to-transparent"
              />
            </div>
          </div>

          {/* Floating spec card */}
          <div className="absolute -bottom-6 -left-6 lg:-left-12 hidden md:block">
            <div className="rounded-2xl bg-bg-elevated/90 backdrop-blur-xl border border-line-strong p-5 shadow-card-deep w-64">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber/10 flex items-center justify-center">
                  <Lightning weight="light" size={20} className="text-amber" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-fg-muted">
                    Sewa Minimum
                  </div>
                  <div className="text-sm font-semibold">1 Hari (12 Jam)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
