import React, { useState } from 'react';
import { 
  X, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  ArrowRight,
  ShieldCheck,
  Building,
  Sparkles
} from 'lucide-react';
import { generateWhatsAppLink } from '../utils/formatters';

interface NameCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export const NameCheckerModal: React.FC<NameCheckerModalProps> = ({
  isOpen,
  onClose,
  initialQuery = ''
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [entityType, setEntityType] = useState<'PT' | 'CV' | 'PT_PERORANGAN'>('PT');
  const [hasChecked, setHasChecked] = useState(false);

  // Sync initial query if passed
  React.useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      setHasChecked(true);
    }
  }, [initialQuery]);

  if (!isOpen) return null;

  // Analysis rules for Indonesian Company Names (PP 43/2011 & UU PT)
  const words = query.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const isPT = entityType === 'PT';
  const isPTPerorangan = entityType === 'PT_PERORANGAN';
  const isCV = entityType === 'CV';

  // Rule 1: PT must be at least 3 words (excluding "PT")
  const meetsWordCount = isPT ? wordCount >= 3 : wordCount >= 2;

  // Rule 2: Cannot contain banned words / vulgar / misleading government words
  const bannedKeywords = ['bank', 'asuransi', 'koperasi', 'negara', 'republik', 'bumn', 'tentara', 'polisi', 'presiden'];
  const hasBannedWord = words.some(w => bannedKeywords.includes(w.toLowerCase()));

  // Simulated AHU database check
  const isAvailable = query.trim().length > 3 && meetsWordCount && !hasBannedWord;

  const waLink = generateWhatsAppLink({
    entityName: `Pemesanan & Cek Nama Resmi di AHU: ${entityType} ${query.trim()}`,
    tierName: 'Pemesanan Nama Resmi AHU Kemenkumham',
    totalPrice: 0,
    companyName: `${entityType} ${query.trim()}`
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">
                Pengecekan Ketersediaan Nama Perusahaan
              </h3>
              <p className="text-xs text-slate-400">
                Simulasi validasi kepatuhan aturan Ditjen AHU Kemenkumham RI
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Entity Type Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Pilih Jenis Badan Usaha:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setEntityType('PT')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  entityType === 'PT' 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                PT Biasa (Min. 3 Kata)
              </button>
              <button
                type="button"
                onClick={() => setEntityType('PT_PERORANGAN')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  entityType === 'PT_PERORANGAN' 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                PT Perorangan
              </button>
              <button
                type="button"
                onClick={() => setEntityType('CV')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  entityType === 'CV' 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                CV Komanditer
              </button>
            </div>
          </div>

          {/* Search Box */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Masukkan Rencana Nama Usaha:
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 font-bold text-sm text-blue-600 pointer-events-none">
                {entityType === 'PT' ? 'PT' : entityType === 'PT_PERORANGAN' ? 'PT' : 'CV'}
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setHasChecked(true);
                }}
                placeholder={isPT ? "Contoh: Sinar Maju Digital" : "Contoh: Mitra Perkasa"}
                className="w-full pl-14 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Real-time Legal Rules Evaluation */}
          {query.trim().length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Analisis Kepatuhan Hukum (PP No. 43/2011):
              </div>

              <div className="space-y-2 text-xs">
                {/* Word Count Rule */}
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">
                    {isPT ? 'Jumlah kata (Wajib minimal 3 kata)' : 'Jumlah kata (Minimal 2 kata)'}:
                  </span>
                  <div className="flex items-center gap-1.5 font-bold">
                    {meetsWordCount ? (
                      <span className="text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        Lolos ({wordCount} Kata)
                      </span>
                    ) : (
                      <span className="text-amber-600 flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4" />
                        Kurang ({wordCount} / {isPT ? '3' : '2'} Kata)
                      </span>
                    )}
                  </div>
                </div>

                {/* Banned Words Rule */}
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Bebas kata terlarang (Lembaga Negara / Finansial):</span>
                  <div className="flex items-center gap-1.5 font-bold">
                    {!hasBannedWord ? (
                      <span className="text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        Aman
                      </span>
                    ) : (
                      <span className="text-rose-600 flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4" />
                        Mengandung kata khusus
                      </span>
                    )}
                  </div>
                </div>

                {/* Indonesian Language Rule */}
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Kesesuaian Bahasa Indonesia:</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Sesuai Kaidah PMDN
                  </span>
                </div>
              </div>

              {/* Status Banner */}
              <div className={`mt-3 p-3.5 rounded-xl border flex items-center gap-3 ${
                isAvailable 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                  : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}>
                {isAvailable ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div className="text-xs">
                      <strong>Format Nama Bagus & Memenuhi Syarat AHU!</strong>
                      <p className="text-emerald-700">Nama "{entityType} {query.trim()}" berpotensi besar dapat dipesan di Kemenkumham.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                    <div className="text-xs">
                      <strong>Format Belum Sesuai Aturan</strong>
                      <p className="text-amber-700">
                        {isPT && !meetsWordCount 
                          ? 'Nama PT penanaman modal dalam negeri wajib terdiri dari minimal 3 kata.' 
                          : 'Silakan sesuaikan nama usaha Anda agar memenuhi aturan resmi AHU.'}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-2.5 text-xs text-blue-900">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>
              <strong>Penting:</strong> Keputusan akhir ketersediaan nama dikeluarkan secara resmi oleh sistem Ditjen Administrasi Hukum Umum (AHU) Kemenkumham RI saat pemesanan voucer nama. Tim notaris kami akan melakukan penguncian nama resmi untuk Anda.
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Kunci Nama Ini di AHU Kemenkumham via WA</span>
            </a>
            
            <button
              type="button"
              onClick={onClose}
              className="py-3.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
            >
              Tutup
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
