import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { Pricing } from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Daftar Harga",
  description:
    "Daftar harga rental genset 20kVA – 2000kVA. Bebas repot urusan transportasi, kabel power 50 meter, layanan 24 jam. Mulai Rp 2,25jt per hari.",
};

export default function HargaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Daftar Harga"
        title={
          <>
            Pilih kapasitas
            <br />
{" "}
            <span className="text-amber italic font-light">sesuai kebutuhan.</span>
          </>
        }
        description="15 paket kapasitas dari 20kVA hingga 500kVA, plus Kapasitas Khusus 750–2000kVA atas permintaan. Bebas repot urusan transportasi, kabel power tersedia, layanan 24 jam serta aftersales terbaik."
      />
      <Pricing />
    </PageShell>
  );
}
