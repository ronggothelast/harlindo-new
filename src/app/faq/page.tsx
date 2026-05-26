import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang sering diajukan tentang rental, layanan teknis, dan operasional generator HarlindoJaya. Jawaban transparan untuk berbagai kebutuhan Anda.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Pertanyaan
            <br />
            <span className="text-amber italic font-light">
              yang sering ditanyakan.
            </span>
          </>
        }
        description="Selamat datang di bagian FAQ kami, di mana kami menjawab pertanyaan dan kekhawatiran paling umum seputar layanan rental dan perawatan genset kami."
      />
      <FAQ />
    </PageShell>
  );
}
