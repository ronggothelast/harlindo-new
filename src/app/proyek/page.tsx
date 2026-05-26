import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { clients } from "@/data/business";
import { Buildings, MapPin } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Proyek & Klien",
  description:
    "Daftar klien dan proyek HarlindoJaya — dari konstruksi, farmasi (Pfizer), energi (Halliburton), manufaktur (YKK), hingga pengembang properti.",
};

const projectImages = [
  "/images/clients/work-img1.png",
  "/images/clients/work-img2.png",
  "/images/clients/work-img3.png",
  "/images/clients/work-img4.png",
  "/images/clients/work-img5.png",
  "/images/clients/work-img6.png",
];

export default function ProyekPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Portfolio Klien"
        title={
          <>
            Dipercaya
            <br />
            <span className="text-amber italic font-light">
              perusahaan terkemuka.
            </span>
          </>
        }
        description="Dari proyek konstruksi hingga industri farmasi, energi, dan manufaktur. HarlindoJaya melayani kebutuhan power di berbagai sektor strategis."
      />

      {/* Z-axis cascade portfolio */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-24">
          {clients.map((client, i) => {
            const isReverse = i % 2 === 1;
            return (
              <article
                key={client.name}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReverse ? "lg:[&>*:first-child]:order-last" : ""
                }`}
              >
                {/* Image */}
                <div className="lg:col-span-7 relative">
                  <div className="relative aspect-[16/10] rounded-[2rem] border border-line bg-bg-surface/40 p-1.5 shadow-card-deep">
                    <div className="relative h-full w-full rounded-[calc(2rem-0.375rem)] overflow-hidden bg-bg-card">
                      <Image
                        src={projectImages[i % projectImages.length]}
                        alt={`Proyek ${client.name}`}
                        fill
                        className="object-cover opacity-85"
                        sizes="(min-width: 1024px) 60vw, 100vw"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent"
                      />
                      <div className="absolute top-6 left-6 right-6 flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.25em]">
                        <span className="text-amber">● PROJECT</span>
                        <span className="text-fg-muted">
                          P{String(i + 1).padStart(3, "0")}
                        </span>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
                        <div className="flex justify-between border-t border-line/50 pt-3">
                          <span>{client.location}</span>
                          <span>COMPLETED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5 space-y-6 lg:pl-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-muted">
                    Klien {String(i + 1).padStart(2, "0")} / 0{clients.length}
                  </div>

                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-[1.05]">
                    {client.name}
                  </h2>

                  <div className="flex items-center gap-3 text-fg-secondary">
                    <MapPin weight="light" size={16} className="text-amber" />
                    <span className="text-sm uppercase tracking-wider">
                      {client.location}
                    </span>
                  </div>

                  <div className="pt-6 border-t border-line/50 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-fg-muted">Sektor</span>
                      <span className="text-fg-primary font-medium">
                        {getSector(client.name)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-fg-muted">Layanan</span>
                      <span className="text-fg-primary font-medium">
                        Rental & Service
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-fg-muted">Status</span>
                      <span className="text-amber font-medium">
                        ● Trusted Partner
                      </span>
                    </div>
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

function getSector(name: string): string {
  if (/Pfizer/i.test(name)) return "Farmasi";
  if (/Halliburton/i.test(name)) return "Energi";
  if (/YKK/i.test(name)) return "Manufaktur";
  if (/KONSTRUKSI/i.test(name)) return "Konstruksi";
  if (/Energi/i.test(name)) return "Energi";
  if (/Center|PIK/i.test(name)) return "Properti";
  return "Industri";
}
