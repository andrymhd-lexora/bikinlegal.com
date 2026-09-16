import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Zap, 
  Building2, 
  Handshake, 
  FileCheck, 
  Lock,
  Sparkles,
  Users
} from 'lucide-react';
import { formatRupiah, generateWhatsAppLink } from '../utils/formatters';

interface HeroProps {
  onCheckName: (name: string) => void;
  onSelectEntity: (entityId: string) => void;
  onOpenNameCheckerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onCheckName, 
  onSelectEntity,
  onOpenNameCheckerModal
}) => {
  const [heroSearchInput, setHeroSearchInput] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearchInput.trim()) {
      onCheckName(heroSearchInput.trim());
    } else {
      onOpenNameCheckerModal();
    }
  };

  const consultationLink = generateWhatsAppLink({
    entityName: 'Konsultasi Legalitas Usaha',
    tierName: 'Konsultasi Awal',
    totalPrice: 0
  });

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Background Glow & Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/20 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Promo / Authority Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>BikinLegal.com • Merek Resmi PT. Bikin Legalitas Bisnis</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] font-display">
              Bikin PT, CV & Legalitas Usaha <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                Mudah, Cepat & 100% Sah
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Proses pendirian badan usaha resmi dengan Akta Notaris, SK Kemenkumham, NPWP 16 Digit & NIB OSS-RBA. Dikerjakan langsung oleh notaris berizin tanpa ribet.
            </p>

            {/* Interactive Name Check Quick Input */}
            <div className="pt-2 max-w-xl mx-auto lg:mx-0">
              <form 
                onSubmit={handleHeroSubmit}
                className="p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl flex flex-col sm:flex-row gap-2"
              >
                <div className="relative flex-1 flex items-center">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={heroSearchInput}
                    onChange={(e) => setHeroSearchInput(e.target.value)}
                    placeholder="Ketik ide nama PT Anda (min. 3 kata)..."
                    className="w-full pl-11 pr-4 py-3 bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Cek Nama</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <div className="flex items-center justify-between text-[12px] text-slate-400 px-2 pt-2">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Pengecekan langsung ke database AHU
                </span>
                <button 
                  type="button" 
                  onClick={onOpenNameCheckerModal}
                  className="text-blue-300 hover:text-white underline font-medium cursor-pointer"
                >
                  Panduan aturan nama PT &rarr;
                </button>
              </div>
            </div>

            {/* Quick Price Cards / Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0">
              <div 
                onClick={() => onSelectEntity('pt-perorangan')}
                className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/50 transition-all text-left cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider">1 Pendiri</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors">PT Perorangan</div>
                <div className="text-xs text-slate-400 mt-0.5">Mulai dari</div>
                <div className="text-base font-black text-emerald-400 font-display">Rp 750.000</div>
              </div>

              <div 
                onClick={() => onSelectEntity('cv')}
                className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-teal-500/50 transition-all text-left cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-teal-300 uppercase tracking-wider">Kemitraan</span>
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                </div>
                <div className="font-bold text-sm text-white group-hover:text-teal-300 transition-colors">CV Komanditer</div>
                <div className="text-xs text-slate-400 mt-0.5">Mulai dari</div>
                <div className="text-base font-black text-teal-300 font-display">Rp 4.000.000</div>
              </div>

              <div 
                onClick={() => onSelectEntity('pt-mikro-kecil')}
                className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 transition-all text-left cursor-pointer group col-span-2 sm:col-span-1"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider">Min. 2 Orang</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                </div>
                <div className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">PT Modal &lt;1M</div>
                <div className="text-xs text-slate-400 mt-0.5">Mulai dari</div>
                <div className="text-base font-black text-amber-300 font-display">Rp 4.500.000</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Sah AHU Kemenkumham
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-blue-400" />
                Garansi Uang Kembali
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                Proses Kilat 1–5 Hari Kerja
              </span>
            </div>
          </div>

          {/* Right Hero Card / Visual Interactive Widget */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-5 mb-5">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Legalitas Siap Pakai</span>
                  <h2 className="text-lg font-bold text-white font-display">Paket Pendirian Usaha Lengkap</h2>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Terupdate 2026
                </span>
              </div>

              {/* What Client Gets Checklist */}
              <div className="space-y-3.5 mb-6 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Akta Notaris & SK Kemenkumham RI</strong>
                    <span className="text-xs text-slate-400">Surat Keputusan Pengesahan Badan Hukum resmi Ditjen AHU</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">NPWP Badan & SKT Pajak 16 Digit</strong>
                    <span className="text-xs text-slate-400">Terdaftar resmi di Kantor Pelayanan Pajak (KPP)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">NIB (Nomor Induk Berusaha) OSS-RBA</strong>
                    <span className="text-xs text-slate-400">Izin usaha terintegrasi, Hak Akses OSS & Sertifikat Standar KBLI</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Rekening Giro Bank VIP Fast-Track</strong>
                    <span className="text-xs text-slate-400">Pengantar pembukaan rekening bank prioritas BCA/Mandiri/BRI/BNI</span>
                  </div>
                </div>
              </div>

              {/* Action Box inside Hero Card */}
              <div className="p-4 rounded-2xl bg-blue-950/50 border border-blue-800/40 mb-5">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                  <span>Konsultasi Legalitas Bersama Ahli:</span>
                  <span className="font-bold text-emerald-400">GRATIS</span>
                </div>
                <div className="text-xs text-slate-400">
                  Dapatkan rekomendasi bentuk badan usaha & pemilihan kode KBLI 2020 yang tepat untuk bidang bisnis Anda.
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5">
                <a
                  href={consultationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Handshake className="w-4 h-4" />
                  Konsultasi Gratis via WhatsApp
                </a>
                <a
                  href="#layanan"
                  className="w-full py-3 px-5 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Lihat Seluruh Daftar Paket & Harga</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Social Proof Footer inside Card */}
              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1.5">
                    <img className="w-6 h-6 rounded-full border-2 border-slate-800" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80" alt="Client" />
                    <img className="w-6 h-6 rounded-full border-2 border-slate-800" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80" alt="Client" />
                    <img className="w-6 h-6 rounded-full border-2 border-slate-800" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&auto=format&fit=crop&q=80" alt="Client" />
                  </div>
                  <span className="font-medium text-slate-300">5.800+ Klien Aktif</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-bold text-white">4.9</span>
                  <span className="text-slate-400">/ 5.0</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
