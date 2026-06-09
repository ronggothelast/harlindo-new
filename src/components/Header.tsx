"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, List, X } from "@phosphor-icons/react";
import { contact, navigation, whatsappLink } from "@/data/business";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-haptic",
        scrolled
          ? "bg-bg-card/85 backdrop-blur-3xl border-b border-line shadow-sm"
          : "bg-bg-card/70 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-5 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="group relative flex items-center gap-2.5 hover:opacity-90 transition-opacity duration-300"
          aria-label="HarlindoJaya home"
        >
          {/* Accent mark */}
          <span
            aria-hidden
            className="block w-[3px] h-6 rounded-full bg-amber transition-all duration-300 group-hover:h-7"
          />
          {/* Wordmark */}
          <span className="flex items-baseline gap-0 text-[15px] font-semibold tracking-[0.14em] uppercase text-fg-primary">
            <span>HARLINDO</span>
            <span className="text-amber text-lg leading-none">.</span>
            <span className="font-light">JAYA</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-fg-secondary hover:text-fg-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber text-white px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-amber-hover transition-all duration-300 ease-haptic active:scale-[0.98]"
          >
            <Phone weight="bold" size={14} />
            <span>Hubungi Kami</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 -mr-2 text-fg-primary"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} weight="light" /> : <List size={20} weight="light" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="lg:hidden border-t border-line bg-bg-card/95 backdrop-blur-3xl shadow-sm"
          aria-label="Mobile"
        >
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-fg-secondary hover:text-fg-primary py-2 border-b border-line/50"
              >
                {item.name}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber text-white px-6 py-3 text-sm font-bold uppercase tracking-wider"
            >
              <Phone weight="bold" size={16} />
              Hubungi {contact.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
