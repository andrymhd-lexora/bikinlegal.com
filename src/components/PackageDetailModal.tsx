import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Building, 
  UserCheck, 
  Coins,
  Send
} from 'lucide-react';
import { LegalEntity } from '../types';
import { formatRupiah, generateWhatsAppLink } from '../utils/formatters';

interface PackageDetailModalProps {
  entity: LegalEntity | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForCalculator: (entityId: string) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  entity,
  isOpen,
  onClose,
  onSelectForCalculator
}) => {
  if (!isOpen || !entity) return null;

  const waLinkDasar = generateWhatsAppLink({
    entityName: entity.name,
    tierName: 'Paket Dasar',
    totalPrice: entity.basePrice
  });

  const waLinkLengkap = generateWhatsAppLink({
    entityName: entity.name,
    tierName: 'Paket Lengkap',
    totalPrice: entity.completePrice
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white flex items-start justify-between relative overflow-hidden">
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Dokumen Resmi & Berbadan Hukum Kemenkumham</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-display text-white">
              {entity.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {entity.shortDescription}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer relative z-10 shrink-0 ml-4"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          
          {/* Quick Fact Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Waktu Proses</span>
              <span className="text-xs font-bold text-slate-900">{entity.processingTime}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <UserCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Ketentuan Pendiri</span>
              <span className="text-xs font-bold text-slate-900">{entity.minFounders}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Coins className="w-5 h-5 text-amber-600 mx-auto mb-1" />
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Ketentuan Modal</span>
              <span className="text-xs font-bold text-slate-900 truncate block">{entity.minCapital}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <ShieldCheck className="w-5 h-5 text-purple-600 mx-auto mb-1" />
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Tanggung Jawab</span>
              <span className="text-xs font-bold text-slate-900">{entity.responsibility}</span>
            </div>
          </div>

          {/* Pricing Tiers Comparison */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-display">
              Pilihan Paket Kelengkapan Dokumen
            </h3>

            <div className="grid sm:grid-cols-3 gap-4">
              {/* Paket Dasar */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Paket Dasar</div>
                  <div className="text-xl font-black text-slate-900 font-display mt-1">
                    {formatRupiah(entity.basePrice)}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Kelengkapan legalitas utama siap pakai</p>
                  
                  <div className="mt-4 space-y-2 text-xs text-slate-700">
                    {entity.inclusions.dasar.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={waLinkDasar}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs text-center block transition-colors"
                >
                  Pilih Paket Dasar
                </a>
              </div>

              {/* Paket Lengkap */}
              <div className="p-5 rounded-2xl border-2 border-blue-600 bg-blue-50/40 flex flex-col justify-between relative shadow-md">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  Rekomendasi
                </span>
                <div>
                  <div className="font-bold text-blue-900 text-sm">Paket Lengkap</div>
                  <div className="text-xl font-black text-blue-700 font-display mt-1">
                    {formatRupiah(entity.completePrice)}
                  </div>
                  <p className="text-[11px] text-blue-700 mt-1">Paket Dasar + Cetak Akta, BPJS & DJP Online</p>
                  
                  <div className="mt-4 space-y-2 text-xs text-slate-700">
                    {entity.inclusions.lengkap.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={waLinkLengkap}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center block shadow-md shadow-blue-600/30 transition-colors"
                >
                  Pilih Paket Lengkap
                </a>
              </div>

              {/* Paket Virtual Office */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Paket All-In + VO</div>
                  <div className="text-xl font-black text-emerald-700 font-display mt-1">
                    {formatRupiah(entity.virtualOfficePrice)}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">Paket Lengkap + Virtual Office 1 Tahun</p>
                  
                  <div className="mt-4 space-y-2 text-xs text-slate-700">
                    {entity.inclusions.virtual_office.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectForCalculator(entity.id);
                  }}
                  className="mt-5 w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center block transition-colors cursor-pointer"
                >
                  Simulasikan di Kalkulator
                </button>
              </div>
            </div>
          </div>

          {/* Persyaratan Dokumen Section */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Persyaratan Berkas yang Perlu Disiapkan:
            </h4>
            <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {entity.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{req}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectForCalculator(entity.id);
            }}
            className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Kustomisasi add-on di Kalkulator &rarr;</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
            >
              Tutup
            </button>
            <a
              href={waLinkLengkap}
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Konsultasi WA Notaris</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
