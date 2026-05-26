import { ArrowUpRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "./Eyebrow";
import { contact, whatsappLink } from "@/data/business";

export function CTA() {
  return (
    <section
      id="kontak"
      className="relative py-32 lg:py-40 overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Ambient amber glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        <div className="rounded-[2rem] bg-bg-surface/60 border border-line p-1.5 shadow-card-deep">
          <div className="rounded-[calc(2rem-0.375rem)] bg-bg-card shadow-card-inset p-10 lg:p-16 xl:p-20 text-center space-y-8">
            <Eyebrow variant="amber" className="inline-flex">
              Siap Bantu 24/7
            </Eyebrow>

            <h2
              id="cta-title"
              className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tightest max-w-4xl mx-auto"
            >
              Butuh power
              <br className="hidden lg:block" /> sekarang juga?
            </h2>

            <p className="text-lg lg:text-xl text-fg-secondary max-w-2xl mx-auto leading-relaxed">
              Hubungi kami via WhatsApp untuk konsultasi cepat. Tim kami siap
              membantu menentukan unit yang tepat untuk kebutuhan proyek Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber"
              >
                <span className="pl-2">WhatsApp Sekarang</span>
                <span className="btn-icon-wrap">
                  <WhatsappLogo weight="bold" size={16} />
                </span>
              </a>
              <a href={`tel:${contact.phoneRaw}`} className="btn-ghost">
                <span className="pl-2">{contact.phone}</span>
                <span className="btn-icon-wrap">
                  <ArrowUpRight weight="light" size={16} />
                </span>
              </a>
            </div>

            <div className="pt-12 border-t border-line/40 grid sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                  Email
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-fg-primary hover:text-amber transition-colors break-all"
                >
                  {contact.email}
                </a>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                  Lokasi
                </div>
                <div className="text-sm text-fg-primary leading-snug">
                  {contact.address.area}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                  Service Area
                </div>
                <div className="text-sm text-fg-primary">
                  {contact.serviceArea.join(" · ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
