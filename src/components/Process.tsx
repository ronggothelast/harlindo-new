import { howItWorks } from "@/data/business";
import { Eyebrow } from "./Eyebrow";

export function Process() {
  return (
    <section
      id="proses"
      className="relative py-20 md:py-28 lg:py-32"
      aria-labelledby="process-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-14 md:mb-16 space-y-6 max-w-3xl">
          <div className="space-y-6">
            <Eyebrow>Cara Kerja</Eyebrow>
            <h2
              id="process-title"
              className="text-4xl lg:text-6xl font-bold leading-[1.05] tracking-tightest"
            >
              Prosedur pemesanan
              <br />
              <span className="text-fg-secondary font-light italic">
                yang sederhana.
              </span>
            </h2>
          </div>
          <div>
            <p className="text-base lg:text-lg text-fg-secondary leading-relaxed max-w-2xl">
              Untuk memesan genset, Anda dapat menghubungi kami melalui telepon,
              email, atau langsung di kantor. Kami akan memberikan estimasi
              biaya dan rincian syarat pembayaran.
            </p>
          </div>
        </div>

        <ol className="grid gap-px bg-line/30 rounded-3xl overflow-hidden sm:grid-cols-2 lg:grid-cols-5 border border-line">
          {howItWorks.map((step, i) => (
            <li
              key={step.step}
              className="group bg-bg-card p-6 md:p-8 lg:p-7 flex flex-col gap-4 hover:bg-bg-elevated transition-colors duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-5xl lg:text-6xl font-bold text-amber/30 group-hover:text-amber tracking-tight num-mono">
                  {step.step}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                  {i === howItWorks.length - 1 ? "Selesai" : "Tahap"}
                </span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold tracking-tight leading-tight mt-4">
                {step.title}
              </h3>
              <p className="text-sm text-fg-secondary leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
