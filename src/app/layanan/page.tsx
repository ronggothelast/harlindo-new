import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { services, whatsappLink } from "@/data/business";
import { ArrowUpRight, CheckCircle, Lightning, Wrench, Gear, Toolbox } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Empat layanan utama HarlindoJaya: Rental Genset, Perawatan & Perbaikan Mekanis, Overhaul, dan Instalasi & Commissioning. Dukungan teknis 24 jam untuk Jabodetabek.",
};

const iconMap: Record<string, any> = {
  Lightning,
  Wrench,
  Gear,
  Toolbox,
};

const heroImages = [
  "/images/services/service-img1.png",
  "/images/services/service-img2.png",
  "/images/services/service-img3.png",
  "/images/services/service-img4.png",
];

export default function LayananPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Layanan Lengkap"
        title={
          <>
            Solusi power
            <br />
            <span className="text-amber italic font-light">terintegrasi.</span>
          </>
        }
        description="Spektrum layanan teknis lengkap, mulai dari rental harian hingga overhaul mesin industri. Setiap layanan ditangani oleh tim teknisi internal bersertifikat dengan kontrol kualitas terstandar."
      />

      {/* Services detail — alternating layout */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-32 lg:space-y-40">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Lightning;
            const isReverse = i % 2 === 1;
            return (
              <article
                key={service.id}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isReverse ? "lg:[&>*:first-child]:order-last" : ""
                }`}
              >
                {/* Image */}
                <div className="lg:col-span-6">
                  <div className="relative aspect-[5/4] rounded-[2rem] border border-line bg-bg-surface/40 p-1.5 shadow-card-deep">
                    <div className="relative h-full w-full rounded-[calc(2rem-0.375rem)] overflow-hidden bg-bg-card">
                      <Image
                        src={heroImages[i % heroImages.length]}
                        alt={service.name}
                        fill
                        className="object-cover opacity-90"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-tr from-bg-primary/60 via-transparent to-transparent"
                      />
                      <div className="absolute top-6 left-6 right-6 flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.25em]">
                        <span className="text-amber">● {service.id.toUpperCase()}</span>
                        <span className="text-fg-muted">SVC-0{i + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-amber/5 border border-amber/20 flex items-center justify-center">
                      <Icon weight="light" size={28} className="text-amber" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                      Layanan 0{i + 1} / 0{services.length}
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
                    {service.name}
                  </h2>

                  <p className="text-base lg:text-lg text-fg-secondary leading-relaxed">
                    {service.description}
                  </p>

                  {service.features && service.features.length > 0 && (
                    <ul className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-line/50">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="text-sm text-fg-primary flex items-start gap-3"
                        >
                          <CheckCircle
                            weight="light"
                            size={18}
                            className="text-amber flex-shrink-0 mt-0.5"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="pt-6">
                    <a
                      href={whatsappLink(`Selamat siang, kami ingin meminta informasi lebih lanjut mengenai layanan ${service.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-amber"
                    >
                      <span className="pl-2">Konsultasi {service.name}</span>
                      <span className="btn-icon-wrap">
                        <ArrowUpRight weight="light" size={16} />
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
