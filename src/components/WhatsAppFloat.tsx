import React, { useState } from 'react';
import { MessageCircle, X, ShieldCheck } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/formatters';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultWALink = generateWhatsAppLink({
    entityName: 'Konsultasi Legalitas Cepat',
    tierName: 'Konsultasi WhatsApp',
    totalPrice: 0
  });

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">Konsultan BikinLegal.com</div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  Online - Respon Cepat (PT. Bikin Legalitas Bisnis)
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-emerald-700/50"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-slate-50 text-xs text-slate-700 space-y-3">
            <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm leading-relaxed">
              👋 Halo! Butuh bantuan mendirikan PT, CV, atau cek nama PT di AHU Kemenkumham?
              <div className="text-[10px] text-slate-400 mt-1.5 text-right">Tim Legal BikinLegal.com</div>
            </div>

            <a
              href={defaultWALink}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/30 transition-all hover:scale-[1.02] block text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Mulai Chat WhatsApp Sekarang</span>
            </a>

            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Didampingi Konsultan Hukum & Notaris Resmi</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-xl shadow-emerald-600/40 transition-all hover:scale-110 active:scale-95 group cursor-pointer relative"
        aria-label="Hubungi kami di WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-[9px] font-black text-white">
          1
        </span>
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </div>
  );
};
