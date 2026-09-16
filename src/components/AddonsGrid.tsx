import React from 'react';
import { 
  ShieldCheck, 
  Receipt, 
  FileEdit, 
  Award, 
  Globe, 
  Calculator, 
  CreditCard,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ADDON_SERVICES } from '../data/legalData';
import { formatRupiah, generateWhatsAppLink } from '../utils/formatters';

interface AddonsGridProps {
  onScrollToCalculator: () => void;
}

export const AddonsGrid: React.FC<AddonsGridProps> = ({ onScrollToCalculator }) => {
  const getAddonIcon = (icon: string) => {
    switch (icon) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Receipt': return <Receipt className="w-6 h-6 text-emerald-600" />;
      case 'FileEdit': return <FileEdit className="w-6 h-6 text-amber-600" />;
      case 'Award': return <Award className="w-6 h-6 text-purple-600" />;
      case 'Globe': return <Globe className="w-6 h-6 text-sky-600" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-indigo-600" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-teal-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Layanan Ekstra & Perizinan Khusus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Lengkapi Legalitas & Operasional Bisnis Anda
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Dari pendaftaran Hak Kekayaan Intelektual (HKI), status Pengusaha Kena Pajak (PKP), hingga sertifikasi standar mutu resmi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADDON_SERVICES.map((addon) => {
            const waLink = generateWhatsAppLink({
              entityName: `Layanan Tambahan: ${addon.name}`,
              tierName: 'Layanan Terpisah / Addon',
              totalPrice: addon.price
            });

            return (
              <div
                key={addon.id}
                className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                      {getAddonIcon(addon.icon)}
                    </div>
                    {addon.popular && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                        Paling Dibutuhkan
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug font-display">
                    {addon.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {addon.description}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-700">
                    <strong className="text-slate-900 block font-semibold mb-0.5">Benefit Utama:</strong>
                    {addon.benefit}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Biaya Layanan</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-black text-slate-900 font-display">
                        {formatRupiah(addon.price)}
                      </span>
                      {addon.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          {formatRupiah(addon.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Pesan via WA</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
