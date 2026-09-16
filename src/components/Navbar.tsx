import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, 
  Menu, 
  X, 
  PhoneCall, 
  Search, 
  Calculator, 
  Sparkles,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Layers,
  FileText,
  Workflow,
  HelpCircle,
  Award,
  Building2,
  Home
} from 'lucide-react';
import { generateWhatsAppLink } from '../utils/formatters';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

export type PageType = 
  | 'beranda' 
  | 'paket-harga' 
  | 'simulasi-biaya' 
  | 'rekomendasi-usaha' 
  | 'layanan-ekstra' 
  | 'alur-proses' 
  | 'syarat' 
  | 'faq';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenNameChecker: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage,
  onNavigate,
  onOpenNameChecker 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLayananDropdownOpen, setIsLayananDropdownOpen] = useState(false);
  const [isMobileLayananOpen, setIsMobileLayananOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const defaultWALink = generateWhatsAppLink({
    entityName: 'Konsultasi Legalitas Usaha Umum',
    tierName: 'Konsultasi Gratis Awal',
    totalPrice: 0
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLayananDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setIsLayananDropdownOpen(false);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLayananActive = [
    'paket-harga',
    'simulasi-biaya',
    'rekomendasi-usaha',
    'layanan-ekstra',
    'alur-proses',
    'syarat'
  ].includes(currentPage);

  return (
    <>
      {/* Top Banner Notice */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <div className="bg-slate-900 dark:bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Resmi AHU Kemenkumham
              </span>
              <span className="hidden sm:inline text-slate-400">|</span>
              <span className="hidden sm:inline text-slate-300">
                Notaris Berizin Resmi & Terintegrasi OSS RBA BKPM RI
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Konsultan Online: <strong className="text-white font-medium">Senin - Sabtu (08:00 - 20:00)</strong>
              </span>
              <a 
                href={defaultWALink}
                target="_blank" 
                rel="noreferrer" 
                className="hidden md:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                CS Hotline: 0858-3083-1654
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavClick('beranda')}
              className="flex items-center group text-left cursor-pointer focus:outline-none"
            >
              <Logo size="md" showText={true} showTagline={true} />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold">
              {/* Beranda */}
              <button
                type="button"
                onClick={() => handleNavClick('beranda')}
                className={`py-2 px-3 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentPage === 'beranda'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Beranda</span>
              </button>

              {/* Layanan Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsLayananDropdownOpen(!isLayananDropdownOpen)}
                  onMouseEnter={() => setIsLayananDropdownOpen(true)}
                  className={`py-2 px-3.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    isLayananActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                  aria-expanded={isLayananDropdownOpen}
                >
                  <Layers className="w-4 h-4" />
                  <span>Layanan</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLayananDropdownOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu */}
                {isLayananDropdownOpen && (
                  <div 
                    onMouseLeave={() => setIsLayananDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-3 pb-2 mb-1 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Menu & Modul Layanan
                      </span>
                    </div>

                    <div className="space-y-1 px-2">
                      {/* 1. Paket & Harga */}
                      <button
                        type="button"
                        onClick={() => handleNavClick('paket-harga')}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3 transition-colors cursor-pointer ${
                          currentPage === 'paket-harga'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">Paket & Harga</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">Katalog 10 entitas & harga resmi</div>
                        </div>
                      </button>

                      {/* 2. Simulasi Biaya */}
                      <button
                        type="button"
                        onClick={() => handleNavClick('simulasi-biaya')}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3 transition-colors cursor-pointer ${
                          currentPage === 'simulasi-biaya'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <Calculator className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">Simulasi Biaya</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">Kalkulator biaya & add-on live</div>
                        </div>
                      </button>

                      {/* 3. Rekomendasi Usaha */}
                      <button
                        type="button"
                        onClick={() => handleNavClick('rekomendasi-usaha')}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3 transition-colors cursor-pointer ${
                          currentPage === 'rekomendasi-usaha'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">Rekomendasi Usaha</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">Quiz pemilihan bentuk badan usaha</div>
                        </div>
                      </button>

                      {/* 4. Layanan Ekstra & Perizinan */}
                      <button
                        type="button"
                        onClick={() => handleNavClick('layanan-ekstra')}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3 transition-colors cursor-pointer ${
                          currentPage === 'layanan-ekstra'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">Layanan Ekstra & Perizinan</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">HKI, PKP, VO, ISO, Halal, Akta</div>
                        </div>
                      </button>

                      {/* 5. Alur Proses */}
                      <button
                        type="button"
                        onClick={() => handleNavClick('alur-proses')}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3 transition-colors cursor-pointer ${
                          currentPage === 'alur-proses'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                          <Workflow className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">Alur Proses</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">4 Langkah SOP resmi notaris</div>
                        </div>
                      </button>

                      {/* 6. Syarat */}
                      <button
                        type="button"
                        onClick={() => handleNavClick('syarat')}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3 transition-colors cursor-pointer ${
                          currentPage === 'syarat'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold leading-tight">Syarat</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">Panduan kelengkapan berkas KTP/NPWP</div>
                        </div>
                      </button>

                      {/* 7. Cek Nama PT */}
                      <button
                        type="button"
                        onClick={() => {
                          setIsLayananDropdownOpen(false);
                          onOpenNameChecker();
                        }}
                        className="w-full text-left p-2.5 rounded-xl flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                          <Search className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-bold leading-tight flex items-center justify-between">
                            <span>Cek Nama PT</span>
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                              Gratis
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">Validasi aturan Ditjen AHU</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ */}
              <button
                type="button"
                onClick={() => handleNavClick('faq')}
                className={`py-2 px-3 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentPage === 'faq'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>FAQ</span>
              </button>
            </nav>

            {/* Desktop Action CTAs & Theme Toggle */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Dark Mode Toggle Button */}
              <ThemeToggle />

              {/* Cek Nama PT CTA */}
              <button
                type="button"
                onClick={onOpenNameChecker}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
              >
                <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Cek Nama PT</span>
              </button>

              {/* Konsultasi WA CTA */}
              <a
                href={defaultWALink}
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-sm shadow-emerald-600/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Konsultasi WA</span>
              </a>
            </div>

            {/* Mobile Hamburger & Theme Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
                <Logo size="sm" showText={true} showTagline={false} showOwnership={true} />
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Links */}
              <div className="py-4 space-y-1">
                {/* Beranda */}
                <button
                  type="button"
                  onClick={() => handleNavClick('beranda')}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                    currentPage === 'beranda'
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Home className="w-4 h-4" />
                    Beranda
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                {/* Layanan Accordion */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsMobileLayananOpen(!isMobileLayananOpen)}
                    className="w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold text-slate-900 dark:text-slate-100 bg-slate-100/70 dark:bg-slate-800/70"
                  >
                    <span className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Layanan
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isMobileLayananOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isMobileLayananOpen && (
                    <div className="pl-3 pr-1 py-2 space-y-1 mt-1 border-l-2 border-blue-100 dark:border-blue-900 ml-3">
                      <button
                        type="button"
                        onClick={() => handleNavClick('paket-harga')}
                        className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-colors ${
                          currentPage === 'paket-harga'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                          Paket & Harga
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleNavClick('simulasi-biaya')}
                        className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-colors ${
                          currentPage === 'simulasi-biaya'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Calculator className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          Simulasi Biaya
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleNavClick('rekomendasi-usaha')}
                        className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-colors ${
                          currentPage === 'rekomendasi-usaha'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          Rekomendasi Usaha
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleNavClick('layanan-ekstra')}
                        className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-colors ${
                          currentPage === 'layanan-ekstra'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                          Layanan Ekstra & Perizinan
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleNavClick('alur-proses')}
                        className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-colors ${
                          currentPage === 'alur-proses'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Workflow className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                          Alur Proses
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleNavClick('syarat')}
                        className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-colors ${
                          currentPage === 'syarat'
                            ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                          Syarat
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          onOpenNameChecker();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                          <Search className="w-3.5 h-3.5" />
                          Cek Nama PT
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                          Gratis
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                {/* FAQ */}
                <button
                  type="button"
                  onClick={() => handleNavClick('faq')}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                    currentPage === 'faq'
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4" />
                    FAQ
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenNameChecker();
                }}
                className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Cek Ketersediaan Nama PT</span>
              </button>
              <a
                href={defaultWALink}
                target="_blank" 
                rel="noreferrer" 
                className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi WhatsApp Notaris</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


