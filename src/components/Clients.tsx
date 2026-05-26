import { clients } from "@/data/business";
import { Eyebrow } from "./Eyebrow";
import { Buildings } from "@phosphor-icons/react/dist/ssr";

export function Clients() {
  return (
    <section
      id="klien"
      className="relative py-32 lg:py-40"
      aria-labelledby="clients-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7 space-y-6">
            <Eyebrow>Lihat Kami di Bekerja</Eyebrow>
            <h2
              id="clients-title"
              className="text-4xl lg:text-6xl font-bold leading-[1.05] tracking-tightest"
            >
              Beberapa pekerjaan
              <br />
              <span className="text-amber italic font-light">
                yang telah kami selesaikan.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-12">
            <p className="text-base lg:text-lg text-fg-secondary leading-relaxed">
              Portofolio proyek kami mencerminkan pengalaman dan presisi yang
              kami terapkan di setiap pekerjaan, mulai dari oil & gas, farmasi,
              manufaktur, hingga acara keagamaan dan konstruksi.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line/30 rounded-3xl overflow-hidden border border-line">
          {clients.map((c, i) => (
            <div
              key={c.name}
              className="bg-bg-card p-8 lg:p-10 hover:bg-bg-elevated transition-colors duration-500 group flex flex-col justify-between gap-6"
            >
              <div className="flex items-start justify-between">
                <Buildings
                  weight="light"
                  size={32}
                  className="text-fg-muted group-hover:text-amber transition-colors duration-500"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                  {String(i + 1).padStart(2, "0")} / 0{clients.length}
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-fg-secondary leading-relaxed">
                  {c.project}
                </p>
                <div className="pt-4 border-t border-line/50 space-y-1">
                  <h3 className="text-base lg:text-lg font-semibold tracking-tight leading-tight">
                    {c.name}
                  </h3>
                  <p className="text-xs text-fg-muted uppercase tracking-wider">
                    {c.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
