// HarlindoJaya - Business Data
// Copy source: harlindojaya.com (situs asli milik klien)

export const company = {
  name: "HarlindoJaya",
  legal: "PT",
  tagline: "Siap menjadi mitra terbaik anda!",
  description:
    "Instalasi, Jual Beli, dan Service Genset, Power House, Overhaul, Paralelisasi, Sistem Peringatan Otomatis & Perangkat Pemutus, serta Instalasi Industri.",
  certification: "Terakreditasi",
  experience: "Lebih dari 10 Tahun",
};

export const contact = {
  phone: "+62 81281104105",
  phoneRaw: "+6281281104105",
  whatsapp: "6281281104105",
  whatsappBase: "https://wa.me/6281281104105",
  whatsappMessage:
    "Halo saya ingin menyewa genset. Bisakah saya mendapatkan informasi lebih lanjut?",
  email: "contact@harlindojaya.com",
  address: {
    street: "Jl Raya Klapanunggal",
    area: "Cikahuripan, Klapanunggal",
    city: "Kabupaten Bogor",
    province: "Jawa Barat",
    full: "Jl Raya Klapanunggal, Cikahuripan, Klapanunggal Kabupaten Bogor, Jawa Barat",
  },
  maps: "https://maps.app.goo.gl/fyMaQQvGydHLJ9zD6",
  hours: "Senin – Jum'at 8:00 AM – 5:00 PM",
  hoursEmergency: "Layanan 24 Jam",
  serviceArea: ["Jabodetabek", "Cikarang", "Karawang"],
};

export const social = {
  instagram: "https://www.instagram.com/HarlindoJaya/",
};

export const services = [
  {
    id: "rental-genset",
    name: "Rental",
    short: "Rental Genset 20kVA – 2000kVA",
    description:
      "Layanan Rental genset kami menyediakan pilihan kapasitas 20kVA sampai 2000kVA siap pakai.",
    features: [
      "Bebas Repot Urusan Transportasi",
      "12 Jam Operasional",
      "Kabel Power 50 Meter",
      "Layanan 24 Jam serta aftersales terbaik",
    ],
    icon: "Lightning",
  },
  {
    id: "overhaul",
    name: "Overhaul",
    short: "Mengembalikan performa puncak genset",
    description:
      "Kami menawarkan layanan Overhaul untuk mengembalikan genset Anda ke performa puncak.",
    features: [
      "Engine overhaul",
      "Generator overhaul",
      "Sistem kontrol",
      "Performance testing",
    ],
    icon: "Wrench",
  },
  {
    id: "perawatan",
    name: "Perawatan dan Perbaikan Mekanis",
    short: "Perawatan berkala genset",
    description:
      "Perbaikan Mekanis kami memastikan bahwa genset Anda tetap berfungsi optimal dengan perawatan berkala.",
    features: [
      "Preventive maintenance",
      "Corrective maintenance",
      "Spare parts original",
      "Teknisi berpengalaman",
    ],
    icon: "Gear",
  },
  {
    id: "body-repair",
    name: "Perbaikan atau Body Repair",
    short: "Box Silent, mesin, hingga trailer",
    description:
      "Memperbaiki Box Silent, memperbarui mesin, serta menyediakan layanan pembuatan trailer untuk genset.",
    features: [
      "Box Silent repair",
      "Pembaruan mesin",
      "Pembuatan trailer genset",
      "Body works profesional",
    ],
    icon: "Toolbox",
  },
];

// Daftar paket harga 20–500 kVA
// Sumber: harlindojaya.com (kapasitas, nama paket, harga)
export const pricing = [
  { capacity: "20", unit: "kVA", name: "Daya Esensial", price: "1,850", priceFull: "Rp. 1.850.000", popular: false, hours: "12 Jam Operasional", cable: "Kabel Power 50 Meter" },
  { capacity: "30", unit: "kVA", name: "Daya Optimal", price: "1,9", priceFull: "Rp. 1.900.000", popular: false, hours: "12 Jam Operasional", cable: "Kabel Power 50 Meter" },
  { capacity: "40", unit: "kVA", name: "Daya Standar", price: "2", priceFull: "Rp. 2.000.000", popular: false, hours: "12 Jam Operasional", cable: "Kabel Power 50 Meter" },
  { capacity: "50", unit: "kVA", name: "Daya Kuat", price: "2,5", priceFull: "Rp. 2.500.000", popular: true, hours: "12 Jam Operasional", cable: "Kabel Power 50 Meter" },
  { capacity: "60", unit: "kVA", name: "Daya Menengah", price: "2,750", priceFull: "Rp. 2.750.000", popular: false, hours: "12 Jam Operasional", cable: "Kabel Power 50 Meter" },
  { capacity: "80", unit: "kVA", name: "Daya Andal", price: "4", priceFull: "Rp. 4.000.000", popular: false, hours: "12 Jam Operasional", cable: "Kabel Power 50 Meter" },
  { capacity: "100", unit: "kVA", name: "Daya Tinggi", price: "5", priceFull: "Rp. 5.000.000", popular: true, hours: "12 Jam Operasional", cable: "Kabel Power 50 Meter" },
  { capacity: "125", unit: "kVA", name: "Daya Ekstra", price: "6", priceFull: "Rp. 6.000.000", popular: false, hours: "12 Jam Operasional", cable: "Kabel Power 50 Meter" },
  { capacity: "150", unit: "kVA", name: "Daya Superior", price: "7", priceFull: "Rp. 7.000.000", popular: false, hours: "12 Jam Operasional", cable: "Kabel Power 50 Meter" },
  { capacity: "200", unit: "kVA", name: "Daya Profesional", price: "9", priceFull: "Rp. 9.000.000", popular: true, hours: "12 Jam Operasional", cable: "Kabel Power 50 Meter" },
  { capacity: "250", unit: "kVA", name: "Daya Industri", price: "12,5", priceFull: "Rp. 12.500.000", popular: false, hours: "10 Jam Operasional", cable: "Kabel Power 20 Meter" },
  { capacity: "300", unit: "kVA", name: "Daya Korporat", price: "17,5", priceFull: "Rp. 17.500.000", popular: false, hours: "10 Jam Operasional", cable: "Kabel Power 20 Meter" },
  { capacity: "350", unit: "kVA", name: "Daya Premium", price: "20", priceFull: "Rp. 20.000.000", popular: false, hours: "10 Jam Operasional", cable: "Kabel Power 20 Meter" },
  { capacity: "400", unit: "kVA", name: "Daya Besar", price: "35", priceFull: "Rp. 35.000.000", popular: false, hours: "10 Jam Operasional", cable: "Kabel Power 20 Meter" },
  { capacity: "500", unit: "kVA", name: "Daya Maksimal", price: "45", priceFull: "Rp. 45.000.000", popular: false, hours: "10 Jam Operasional", cable: "Kabel Power 20 Meter" },
];

export const specialCapacity = {
  range: "750 – 2000 kVA",
  name: "Kapasitas Besar",
  price: "Tersedia Atas Permintaan",
  description:
    "Untuk kebutuhan daya yang lebih besar, kami menyediakan genset dengan kapasitas 750kVA hingga 2000kVA. Hubungi tim kami untuk mendapatkan penawaran khusus dan konsultasi gratis sesuai kebutuhan proyek Anda.",
  features: [
    "Kapasitas 750kVA – 2000kVA",
    "Konsultasi Gratis & Penawaran Khusus",
    "Solusi Customized Sesuai Kebutuhan",
    "Dukungan Teknis 24 Jam",
  ],
};

export const pricingNotes = {
  inclusion: "Bebas Repot Urusan Transportasi",
  minRental: "Sewa harian, mingguan, hingga bulanan",
  delivery: "Layanan instalasi & pengoperasian di lokasi",
  payment: "Layanan darurat 24/7 selama masa sewa",
};

export const howItWorks = [
  {
    step: "01",
    title: "Hubungi Kami",
    description:
      "Hubungi tim kami via telepon, email, atau langsung di kantor untuk konsultasi awal.",
  },
  {
    step: "02",
    title: "Konsultasi Kebutuhan",
    description:
      "Diskusi kapasitas kVA, durasi sewa, dan spesifikasi yang dibutuhkan proyek Anda.",
  },
  {
    step: "03",
    title: "Estimasi & Penawaran",
    description:
      "Kami memberikan estimasi biaya dan rincian syarat pembayaran secara transparan.",
  },
  {
    step: "04",
    title: "Konfirmasi Pembayaran",
    description:
      "Pembayaran via transfer bank atau metode lain yang tersedia.",
  },
  {
    step: "05",
    title: "Instalasi & Operasi",
    description:
      "Tim teknisi memastikan genset beroperasi optimal selama masa sewa.",
  },
];

export const whyChooseUs = [
  {
    title: "Spesialis 60Hz & Low Voltage 220V 3 Phase",
    description:
      "Siap menangani kebutuhan genset 60Hz dan low voltage 220V 3 Phase untuk proyek industri maupun operasional khusus.",
    icon: "ShieldCheck",
  },
  {
    title: "Layanan 24 Jam serta Aftersales Terbaik",
    description:
      "Tim siaga 24/7 memastikan kebutuhan daya Anda selalu terjamin, lengkap dengan dukungan purna jual yang reliable.",
    icon: "Clock",
  },
  {
    title: "Terlengkap dan Terpecaya selama belasan tahun",
    description:
      "Berpengalaman lebih dari 10 tahun di bidang genset, melayani Rental, Syncronizing, Jual Beli, hingga Overhaul mesin atau Bodyworks.",
    icon: "Stack",
  },
];

export const faq = [
  {
    question: "Apa saja tipe genset yang tersedia untuk disewa?",
    answer:
      "HarlindoJaya menyediakan berbagai jenis genset dengan kapasitas daya yang beragam, mulai dari kebutuhan kecil hingga besar, untuk memenuhi kebutuhan berbagai jenis acara atau proyek, baik indoor maupun outdoor.",
  },
  {
    question: "Berapa lama durasi sewa yang bisa dipilih?",
    answer:
      "Kami menawarkan fleksibilitas dalam durasi sewa genset, mulai dari harian, mingguan, hingga bulanan. Kami juga dapat menyediakan layanan khusus untuk kontrak jangka panjang sesuai kebutuhan proyek Anda.",
  },
  {
    question: "Apakah HarlindoJaya menyediakan layanan instalasi dan pengoperasian genset di lokasi?",
    answer:
      "Ya, kami menyediakan layanan instalasi, pengoperasian, dan pemeliharaan genset langsung di lokasi Anda. Tim teknisi kami akan memastikan genset berfungsi dengan optimal selama masa sewa.",
  },
  {
    question: "Bagaimana prosedur pemesanan dan pembayaran rental genset?",
    answer:
      "Untuk memesan genset, Anda dapat menghubungi kami melalui telepon, email, atau langsung di kantor kami. Kami akan memberikan estimasi biaya dan rincian syarat pembayaran, yang dapat dilakukan melalui transfer bank atau metode pembayaran lain yang tersedia.",
  },
  {
    question: "Apakah ada layanan darurat jika genset mengalami gangguan selama masa sewa?",
    answer:
      "Kami menyediakan layanan darurat 24/7 untuk memastikan genset yang disewa tetap beroperasi tanpa gangguan. Tim kami akan siap melakukan perbaikan atau penggantian unit jika diperlukan, untuk menjaga kelancaran operasional Anda.",
  },
];

// Klien dengan deskripsi proyek dari site asli
export const clients = [
  {
    name: "Halliburton",
    location: "Tanggerang Selatan",
    project: "Digunakan untuk uji coba peralatan dalam aplikasi minyak dan gas dengan konfigurasi frekuensi 60Hz.",
    sector: "Energi (Oil & Gas)",
  },
  {
    name: "PT. Pfizer Indonesia",
    location: "Jakarta",
    project: "Layanan Genset Backup untuk Pemeliharaan Panel Instrumen Selama Shutdown Pabrik.",
    sector: "Farmasi",
  },
  {
    name: "PT. YKK Indonesia",
    location: "Jakarta",
    project: "Dukungan Genset Backup Selama Proses Pemasangan Genset Baru di PT YKK Indonesia.",
    sector: "Manufaktur",
  },
  {
    name: "PT. Prima Energi Bawean",
    location: "Bawean",
    project: "Layanan Tambahan Daya untuk Platform Minyak Lepas Pantai.",
    sector: "Energi (Offshore)",
  },
  {
    name: "Gilgal Center",
    location: "PIK, Jakarta",
    project: "Penyediaan Daya untuk Acara Keagamaan.",
    sector: "Event & Properti",
  },
  {
    name: "PT. HAN KONSTRUKSI",
    location: "Indonesia",
    project: "Penyediaan Sumber Daya Listrik Sementara untuk Kebutuhan Pembangunan Pabrik.",
    sector: "Konstruksi",
  },
];

export const stats = [
  { value: "5.0", label: "Terakreditasi" },
  { value: "99.9%", label: "Satisfied Clients" },
  { value: "10+", label: "Years of Experience" },
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
  defaultTitle: "Instalasi, Jual Beli, dan Service Genset & Industri | HarlindoJaya",
  titleTemplate: "%s | HarlindoJaya",
  defaultDescription:
    "HarlindoJaya — Instalasi, Jual Beli, dan Service Genset, Power House, Overhaul, Paralelisasi, Sistem Peringatan Otomatis & Perangkat Pemutus, serta Instalasi Industri. Rental genset 20kVA–2000kVA, layanan 24 jam Jabodetabek.",
  keywords: [
    "rental genset",
    "sewa genset",
    "rental genset jakarta",
    "rental generator",
    "sewa generator set",
    "rental genset bogor",
    "rental genset 24 jam",
    "rental genset industri",
    "sewa genset cikarang",
    "sewa genset karawang",
    "rental genset jabodetabek",
    "harlindojaya",
    "harga sewa genset",
    "service genset",
    "overhaul genset",
    "power house",
    "paralelisasi genset",
  ],
  gtmId: "GTM-PW59T7QP",
};

export function whatsappLink(message?: string): string {
  const text = message || contact.whatsappMessage;
  return `${contact.whatsappBase}?text=${encodeURIComponent(text)}`;
}
