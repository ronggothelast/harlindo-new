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
    "Hubungi HarlindoJaya via WhatsApp +62 81281104105 untuk konsultasi rental genset 24/7. Atau email contact@harlindojaya.com.",
};

const channels = [
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    value: contact.phone,
    sub: "Respon cepat 24/7 — channel utama",
    href: whatsappLink(),
    cta: "Chat Sekarang",
    primary: true,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: contact.phone,
    sub: "Suara langsung untuk emergency",
    href: `tel:${contact.phoneRaw}`,
    cta: "Telepon",
    primary: false,
  },
  {
    icon: Envelope,
    label: "Email",
    value: contact.email,
    sub: "Untuk dokumen, PO, dan korespondensi formal",
    href: `mailto:${contact.email}`,
    cta: "Kirim Email",
    primary: false,
  },
  {
    icon: InstagramLogo,
    label: "Instagram",
    value: "@HarlindoJaya",
    sub: "Update unit, proyek, dan portfolio terbaru",
    href: social.instagram,
    cta: "Follow",
    primary: false,
  },
];

export default function KontakPage() {
  return (
    <PageShell showCta={false}>
      <PageHero
        eyebrow="Hubungi Kami"
        title={
          <>
            24/7 ready
            <br />
            <span className="text-amber italic font-light">untuk Anda.</span>
          </>
        }
        description="Tim kami siaga setiap saat untuk konsultasi, booking, dan emergency response. Pilih channel yang paling nyaman."
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
                            ? "bg-amber text-bg-primary"
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
                Kunjungi atau
                <br />
                <span className="text-amber italic font-light">
                  jadwalkan survey.
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
                      Operasional
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
                      Service Area
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
                  <span className="pl-2">Buka Maps</span>
                  <span className="btn-icon-wrap">
                    <ArrowUpRight weight="light" size={16} />
                  </span>
                </a>
                <a
                  href={whatsappLink(
                    "Halo, saya ingin jadwalkan survey lokasi proyek."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <span className="pl-2">Jadwalkan Survey</span>
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
                  title="HarlindoJaya Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
