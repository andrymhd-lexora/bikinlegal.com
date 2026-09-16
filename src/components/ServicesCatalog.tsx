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
  ShieldAlert
} from 'lucide-react';
import { LEGAL_ENTITIES } from '../data/legalData';
import { LegalEntity, EntityCategory } from '../types';
import { formatRupiah, generateWhatsAppLink } from '../utils/formatters';

interface ServicesCatalogProps {
  onSelectEntityForCalculator: (entityId: string) => void;
  onOpenDetailModal: (entity: LegalEntity) => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  onSelectEntityForCalculator,
  onOpenDetailModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getEntityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Building': return <Building className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'Handshake': return <Handshake className="w-5 h-5" />;
      case 'Scale': return <Scale className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Users2': return <Users2 className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      default: return <Building className="w-5 h-5" />;
    }
  };

  const filteredEntities = activeCategory === 'all'
    ? LEGAL_ENTITIES
    : LEGAL_ENTITIES.filter(entity => {
        if (activeCategory === 'pt') return entity.category === 'pt';
        if (activeCategory === 'kemitraan') return entity.category === 'kemitraan';
        if (activeCategory === 'sosial') return entity.category === 'sosial';
        return true;
      });

  return (
    <section id="layanan" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950/70 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Katalog Layanan & Harga Resmi Terupdate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            Pilihan Paket Pendirian Badan Usaha & Hukum
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Daftar lengkap paket legalitas usaha dengan harga pasti, transparan, dan terintegrasi sistem AHU Kemenkumham serta OSS RBA.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            Semua Layanan ({LEGAL_ENTITIES.length})
          </button>
          
          <button
            type="button"
            onClick={() => setActiveCategory('pt')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'pt'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            🏢 Perseroan Terbatas (PT)
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('kemitraan')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'kemitraan'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            🤝 CV, Firma & Perdata
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('sosial')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'sosial'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            🏛️ Yayasan, Koperasi & Perkumpulan
          </button>
        </div>

        {/* Entity Cards Grid */}
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
                className={`flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${
                  entity.popular 
                    ? 'border-blue-500 dark:border-blue-500 ring-2 ring-blue-500/20 shadow-lg' 
                    : 'border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                {/* Popular Ribbon if applicable */}
                {entity.badge && (
                  <div className="absolute top-0 right-0">
                    <span className={`inline-block px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider rounded-bl-xl ${
                      entity.popular 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'bg-slate-800 dark:bg-slate-700 text-slate-200'
                    }`}>
                      {entity.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  {/* Entity Icon & Category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/60">
                      {getEntityIcon(entity.icon)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {entity.category === 'pt' ? 'Perseroan Terbatas' : entity.category === 'kemitraan' ? 'Badan Usaha Kemitraan' : 'Organisasi / Nirlaba'}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight font-display">
                        {entity.name}
                      </h3>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed min-h-[36px] mb-4">
                    {entity.shortDescription}
                  </p>

                  {/* Price Block */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-5">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 block">Mulai dari</span>
                        <span className="text-2xl font-black text-slate-900 dark:text-white font-display">
                          {formatRupiah(entity.basePrice)}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 block">Waktu Proses</span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          <Clock className="w-3.5 h-3.5" />
                          {entity.processingTime}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Paket Lengkap: <strong className="text-slate-800 dark:text-slate-200">{formatRupiah(entity.completePrice)}</strong></span>
                      <span>+ VO: <strong className="text-slate-800 dark:text-slate-200">{formatRupiah(entity.virtualOfficePrice)}</strong></span>
                    </div>
                  </div>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                    <div className="font-bold text-slate-900 dark:text-slate-100 text-xs uppercase tracking-wider mb-2">
                      Dokumen yang Diperoleh:
                    </div>
                    {entity.inclusions.dasar.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                    {entity.inclusions.dasar.length > 4 && (
                      <button
                        type="button"
                        onClick={() => onOpenDetailModal(entity)}
                        className="text-blue-600 dark:text-blue-400 font-semibold text-xs hover:underline flex items-center gap-1 pt-1 cursor-pointer"
                      >
                        +{entity.inclusions.dasar.length - 4} dokumen lainnya & detail syarat
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 sm:p-7 sm:pt-0 space-y-2 border-t border-slate-100 dark:border-slate-800 mt-auto">
                  <div className="grid grid-cols-2 gap-2 pt-4">
                    <button
                      type="button"
                      onClick={() => onOpenDetailModal(entity)}
                      className="py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      Detail Paket
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectEntityForCalculator(entity.id)}
                      className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Simulasi Biaya</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-emerald-200/50 dark:border-emerald-800/40"
                  >
                    <span>Konsultasi Paket Ini via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Bingung Memilih Badan Usaha yang Tepat?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Gunakan fitur Rekomendasi Bentuk Usaha kami atau konsultasikan gratis bersama tim notaris kami untuk menentukan apakah bisnis Anda lebih cocok PT, CV, atau PT Perorangan.
              </p>
            </div>
          </div>
          <a
            href="#cek-usaha"
            className="px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs sm:text-sm shrink-0 flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
          >
            <span>Cek Rekomendasi Usaha</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
