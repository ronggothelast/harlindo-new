import { Eyebrow } from "./Eyebrow";
import { pricing, specialCapacity, pricingNotes, whatsappLink } from "@/data/business";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export function Pricing() {
  return (
    <section
      id="harga"
      className="relative py-32 lg:py-40 bg-bg-surface/30"
      aria-labelledby="pricing-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7 space-y-6">
            <Eyebrow>Daftar Harga</Eyebrow>
            <h2
              id="pricing-title"
              className="text-4xl lg:text-6xl font-bold leading-[1.05] tracking-tightest"
            >
              Transparan.
              <br />
              <span className="text-amber italic font-light">All-in BBM.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-12 space-y-3">
            {Object.entries(pricingNotes).map(([k, v]) => (
              <p
                key={k}
                className="text-sm text-fg-secondary flex items-start gap-3 leading-relaxed"
              >
                <CheckCircle
                  weight="light"
                  size={18}
                  className="text-amber flex-shrink-0 mt-0.5"
                />
                <span>{v}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Pricing bento grid - 15 packages */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {pricing.map((p, i) => (
            <div
              key={p.capacity}
              className={`group rounded-2xl border bg-bg-card p-5 lg:p-6 transition-all duration-500 ease-haptic hover:border-amber/30 hover:bg-bg-elevated ${
                p.popular ? "border-amber/30" : "border-line"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
                  #{String(i + 1).padStart(2, "0")}
                </span>
                {p.popular && (
                  <span className="text-[9px] uppercase tracking-[0.2em] text-amber font-bold">
                    Popular
                  </span>
                )}
              </div>

              <div className="space-y-1 mb-5">
                <div className="font-mono text-3xl lg:text-4xl font-bold num-mono tracking-tight">
                  {p.capacity}
                  <span className="text-sm text-fg-muted ml-1 font-normal">
                    {p.unit}
                  </span>
                </div>
                <div className="text-xs text-fg-secondary leading-tight">
                  {p.name}
                </div>
              </div>

              <div className="pt-4 border-t border-line/50">
                <div className="text-[10px] uppercase tracking-[0.2em] text-fg-muted mb-1">
                  Per Hari
                </div>
                <div className="text-base lg:text-lg font-semibold text-amber">
                  Rp. {p.price}jt
                </div>
              </div>
            </div>
          ))}

          {/* Special capacity card */}
          <div className="group rounded-2xl border border-amber/30 bg-gradient-to-br from-bg-elevated to-bg-card p-6 lg:p-8 col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber mb-3 inline-block">
                  Custom Capacity
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight mb-2">
                  {specialCapacity.range}
                </h3>
                <p className="text-sm text-fg-secondary leading-relaxed">
                  {specialCapacity.description}
                </p>
              </div>
              <div className="flex lg:justify-end">
                <a
                  href={whatsappLink(
                    "Halo, saya butuh konsultasi untuk genset kapasitas besar (750-2000 kVA)."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber"
                >
                  <span className="pl-2">Konsultasi Khusus</span>
                  <span className="btn-icon-wrap">
                    <ArrowUpRight weight="light" size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
