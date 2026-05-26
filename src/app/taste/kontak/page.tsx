import type { Metadata } from "next";
import { TasteShell } from "@/components/taste/TasteShell";
import { TastePageHero } from "@/components/taste/TastePageHero";
import { contact, social, whatsappLink } from "@/data/business";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi tim HarlindoJaya untuk konsultasi rental genset dan layanan teknis.",
};

const channels = [
  {
    label: "WhatsApp",
    value: contact.phone,
    sub: "Kanal utama untuk konsultasi cepat",
    href: whatsappLink(),
    cta: "Kirim Pesan",
    primary: true,
  },
  {
    label: "Telepon",
    value: contact.phone,
    sub: "Komunikasi langsung untuk kebutuhan mendesak",
    href: `tel:${contact.phoneRaw}`,
    cta: "Hubungi via Telepon",
    primary: false,
  },
  {
    label: "Email",
    value: contact.email,
    sub: "Untuk dokumen, purchase order, dan korespondensi formal",
    href: `mailto:${contact.email}`,
    cta: "Kirim Email",
    primary: false,
  },
  {
    label: "Instagram",
    value: "@HarlindoJaya",
    sub: "Pembaruan unit, dokumentasi proyek, dan portofolio",
    href: social.instagram,
    cta: "Ikuti Kami",
    primary: false,
  },
];

export default function TasteKontakPage() {
  return (
    <TasteShell>
      <TastePageHero
        eyebrow="Yuk Lebih Dekat dengan Kami!"
        title={
          <>
            We&apos;d Love to
            <br />
            <span className="text-[var(--taste-amber)] italic font-light">
              Hear from You.
            </span>
          </>
        }
        description="Hubungi kami via telepon, email, atau formulir kontak online. Tim kami akan merespons dengan cepat untuk memastikan Anda mendapat dukungan yang dibutuhkan."
      />

      {/* Channels — bento 2x2 with primary featured */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className={`taste-card flex flex-col group ${
                  c.primary
                    ? "lg:col-span-2 bg-[var(--charcoal-ink)] !text-[var(--canvas-white)] hover:!bg-[#27272A]"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span
                    className={`taste-eyebrow ${
                      c.primary ? "!text-[var(--taste-amber)]" : ""
                    }`}
                  >
                    {c.label}
                  </span>
                  <span
                    className={`taste-mono text-[11px] uppercase tracking-[0.18em] ${
                      c.primary
                        ? "text-[var(--muted-slate)]"
                        : "text-[var(--muted-slate)]"
                    }`}
                  >
                    0{i + 1} / 0{channels.length}
                  </span>
                </div>

                <div className="space-y-2 mb-8 flex-1">
                  <h3
                    className={`taste-display text-[26px] lg:text-[34px] break-all ${
                      c.primary ? "!text-[var(--canvas-white)]" : ""
                    }`}
                  >
                    {c.value}
                  </h3>
                  <p
                    className={`text-[14px] leading-relaxed ${
                      c.primary
                        ? "text-[var(--muted-slate)]"
                        : "text-[var(--steel-secondary)]"
                    }`}
                  >
                    {c.sub}
                  </p>
                </div>

                <div
                  className={`pt-5 border-t flex items-center justify-between ${
                    c.primary
                      ? "border-[rgba(255,255,255,0.12)]"
                      : "border-[var(--whisper-border-strong)]"
                  }`}
                >
                  <span
                    className={`text-[14px] font-medium ${
                      c.primary
                        ? "text-[var(--taste-amber)]"
                        : "text-[var(--charcoal-ink)]"
                    }`}
                  >
                    {c.cta}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      c.primary
                        ? "text-[var(--taste-amber)]"
                        : "text-[var(--steel-secondary)]"
                    }`}
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Office info + Map */}
      <section className="relative py-20 lg:py-28 border-t border-[var(--whisper-border-strong)] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="taste-eyebrow">Lokasi Kantor</div>
              <h2 className="taste-display text-[clamp(1.75rem,3.5vw,2.75rem)]">
                Kunjungan dan
                <br />
                <span className="text-[var(--taste-amber)] italic font-light">
                  jadwal survei lokasi.
                </span>
              </h2>

              <div className="pt-4 space-y-4">
                <div className="border-t border-[var(--whisper-border-strong)] pt-4">
                  <div className="taste-eyebrow !text-[10px] mb-1.5">
                    Alamat
                  </div>
                  <div className="text-[15px] text-[var(--charcoal-ink)] leading-relaxed">
                    {contact.address.full}
                  </div>
                </div>
                <div className="border-t border-[var(--whisper-border-strong)] pt-4">
                  <div className="taste-eyebrow !text-[10px] mb-1.5">
                    Operasional
                  </div>
                  <div className="text-[15px] text-[var(--charcoal-ink)]">
                    {contact.hoursEmergency}
                  </div>
                  <div className="text-[13px] text-[var(--steel-secondary)] mt-1">
                    {contact.hours}
                  </div>
                </div>
                <div className="border-t border-[var(--whisper-border-strong)] pt-4">
                  <div className="taste-eyebrow !text-[10px] mb-1.5">
                    Wilayah Layanan
                  </div>
                  <div className="text-[15px] text-[var(--charcoal-ink)]">
                    {contact.serviceArea.join(" · ")}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
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
                <a
                  href={whatsappLink(
                    "Halo HarlindoJaya, kami ingin menjadwalkan survei lokasi proyek."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="taste-btn-secondary"
                >
                  Jadwalkan Survei
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="taste-card !p-2 overflow-hidden">
                <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-[2rem] overflow-hidden bg-[var(--canvas-white)]">
                  <iframe
                    src="https://maps.google.com/maps?q=Klapanunggal+Bogor&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full"
                    loading="lazy"
                    title="Lokasi Kantor HarlindoJaya"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TasteShell>
  );
}
