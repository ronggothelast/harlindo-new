import { contact, whatsappLink } from "@/data/business";

export function TasteCTA() {
  return (
    <section
      id="kontak"
      className="relative py-24 lg:py-32 border-t border-[var(--whisper-border-strong)]"
      aria-labelledby="taste-cta-title"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Title side — 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--taste-amber)] taste-pulse-dot"
                aria-hidden
              />
              <span className="taste-eyebrow">Layanan 24 Jam</span>
            </div>
            <h2
              id="taste-cta-title"
              className="taste-display text-[clamp(2.25rem,6vw,5rem)]"
            >
              Butuh Daya
              <br />
{" "}
              <span className="text-[var(--taste-amber)] italic font-light">
                Segera?
              </span>
            </h2>
            <p className="taste-body text-[17px] max-w-xl">
              Kami menyediakan layanan rental Genset yang beroperasi 24 jam
              dengan respons cepat, siap melayani panggilan kapan saja. Baik
              untuk kebutuhan mendesak, proyek harian, bulanan, mingguan,
              maupun acara event.
            </p>
            <div className="pt-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="taste-btn-primary"
              >
                Hubungi Kami 24 Jam
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

          {/* Contact details card — 5 cols */}
          <div className="lg:col-span-5">
            <div className="taste-card p-8 lg:p-10 space-y-5">
              <div className="taste-eyebrow">Kontak Langsung</div>

              <div className="space-y-4">
                <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-[var(--whisper-border-strong)]">
                  <span className="text-[13px] text-[var(--muted-slate)]">
                    Telepon
                  </span>
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="taste-mono text-[15px] font-medium text-[var(--charcoal-ink)] hover:text-[var(--taste-amber)] transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-[var(--whisper-border-strong)]">
                  <span className="text-[13px] text-[var(--muted-slate)]">
                    Email
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[14px] font-medium text-[var(--charcoal-ink)] hover:text-[var(--taste-amber)] transition-colors break-all text-right"
                  >
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-[var(--whisper-border-strong)]">
                  <span className="text-[13px] text-[var(--muted-slate)]">
                    Operasional
                  </span>
                  <span className="text-[14px] font-medium text-[var(--charcoal-ink)] text-right">
                    {contact.hoursEmergency}
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[13px] text-[var(--muted-slate)]">
                    Wilayah Layanan
                  </span>
                  <span className="taste-mono text-[12px] text-[var(--charcoal-ink)] text-right">
                    {contact.serviceArea.join(" · ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
