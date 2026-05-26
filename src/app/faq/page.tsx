import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang sering diajukan tentang rental, service, dan operasional genset HarlindoJaya. Jawaban transparan untuk semua kebutuhan Anda.",
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
              yang sering diajukan.
            </span>
          </>
        }
        description="Tidak menemukan jawaban? Tim kami siap respon 24/7 via WhatsApp untuk konsultasi langsung."
      />
      <FAQ />
    </PageShell>
  );
}
