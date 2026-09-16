import React, { useState } from 'react';
import { 
  Building2, 
  Building, 
  Briefcase, 
  Landmark, 
  Handshake, 
  Scale, 
  FileText, 
  Users2, 
  HeartHandshake, 
  Users, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  Info,
  ShieldCheck,
  Search,
  Home,
  Check,
  BadgePercent,
  Calculator
} from 'lucide-react';
import { LEGAL_ENTITIES } from '../../data/legalData';
import { LegalEntity } from '../../types';
import { formatRupiah, generateWhatsAppLink } from '../../utils/formatters';

interface PaketHargaViewProps {
  onSelectEntityForCalculator: (entityId: string) => void;
  onOpenDetailModal: (entity: LegalEntity) => void;
  onNavigate: (page: any) => void;
}

export const PaketHargaView: React.FC<PaketHargaViewProps> = ({
  onSelectEntityForCalculator,
  onOpenDetailModal,
  onNavigate
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getEntityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-blue-600" />;
      case 'Building': return <Building className="w-6 h-6 text-indigo-600" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-sky-600" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-purple-600" />;
      case 'Handshake': return <Handshake className="w-6 h-6 text-teal-600" />;
      case 'Scale': return <Scale className="w-6 h-6 text-amber-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-600" />;
      case 'Users2': return <Users2 className="w-6 h-6 text-cyan-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      case 'Users': return <Users className="w-6 h-6 text-blue-700" />;
      default: return <Building className="w-6 h-6 text-blue-600" />;
    }
  };

  const filteredEntities = LEGAL_ENTITIES.filter(entity => {
    const matchesCategory = activeCategory === 'all' || entity.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      entity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entity.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entity.responsibility.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
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
            <span className="text-blue-400 font-semibold">Paket & Harga Resmi</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Katalog Layanan & Harga Resmi Terupdate 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
              Paket Pendirian Badan Usaha & Hukum
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Daftar biaya resmi pendirian PT Perorangan, PT Skala Modal (Kecil/Menengah/Besar), CV, Firma, Persekutuan Perdata, Yayasan, Koperasi, hingga Perkumpulan berbadan hukum sah Kemenkumham RI.
            </p>
          </div>

          {/* Quick Search */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari entitas usaha (misal: PT Perorangan, CV, Yayasan)..."
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

      {/* Main Grid Section */}
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
            Semua Entitas ({LEGAL_ENTITIES.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('pt')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'pt'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            🏢 Perseroan Terbatas (PT)
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('kemitraan')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'kemitraan'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            🤝 CV, Firma & Perdata
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('sosial')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'sosial'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            🏛️ Yayasan, Koperasi & Perkumpulan
          </button>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Menampilkan <strong className="text-slate-900">{filteredEntities.length}</strong> pilihan badan usaha & hukum resmi
          </p>
          <button
            type="button"
            onClick={() => onNavigate('simulasi-biaya')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Simulasi Biaya &rarr;</span>
          </button>
        </div>

        {/* 10 Entities Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEntities.map((entity) => {
            const waLink = generateWhatsAppLink({
              entityName: entity.name,
              tierName: 'Paket Dasar',
              totalPrice: entity.basePrice
            });

            return (
              <div
                key={entity.id}
                className={`flex flex-col justify-between rounded-3xl bg-white border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${
                  entity.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-lg' 
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                {/* Popular Ribbon */}
                {entity.badge && (
                  <div className="absolute top-0 right-0">
                    <span className={`inline-block px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider rounded-bl-xl ${
                      entity.popular 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'bg-slate-800 text-slate-200'
                    }`}>
                      {entity.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  {/* Entity Icon & Category */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-13 h-13 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-200/80 shrink-0">
                      {getEntityIcon(entity.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        {entity.category === 'pt' ? 'Perseroan Terbatas' : entity.category === 'kemitraan' ? 'Badan Usaha Kemitraan' : 'Organisasi / Sosial'}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight font-display">
                        {entity.name}
                      </h3>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[38px] mb-4">
                    {entity.shortDescription}
                  </p>

                  {/* Price Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 mb-5 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[11px] text-slate-500 block font-medium">Mulai dari (Paket Dasar)</span>
                        <span className="text-2xl font-black text-slate-900 font-display">
                          {formatRupiah(entity.basePrice)}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Waktu Proses</span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600">
                          <Clock className="w-3.5 h-3.5" />
                          {entity.processingTime}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-600">
                      <span>Paket Lengkap: <strong>{formatRupiah(entity.completePrice)}</strong></span>
                      <span>+ Virtual Office: <strong>{formatRupiah(entity.virtualOfficePrice)}</strong></span>
                    </div>
                  </div>

                  {/* Criteria Info */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-slate-100/60 p-2.5 rounded-xl mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Pendiri:</span>
                      <span className="font-semibold text-slate-800">{entity.minFounders}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Modal Dasar:</span>
                      <span className="font-semibold text-slate-800">{entity.minCapital}</span>
                    </div>
                  </div>

                  {/* Document Highlights Checklist */}
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">
                      Termasuk Dokumen:
                    </div>
                    {entity.inclusions.dasar.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                    {entity.inclusions.dasar.length > 4 && (
                      <button
                        type="button"
                        onClick={() => onOpenDetailModal(entity)}
                        className="text-blue-600 font-semibold text-xs hover:underline flex items-center gap-1 pt-1 cursor-pointer"
                      >
                        +{entity.inclusions.dasar.length - 4} dokumen lainnya & rincian syarat
                      </button>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 pt-0 sm:p-7 sm:pt-0 space-y-2 border-t border-slate-100 mt-auto">
                  <div className="grid grid-cols-2 gap-2 pt-4">
                    <button
                      type="button"
                      onClick={() => onOpenDetailModal(entity)}
                      className="py-2.5 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-500" />
                      Detail Paket
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        onSelectEntityForCalculator(entity.id);
                        onNavigate('simulasi-biaya');
                      }}
                      className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <Calculator className="w-3.5 h-3.5" />
                      <span>Simulasi Biaya</span>
                    </button>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Konsultasi Paket Ini via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Garansi 100% Kepastian Hukum</span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-display">
              Semua Dokumen Sah & Terdaftar Resmi Kemenkumham RI
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Diterbitkan langsung oleh Notaris Rekanan Ikatan Notaris Indonesia (INI) terdaftar resmi di Kementerian Hukum dan HAM RI & OSS RBA BKPM.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('rekomendasi-usaha')}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shrink-0 flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer"
          >
            <span>Quiz Rekomendasi Badan Usaha</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
