import React from 'react';
import { 
  HelpCircle, 
  ChevronRight, 
  Home, 
  PhoneCall,
  Search,
  MessageCircle
} from 'lucide-react';
import { FAQ } from '../FAQ';
import { generateWhatsAppLink } from '../../utils/formatters';

interface FAQViewProps {
  onNavigate: (page: any) => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onNavigate }) => {
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
            <span className="text-blue-400 font-semibold">Tanya Jawab (FAQ)</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-semibold mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Pusat Bantuan & FAQ Legalitas</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Temukan jawaban lengkap seputar hukum perseroan, proses pendirian PT/CV, zonasi Virtual Office, perpajakan badan usaha, dan prosedur notaris.
            </p>
          </div>
        </div>
      </div>

      {/* Main FAQ Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <FAQ />
      </div>

    </div>
  );
};
