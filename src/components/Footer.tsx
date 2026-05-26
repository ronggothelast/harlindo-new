import { contact, social, navigation, company } from "@/data/business";
import { InstagramLogo, MapPin, Phone, Envelope } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-primary" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-base tracking-[0.2em] uppercase font-semibold">
              HARLINDO<span className="text-amber">.JAYA</span>
            </div>
            <p className="text-sm text-fg-secondary leading-relaxed max-w-md">
              {company.description}
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="flex items-center gap-3 text-fg-secondary hover:text-amber transition-colors group"
              >
                <Phone weight="light" size={16} />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-fg-secondary hover:text-amber transition-colors break-all"
              >
                <Envelope weight="light" size={16} />
                {contact.email}
              </a>
              <a
                href={contact.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-fg-secondary hover:text-amber transition-colors leading-snug"
              >
                <MapPin weight="light" size={16} className="mt-0.5 flex-shrink-0" />
                {contact.address.full}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-fg-secondary hover:text-fg-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operasional */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
              Operasional
            </h3>
            <div className="space-y-3 text-sm text-fg-secondary leading-relaxed">
              <div className="flex justify-between border-b border-line/50 pb-2">
                <span>Jam Layanan</span>
                <span className="text-amber font-mono">{contact.hours}</span>
              </div>
              <div className="flex justify-between border-b border-line/50 pb-2">
                <span>Service Area</span>
                <span className="font-mono text-xs">
                  {contact.serviceArea.join(", ")}
                </span>
              </div>
              <div className="flex justify-between border-b border-line/50 pb-2">
                <span>Sertifikasi</span>
                <span className="font-mono text-xs">{company.certification}</span>
              </div>
            </div>

            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-fg-secondary hover:text-amber transition-colors mt-4"
            >
              <InstagramLogo weight="light" size={18} />
              @HarlindoJaya
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row justify-between gap-4 text-xs text-fg-muted">
          <span>
            © {new Date().getFullYear()} {company.legal} {company.name}. All rights
            reserved.
          </span>
          <span className="font-mono uppercase tracking-[0.2em]">
            {company.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
