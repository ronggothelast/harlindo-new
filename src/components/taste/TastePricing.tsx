import { pricing, specialCapacity, pricingNotes, whatsappLink } from "@/data/business";

export function TastePricing() {
  // Featured: only "popular" packages get card treatment
  const featured = pricing.filter((p) => p.popular);
  const allPackages = pricing;

  return (
    <section
      id="harga"
      className="relative py-24 lg:py-32 border-t border-[var(--whisper-border-strong)] bg-white"
      aria-labelledby="taste-pricing-title"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header — asymmetric */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--taste-amber)] taste-pulse-dot"
                aria-hidden
              />
              <span className="taste-eyebrow">Daftar Harga</span>
            </div>
            <h2
              id="taste-pricing-title"
              className="taste-display text-[clamp(2rem,4.5vw,3.75rem)]"
            >
              Pilih kapasitas
              <br />
              <span className="text-[var(--taste-amber)] italic font-light">
                sesuai kebutuhan.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-2.5">
            {Object.entries(pricingNotes).map(([k, v]) => (
              <div
                key={k}
                className="flex items-start gap-3 text-[13px] text-[var(--charcoal-ink)] leading-relaxed"
              >
                <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--taste-amber)] flex-shrink-0" />
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured tier — bento 70/30 */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featured.map((p, i) => (
            <div key={p.capacity} className="taste-card group">
              <div className="flex items-start justify-between mb-5">
                <span className="taste-mono text-[11px] tracking-[0.18em] uppercase text-[var(--taste-amber)] font-semibold">
                  Pilihan Populer
                </span>
                <span className="taste-mono text-[11px] tracking-[0.18em] uppercase text-[var(--muted-slate)]">
                  {String(i + 1).padStart(2, "0")} / 0{featured.length}
                </span>
              </div>

              <div className="space-y-1.5 mb-6">
                <div className="taste-mono text-[44px] lg:text-[52px] font-bold text-[var(--charcoal-ink)] leading-none tracking-tight">
                  {p.capacity}
                  <span className="text-[18px] text-[var(--muted-slate)] ml-1.5 font-normal">
                    {p.unit}
                  </span>
                </div>
                <div className="text-[14px] text-[var(--steel-secondary)]">
                  {p.name}
                </div>
              </div>

              <div className="pt-5 border-t border-[var(--whisper-border-strong)] space-y-4">
                <div>
                  <div className="taste-eyebrow !text-[10px] mb-1">Per Hari</div>
                  <div className="taste-mono text-[24px] font-semibold text-[var(--charcoal-ink)]">
                    Rp. {p.price}jt
                  </div>
                </div>
                <ul className="space-y-2 text-[13px] text-[var(--steel-secondary)]">
                  <li className="flex items-center gap-2.5">
                    <span className="h-1 w-1 rounded-full bg-[var(--taste-amber)]" />
                    {p.hours}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1 w-1 rounded-full bg-[var(--taste-amber)]" />
                    {p.cable}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1 w-1 rounded-full bg-[var(--taste-amber)]" />
                    Bebas Repot Transportasi
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* All packages table — border-top dividers, no cards */}
        <div className="bg-[var(--canvas-white)] rounded-[2rem] border border-[var(--whisper-border-strong)] overflow-hidden">
          <div className="px-6 lg:px-10 py-5 flex items-center justify-between border-b border-[var(--whisper-border-strong)]">
            <h3 className="taste-mono text-[12px] tracking-[0.18em] uppercase font-semibold text-[var(--charcoal-ink)]">
              Semua Paket Kapasitas
            </h3>
            <span className="taste-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted-slate)]">
              {allPackages.length} pilihan
            </span>
          </div>

          {/* Header row — desktop only */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-10 py-3 border-b border-[var(--whisper-border)] taste-eyebrow !text-[10px]">
            <div className="col-span-1">No</div>
            <div className="col-span-2">Kapasitas</div>
            <div className="col-span-3">Paket</div>
            <div className="col-span-2">Operasional</div>
            <div className="col-span-2">Kabel Power</div>
            <div className="col-span-2 text-right">Per Hari</div>
          </div>

          {allPackages.map((p, i) => (
            <div
              key={p.capacity}
              className="grid grid-cols-2 lg:grid-cols-12 gap-4 px-6 lg:px-10 py-5 border-b border-[var(--whisper-border)] last:border-b-0 hover:bg-[var(--canvas-white)] transition-colors items-center"
            >
              <div className="col-span-2 lg:col-span-1 taste-mono text-[12px] text-[var(--muted-slate)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="lg:col-span-2 taste-mono text-[20px] font-semibold text-[var(--charcoal-ink)]">
                {p.capacity}
                <span className="text-[13px] text-[var(--muted-slate)] ml-1 font-normal">
                  {p.unit}
                </span>
              </div>
              <div className="lg:col-span-3 text-[14px] text-[var(--charcoal-ink)] flex items-center gap-2">
                {p.name}
                {p.popular && (
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--taste-amber)] font-semibold">
                    · Populer
                  </span>
                )}
              </div>
              <div className="lg:col-span-2 text-[13px] text-[var(--steel-secondary)]">
                {p.hours}
              </div>
              <div className="lg:col-span-2 text-[13px] text-[var(--steel-secondary)]">
                {p.cable}
              </div>
              <div className="col-span-2 lg:col-span-2 lg:text-right">
                <div className="taste-mono text-[16px] font-semibold text-[var(--charcoal-ink)]">
                  Rp. {p.price}jt
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special capacity — full-width editorial card */}
        <div className="mt-12 taste-card grid lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:p-12">
          <div className="lg:col-span-6 space-y-5">
            <div className="taste-eyebrow text-[var(--taste-amber)]">
              #02. Kapasitas Khusus
            </div>
            <h3 className="taste-display text-[32px] lg:text-[44px]">
              {specialCapacity.range}
            </h3>
            <p className="taste-body text-[15px]">
              {specialCapacity.description}
            </p>
            <div className="taste-mono text-[12px] uppercase tracking-[0.18em] text-[var(--taste-amber)]">
              {specialCapacity.price}
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <ul className="space-y-3">
              {specialCapacity.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-[15px] text-[var(--charcoal-ink)] pb-3 border-b border-[var(--whisper-border)] last:border-b-0"
                >
                  <span className="mt-2 h-1 w-1 rounded-full bg-[var(--taste-amber)] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(
                "Halo HarlindoJaya, kami membutuhkan konsultasi untuk genset kapasitas besar (750–2000 kVA). Mohon penawaran khususnya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="taste-btn-primary"
            >
              Hubungi Tim Kami
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
    </section>
  );
}
