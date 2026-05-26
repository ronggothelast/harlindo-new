"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { faq } from "@/data/business";
import { Eyebrow } from "./Eyebrow";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-32 lg:py-40 bg-bg-surface/30"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="text-center mb-20 space-y-6">
          <Eyebrow className="justify-center inline-flex">FAQ</Eyebrow>
          <h2
            id="faq-title"
            className="text-4xl lg:text-6xl font-bold leading-[1.05] tracking-tightest"
          >
            Pertanyaan
            <br />
            <span className="text-fg-secondary font-light italic">
              yang sering diajukan.
            </span>
          </h2>
        </div>

        <div className="space-y-2">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-line bg-bg-card overflow-hidden transition-all duration-500 ease-haptic hover:border-line-strong"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 p-6 lg:p-8 text-left hover:bg-bg-elevated/40 transition-colors duration-300"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                >
                  <div className="flex items-start gap-6 flex-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted pt-1.5 num-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base lg:text-lg font-medium leading-snug pr-4">
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`flex-shrink-0 h-8 w-8 rounded-full border border-line flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-amber border-amber text-bg-primary"
                        : "text-fg-secondary"
                    }`}
                  >
                    {isOpen ? (
                      <Minus weight="bold" size={14} />
                    ) : (
                      <Plus weight="bold" size={14} />
                    )}
                  </div>
                </button>

                <div
                  id={`faq-${i}`}
                  className={`grid transition-all duration-500 ease-haptic ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0 pl-[5.5rem] text-fg-secondary leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
