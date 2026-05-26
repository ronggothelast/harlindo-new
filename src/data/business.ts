// HarlindoJaya - Complete Business Data
// Source: Direct from owner (Pak Harli) + extracted website data

export const company = {
  name: "HarlindoJaya",
  legal: "PT",
  tagline: "Solusi Power Profesional untuk Industri Indonesia",
  description:
    "Penyedia rental dan layanan teknis Heavy Duty Generator dengan kapasitas 20 kVA hingga 2000 kVA. Seluruh unit milik perusahaan, tersertifikasi, dan didukung tim teknisi siaga 24 jam.",
  certification: "SIO (Surat Izin Operasi)",
  experience: "Lebih dari satu dekade",
};

export const contact = {
  phone: "+62 81281104105",
  phoneRaw: "+628**9*****05", // for tel: link
  whatsapp: "62812****4105",
  whatsappBase: "https://wa.me/62812****4105",
  whatsappMessage:
    "Selamat siang, kami ingin meminta informasi mengenai layanan rental genset HarlindoJaya. Mohon penawaran dan konsultasi lebih lanjut.",
  email: "contact@harlindojaya.com",
  address: {
    street: "Jl Raya Klapanunggal",
    area: "Cikahuripan, Klapanunggal",
    city: "Kabupaten Bogor",
    province: "Jawa Barat",
    full: "Jl Raya Klapanunggal, Cikahuripan, Klapanunggal, Kabupaten Bogor, Jawa Barat",
  },
  maps: "https://maps.app.goo.gl/fyMaQQvGydHLJ9zD6",
  hours: "Operasional 24/7",
  serviceArea: ["Jabodetabek", "Cikarang", "Karawang"],
};

export const social = {
  instagram: "https://www.instagram.com/HarlindoJaya/",
};

export const services = [
  {
    id: "rental-genset",
    name: "Rental Genset",
    short: "Penyewaan Unit 20 kVA – 2000 kVA",
    description:
      "Layanan penyewaan generator set untuk kebutuhan industri, konstruksi, event, dan operasional jangka pendek maupun panjang. Setiap unit telah melalui pengecekan menyeluruh sebelum dikirim ke lokasi pelanggan.",
    features: [
      "Termasuk bahan bakar 12 jam operasional",
      "Seluruh unit milik perusahaan",
      "Tersedia survei dan inspeksi langsung",
      "Operator dan teknisi bersertifikat",
    ],
    icon: "Lightning",
  },
  {
    id: "perawatan",
    name: "Perawatan & Perbaikan Mekanis",
    short: "Maintenance dan Repair Profesional",
    description:
      "Layanan pemeliharaan preventif dan korektif untuk memastikan generator beroperasi pada performa optimal. Ditangani oleh teknisi berpengalaman dengan pendekatan terstandar.",
    features: [
      "Pemeliharaan preventif terjadwal",
      "Perbaikan korektif menyeluruh",
      "Penggunaan suku cadang original",
      "Teknisi bersertifikat industri",
    ],
    icon: "Gear",
  },
  {
    id: "overhaul",
    name: "Overhaul",
    short: "Rekondisi Mesin Menyeluruh",
    description:
      "Layanan overhaul komprehensif untuk mengembalikan performa generator ke kondisi optimal. Mencakup engine, generator, dan sistem kontrol dengan pengujian performa akhir.",
    features: [
      "Engine overhaul lengkap",
      "Generator overhaul terpadu",
      "Pemutakhiran sistem kontrol",
      "Pengujian dan validasi performa",
    ],
    icon: "Wrench",
  },
  {
    id: "instalasi",
    name: "Instalasi & Commissioning",
    short: "Pemasangan dan Aktivasi di Lokasi",
    description:
      "Layanan instalasi profesional, commissioning, dan serah terima sistem generator di lokasi proyek. Dilengkapi dokumentasi teknis dan pelatihan operator.",
    features: [
      "Survei lokasi terstandar",
      "Perencanaan instalasi terinci",
      "Commissioning sistem lengkap",
      "Pelatihan operator klien",
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
  range: "750 – 2000 kVA",
  name: "Kapasitas Industri Skala Besar",
  price: "Berdasarkan Permintaan",
  description:
    "Untuk kebutuhan industri skala besar, tim kami menyediakan penawaran terkonfigurasi sesuai spesifikasi proyek dan durasi operasional yang diminta.",
};

export const pricingNotes = {
  inclusion: "Sudah termasuk bahan bakar untuk 12 jam operasional",
  minRental: "Durasi sewa minimum 1 hari (12 jam)",
  delivery: "Biaya pengiriman dihitung berdasarkan hasil survei lokasi",
  payment: "Konfirmasi pemesanan dengan pembayaran muka 50%",
};

export const howItWorks = [
  {
    step: "01",
    title: "Permintaan Awal",
    description:
      "Sampaikan kebutuhan Anda melalui WhatsApp atau email. Tim kami merespons setiap permintaan setiap saat.",
  },
  {
    step: "02",
    title: "Konsultasi Kebutuhan",
    description:
      "Diskusi spesifikasi kapasitas, durasi sewa, dan persyaratan teknis bersama tim ahli kami.",
  },
  {
    step: "03",
    title: "Survei Lokasi",
    description:
      "Tim kami melakukan kunjungan teknis untuk memvalidasi akses, instalasi, dan estimasi pengiriman.",
  },
  {
    step: "04",
    title: "Konfirmasi Kontrak",
    description:
      "Penerbitan penawaran resmi dan konfirmasi pemesanan melalui pembayaran muka 50%.",
  },
  {
    step: "05",
    title: "Mobilisasi Unit",
    description:
      "Pengiriman, instalasi, dan commissioning unit di lokasi sesuai jadwal yang disepakati.",
  },
];

export const whyChooseUs = [
  {
    title: "Unit Milik Perusahaan",
    description:
      "Seluruh armada generator merupakan aset HarlindoJaya, bukan unit pihak ketiga. Hal ini memastikan kontrol kualitas dan kesiapan unit secara langsung.",
    icon: "ShieldCheck",
  },
  {
    title: "Cakupan Kapasitas Lengkap",
    description:
      "Tersedia rentang kapasitas 20 kVA hingga 2000 kVA untuk mengakomodasi kebutuhan komersial maupun industri skala besar.",
    icon: "Stack",
  },
  {
    title: "Dukungan Teknis 24 Jam",
    description:
      "Tim teknisi kami siap memberikan respons cepat untuk gangguan operasional kapan saja, tujuh hari seminggu.",
    icon: "Clock",
  },
];

export const faq = [
  {
    question: "Tipe genset apa saja yang tersedia untuk disewa?",
    answer:
      "HarlindoJaya menyediakan beragam unit generator dengan kapasitas mulai dari 20 kVA hingga 2000 kVA, sesuai untuk kebutuhan event, proyek konstruksi, fasilitas industri, dan operasional jangka panjang baik indoor maupun outdoor.",
  },
  {
    question: "Berapa durasi sewa yang dapat dipilih?",
    answer:
      "Kami menawarkan opsi sewa harian (minimum satu hari atau dua belas jam operasional), mingguan, dan bulanan. Layanan kontrak jangka panjang juga tersedia dan dapat disesuaikan dengan timeline proyek Anda.",
  },
  {
    question: "Apakah HarlindoJaya menyediakan instalasi dan pengoperasian unit di lokasi?",
    answer:
      "Ya. Kami menyediakan layanan instalasi, commissioning, dan pemeliharaan unit langsung di lokasi proyek. Tim teknisi kami memastikan unit beroperasi sesuai standar performa yang ditetapkan.",
  },
  {
    question: "Bagaimana prosedur pemesanan dan pembayaran rental genset?",
    answer:
      "Permintaan dapat disampaikan melalui WhatsApp atau email untuk konsultasi awal. Setelah penawaran resmi diterbitkan, pemesanan dikonfirmasi dengan pembayaran muka 50%. Pembayaran dapat dilakukan melalui transfer bank atau metode lain yang disepakati.",
  },
  {
    question: "Apakah tersedia dukungan darurat selama masa sewa?",
    answer:
      "Tersedia. Layanan dukungan darurat kami beroperasi 24 jam untuk memastikan kesinambungan operasional unit yang disewa. Tim kami menangani perbaikan di lokasi atau penggantian unit apabila diperlukan.",
  },
  {
    question: "Bagaimana perhitungan biaya pengiriman ke lokasi?",
    answer:
      "Biaya pengiriman ditentukan berdasarkan jarak, kompleksitas akses lokasi, dan kapasitas unit yang dipesan. Estimasi resmi diberikan setelah tim kami menyelesaikan survei lokasi.",
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
  defaultTitle: "HarlindoJaya — Solusi Rental Generator Industri 20–2000 kVA",
  titleTemplate: "%s | HarlindoJaya",
  defaultDescription:
    "Penyedia rental generator profesional untuk kebutuhan industri dan komersial dengan kapasitas 20 kVA hingga 2000 kVA. Bersertifikasi SIO, dukungan teknis 24 jam, melayani Jabodetabek, Cikarang, dan Karawang.",
  keywords: [
    "rental genset",
    "sewa genset",
    "rental generator industri",
    "sewa generator set",
    "rental genset bogor",
    "rental genset jakarta",
    "rental genset 24 jam",
    "rental genset industri",
    "sewa genset cikarang",
    "sewa genset karawang",
    "rental genset jabodetabek",
    "harlindojaya",
    "harga sewa genset",
    "penyedia genset profesional",
  ],
  gtmId: "GTM-PW59T7QP",
};

// Helper untuk WhatsApp link dengan custom message
export function whatsappLink(message?: string): string {
  const text = message || contact.whatsappMessage;
  return `${contact.whatsappBase}?text=${encodeURIComponent(text)}`;
}
