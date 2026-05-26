// HarlindoJaya - Complete Business Data
// Source: Direct from owner (Pak Harli) + extracted website data

export const company = {
  name: "HarlindoJaya",
  legal: "PT",
  tagline: "Pilihan terbaik untuk harga terbaik",
  description:
    "Heavy Duty Machine Rental — Genset 20kVA hingga 2000kVA. Barang milik sendiri, unit lengkap, troubleshooting 24 jam.",
  certification: "SIO (Surat Izin Operasi)",
  experience: "Belasan tahun",
};

export const contact = {
  phone: "+62 81281104105",
  phoneRaw: "+628**9*****05", // for tel: link
  whatsapp: "62812****4105",
  whatsappBase: "https://wa.me/62812****4105",
  whatsappMessage: "Halo, saya tertarik dengan layanan rental genset HarlindoJaya. Mohon informasinya.",
  email: "contact@harlindojaya.com",
  address: {
    street: "Jl Raya Klapanunggal",
    area: "Cikahuripan, Klapanunggal",
    city: "Kabupaten Bogor",
    province: "Jawa Barat",
    full: "Jl Raya Klapanunggal, Cikahuripan, Klapanunggal, Kabupaten Bogor, Jawa Barat",
  },
  maps: "https://maps.app.goo.gl/fyMaQQvGydHLJ9zD6",
  hours: "24/7 Operasional",
  serviceArea: ["Jabodetabek", "Cikarang", "Karawang"],
};

export const social = {
  instagram: "https://www.instagram.com/HarlindoJaya/",
};

export const services = [
  {
    id: "rental-genset",
    name: "Rental Genset",
    short: "Penyewaan unit 20kVA - 2000kVA",
    description:
      "Penyewaan genset berbagai kapasitas dengan jaminan unit kondisi prima. Barang milik sendiri, siap survei tangan pertama.",
    features: [
      "All in BBM 12 jam",
      "Unit milik sendiri",
      "Siap survei tangan pertama",
      "Operator berpengalaman",
    ],
    icon: "Lightning",
  },
  {
    id: "perawatan",
    name: "Perawatan & Perbaikan Mekanis",
    short: "Maintenance dan repair profesional",
    description:
      "Layanan maintenance dan repair mekanis genset dengan teknisi berpengalaman. Preventive dan corrective maintenance.",
    features: [
      "Preventive maintenance",
      "Corrective maintenance",
      "Spare parts original",
      "Teknisi bersertifikat",
    ],
    icon: "Gear",
  },
  {
    id: "overhaul",
    name: "Overhaul",
    short: "Overhaul mesin menyeluruh",
    description:
      "Overhaul menyeluruh mesin genset untuk mengembalikan performa optimal seperti baru.",
    features: [
      "Engine overhaul",
      "Generator overhaul",
      "Control system upgrade",
      "Performance testing",
    ],
    icon: "Wrench",
  },
  {
    id: "instalasi",
    name: "Instalasi & Commissioning",
    short: "Setup profesional di lokasi",
    description:
      "Instalasi profesional dan commissioning sistem genset di lokasi proyek. Lengkap dengan training operator.",
    features: [
      "Site survey",
      "Installation planning",
      "System commissioning",
      "Training operator",
    ],
    icon: "Toolbox",
  },
];

export const pricing = [
  { capacity: "20", unit: "kVA", name: "Daya Esensial", price: "2,25", priceFull: "Rp. 2.250.000", popular: false },
  { capacity: "30", unit: "kVA", name: "Daya Optimal", price: "2,5", priceFull: "Rp. 2.500.000", popular: false },
  { capacity: "40", unit: "kVA", name: "Daya Standar", price: "2,75", priceFull: "Rp. 2.750.000", popular: false },
  { capacity: "50", unit: "kVA", name: "Daya Kuat", price: "3,25", priceFull: "Rp. 3.250.000", popular: true },
  { capacity: "60", unit: "kVA", name: "Daya Menengah", price: "3,5", priceFull: "Rp. 3.500.000", popular: false },
  { capacity: "80", unit: "kVA", name: "Daya Andal", price: "4,5", priceFull: "Rp. 4.500.000", popular: false },
  { capacity: "100", unit: "kVA", name: "Daya Tinggi", price: "5", priceFull: "Rp. 5.000.000", popular: true },
  { capacity: "125", unit: "kVA", name: "Daya Ekstra", price: "6", priceFull: "Rp. 6.000.000", popular: false },
  { capacity: "150", unit: "kVA", name: "Daya Superior", price: "7,5", priceFull: "Rp. 7.500.000", popular: false },
  { capacity: "200", unit: "kVA", name: "Daya Profesional", price: "10", priceFull: "Rp. 10.000.000", popular: true },
  { capacity: "250", unit: "kVA", name: "Daya Industri", price: "12,5", priceFull: "Rp. 12.500.000", popular: false },
  { capacity: "300", unit: "kVA", name: "Daya Korporat", price: "17,5", priceFull: "Rp. 17.500.000", popular: false },
  { capacity: "350", unit: "kVA", name: "Daya Premium", price: "25", priceFull: "Rp. 25.000.000", popular: false },
  { capacity: "400", unit: "kVA", name: "Daya Besar", price: "35", priceFull: "Rp. 35.000.000", popular: false },
  { capacity: "500", unit: "kVA", name: "Daya Maksimal", price: "45", priceFull: "Rp. 45.000.000", popular: false },
];

export const specialCapacity = {
  range: "750 - 2000 kVA",
  name: "Kapasitas Besar",
  price: "On Call",
  description:
    "Untuk kebutuhan industri skala besar, hubungi tim kami untuk penawaran khusus.",
};

export const pricingNotes = {
  inclusion: "All in BBM 12 jam",
  minRental: "1 hari (12 jam)",
  delivery: "Delivery fee dibahas saat konsultasi lokasi",
  payment: "DP 50%",
};

export const howItWorks = [
  {
    step: "01",
    title: "Hubungi via WhatsApp",
    description: "Chat tim kami kapan saja, 24/7 ready respon cepat.",
  },
  {
    step: "02",
    title: "Konsultasi Kebutuhan",
    description: "Diskusi kapasitas kVA, durasi, dan spesifikasi yang dibutuhkan.",
  },
  {
    step: "03",
    title: "Konsultasi Lokasi",
    description: "Tim survei lokasi, planning instalasi dan delivery fee.",
  },
  {
    step: "04",
    title: "DP 50%",
    description: "Konfirmasi booking dengan pembayaran down payment 50%.",
  },
  {
    step: "05",
    title: "Unit Meluncur",
    description: "Genset dikirim ke lokasi, instalasi, siap beroperasi.",
  },
];

export const whyChooseUs = [
  {
    title: "Unit Milik Sendiri",
    description: "Bukan reseller. Semua unit milik HarlindoJaya, siap di-survei langsung tangan pertama.",
    icon: "ShieldCheck",
  },
  {
    title: "Unit Lengkap",
    description: "Range lengkap dari 20kVA hingga 2000kVA, semua kapasitas tersedia.",
    icon: "Stack",
  },
  {
    title: "Troubleshooting 24 Jam",
    description: "Layanan emergency 24/7 — tim siaga atasi gangguan kapan saja.",
    icon: "Clock",
  },
];

export const faq = [
  {
    question: "Apa saja tipe genset yang tersedia untuk disewa?",
    answer:
      "HarlindoJaya menyediakan berbagai jenis genset dengan kapasitas daya yang beragam, mulai dari 20kVA hingga 2000kVA, untuk memenuhi kebutuhan berbagai jenis acara atau proyek, baik indoor maupun outdoor.",
  },
  {
    question: "Berapa lama durasi sewa yang bisa dipilih?",
    answer:
      "Kami menawarkan fleksibilitas dalam durasi sewa genset, mulai dari harian (minimum 1 hari / 12 jam), mingguan, hingga bulanan. Kami juga dapat menyediakan layanan khusus untuk kontrak jangka panjang sesuai kebutuhan proyek Anda.",
  },
  {
    question: "Apakah HarlindoJaya menyediakan layanan instalasi dan pengoperasian genset di lokasi?",
    answer:
      "Ya, kami menyediakan layanan instalasi, pengoperasian, dan pemeliharaan genset langsung di lokasi Anda. Tim teknisi kami akan memastikan genset berfungsi dengan optimal selama masa sewa.",
  },
  {
    question: "Bagaimana prosedur pemesanan dan pembayaran rental genset?",
    answer:
      "Hubungi kami via WhatsApp untuk konsultasi kebutuhan dan lokasi. Setelah disepakati, konfirmasi booking dengan DP 50%. Pembayaran dapat dilakukan via transfer bank atau metode pembayaran lain yang tersedia.",
  },
  {
    question: "Apakah ada layanan darurat jika genset mengalami gangguan selama masa sewa?",
    answer:
      "Kami menyediakan layanan darurat 24/7 untuk memastikan genset yang disewa tetap beroperasi tanpa gangguan. Tim kami akan siap melakukan perbaikan atau penggantian unit jika diperlukan.",
  },
  {
    question: "Berapa biaya delivery genset ke lokasi?",
    answer:
      "Biaya delivery dibahas saat konsultasi lokasi karena bergantung pada jarak, akses, dan kapasitas unit. Tim kami akan memberikan estimasi yang transparan setelah survei lokasi.",
  },
];

export const clients = [
  { name: "PT. Prima Energi Bawean", location: "Bawean" },
  { name: "Gilgal Center", location: "PIK, Jakarta" },
  { name: "PT. HAN KONSTRUKSI", location: "Indonesia" },
  { name: "Halliburton", location: "Tangerang Selatan" },
  { name: "PT. Pfizer Indonesia", location: "Jakarta" },
  { name: "PT. YKK Indonesia", location: "Jakarta" },
];

export const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Harga", href: "/harga" },
  { name: "Proyek", href: "/proyek" },
  { name: "Tentang", href: "/tentang" },
  { name: "FAQ", href: "/faq" },
  { name: "Kontak", href: "/kontak" },
];

export const seo = {
  baseUrl: "https://harlindojaya.com",
  defaultTitle: "HarlindoJaya — Heavy Duty Machine Rental | Rental Genset 20-2000kVA",
  titleTemplate: "%s | HarlindoJaya",
  defaultDescription:
    "Rental genset profesional 20kVA - 2000kVA. Unit milik sendiri, harga terbaik, troubleshooting 24/7. Melayani Jabodetabek, Cikarang, Karawang.",
  keywords: [
    "rental genset",
    "sewa genset",
    "genset rental jakarta",
    "rental generator",
    "sewa generator set",
    "genset rental bogor",
    "rental genset 24 jam",
    "rental genset industri",
    "sewa genset cikarang",
    "sewa genset karawang",
    "rental genset jabodetabek",
    "harlindojaya",
    "harga sewa genset",
    "rental genset murah",
  ],
  gtmId: "GTM-PW59T7QP",
};

// Helper untuk WhatsApp link dengan custom message
export function whatsappLink(message?: string): string {
  const text = message || contact.whatsappMessage;
  return `${contact.whatsappBase}?text=${encodeURIComponent(text)}`;
}
