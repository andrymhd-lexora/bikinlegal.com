import React from 'react';
import { 
  Calculator, 
  Sparkles, 
  ChevronRight, 
  Home, 
  ShieldCheck, 
  HelpCircle, 
  FileCheck,
  PhoneCall,
  Clock
} from 'lucide-react';
import { PricingCalculator } from '../PricingCalculator';

interface SimulasiBiayaViewProps {
  selectedEntityId: string;
  onSelectEntity: (id: string) => void;
  onNavigate: (page: any) => void;
}

export const SimulasiBiayaView: React.FC<SimulasiBiayaViewProps> = ({
  selectedEntityId,
  onSelectEntity,
  onNavigate
}) => {
  return (
    <div className="bg-slate-900 min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
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
            <span className="text-blue-400 font-semibold">Simulasi Biaya</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 text-xs font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Kalkulator & Simulator Biaya Transparan</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
              Simulasi Biaya Pendirian Usaha
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Rancang kebutuhan badan usaha Anda secara fleksibel. Pilih tingkat paket, tambahkan perizinan ekstra, dan dapatkan rincian estimasi biaya secara instan dan transparan tanpa biaya tersembunyi.
            </p>
          </div>
        </div>
      </div>

      {/* Main Pricing Calculator Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <PricingCalculator 
          selectedEntityId={selectedEntityId}
          onSelectEntity={onSelectEntity}
        />
      </div>

      {/* Value Proposition Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-300">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-1 font-display">Biaya Pasti (All-In Nett)</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Biaya yang tercantum sudah mencakup honorarium notaris, biaya PNBP Kemenkumham, penerbitan NPWP, hingga NIB OSS-RBA resmi.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-1 font-display">Estimasi Waktu Tepat</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Proses pengerjaan cepat mulai dari 1-2 hari kerja (PT Perorangan) hingga 3-5 hari kerja (PT Biasa & CV) dengan tracking status berkala.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-300">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-1 font-display">Konsultasi Draf Notaris</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Konsultasikan draft anggaran dasar, susunan pengurus, dan pilihan kode KBLI 2020 bersama tim konsultan kami sebelum akta difinalisasi.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
