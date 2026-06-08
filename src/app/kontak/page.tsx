import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { contact, social, whatsappLink } from "@/data/business";
import {
  WhatsappLogo,
  Phone,
  Envelope,
  MapPin,
  Clock,
  InstagramLogo,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi tim HarlindoJaya melalui WhatsApp +62 81281104105 untuk konsultasi rental generator. Tim kami siap merespons setiap permintaan, atau kirimkan email ke contact@harlindojaya.com.",
};

const channels = [
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: contact.phone,
    sub: "Kanal utama untuk konsultasi cepat dan respons 24 jam",
    href: whatsappLink(),
    cta: "Kirim Pesan",
    primary: true,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: contact.phone,
    sub: "Komunikasi langsung untuk kebutuhan mendesak",
    href: `tel:${contact.phoneRaw}`,
    cta: "Hubungi via Telepon",
    primary: false,
  },
  {
    icon: Envelope,
    label: "Email",
    value: contact.email,
    sub: "Untuk dokumen, purchase order, dan korespondensi formal",
    href: `mailto:${contact.email}`,
    cta: "Kirim Email",
    primary: false,
  },
  {
    icon: InstagramLogo,
    label: "Instagram",
    value: "@HarlindoJaya",
    sub: "Pembaruan unit, dokumentasi proyek, dan portofolio",
    href: social.instagram,
    cta: "Ikuti Kami",
    primary: false,
  },
];

export default function KontakPage() {
  return (
    <PageShell showCta={false}>
      <PageHero
        eyebrow="Yuk Lebih Dekat dengan Kami!"
        title={
          <>
            We'd Love to
            <br />
            <span className="text-amber italic font-light">Hear from You.</span>
          </>
        }
        description="Hubungi kami via telepon, email, atau formulir kontak online. Tim kami akan merespons dengan cepat untuk memastikan Anda mendapat dukungan yang dibutuhkan."
      />

      {/* Contact channels */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group rounded-[2rem] border p-1.5 shadow-card-deep transition-all duration-500 ease-haptic hover:scale-[1.01] ${
                    c.primary
                      ? "bg-amber/[0.08] border-amber/30 hover:border-amber/50"
                      : "bg-bg-surface/50 border-line hover:border-line-strong"
                  }`}
                >
                  <div
                    className={`rounded-[calc(2rem-0.375rem)] shadow-card-inset h-full p-8 lg:p-10 flex flex-col ${
                      c.primary ? "bg-bg-card" : "bg-bg-card"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-8">
                      <div
                        className={`h-14 w-14 rounded-2xl flex items-center justify-center ${
                          c.primary
                            ? "bg-amber text-white"
                            : "bg-amber/5 border border-amber/20 text-amber"
                        }`}
                      >
                        <Icon weight={c.primary ? "bold" : "light"} size={26} />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                        0{i + 1} / 0{channels.length}
                      </span>
                    </div>

                    <div className="space-y-2 mb-8 flex-1">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                        {c.label}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold tracking-tight leading-tight break-all">
                        {c.value}
                      </h3>
                      <p className="text-sm text-fg-secondary leading-relaxed">
                        {c.sub}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-line/50">
                      <span
                        className={`text-sm font-medium ${
                          c.primary ? "text-amber" : "text-fg-primary"
                        }`}
                      >
                        {c.cta}
                      </span>
                      <ArrowUpRight
                        weight="light"
                        size={18}
                        className={`transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                          c.primary ? "text-amber" : "text-fg-secondary"
                        }`}
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office info */}
      <section className="relative py-24 bg-bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Eyebrow>Lokasi Kantor</Eyebrow>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
                Kunjungan dan
                <br />
                <span className="text-amber italic font-light">
                  jadwal survei lokasi.
                </span>
              </h2>

              <div className="space-y-5 pt-6">
                <div className="flex items-start gap-4">
                  <MapPin
                    weight="light"
                    size={20}
                    className="text-amber flex-shrink-0 mt-1"
                  />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-fg-muted mb-1">
                      Alamat
                    </div>
                    <div className="text-base text-fg-primary leading-relaxed">
                      {contact.address.full}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock
                    weight="light"
                    size={20}
                    className="text-amber flex-shrink-0 mt-1"
                  />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-fg-muted mb-1">
                      Jam Operasional
                    </div>
                    <div className="text-base text-fg-primary">
                      {contact.hours}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin
                    weight="light"
                    size={20}
                    className="text-amber flex-shrink-0 mt-1"
                  />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-fg-muted mb-1">
                      Wilayah Layanan
                    </div>
                    <div className="text-base text-fg-primary">
                      {contact.serviceArea.join(" · ")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <a
                  href={contact.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber"
                >
                  <span className="pl-2">Buka di Google Maps</span>
                  <span className="btn-icon-wrap">
                    <ArrowUpRight weight="light" size={16} />
                  </span>
                </a>
                <a
                  href={whatsappLink(
                    "Selamat siang, kami ingin menjadwalkan survei lokasi proyek bersama tim HarlindoJaya."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <span className="pl-2">Jadwalkan Survei Lokasi</span>
                  <span className="btn-icon-wrap">
                    <ArrowUpRight weight="light" size={16} />
                  </span>
                </a>
              </div>
            </div>

            {/* Map placeholder / location card */}
            <div className="relative aspect-[4/5] lg:aspect-auto rounded-[2rem] border border-line bg-bg-surface/40 p-1.5 shadow-card-deep overflow-hidden">
              <div className="relative h-full w-full rounded-[calc(2rem-0.375rem)] bg-bg-card overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Klapanunggal+Bogor&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[400px] grayscale opacity-80"
                  loading="lazy"
                  title="Lokasi Kantor HarlindoJaya"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
