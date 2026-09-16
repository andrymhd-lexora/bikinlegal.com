import React from 'react';
import { 
  Workflow, 
  ChevronRight, 
  Home, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileCheck,
  PhoneCall,
  ArrowRight
} from 'lucide-react';
import { ProcessFlow } from '../ProcessFlow';
import { generateWhatsAppLink } from '../../utils/formatters';

interface AlurProsesViewProps {
  onNavigate: (page: any) => void;
  onOpenNameChecker: () => void;
}

export const AlurProsesView: React.FC<AlurProsesViewProps> = ({
  onNavigate,
  onOpenNameChecker
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
            <span className="text-sky-400 font-semibold">Alur Proses</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold mb-4">
              <Workflow className="w-4 h-4" />
              <span>SOP Standar Notaris Terintegrasi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
              Alur & Tahapan Pendirian Usaha
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              4 langkah mudah dan transparan dari awal pengecekan nama usaha di AHU Kemenkumham, pembuatan Akta Notaris, penerbitan NPWP, hingga izin usaha NIB OSS-RBA resmi siap pakai.
            </p>
          </div>
        </div>
      </div>

      {/* Main Process Flow Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <ProcessFlow 
          onStartProcess={() => onNavigate('simulasi-biaya')}
          onOpenNameChecker={onOpenNameChecker}
        />
      </div>

      {/* CTA Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white font-display">
              Siap Memulai Langkah Pertama Anda Hari Ini?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Cek nama PT Anda sekarang tanpa dipungut biaya, atau hubungi konsultan kami untuk panduan pemilihan bidang KBLI 2020.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenNameChecker}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              Cek Nama PT Sekarang
            </button>
            <a
              href={generateWhatsAppLink({
                entityName: 'Konsultasi Alur Proses',
                tierName: 'Konsultasi Awal',
                totalPrice: 0
              })}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Notaris</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
