import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Receipt, 
  FileEdit, 
  Award, 
  Globe, 
  Calculator, 
  CreditCard, 
  Building2, 
  FileCode2, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  PhoneCall, 
  Search, 
  BadgeCheck,
  ChevronRight,
  Home,
  Layers,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { formatRupiah, generateWhatsAppLink } from '../../utils/formatters';

interface ExtraServiceItem {
  id: string;
  name: string;
  category: 'hki_sertifikasi' | 'pajak_keuangan' | 'notaris_legal' | 'fasilitas_digital';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  originalPrice?: number;
  processingTime: string;
  popular?: boolean;
  deliverables: string[];
  requirements: string[];
  icon: string;
}

const EXTRA_SERVICES: ExtraServiceItem[] = [
  {
    id: 'hki-merek',
    name: 'Pendaftaran Merek HKI & Hak Cipta',
    category: 'hki_sertifikasi',
    categoryLabel: 'HKI & Sertifikasi',
    shortDesc: 'Perlindungan hukum nama & logo merek bisnis Anda di Ditjen KI Kemenkumham RI selama 10 tahun.',
    fullDesc: 'Layanan pendaftaran sertifikat merek dagang, merek jasa, atau hak cipta logo resmi dari Direktorat Jenderal Kekayaan Intelektual (DJKI) Kemenkumham RI agar hak paten eksklusif terlindungi dari peniruan kompetitor.',
    price: 1850000,
    originalPrice: 2350000,
    processingTime: '1 - 2 Hari Kerja (Terbit Bukti Penerimaan)',
    popular: true,
    deliverables: [
      'Pengecekan Ketersediaan & Penelusuran Nama Merek di Pangkalan Data DJKI',
      'Surat Bukti Penerimaan Pendaftaran Resmi (Nomor Agenda DJKI)',
      'Pembayaran PNBP Resmi Negara Kemenkumham RI',
      'Pemantauan Masa Pengumuman Berita Resmi Merek (BRM)',
      'Sertifikat Merek Resmi DJKI Kemenkumham RI (Masa Berlaku 10 Tahun)'
    ],
    requirements: [
      'Etiket / File Gambar Logo Merek (Format JPEG/PNG High-Res)',
      'Nama Pemilik Merek (KTP/NPWP Pribadi atau NPWP Badan Usaha)',
      'Daftar Kelas Barang/Jasa yang didaftarkan (Kategori NICE Classification)',
      'Tanda tangan Surat Kuasa Pendaftaran Merek'
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 'pkp-efaktur',
    name: 'Pengukuhan Pengusaha Kena Pajak (PKP)',
    category: 'pajak_keuangan',
    categoryLabel: 'Pajak & Keuangan',
    shortDesc: 'Pengurusan legalitas PKP resmi di Kantor Pelayanan Pajak (KPP) agar dapat menerbitkan Faktur Pajak PPN.',
    fullDesc: 'Status Pengukuhan PKP wajib bagi perusahaan yang ingin bertransaksi dengan BUMN, instansi pemerintah, korporasi multinasional, serta meningkatkan kredibilitas dalam tender proyek besar.',
    price: 1500000,
    originalPrice: 2000000,
    processingTime: '3 - 5 Hari Kerja',
    popular: true,
    deliverables: [
      'Surat Keputusan Pengukuhan Pengusaha Kena Pajak (SPPKP)',
      'Penerbitan Sertifikat Elektronik Pajak (Digital Certificate)',
      'Aktivasi Akun E-Nofa & Kode Aktivasi DJP Online',
      'Instalasi & Konfigurasi Aplikasi E-Faktur Terbaru',
      'Bimbingan Cara Pembuatan & Pengunggahan Faktur Pajak Masukan/Keluaran'
    ],
    requirements: [
      'Akta Pendirian, SK Kemenkumham, NPWP Badan & NIB Perusahaan',
      'KTP & NPWP Direktur Utama / Penanggung Jawab',
      'Surat Keterangan Domisili Tempat Usaha / Kontrak Sewa',
      'Foto Kantor Tampak Depan & Dalam (Ruang Kerja/Aktivitas Usaha)'
    ],
    icon: 'Receipt'
  },
  {
    id: 'perubahan-akta',
    name: 'Perubahan Akta Notaris & RUPS',
    category: 'notaris_legal',
    categoryLabel: 'Notaris & Legalitas',
    shortDesc: 'Pengesahan notaris untuk pergantian Direksi/Komisaris, perubahan modal saham, alamat, atau penambahan KBLI.',
    fullDesc: 'Layanan perubahan Anggaran Dasar (AD/ART) perusahaan melalui Rapat Umum Pemegang Saham (RUPS) yang disahkan dalam Akta Notaris otentik dan dilaporkan ke sistem AHU Online Kemenkumham RI.',
    price: 2500000,
    originalPrice: 3200000,
    processingTime: '3 - 5 Hari Kerja',
    popular: true,
    deliverables: [
      'Draft Berita Acara RUPS / Keputusan Sirkuler Para Pemegang Saham',
      'Akta Notaris Perubahan Anggaran Dasar Otentik',
      'Penerimaan Pemberitahuan / Persetujuan Perubahan dari Kemenkumham RI',
      'Penyesuaian Data NIB OSS-RBA & NPWP Pajak (Bila ada perubahan KBLI/Alamat)'
    ],
    requirements: [
      'Buku Akta Pendirian & Akta Perubahan Terakhir Beserta SK Kemenkumham',
      'KTP & NPWP Pengurus Lama & Pengurus Baru',
      'Notulen Hasil Keputusan RUPS yang Dikehendaki',
      'NPWP & NIB Perusahaan'
    ],
    icon: 'FileEdit'
  },
  {
    id: 'sertifikasi-iso-halal',
    name: 'Sertifikasi Mutu ISO & Halal BPJPH / BPOM',
    category: 'hki_sertifikasi',
    categoryLabel: 'HKI & Sertifikasi',
    shortDesc: 'Pendampingan sertifikasi ISO 9001:2015, ISO 27001, Sertifikat Halal resmi BPJPH Kemenag, dan Izin Edar BPOM.',
    fullDesc: 'Tingkatkan standar operasional, kredibilitas tender, dan kepercayaan konsumen produk makanan, minuman, obat tradisional, maupun manajemen korporat dengan sertifikasi bertaraf nasional dan internasional.',
    price: 3500000,
    originalPrice: 4500000,
    processingTime: '7 - 14 Hari Kerja',
    deliverables: [
      'Audit Kesiapan Dokumen & Gap Analysis Standar Mutu',
      'Penyusunan Manual Mutu / Dokumen Sistem Jaminan Produk Halal (SJPH)',
      'Pendaftaran Akun SiHalal / BPOM / Lembaga Sertifikasi Akreditasi KAN',
      'Pendampingan Verifikasi Audit Lapangan & Uji Laboratorium',
      'Penerbitan Sertifikat Mutu Resmi Berlaku Nasional & Internasional'
    ],
    requirements: [
      'NIB OSS-RBA & NPWP Badan Usaha',
      'Data Produk / Bahan Baku & Alur Produksi',
      'Struktur Organisasi & SOP Operasional Standar'
    ],
    icon: 'Award'
  },
  {
    id: 'virtual-office-cbd',
    name: 'Sewa Virtual Office Gedung CBD (1 Tahun)',
    category: 'fasilitas_digital',
    categoryLabel: 'Fasilitas & Digital',
    shortDesc: 'Alamat kantor zonasi perkantoran prestisius (Jakarta Pusat/Selatan, Surabaya, Bali) lengkap surat domisili.',
    fullDesc: 'Hemat biaya sewa kantor fisik hingga 90%! Dapatkan alamat bisnis bergengsi di gedung perkantoran resmi zonasi komersial yang 100% lolos verifikasi pembuatan NIB, NPWP Badan, serta permohonan PKP.',
    price: 2700000,
    originalPrice: 3500000,
    processingTime: '1 Hari Kerja (Instan)',
    popular: true,
    deliverables: [
      'Kontrak Sewa Virtual Office Resmi Selama 1 Tahun Penuh',
      'Surat Keterangan Domisili Gedung Perkantoran Resmi',
      'Layanan Resepsionis Profesional & Penerimaan Surat/Paket Dokumen',
      'Akses Penggunaan Ruang Rapat (Meeting Room) Ber-AC & WiFi Cepat',
      'Fasilitas Penerimaan Telepon Perusahaan & Call Forwarding'
    ],
    requirements: [
      'KTP & NPWP Penanggung Jawab Perusahaan',
      'Nama Perusahaan yang akan ditempatkan pada domisili'
    ],
    icon: 'Building2'
  },
  {
    id: 'laporan-pajak-tahunan',
    name: 'Penyusunan SPT Tahunan Badan & Konsultasi Pajak',
    category: 'pajak_keuangan',
    categoryLabel: 'Pajak & Keuangan',
    shortDesc: 'Penyusunan Laporan Keuangan Neraca, Laba Rugi, & Pelaporan SPT Tahunan Badan oleh konsultan pajak resmi.',
    fullDesc: 'Pastikan perusahaan Anda taat pajak dan bebas dari sanksi denda keterlambatan DJP. Tim praktisi akuntansi dan perpajakan kami menyusun laporan fiskal sesuai standar PSAK & UU Perpajakan.',
    price: 1000000,
    originalPrice: 1500000,
    processingTime: '2 - 4 Hari Kerja',
    deliverables: [
      'Penyusunan Laporan Laba Rugi (Profit & Loss) Standar Fiskal',
      'Penyusunan Laporan Neraca Keuangan (Balance Sheet)',
      'Rekonsiliasi Fiskal Positif & Negatif Sesuai Aturan DJP',
      'Pengisian Formulir SPT Tahunan PPh Badan (Form 1771)',
      'Bukti Penerimaan Elektronik (BPE) Resmi dari Direktorat Jenderal Pajak'
    ],
    requirements: [
      'Rekening Koran Perusahaan Periode 1 Tahun Buku',
      'Ringkasan Penjualan, Pembelian, & Biaya Operasional (Bila ada)',
      'NPWP Badan & EFIN Perusahaan'
    ],
    icon: 'Calculator'
  },
  {
    id: 'website-company-profile',
    name: 'Website Perusahaan Resmi & Email @domain.co.id',
    category: 'fasilitas_digital',
    categoryLabel: 'Fasilitas & Digital',
    shortDesc: 'Pembuatan website profesional, nama domain resmi (.co.id / .com), SSL aman & email bisnis Google/Webmail.',
    fullDesc: 'Tingkatkan kepercayaan klien korporat dan vendor dengan website profil bisnis yang modern, cepat, mobile-friendly, dan memiliki alamat email resmi sesuai nama perusahaan Anda.',
    price: 1250000,
    originalPrice: 1850000,
    processingTime: '3 - 5 Hari Kerja',
    deliverables: [
      'Domain Resmi Pilihan (.co.id / .com / .id) Aktif 1 Tahun',
      'Web Hosting Cepat, Bandwidth Unlimited & Sertifikat SSL HTTPS Aman',
      'Tampilan Website Responsif (Mobile, Tablet, Desktop) 5 Halaman',
      'Setting 3 Akun Email Bisnis Resmi (contoh: info@perusahaan.co.id)',
      'Integrasi Tombol WhatsApp Chat Langsung & Form Kontak Klien'
    ],
    requirements: [
      'Nama Domain yang Diinginkan',
      'Foto Logo, Profil Perusahaan, & Deskripsi Layanan/Produk',
      'Kontak Resmi & Alamat Kantor'
    ],
    icon: 'Globe'
  },
  {
    id: 'rekening-bank-vip',
    name: 'Fast-Track Pembukaan Rekening Giro Bank Rekanan VIP',
    category: 'pajak_keuangan',
    categoryLabel: 'Pajak & Keuangan',
    shortDesc: 'Pendampingan prioritas pembukaan rekening giro badan usaha di bank mitra resmi (BCA, Mandiri, BRI, BNI).',
    fullDesc: 'Hindari antrean panjang dan penolakan berkas. Dapatkan fasilitas jemput berkas (pick-up service) oleh relationship officer bank mitra kami untuk pembukaan rekening giro perusahaan.',
    price: 450000,
    originalPrice: 750000,
    processingTime: '1 - 2 Hari Kerja',
    deliverables: [
      'Verifikasi Awal Kelengkapan Berkas Legalitas Sebelum Diajukan',
      'Surat Pengantar Prioritas Notaris ke Kantor Cabang Bank Rekanan',
      'Fasilitas Penjemputan Berkas Fisik / Appointment Khusus dengan RM Bank',
      'Bantuan Aktivasi Internet Banking Bisnis & Token Perusahaan'
    ],
    requirements: [
      'Salinan Akta Pendirian, SK Menkumham, NPWP Badan & NIB',
      'KTP & NPWP Direktur yang Berwenang Menandatangani Rekening',
      'Stempel Basah Perusahaan'
    ],
    icon: 'CreditCard'
  },
  {
    id: 'izin-pbumku-khusus',
    name: 'Izin Operasional Khusus Sektoral (PB-UMKU & PSE)',
    category: 'notaris_legal',
    categoryLabel: 'Notaris & Legalitas',
    shortDesc: 'Pengurusan Tanda Daftar PSE Kominfo, Izin Klinik/Apotek Kemenkes, Izin Edar PIRT, IUJK Kontraktor, dll.',
    fullDesc: 'Layanan pengurusan Perizinan Berusaha Untuk Menunjang Kegiatan Usaha (PB-UMKU) di sistem OSS RBA untuk izin sektoral teknis yang memerlukan rekomendasi kementerian terkait.',
    price: 2200000,
    originalPrice: 2900000,
    processingTime: '5 - 10 Hari Kerja',
    deliverables: [
      'Pendaftaran Akun Teknis & Pengunggahan Dokumen Persyaratan Teknis',
      'Koordinasi dengan Dinas / Kementerian Sektor Terkait',
      'Penerbitan Sertifikat Standar Terverifikasi / Izin PB-UMKU Terbit Resmi',
      'Tanda Daftar Penyelenggara Sistem Elektronik (TDPSE) Kominfo (Untuk Aplikasi/Web)'
    ],
    requirements: [
      'NIB OSS-RBA & NPWP Perusahaan',
      'Dokumen Teknis Spesifik Sesuai Sektor Usaha (SOP, Denah, Ijazah Tenaga Ahli)'
    ],
    icon: 'FileCode2'
  }
];

interface LayananEkstraViewProps {
  onNavigate: (page: any) => void;
}

export const LayananEkstraView: React.FC<LayananEkstraViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Receipt': return <Receipt className="w-6 h-6 text-emerald-600" />;
      case 'FileEdit': return <FileEdit className="w-6 h-6 text-amber-600" />;
      case 'Award': return <Award className="w-6 h-6 text-purple-600" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-indigo-600" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-teal-600" />;
      case 'Globe': return <Globe className="w-6 h-6 text-sky-600" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-pink-600" />;
      case 'FileCode2': return <FileCode2 className="w-6 h-6 text-orange-600" />;
      default: return <BadgeCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  const filteredServices = EXTRA_SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesQuery = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Breadcrumbs & Header Banner */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button 
              type="button"
              onClick={() => onNavigate('beranda')} 
              className="hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Beranda</span>
            </button>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-400">Layanan</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-blue-400 font-semibold">Layanan Ekstra & Perizinan Khusus</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Perizinan Tambahan & Layanan Korporat Terlengkap</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
              Layanan Ekstra & Perizinan Khusus
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Solusi komprehensif pendukung bisnis Anda: pendaftaran Merek HKI, status PKP Pajak, sewa Virtual Office CBD, sertifikasi ISO & Halal, hingga perubahan Akta Notaris RUPS.
            </p>
          </div>

          {/* Quick Search & Filter Toolbar */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari layanan (misal: HKI, PKP, ISO, Virtual Office)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-xl bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        
        {/* Category Pills Bar */}
        <div className="bg-white p-2.5 rounded-2xl shadow-lg border border-slate-200 flex flex-wrap gap-1.5 sm:gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            Semua Layanan ({EXTRA_SERVICES.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('hki_sertifikasi')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'hki_sertifikasi'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            🛡️ HKI & Sertifikasi Mutu
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('pajak_keuangan')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'pajak_keuangan'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            📊 Pajak & Rekening Bank
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('notaris_legal')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'notaris_legal'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            ⚖️ Perubahan Akta & Izin Khusus
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('fasilitas_digital')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'fasilitas_digital'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            🏢 Virtual Office & IT
          </button>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Menampilkan <strong className="text-slate-900">{filteredServices.length}</strong> layanan perizinan & ekstra
          </p>
          <button
            type="button"
            onClick={() => onNavigate('simulasi-biaya')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
          >
            <span>Gabungkan dengan Paket di Kalkulator</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((item) => {
            const waLink = generateWhatsAppLink({
              entityName: `Layanan Khusus: ${item.name}`,
              tierName: item.categoryLabel,
              totalPrice: item.price
            });

            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
              >
                {/* Popular Pill */}
                {item.popular && (
                  <div className="absolute top-0 right-0">
                    <span className="inline-block px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow-sm">
                      Paling Banyak Diminati
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  {/* Icon & Category Tag */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200 shrink-0 group-hover:scale-105 transition-transform">
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        {item.categoryLabel}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight font-display">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  {/* Processing Time Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium mb-4">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Waktu: <strong className="text-slate-900">{item.processingTime}</strong></span>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase text-slate-900 tracking-wider block mb-1">
                      Yang Anda Peroleh:
                    </span>
                    {item.deliverables.slice(0, 3).map((doc, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{doc}</span>
                      </div>
                    ))}
                    {item.deliverables.length > 3 && (
                      <span className="text-[11px] text-blue-600 font-semibold block pt-0.5">
                        +{item.deliverables.length - 3} fasilitas lainnya
                      </span>
                    )}
                  </div>
                </div>

                {/* Price & Action Section */}
                <div className="p-6 pt-4 sm:p-7 sm:pt-4 bg-slate-50/70 border-t border-slate-100 mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Biaya Jasa Resmi</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-slate-900 font-display">
                          {formatRupiah(item.price)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-slate-400 line-through">
                            {formatRupiah(item.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      All-In Nett
                    </span>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-[1.02]"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Pesan Layanan via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onNavigate('simulasi-biaya')}
                      className="w-full py-2 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Simulasikan Bersama Paket PT/CV</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Contact */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Butuh Izin Usaha Khusus Lainnya?</span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-display">
              Konsultasikan Izin Sektoral & KBLI Tambahan Anda
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Tim notaris dan konsultan hukum kami siap membantu izin klinik kesehatan, izin pertambangan/energi, izin distributor ekspor-impor, izin konstruksi SBU/SKK, dan perizinan khusus pemerintah daerah di 34 provinsi.
            </p>
          </div>
          <a
            href={generateWhatsAppLink({
              entityName: 'Konsultasi Perizinan Khusus Kustom',
              tierName: 'Konsultasi Izin Sektoral',
              totalPrice: 0
            })}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shrink-0 flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Hubungi Konsultan Perizinan</span>
          </a>
        </div>

      </div>
    </div>
  );
};
