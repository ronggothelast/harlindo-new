import type { Metadata } from "next";
import { TasteShell } from "@/components/taste/TasteShell";
import { TastePageHero } from "@/components/taste/TastePageHero";
import { TasteCTA } from "@/components/taste/TasteCTA";
import { company, contact, whyChooseUs } from "@/data/business";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenapa harus HarlindoJaya? Berpengalaman lebih dari 10 tahun di bidang genset — Rental, Syncronizing, Jual Beli, Overhaul mesin, dan Bodyworks.",
};

export default function TasteTentangPage() {
  return (
    <TasteShell>
      <TastePageHero
        eyebrow="About Us"
        title={
          <>
            Kenapa harus
            <br />
{" "}
            <span className="text-[var(--taste-amber)] italic font-light">
              HarlindoJaya?
            </span>
          </>
        }
        description={`${company.legal} ${company.name} — penyedia layanan genset terpercaya dengan dukungan teknis menyeluruh.`}
      />

      {/* Brand statement */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
              <div className="taste-eyebrow">Tentang Kami</div>
              <h2 className="taste-display text-[clamp(2rem,4vw,3.25rem)]">
                Menjadi Pilihan Terbaik
                <br />
{" "}
                <span className="text-[var(--taste-amber)] italic font-light">
                  dalam Layanan Berkualitas.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[16px] lg:text-[18px] leading-[1.65] text-[var(--steel-secondary)]">
              <p>
                Kami berpengalaman dalam bidang genset lebih dari 10 tahun,
                siap memberikan Anda berbagai layanan, mulai dari Rental,
                Syncronizing, Jual Beli, serta Overhaul mesin atau Bodyworks.
              </p>
              <p>
                HarlindoJaya menyediakan berbagai layanan profesional untuk
                memenuhi kebutuhan Anda dalam bidang engine works dan body
                works, serta layanan perawatan dan pemeliharaan genset. Kami
                juga menawarkan berbagai layanan pendukung, termasuk penyewaan
                genset, sinkronisasi dan instalasi panel, serta layanan teknis
                lainnya.
              </p>
              <p className="text-[var(--charcoal-ink)] font-medium border-l-2 border-[var(--taste-amber)] pl-6 py-2">
                Tim Kami Siap Membantu Anda. Spesialis 60Hz low voltage 220V 3
                Phase serta layanan 50Hz / 380V 3 Phase. Layanan 24 Jam serta
                aftersales terbaik. Terlengkap dan terpercaya selama belasan tahun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us — 3-col asymmetric (1 large, 2 stacked) */}
      <section className="relative py-20 lg:py-28 border-t border-[var(--whisper-border-strong)] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-14 lg:mb-20 max-w-3xl space-y-5">
            <div className="taste-eyebrow">Mengapa Memilih Kami</div>
            <h2 className="taste-display text-[clamp(2rem,4.5vw,3.5rem)]">
              Tiga alasan utama klien
              <br />
{" "}
              <span className="text-[var(--steel-secondary)] font-light italic">
                memilih HarlindoJaya.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* First card — large 7 cols */}
            <article className="taste-card lg:col-span-7 lg:p-12 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="taste-eyebrow text-[var(--taste-amber)]">
                  01
                </span>
                <span className="taste-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted-slate)]">
                  Featured
                </span>
              </div>
              <h3 className="taste-display text-[28px] lg:text-[36px] mb-4">
                {whyChooseUs[0].title}
              </h3>
              <p className="taste-body text-[16px] flex-1">
                {whyChooseUs[0].description}
              </p>
            </article>

            {/* 2 stacked cards — 5 cols */}
            <div className="lg:col-span-5 space-y-6">
              {whyChooseUs.slice(1).map((item, i) => (
                <article key={item.title} className="taste-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="taste-eyebrow text-[var(--taste-amber)]">
                      0{i + 2}
                    </span>
                  </div>
                  <h3 className="taste-display text-[22px] mb-3">
                    {item.title}
                  </h3>
                  <p className="taste-body text-[14px]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats row — border-top divider style */}
      <section className="relative py-20 lg:py-28 border-t border-[var(--whisper-border-strong)]">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {[
              { v: "20–2000", u: "Cakupan kVA" },
              { v: "24/7", u: "Operasional & Aftersales" },
              { v: "10+", u: "Tahun Pengalaman" },
              { v: "1 Hari", u: "Sewa Minimum" },
            ].map((s) => (
              <div
                key={s.u}
                className="border-l border-[var(--whisper-border-strong)] pl-6 lg:pl-8"
              >
                <div className="taste-mono text-[36px] lg:text-[44px] font-bold text-[var(--charcoal-ink)] tracking-tight leading-none mb-2">
                  {s.v}
                </div>
                <div className="taste-eyebrow !text-[10px]">{s.u}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-20 lg:py-28 border-t border-[var(--whisper-border-strong)] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="taste-eyebrow">Lokasi & Wilayah Layanan</div>
              <h2 className="taste-display text-[clamp(1.75rem,3.5vw,2.75rem)]">
                Berbasis di Bogor,
                <br />
{" "}
                <span className="text-[var(--taste-amber)] italic font-light">
                  melayani Jabodetabek.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="border-t border-[var(--whisper-border-strong)] pt-5 grid lg:grid-cols-2 gap-4">
                <div>
                  <div className="taste-eyebrow !text-[10px] mb-1.5">
                    Kantor Pusat
                  </div>
                  <div className="text-[15px] text-[var(--charcoal-ink)] leading-relaxed">
                    {contact.address.full}
                  </div>
                </div>
                <div>
                  <div className="taste-eyebrow !text-[10px] mb-1.5">
                    Cakupan Layanan
                  </div>
                  <div className="text-[15px] text-[var(--charcoal-ink)]">
                    {contact.serviceArea.join(" · ")}
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={contact.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="taste-btn-primary"
                >
                  Buka di Google Maps
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
          </div>
        </div>
      </section>

      <TasteCTA />
    </TasteShell>
  );
}
