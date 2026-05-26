import Link from "next/link";

export function TasteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[rgba(249,250,251,0.78)] border-b border-[var(--whisper-border)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-16 flex items-center justify-between gap-6">
        <Link
          href="/taste/"
          className="taste-mono text-[13px] tracking-[0.18em] uppercase font-semibold text-[var(--charcoal-ink)]"
          aria-label="HarlindoJaya home"
        >
          harlindo<span className="text-[var(--taste-amber)]">.jaya</span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-9"
          aria-label="Primary"
        >
          {[
            { name: "Layanan", href: "/taste/layanan/" },
            { name: "Harga", href: "/taste/harga/" },
            { name: "Proyek", href: "/taste/proyek/" },
            { name: "Tentang", href: "/taste/tentang/" },
            { name: "FAQ", href: "/taste/faq/" },
            { name: "Kontak", href: "/taste/kontak/" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] text-[var(--steel-secondary)] hover:text-[var(--charcoal-ink)] transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link href="/taste/kontak/" className="taste-btn-primary">
          Hubungi Kami
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
