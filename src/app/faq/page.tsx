import type { Metadata } from "next";
import { faq } from "@/data/business";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang sering diajukan tentang rental, layanan teknis, dan operasional generator HarlindoJaya. Jawaban transparan untuk berbagai kebutuhan Anda.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
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
{" "}
            <span className="text-amber italic font-light">
              yang sering ditanyakan.
            </span>
          </>
        }
        description="Selamat datang di bagian FAQ kami, di mana kami menjawab pertanyaan dan kekhawatiran paling umum seputar layanan rental dan perawatan genset kami."
      />
      <FAQ />
          <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </PageShell>
  );
}
