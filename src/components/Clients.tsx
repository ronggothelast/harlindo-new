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
            <Eyebrow>Klien Kami</Eyebrow>
            <h2
              id="clients-title"
              className="text-4xl lg:text-6xl font-bold leading-[1.05] tracking-tightest"
            >
              Dipercaya oleh
              <br />
              <span className="text-amber italic font-light">
                korporasi terkemuka.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-12">
            <p className="text-base lg:text-lg text-fg-secondary leading-relaxed">
              Beragam sektor strategis, mulai dari konstruksi, farmasi, energi,
              hingga manufaktur, telah mempercayakan kebutuhan power mereka
              kepada HarlindoJaya.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-line/30 rounded-3xl overflow-hidden border border-line">
          {clients.map((c, i) => (
            <div
              key={c.name}
              className="bg-bg-card p-8 lg:p-10 hover:bg-bg-elevated transition-colors duration-500 group min-h-[180px] flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-8">
                <Buildings
                  weight="light"
                  size={32}
                  className="text-fg-muted group-hover:text-amber transition-colors duration-500"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-muted">
                  {String(i + 1).padStart(2, "0")} / 0{clients.length}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-base lg:text-lg font-semibold tracking-tight leading-tight">
                  {c.name}
                </h3>
                <p className="text-xs text-fg-secondary uppercase tracking-wider">
                  {c.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
