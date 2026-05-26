import type { Metadata } from "next";
import { TasteShell } from "@/components/taste/TasteShell";
import { TasteHero } from "@/components/taste/TasteHero";
import { TasteServices } from "@/components/taste/TasteServices";
import { TastePricing } from "@/components/taste/TastePricing";
import { TasteProcess } from "@/components/taste/TasteProcess";
import { TasteClients } from "@/components/taste/TasteClients";
import { TasteFAQ } from "@/components/taste/TasteFAQ";
import { TasteCTA } from "@/components/taste/TasteCTA";

export const metadata: Metadata = {
  title: "Taste Edition — HarlindoJaya",
  description:
    "Versi alternatif redesign harlindojaya.com dengan stitch-design-taste — gallery-airy light theme, asymmetric layout, premium typography.",
};

export default function TasteHomePage() {
  return (
    <TasteShell>
      <TasteHero />
      <TasteServices />
      <TastePricing />
      <TasteProcess />
      <TasteClients />
      <TasteFAQ />
      <TasteCTA />
    </TasteShell>
  );
}
