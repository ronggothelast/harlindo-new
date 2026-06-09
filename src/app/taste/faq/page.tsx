import type { Metadata } from "next";
import { TasteShell } from "@/components/taste/TasteShell";
import { TastePageHero } from "@/components/taste/TastePageHero";
import { TasteFAQ } from "@/components/taste/TasteFAQ";
import { TasteCTA } from "@/components/taste/TasteCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang sering ditanyakan seputar layanan rental dan perawatan genset HarlindoJaya.",
};

export default function TasteFaqPage() {
  return (
    <TasteShell>
      <TastePageHero
        eyebrow="FAQ"
        title={
          <>
            Pertanyaan
            <br />
{" "}
            <span className="text-[var(--taste-amber)] italic font-light">
              yang sering ditanyakan.
            </span>
          </>
        }
        description="Selamat datang di bagian FAQ kami, di mana kami menjawab pertanyaan paling umum seputar layanan rental dan perawatan genset."
      />
      <TasteFAQ />
      <TasteCTA />
    </TasteShell>
  );
}
