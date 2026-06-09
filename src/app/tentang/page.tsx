import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/Eyebrow";
import { company, contact, whyChooseUs, whatsappLink } from "@/data/business";
import {
  ShieldCheck,
  Stack,
  Clock,
  ArrowUpRight,
  MapPin,
  Certificate,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "HarlindoJaya adalah penyedia rental generator bersertifikasi SIO dengan pengalaman lebih dari satu dekade. Seluruh unit milik perusahaan, didukung tim teknisi siaga 24 jam untuk Jabodetabek.",
};

const iconMap: Record<string, any> = {
  ShieldCheck,
  Stack,
  Clock,
};

export default function TentangPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Kenapa harus
            <br />
{" "}
            <span className="text-amber italic font-light">
              HarlindoJaya?
            </span>
          </>
        }
        description={`${company.legal} ${company.name} — ${company.description}`}
      />

      {/* Brand statement */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <Eyebrow>Tentang Kami</Eyebrow>
              <h2 className="text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tightest">
                Menjadi Pilihan Terbaik
                <br />
{" "}
                <span className="text-amber italic font-light">
                  dalam Layanan Berkualitas.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base lg:text-lg leading-relaxed text-fg-secondary">
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
              <p className="text-fg-primary font-medium border-l-2 border-amber pl-6 py-2">
                Tim Kami Siap Membantu Anda. Spesialis 60Hz low voltage 220V 3
                Phase serta layanan 50Hz / 380V 3 Phase. Layanan 24 Jam serta
                aftersales terbaik. Terlengkap dan terpercaya selama belasan tahun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 bg-bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 space-y-6">
            <Eyebrow>Mengapa Memilih Kami</Eyebrow>
            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.05] tracking-tightest max-w-3xl">
              Tiga alasan utama klien
              <br />
{" "}
              <span className="text-fg-secondary font-light italic">
                memilih HarlindoJaya.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] bg-bg-surface/50 border border-line p-1.5 shadow-card-deep hover:border-amber/30 transition-all duration-500 ease-haptic"
                >
                  <div className="rounded-[calc(2rem-0.375rem)] bg-bg-card shadow-card-inset h-full p-8 lg:p-10 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div className="h-14 w-14 rounded-2xl bg-amber/5 border border-amber/20 flex items-center justify-center">
                        <Icon weight="light" size={28} className="text-amber" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                        0{i + 1} / 03
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight leading-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-fg-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats / telemetry data */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="rounded-[2rem] bg-bg-surface/50 border border-line p-1.5 shadow-card-deep">
            <div className="rounded-[calc(2rem-0.375rem)] bg-bg-card shadow-card-inset p-10 lg:p-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                {[
                  { v: "20–2000", u: "Cakupan kVA Lengkap" },
                  { v: "24/7", u: "Dukungan Operasional" },
                  { v: company.experience, u: "Tahun Pengalaman" },
                  { v: "1 Hari", u: "Sewa Minimum (12 Jam)" },
                ].map((s) => (
                  <div
                    key={s.u}
                    className="border-l border-line pl-6 lg:pl-8 space-y-2"
                  >
                    <div className="font-mono text-3xl lg:text-4xl font-bold num-mono tracking-tight">
                      {s.v}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                      {s.u}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-24 bg-bg-surface/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Eyebrow>Lokasi & Wilayah Layanan</Eyebrow>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
                Berbasis di Bogor,
                <br />
{" "}
                <span className="text-amber italic font-light">
                  melayani Jabodetabek.
                </span>
              </h2>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <MapPin
                    weight="light"
                    size={20}
                    className="text-amber flex-shrink-0 mt-1"
                  />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-fg-muted mb-1">
                      Kantor Pusat
                    </div>
                    <div className="text-base text-fg-primary leading-relaxed">
                      {contact.address.full}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Certificate
                    weight="light"
                    size={20}
                    className="text-amber flex-shrink-0 mt-1"
                  />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-fg-muted mb-1">
                      Cakupan Layanan
                    </div>
                    <div className="text-base text-fg-primary">
                      {contact.serviceArea.join(" · ")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
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
              </div>
            </div>

            <div className="relative aspect-square rounded-[2rem] border border-line bg-bg-surface/40 p-1.5 shadow-card-deep">
              <div className="relative h-full w-full rounded-[calc(2rem-0.375rem)] overflow-hidden bg-bg-card flex items-center justify-center">
                {/* Telemetry-style location card */}
                <div className="text-center space-y-4 p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber">
                    ● KANTOR PUSAT AKTIF
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold tracking-tight">
                    {contact.address.city}
                  </div>
                  <div className="text-fg-secondary">
                    {contact.address.province}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted pt-4 border-t border-line/50">
                    {contact.hours}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
