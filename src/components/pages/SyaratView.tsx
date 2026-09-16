import React from 'react';
import { 
  FileText, 
  ChevronRight, 
  Home, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Download,
  PhoneCall,
  ArrowRight
} from 'lucide-react';
import { DocumentRequirements } from '../DocumentRequirements';
import { generateWhatsAppLink } from '../../utils/formatters';

interface SyaratViewProps {
  onNavigate: (page: any) => void;
}

export const SyaratView: React.FC<SyaratViewProps> = ({ onNavigate }) => {
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
            <span className="text-teal-400 font-semibold">Syarat Dokumen</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-semibold mb-4">
              <FileText className="w-4 h-4" />
              <span>Panduan Persyaratan Dokumen Resmi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
              Syarat & Dokumen Pendirian Usaha
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Cukup siapkan foto KTP, NPWP, dan ide nama usaha Anda. Kami bantu verifikasi format dan validasi berkas secara online tanpa perlu datang ke kantor notaris.
            </p>
          </div>
        </div>
      </div>

      {/* Main Document Requirements Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <DocumentRequirements />
      </div>

      {/* Upload Guidance Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white font-display">
              Ingin Berkas Anda Diperiksa Tim Notaris Terlebih Dahulu?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Kirimkan foto dokumen Anda via WhatsApp. Tim kami akan memverifikasi kesesuaian data NIK & NPWP di Dukcapil & DJP secara gratis.
            </p>
          </div>
          <a
            href={generateWhatsAppLink({
              entityName: 'Verifikasi Berkas Persyaratan',
              tierName: 'Pengecekan Dokumen Gratis',
              totalPrice: 0
            })}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shrink-0 flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Kirim Berkas via WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
};
