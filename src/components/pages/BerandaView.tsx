import React, { useState } from 'react';
import { 
  Building2, 
  Building, 
  Handshake, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Award, 
  FileCheck, 
  Users, 
  ChevronRight,
  Calculator,
  Lock,
  Zap,
  PhoneCall,
  Search,
  Scale,
  Briefcase,
  HelpCircle,
  FileText,
  BadgeCheck,
  TrendingUp,
  Landmark,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { Hero } from '../Hero';
import { ComparisonTable } from '../ComparisonTable';
import { Testimonials } from '../Testimonials';
import { LEGAL_ENTITIES, ADDON_SERVICES } from '../../data/legalData';
import { LegalEntity } from '../../types';
import { formatRupiah, generateWhatsAppLink } from '../../utils/formatters';

interface BerandaViewProps {
  onCheckName: (name: string) => void;
  onSelectEntity: (entityId: string) => void;
  onOpenNameCheckerModal: () => void;
  onOpenDetailModal: (entity: LegalEntity) => void;
  onNavigate: (page: any) => void;
}

export const BerandaView: React.FC<BerandaViewProps> = ({
  onCheckName,
  onSelectEntity,
  onOpenNameCheckerModal,
  onOpenDetailModal,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'pt' | 'kemitraan' | 'sosial'>('all');

  // Featured flagship entities
  const allFeatured = [
    {
      id: 'pt-perorangan',
      name: 'PT Perorangan (Usaha Mikro & Kecil)',
      category: 'pt',
      badge: 'Solopreneur Terfavorit',
      badgeColor: 'emerald',
      legalStatus: 'Berbadan Hukum Sah Kemenkumham RI (UU Cipta Kerja)',
      headline: 'Legalitas PT Resmi Cukup 1 Orang Tanpa Akta Notaris Manual',
      description: 'Format Perseroan Terbatas revolusioner khusus pelaku usaha mikro & kecil. Pendiri tunggal bertindak langsung sebagai Direktur sekaligus pemegang saham 100%, dengan pemisahan mutlak antara harta pribadi dan kekayaan perusahaan.',
      processingTime: '1 - 2 Hari Kerja (Kilat)',
      foundersRule: 'Tepat 1 Orang Pendiri (WNI, usia min. 17 thn)',
      liabilityRule: 'Tanggung Jawab Terbatas pada modal yang disetor',
      capitalRule: 'Bebas tanpa minimal (Maks. omzet/aset Rp 5 Miliar)',
      suitableTags: ['Solopreneur & Freelancer', 'Toko Online / E-Commerce', 'Agensi Digital & Kreatif', 'UMKM Kuliner & Retail', 'Pebisnis Pemula'],
      deliverables: [
        'Sertifikat Pendaftaran Pendirian Resmi Kemenkumham RI',
        'Pernyataan Pendirian Perseroan Perorangan Sah',
        'NPWP Badan Usaha (Format 16 Digit Terbaru) & SKT',
        'NIB (Nomor Induk Berusaha) OSS-RBA Berbasis Risiko',
        'Hak Akses Akun OSS RBA & Pilihan Kode KBLI 2020'
      ],
      keyBenefits: [
        'Pemisahan harta pribadi 100% aman dari risiko hutang usaha',
        'Bisa langsung membuka Rekening Giro Bank atas nama PT',
        'Tidak membutuhkan RUPS tahunan yang rumit atau biaya notaris mahal'
      ],
      icon: 'Building2'
    },
    {
      id: 'pt-mikro-kecil',
      name: 'PT Konvensional / PT Persekutuan Modal',
      category: 'pt',
      badge: 'Standar Korporasi & Startup',
      badgeColor: 'blue',
      legalStatus: 'Berbadan Hukum Penuh • Akta Notaris Otentik & SK Kemenkumham',
      headline: 'Format Standar Tertinggi Bisnis Multi-Founder & Siap Investor',
      description: 'Bentuk badan hukum paling prestisius dan diakui secara luas dengan struktur dewan Direksi dan Dewan Komisaris. Menjadi syarat mutlak untuk skala ekspansi, pendanaan modal ventura, serta kualifikasi tender proyek korporasi/pemerintah.',
      processingTime: '3 - 5 Hari Kerja',
      foundersRule: 'Minimal 2 Orang / Badan Hukum (Direktur & Komisaris)',
      liabilityRule: 'Terbatas hanya sebesar nilai lembar saham yang dimiliki',
      capitalRule: 'Modal disetor disesuaikan skala usaha (Kecil/Menengah/Besar)',
      suitableTags: ['Startup Teknologi & SaaS', 'Bisnis Kemitraan (Co-Founders)', 'Vendor Tender BUMN / Swasta', 'Kontraktor & Manufaktur', 'Perusahaan Ekspor / Impor'],
      deliverables: [
        'Pemesanan & Persetujuan Nama PT di AHU Kemenkumham',
        'Akta Pendirian Otentik Notaris Rekanan Resmi',
        'SK Pengesahan Badan Hukum Menkumham RI',
        'NPWP Badan (16 Digit) & Surat Keterangan Terdaftar (SKT)',
        'NIB OSS-RBA & Hak Akses Akun OSS-RBA Terverifikasi'
      ],
      keyBenefits: [
        'Struktur saham jelas, fleksibel untuk penambahan modal & investor',
        'Kredibilitas tertinggi untuk memenangkan lelang tender bernilai besar',
        'Bisa ditingkatkan statusnya menjadi Pengusaha Kena Pajak (PKP)'
      ],
      icon: 'Building'
    },
    {
      id: 'cv',
      name: 'CV (Commanditaire Vennootschap)',
      category: 'kemitraan',
      badge: 'Kemitraan Fleksibel & Bebas Pajak Dividen',
      badgeColor: 'amber',
      legalStatus: 'Terdaftar di Sistem Administrasi Badan Usaha (SABU) Kemenkumham',
      headline: 'Badan Usaha Kemitraan Sekutu Aktif & Pasif Tanpa Batasan Modal',
      description: 'Badan usaha persekutuan ideal antara sekutu komplementer (pengelola operasional) dan sekutu komanditer (investor modal pasif). Pengambilan laba usaha (prive) tidak dikenakan pajak dividen berganda.',
      processingTime: '2 - 3 Hari Kerja',
      foundersRule: 'Minimal 2 Orang WNI (Sekutu Aktif & Sekutu Pasif)',
      liabilityRule: 'Sekutu Aktif tanggung renteng pribadi; Sekutu Pasif sebatas modal',
      capitalRule: 'Fleksibel tanpa batasan minimal modal disetor',
      suitableTags: ['Konsultan & Agensi Jasa', 'Supplier & Distributor Daerah', 'Percetakan & Konveksi', 'Restoran & Cafe Kemitraan', 'Bengkel & Jasa Logistik'],
      deliverables: [
        'Pemesanan Nama CV di AHU Kemenkumham',
        'Akta Notaris Pendirian CV Otentik',
        'SK Terdaftar Kemenkumham RI (SABU Online)',
        'NPWP Badan Usaha (16 Digit) & SKT Pajak',
        'NIB OSS-RBA & Sertifikat Standar Usaha'
      ],
      keyBenefits: [
        'Prive / penarikan laba bersih CV bukan objek pajak penghasilan',
        'Proses pendirian cepat tanpa pembagian persentase saham kaku',
        'Sangat mudah dan fleksibel dalam penyesuaian operasional harian'
      ],
      icon: 'Handshake'
    },
    {
      id: 'yayasan',
      name: 'Yayasan (Lembaga Sosial, Pendidikan & Nirlaba)',
      category: 'sosial',
      badge: 'Badan Hukum Nirlaba Resmi',
      badgeColor: 'purple',
      legalStatus: 'Berbadan Hukum Sah Menkumham RI (UU No. 16/2001 Jo UU 28/2004)',
      headline: 'Wadah Legalitas Terpercaya untuk Program Amal, Pendidikan & Sosial',
      description: 'Badan hukum yang terdiri atas kekayaan yang dipisahkan dan diperuntukkan untuk mencapai tujuan sosial, keagamaan, dan kemanusiaan. Tidak memiliki anggota/pemegang saham dan seluruh surplus dialokasikan kembali untuk misi yayasan.',
      processingTime: '3 - 5 Hari Kerja',
      foundersRule: 'Terdiri dari 3 Organ: Pembina, Pengurus, dan Pengawas',
      liabilityRule: 'Nirlaba — Harta yayasan terpisah secara tegas dari para pendiri',
      capitalRule: 'Kekayaan awal yang dipisahkan minimal Rp 10 Juta',
      suitableTags: ['Sekolah / Madrasah / Pesantren', 'Panti Asuhan & Lembaga Yatim', 'Lembaga Zakat, Infaq & Donasi', 'Klinik Sosial / Rumah Sakit Amal', 'Pusat Riset & Komunitas Budaya'],
      deliverables: [
        'Pemesanan Nama Yayasan di AHU Kemenkumham',
        'Akta Pendirian Notaris Berisi Anggaran Dasar Yayasan',
        'SK Pengesahan Badan Hukum Yayasan Menkumham RI',
        'NPWP Yayasan (16 Digit) & SKT Pajak',
        'NIB OSS-RBA Kategori Kegiatan Nirlaba'
      ],
      keyBenefits: [
        'Legalitas sah untuk menerima hibah, donasi publik, dan dana CSR',
        'Fasilitas pembebasan pajak untuk bantuan, sumbangan & beasiswa tertentu',
        'Kepastian hukum dan perlindungan abadi untuk aset wakaf / sosial'
      ],
      icon: 'Award'
    }
  ];

  const filteredFeatured = activeTab === 'all' 
    ? allFeatured 
    : allFeatured.filter(item => item.category === activeTab);

  const getEntityObj = (id: string) => LEGAL_ENTITIES.find(e => e.id === id);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero 
        onCheckName={onCheckName}
        onSelectEntity={(id) => {
          onSelectEntity(id);
          onNavigate('simulasi-biaya');
        }}
        onOpenNameCheckerModal={onOpenNameCheckerModal}
      />

      {/* 2. Authority & Stats Bar */}
      <section className="bg-white border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display">5.800+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Badan Usaha Didirikan</div>
            </div>
            <div className="p-3 border-l border-slate-100">
              <div className="text-2xl sm:text-3xl font-black text-blue-600 font-display">100%</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Sah SK Kemenkumham RI</div>
            </div>
            <div className="p-3 border-l border-slate-100">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-display">1–5 Hari</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Proses Dokumen Kilat</div>
            </div>
            <div className="p-3 border-l border-slate-100">
              <div className="text-2xl sm:text-3xl font-black text-amber-500 font-display">34 Provinsi</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Jangkauan Notaris Resmi</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Section (Redesigned: Informative, Trendy, No Prices) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3 shadow-xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Eksplorasi Karakteristik & Legalitas Produk</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
                Layanan Unggulan Terfavorit
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Pahami karakteristik hukum, struktur kepemilikan, tanggung jawab pendiri, serta peruntukan bisnis sebelum mendirikan perusahaan Anda. Sepenuhnya legal & terdaftar di Ditjen AHU Kemenkumham RI.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('paket-harga')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 cursor-pointer shrink-0"
              >
                <span>Lihat Semua 10 Entitas</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </div>

          {/* Interactive Trendy Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/70 rounded-2xl max-w-fit mb-10 border border-slate-300/60">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Unggulan ({allFeatured.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pt')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'pt'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🏢 Perseroan Terbatas (PT)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('kemitraan')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'kemitraan'
                  ? 'bg-white text-amber-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🤝 Kemitraan (CV)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('sosial')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'sosial'
                  ? 'bg-white text-purple-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🏛️ Sosial & Yayasan
            </button>
          </div>

          {/* Trendy Informative Cards Grid (No Prices) */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredFeatured.map((item) => {
              const entityData = getEntityObj(item.id);
              const waLink = generateWhatsAppLink({
                entityName: item.name,
                tierName: 'Konsultasi Karakteristik Produk',
                totalPrice: 0
              });

              return (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group hover:border-blue-400/60"
                >
                  {/* Top Gradient Accent Bar */}
                  <div className={`h-2.5 w-full ${
                    item.badgeColor === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-teal-400' :
                    item.badgeColor === 'blue' ? 'bg-gradient-to-r from-blue-600 to-indigo-500' :
                    item.badgeColor === 'amber' ? 'bg-gradient-to-r from-amber-500 to-orange-400' :
                    'bg-gradient-to-r from-purple-600 to-pink-500'
                  }`} />

                  <div className="p-7 sm:p-8 space-y-6">
                    
                    {/* Header: Badge & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        item.badgeColor === 'emerald' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                        item.badgeColor === 'blue' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                        item.badgeColor === 'amber' ? 'bg-amber-50 text-amber-900 border border-amber-200' :
                        'bg-purple-50 text-purple-800 border border-purple-200'
                      }`}>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{item.badge}</span>
                      </span>

                      <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                        <Clock className="w-3.5 h-3.5 text-slate-600" />
                        <span>{item.processingTime}</span>
                      </div>
                    </div>

                    {/* Title & Headline */}
                    <div>
                      <div className="flex items-center gap-3.5 mb-2">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                          item.badgeColor === 'emerald' ? 'bg-emerald-100/70 text-emerald-700' :
                          item.badgeColor === 'blue' ? 'bg-blue-100/70 text-blue-700' :
                          item.badgeColor === 'amber' ? 'bg-amber-100/70 text-amber-700' :
                          'bg-purple-100/70 text-purple-700'
                        }`}>
                          {item.id === 'pt-perorangan' && <Building2 className="w-6 h-6" />}
                          {item.id === 'pt-mikro-kecil' && <Building className="w-6 h-6" />}
                          {item.id === 'cv' && <Handshake className="w-6 h-6" />}
                          {item.id === 'yayasan' && <Award className="w-6 h-6" />}
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                            {item.legalStatus}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display leading-tight">
                            {item.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-2">
                        {item.headline}
                      </p>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Key Legal Anatomy Grid (4 Parameters) */}
                    <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
                          <Users className="w-3 h-3 text-slate-500" />
                          Syarat Pendiri
                        </span>
                        <p className="text-xs font-bold text-slate-800 leading-snug">
                          {item.foundersRule}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-slate-500" />
                          Tanggung Jawab
                        </span>
                        <p className="text-xs font-bold text-slate-800 leading-snug">
                          {item.liabilityRule}
                        </p>
                      </div>

                      <div className="space-y-1 pt-2 border-t border-slate-200/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
                          <Scale className="w-3 h-3 text-slate-500" />
                          Ketentuan Modal
                        </span>
                        <p className="text-xs font-bold text-slate-800 leading-snug">
                          {item.capitalRule}
                        </p>
                      </div>

                      <div className="space-y-1 pt-2 border-t border-slate-200/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-slate-500" />
                          Kecepatan Terbit
                        </span>
                        <p className="text-xs font-bold text-emerald-700 leading-snug">
                          {item.processingTime}
                        </p>
                      </div>
                    </div>

                    {/* Suitable For (Target Profil Usaha) */}
                    <div>
                      <span className="text-[11px] font-extrabold uppercase text-slate-900 tracking-wider block mb-2">
                        🎯 Sangat Ideal Untuk:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.suitableTags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Official Legal Deliverables Checklist */}
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-extrabold uppercase text-slate-900 tracking-wider block">
                        📜 Dokumen Resmi Diterbitkan:
                      </span>
                      <div className="space-y-1.5">
                        {item.deliverables.map((doc, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Strategic Business Superpowers Callout */}
                    <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
                      <span className="text-[11px] font-bold text-blue-900 block flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                        Keunggulan Strategis Bisnis:
                      </span>
                      <ul className="space-y-1 text-xs text-blue-950">
                        {item.keyBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-blue-500 font-bold">•</span>
                            <span className="leading-tight">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Actions Footer (No Price!) */}
                  <div className="p-6 sm:p-7 bg-slate-50/90 border-t border-slate-200/80 space-y-2.5 mt-auto">
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => {
                          if (entityData) onOpenDetailModal(entityData);
                        }}
                        className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5 text-slate-600" />
                        <span>Rincian & Syarat</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          onSelectEntity(item.id);
                          onNavigate('simulasi-biaya');
                        }}
                        className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Simulasi di Kalkulator</span>
                      </button>
                    </div>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Konsultasi Produk Ini via WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trendy Interactive Decision Guide Banner */}
          <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Panduan Cepat Pengambilan Keputusan</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display leading-tight">
                  Masih Bingung Memilih Bentuk Badan Usaha yang Pas?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Gunakan Smart Quiz 4 Langkah kami untuk mengetahui secara akurat bentuk badan usaha yang paling hemat biaya, aman secara hukum, dan sesuai dengan target jangka panjang bisnis Anda.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-blue-400 font-bold block">1 Orang Pendiri</span>
                    <span>&rarr; PT Perorangan</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-blue-400 font-bold block">2+ Orang & Investor</span>
                    <span>&rarr; PT Biasa / Modal</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-amber-400 font-bold block">Kemitraan Jasa</span>
                    <span>&rarr; CV Komanditer</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-purple-400 font-bold block">Amal & Pendidikan</span>
                    <span>&rarr; Yayasan Nirlaba</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('rekomendasi-usaha')}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Mulai Quiz Rekomendasi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onOpenNameCheckerModal}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                  <span>Cek Nama PT Gratis</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Comparison Table Section */}
      <ComparisonTable 
        onSelectEntity={(id) => {
          onSelectEntity(id);
          onNavigate('simulasi-biaya');
        }}
      />

      {/* 5. Layanan Ekstra Preview Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Layanan Ekstra & Perizinan Khusus
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Lengkapi Kebutuhan Operasional & Izin Khusus
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                Dari pendaftaran Merek HKI, aktivasi PKP, sewa Virtual Office, hingga sertifikasi standar mutu resmi.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('layanan-ekstra')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-105 cursor-pointer shrink-0"
            >
              <span>Lihat Semua Layanan Ekstra</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Grid 3 Addons */}
          <div className="grid md:grid-cols-3 gap-6">
            {ADDON_SERVICES.slice(0, 3).map((addon) => (
              <div
                key={addon.id}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      Populer
                    </span>
                    <span className="text-sm font-black text-slate-900 font-display">
                      {formatRupiah(addon.price)}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    {addon.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {addon.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate('layanan-ekstra')}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Pelajari Selengkapnya</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Testimonials Section */}
      <Testimonials />

      {/* 7. Ready CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Notaris Resmi Terdaftar Kemenkumham RI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-display">
            Mulai Usaha Resmi Anda Hari Ini Tanpa Ribet
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Dapatkan konsultasi awal gratis mengenai pemilihan KBLI 2020, draf anggaran dasar, dan simulasi biaya pasti bersama tim ahli BikinLegal.com (PT. Bikin Legalitas Bisnis).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('simulasi-biaya')}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Hitung Simulasi Biaya</span>
            </button>

            <a
              href={generateWhatsAppLink({
                entityName: 'Konsultasi Legalitas Bisnis',
                tierName: 'Konsultasi Awal Gratis',
                totalPrice: 0
              })}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Konsultasi Notaris via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
