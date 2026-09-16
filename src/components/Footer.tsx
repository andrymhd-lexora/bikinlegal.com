import React from 'react';
import { 
  Shield, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ExternalLink,
  Building,
  Heart,
  BadgeCheck
} from 'lucide-react';
import { PageType } from './Navbar';
import { Logo } from './Logo';

interface FooterProps {
  onSelectEntity: (entityId: string) => void;
  onOpenNameChecker: () => void;
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onSelectEntity, 
  onOpenNameChecker,
  onNavigate 
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('beranda')}
              className="flex items-center text-left cursor-pointer focus:outline-none"
            >
              <Logo size="lg" theme="dark" showText={true} showTagline={false} />
            </button>

            {/* Legal Trademark & Corporate Ownership Banner */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs">
                <BadgeCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Legalitas & Kepemilikan Merek:</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                <strong className="text-white">BikinLegal.com</strong> adalah merek produk dan platform layanan legalitas resmi milik <strong className="text-white">PT. Bikin Legalitas Bisnis</strong>.
              </p>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Platform layanan legalitas usaha dan pendirian badan hukum terpercaya di Indonesia. Bermitra resmi dengan notaris berpengalaman untuk memberikan kepastian hukum, kecepatan, dan transparansi biaya bagi UMKM hingga korporasi.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Jl. Bungur 1D, Kebayoran Lama, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CS Hotline Konsultasi: 0858-3083-1654</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email: info@bikinlegal.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Jam Kerja: Senin – Sabtu, 08.00 – 20.00 WIB</span>
              </div>
            </div>
          </div>

          {/* Col 2: Layanan Pendirian PT */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Perseroan Terbatas (PT)
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectEntity('pt-perorangan');
                    onNavigate('simulasi-biaya');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  PT Perorangan (Rp 750rb)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectEntity('pt-mikro-kecil');
                    onNavigate('simulasi-biaya');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  PT Modal &lt; Rp 1 Miliar (Rp 4.5jt)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectEntity('pt-menengah');
                    onNavigate('simulasi-biaya');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  PT Modal Rp 1–5 Miliar (Rp 6.5jt)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectEntity('pt-besar');
                    onNavigate('simulasi-biaya');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  PT Modal &gt; Rp 5 Miliar (Rp 8.5jt)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenNameChecker}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-left cursor-pointer flex items-center gap-1"
                >
                  <span>Cek Nama PT Gratis</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Kemitraan & Organisasi */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Badan Usaha Lainnya
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectEntity('cv');
                    onNavigate('simulasi-biaya');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  CV Komanditer (Rp 4jt)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectEntity('firma');
                    onNavigate('simulasi-biaya');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Firma Perdagangan (Rp 4jt)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectEntity('persekutuan-perdata');
                    onNavigate('simulasi-biaya');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Persekutuan Perdata (Rp 4jt)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectEntity('yayasan');
                    onNavigate('simulasi-biaya');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Yayasan Sosial / Amal (Rp 5jt)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectEntity('perkumpulan');
                    onNavigate('simulasi-biaya');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Perkumpulan / Asosiasi (Rp 5jt)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSelectEntity('koperasi');
                    onNavigate('simulasi-biaya');
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Koperasi Primer (Rp 6.5jt)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Layanan Izin & Fitur */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Layanan & Menu
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('paket-harga')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Katalog Paket & Harga Resmi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('simulasi-biaya')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Kalkulator Simulasi Biaya
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('layanan-ekstra')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Layanan Ekstra & Perizinan Khusus
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('alur-proses')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Alur Proses 4 Langkah
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('syarat')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Syarat & Dokumen
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Tanya Jawab (FAQ)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Integration / Compliance Partners */}
        <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="font-bold text-slate-300 block">Kemenkumham RI</span>
            <span className="text-[10px] text-slate-500">Ditjen AHU Online</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="font-bold text-slate-300 block">BKPM / Kementerian Investasi</span>
            <span className="text-[10px] text-slate-500">Sistem OSS Berbasis Risiko</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="font-bold text-slate-300 block">Ditjen Pajak RI</span>
            <span className="text-[10px] text-slate-500">NPWP 16 Digit & E-Faktur</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="font-bold text-slate-300 block">Ikatan Notaris Indonesia</span>
            <span className="text-[10px] text-slate-500">Notaris Berizin Resmi</span>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-semibold">BikinLegal.com</span> — Merek & Layanan Resmi milik <span className="text-slate-300 font-semibold">PT. Bikin Legalitas Bisnis</span>. Hak Cipta Dilindungi Undang-Undang Republik Indonesia.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Syarat & Ketentuan</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Garansi Keabsahan Dokumen</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
