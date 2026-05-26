import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Pricing } from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Daftar Harga",
  description:
    "Daftar harga rental genset 20kVA - 2000kVA. All-in BBM 12 jam. Mulai dari Rp 2,25jt per hari. Transparan, tanpa biaya tersembunyi.",
};

export default function HargaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Daftar Harga 2026"
        title={
          <>
            Transparan.
            <br />
            <span className="text-amber italic font-light">All-in BBM.</span>
          </>
        }
        description="15 paket kapasitas dari 20kVA hingga 500kVA, plus custom capacity 750-2000kVA on call. Semua harga sudah termasuk BBM untuk 12 jam operasional."
      />
      <Pricing />
    </PageShell>
  );
}
