import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Pricing } from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Daftar Harga",
  description:
    "Daftar harga rental genset 20 kVA hingga 2000 kVA. Sudah termasuk bahan bakar untuk 12 jam operasional, mulai dari Rp 2.250.000 per hari. Transparan tanpa biaya tersembunyi.",
};

export default function HargaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Daftar Harga 2026"
        title={
          <>
            Harga transparan.
            <br />
            <span className="text-amber italic font-light">Termasuk BBM 12 jam.</span>
          </>
        }
        description="Lima belas paket kapasitas dari 20 kVA hingga 500 kVA, serta opsi kapasitas khusus 750–2000 kVA berdasarkan permintaan. Seluruh harga sudah mencakup bahan bakar untuk 12 jam operasional."
      />
      <Pricing />
    </PageShell>
  );
}
