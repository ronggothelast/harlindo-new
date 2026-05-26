import { contact, social, navigation, company } from "@/data/business";

export function TasteFooter() {
  return (
    <footer
      className="border-t border-[var(--whisper-border-strong)] bg-[var(--canvas-white)]"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16 lg:py-20">
        {/* Top — asymmetric 2-col split */}
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-6">
            <div className="taste-mono text-[13px] tracking-[0.18em] uppercase font-semibold text-[var(--charcoal-ink)]">
              harlindo<span className="text-[var(--taste-amber)]">.jaya</span>
            </div>
            <p className="text-[15px] text-[var(--steel-secondary)] leading-[1.65] max-w-md">
              {company.description}
            </p>
            <div className="space-y-2 pt-2 text-[14px]">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="block text-[var(--charcoal-ink)] hover:text-[var(--taste-amber)] transition-colors"
              >
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="block text-[var(--charcoal-ink)] hover:text-[var(--taste-amber)] transition-colors"
              >
                {contact.email}
              </a>
              <a
                href={contact.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[var(--steel-secondary)] hover:text-[var(--charcoal-ink)] transition-colors max-w-md leading-relaxed"
              >
                {contact.address.full}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="taste-eyebrow">Navigasi</h3>
            <ul className="space-y-2 text-[14px]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/taste${item.href === "/" ? "/" : item.href + "/"}`}
                    className="text-[var(--charcoal-ink)] hover:text-[var(--taste-amber)] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="taste-eyebrow">Operasional</h3>
            <div className="space-y-2 text-[14px] text-[var(--charcoal-ink)]">
              <div>{contact.hoursEmergency}</div>
              <div className="text-[var(--steel-secondary)]">
                {contact.hours}
              </div>
              <div className="taste-mono text-[12px] text-[var(--steel-secondary)] pt-2">
                {contact.serviceArea.join(" · ")}
              </div>
            </div>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[14px] text-[var(--charcoal-ink)] hover:text-[var(--taste-amber)] transition-colors mt-2"
            >
              @HarlindoJaya
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--whisper-border)] flex flex-col sm:flex-row justify-between gap-4 text-[12px] text-[var(--muted-slate)]">
          <span>
            © {new Date().getFullYear()} {company.legal} {company.name}. All
            Rights Reserved.
          </span>
          <span className="taste-mono uppercase tracking-[0.18em]">
            Siap menjadi mitra terbaik anda!
          </span>
        </div>
      </div>
    </footer>
  );
}
