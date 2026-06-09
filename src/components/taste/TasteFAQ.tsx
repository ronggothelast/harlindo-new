"use client";

import { useState } from "react";
import { faq } from "@/data/business";

export function TasteFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 border-t border-[var(--whisper-border-strong)]"
      aria-labelledby="taste-faq-title"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Asymmetric: title left-sticky, items right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--taste-amber)] taste-pulse-dot"
                aria-hidden
              />
              <span className="taste-eyebrow">FAQ</span>
            </div>
            <h2
              id="taste-faq-title"
              className="taste-display text-[clamp(2rem,4.5vw,3.5rem)]"
            >
              Pertanyaan
              <br />
{" "}
              <span className="text-[var(--steel-secondary)] font-light italic">
                yang sering ditanyakan.
              </span>
            </h2>
            <p className="taste-body text-[15px] pt-2">
              Selamat datang di bagian FAQ kami, di mana kami menjawab
              pertanyaan dan kekhawatiran paling umum seputar layanan rental
              dan perawatan genset kami.
            </p>
          </div>

          <div className="lg:col-span-7">
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="border-t border-[var(--whisper-border-strong)] last:border-b"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                    aria-expanded={isOpen}
                    aria-controls={`taste-faq-${i}`}
                  >
                    <div className="flex items-start gap-5 flex-1">
                      <span className="taste-mono text-[12px] tracking-[0.18em] text-[var(--muted-slate)] pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-[16px] lg:text-[18px] font-medium text-[var(--charcoal-ink)] leading-snug pr-4">
                        {item.question}
                      </h3>
                    </div>
                    <span
                      className={`flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[var(--charcoal-ink)] text-white rotate-45"
                          : "border border-[var(--whisper-border-strong)] text-[var(--charcoal-ink)]"
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`taste-faq-${i}`}
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-7 pl-12 pr-6 text-[15px] leading-[1.7] text-[var(--steel-secondary)]">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
