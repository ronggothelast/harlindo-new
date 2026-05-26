import Image from "next/image";
import { ArrowUpRight, Lightning, Wrench } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "./Eyebrow";
import { contact, whatsappLink } from "@/data/business";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-32 pb-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Ambient glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 h-[800px] w-[800px] rounded-full bg-amber/5 blur-[180px] animate-ambient-glow" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-amber/[0.03] blur-[140px]" />
      </div>

      {/* Grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: Editorial copy */}
        <div className="lg:col-span-7 space-y-8">
          <Eyebrow variant="amber">SIO Certified · Belasan Tahun</Eyebrow>

          <h1
            id="hero-title"
            className="text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold leading-[0.95] tracking-tightest"
          >
            Heavy Duty
            <br />
            Machine
            <br />
            <span className="text-amber italic font-light">Rental.</span>
          </h1>

          <p className="text-lg lg:text-xl text-fg-secondary max-w-xl leading-relaxed">
            Genset 20kVA hingga 2000kVA. Barang milik sendiri, unit lengkap,
            troubleshooting 24 jam. Pilihan terbaik untuk harga terbaik.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber"
            >
              <span className="pl-2">WhatsApp Sekarang</span>
              <span className="btn-icon-wrap">
                <ArrowUpRight weight="light" size={16} />
              </span>
            </a>

            <a href="#harga" className="btn-ghost">
              <span className="pl-2">Lihat Harga</span>
              <span className="btn-icon-wrap">
                <ArrowUpRight weight="light" size={16} />
              </span>
            </a>
          </div>

          {/* Tactical telemetry stats */}
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-line/50 max-w-xl">
            {[
              { v: "20–2000", u: "kVA Range" },
              { v: "24/7", u: "Operasional" },
              { v: "Belasan", u: "Tahun" },
            ].map((s) => (
              <div key={s.u} className="space-y-1">
                <div className="font-mono text-xl lg:text-2xl text-fg-primary num-mono tracking-tight">
                  {s.v}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-fg-muted">
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
                src="/images/hero/header-img1.png"
                alt="HarlindoJaya genset operational"
                fill
                priority
                className="object-cover opacity-90"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              {/* Vignette */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-bg-primary via-transparent to-transparent"
              />
              {/* Telemetry overlay */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.25em]">
                <span className="text-amber">● LIVE</span>
                <span className="text-fg-muted">UNIT-001</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
                <div className="flex justify-between border-t border-line pt-3">
                  <span>JABOTABEK</span>
                  <span>ALL-IN BBM 12H</span>
                </div>
              </div>
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
                    Min. Rental
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
