import type { Metadata } from "next";
import { TasteShell } from "@/components/taste/TasteShell";
import { TastePageHero } from "@/components/taste/TastePageHero";
import { TastePricing } from "@/components/taste/TastePricing";
import { TasteCTA } from "@/components/taste/TasteCTA";

export const metadata: Metadata = {
  title: "Daftar Harga",
  description:
    "Daftar harga rental genset 20kVA – 2000kVA. Bebas repot urusan transportasi, kabel power 50 meter, layanan 24 jam.",
};

export default function TasteHargaPage() {
  return (
    <TasteShell>
      <TastePageHero
        eyebrow="Daftar Harga"
        title={
          <>
            Pilih kapasitas
            <br />
{" "}
            <span className="text-[var(--taste-amber)] italic font-light">
              sesuai kebutuhan.
            </span>
          </>
        }
        description="15 paket kapasitas dari 20kVA hingga 500kVA, plus Kapasitas Khusus 750–2000kVA atas permintaan."
      />
      <TastePricing />
      <TasteCTA />
    </TasteShell>
  );
}
