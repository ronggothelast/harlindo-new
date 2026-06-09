import Image from "next/image";
import { clients } from "@/data/business";

const projectImages = [
  "/images/clients/work-img1.webp",
  "/images/clients/work-img2.webp",
  "/images/clients/work-img3.webp",
  "/images/clients/work-img4.webp",
  "/images/clients/work-img5.webp",
  "/images/clients/work-img6.webp",
];

export function TasteClients() {
  // Bento: featured (1 large) + 5 standard
  const [featured, ...rest] = clients;

  return (
    <section
      id="klien"
      className="relative py-24 lg:py-32 border-t border-[var(--whisper-border-strong)] bg-white"
      aria-labelledby="taste-clients-title"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--taste-amber)] taste-pulse-dot"
                aria-hidden
              />
              <span className="taste-eyebrow">Lihat Kami di Bekerja</span>
            </div>
            <h2
              id="taste-clients-title"
              className="taste-display text-[clamp(2rem,4.5vw,3.75rem)]"
            >
              Beberapa pekerjaan
              <br />
{" "}
              <span className="text-[var(--taste-amber)] italic font-light">
                yang telah kami selesaikan.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="taste-body text-[16px]">
              Portofolio proyek kami mencerminkan pengalaman dan presisi yang
              kami terapkan di setiap pekerjaan, mulai dari oil & gas, farmasi,
              manufaktur, hingga acara keagamaan dan konstruksi.
            </p>
          </div>
        </div>

        {/* Bento grid — featured spans 2 cols on desktop, 5 standard cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured card — 2 cols */}
          <article className="taste-card md:col-span-2 lg:col-span-2 lg:row-span-2 !p-2 overflow-hidden flex flex-col">
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-[var(--canvas-white)]">
              <Image
                src={projectImages[0]}
                alt={`Proyek ${featured.name}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
            <div className="px-6 lg:px-8 py-6 lg:py-8 space-y-4 flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="taste-eyebrow text-[var(--taste-amber)]">
                  Featured · {featured.sector}
                </span>
                <span className="taste-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted-slate)]">
                  P001
                </span>
              </div>
              <h3 className="taste-display text-[24px] lg:text-[32px]">
                {featured.name}
              </h3>
              <p className="taste-body text-[15px] flex-1">
                {featured.project}
              </p>
              <div className="pt-4 border-t border-[var(--whisper-border-strong)] flex items-center justify-between text-[13px]">
                <span className="text-[var(--steel-secondary)]">
                  {featured.location}
                </span>
                <span className="taste-mono text-[var(--taste-amber)] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--taste-amber)] taste-pulse-dot" />
                  Selesai
                </span>
              </div>
            </div>
          </article>

          {/* 5 standard cards */}
          {rest.map((c, i) => (
            <article key={c.name} className="taste-card flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="taste-eyebrow">{c.sector}</span>
                <span className="taste-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted-slate)]">
                  P{String(i + 2).padStart(3, "0")}
                </span>
              </div>
              <h3 className="taste-display text-[20px] lg:text-[24px] mb-3">
                {c.name}
              </h3>
              <p className="taste-body text-[14px] flex-1">{c.project}</p>
              <div className="pt-4 mt-4 border-t border-[var(--whisper-border-strong)] flex items-center justify-between text-[12px]">
                <span className="text-[var(--steel-secondary)]">
                  {c.location}
                </span>
                <span className="taste-mono text-[var(--taste-amber)]">
                  ● Selesai
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
