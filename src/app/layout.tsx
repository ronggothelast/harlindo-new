import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://harlindojaya.com"),
  title: {
    default: "Instalasi, Jual Beli, dan Service Genset & Industri | HarlindoJaya",
    template: "%s | HarlindoJaya",
  },
  description:
    "HarlindoJaya — Instalasi, Jual Beli, dan Service Genset, Power House, Overhaul, Paralelisasi, Sistem Peringatan Otomatis & Perangkat Pemutus, serta Instalasi Industri. Rental genset 20kVA–2000kVA, layanan 24 jam Jabodetabek.",
  keywords: [
    "rental genset",
    "jual genset",
    "service genset",
    "overhaul genset",
    "power house",
    "paralelisasi genset",
    "genset jabodetabek",
    "harlindojaya",
    "generator set",
    "instalasi industri",
  ],
  authors: [{ name: "HarlindoJaya" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://harlindojaya.com",
    siteName: "HarlindoJaya",
    title: "HarlindoJaya — Siap menjadi mitra terbaik anda!",
    description:
      "Instalasi, Jual Beli, dan Service Genset, Power House, Overhaul, Paralelisasi, serta Instalasi Industri. Layanan 24 jam Jabodetabek.",
    images: [
      {
        url: "/images/fav-logo1.png",
        width: 800,
        height: 600,
        alt: "HarlindoJaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HarlindoJaya — Siap menjadi mitra terbaik anda!",
    description:
      "Rental & Service Genset 20kVA–2000kVA. Layanan 24 jam Jabodetabek.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/fav-logo1.png",
    apple: "/images/fav-logo1.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PW59T7QP');`,
          }}
        />
      </head>
      <body className="bg-bg-primary text-fg-primary antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PW59T7QP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-amber focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
