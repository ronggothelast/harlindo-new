import { howItWorks } from "@/data/business";

export function TasteProcess() {
  return (
    <section
      id="proses"
      className="relative py-24 lg:py-32 border-t border-[var(--whisper-border-strong)]"
      aria-labelledby="taste-process-title"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--taste-amber)] taste-pulse-dot"
                aria-hidden
              />
              <span className="taste-eyebrow">Cara Kerja</span>
            </div>
            <h2
              id="taste-process-title"
              className="taste-display text-[clamp(2rem,4.5vw,3.75rem)]"
            >
              Prosedur pemesanan
              <br />
              <span className="text-[var(--steel-secondary)] font-light italic">
                yang sederhana.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="taste-body text-[16px]">
              Untuk memesan genset, Anda dapat menghubungi kami melalui telepon,
              email, atau langsung di kantor. Kami akan memberikan estimasi
              biaya dan rincian syarat pembayaran.
            </p>
          </div>
        </div>

        {/* Asymmetric timeline — alternating left/right with vertical thread */}
        <ol className="relative max-w-3xl mx-auto">
          {/* Vertical thread */}
          <div
            aria-hidden
            className="absolute left-6 lg:left-1/2 top-2 bottom-2 w-px bg-[var(--whisper-border-strong)] -translate-x-px"
          />

          {howItWorks.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <li
                key={step.step}
                className="relative pb-12 last:pb-0 grid lg:grid-cols-2 gap-8 items-start"
              >
                {/* Step marker */}
                <span
                  aria-hidden
                  className="absolute left-6 lg:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-[var(--canvas-white)] border-2 border-[var(--taste-amber)] z-10"
                />

                {/* Content — alternate sides on desktop */}
                <div
                  className={`pl-14 lg:pl-0 ${
                    isLeft
                      ? "lg:col-start-1 lg:pr-12 lg:text-right"
                      : "lg:col-start-2 lg:pl-12"
                  }`}
                >
                  <div
                    className={`taste-mono text-[12px] uppercase tracking-[0.2em] text-[var(--taste-amber)] mb-2 flex items-center gap-2 ${
                      isLeft ? "lg:justify-end" : ""
                    }`}
                  >
                    Tahap {step.step}
                  </div>
                  <h3 className="taste-display text-[22px] lg:text-[28px] mb-2">
                    {step.title}
                  </h3>
                  <p
                    className={`taste-body text-[15px] ${
                      isLeft ? "lg:ml-auto" : ""
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
