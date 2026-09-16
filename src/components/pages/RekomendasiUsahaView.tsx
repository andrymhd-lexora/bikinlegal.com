import React from 'react';
import { 
  Sparkles, 
  ChevronRight, 
  Home, 
  HelpCircle, 
  Building2, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { EntityQuiz } from '../EntityQuiz';

interface RekomendasiUsahaViewProps {
  onSelectEntity: (entityId: string) => void;
  onNavigate: (page: any) => void;
}

export const RekomendasiUsahaView: React.FC<RekomendasiUsahaViewProps> = ({
  onSelectEntity,
  onNavigate
}) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
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
            <span className="text-amber-400 font-semibold">Rekomendasi Usaha</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Smart Quiz Legalitas Usaha</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
              Cek Rekomendasi Badan Usaha
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Jawab 4 pertanyaan singkat seputar jumlah pendiri, skala modal, dan tujuan bisnis Anda. Sistem kami akan merekomendasikan bentuk badan hukum yang paling efisien, aman, dan hemat biaya.
            </p>
          </div>
        </div>
      </div>

      {/* Main Quiz Widget */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <EntityQuiz 
          onSelectEntity={(entityId) => {
            onSelectEntity(entityId);
            onNavigate('simulasi-biaya');
          }}
        />
      </div>

    </div>
  );
};
