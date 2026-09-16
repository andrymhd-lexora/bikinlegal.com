import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Check, 
  Sparkles, 
  Building, 
  Building2, 
  ShieldCheck, 
  Plus, 
  ArrowRight, 
  Copy, 
  CheckCheck,
  Send,
  HelpCircle,
  Clock,
  FileText,
  BadgePercent
} from 'lucide-react';
import { LEGAL_ENTITIES, ADDON_SERVICES } from '../data/legalData';
import { PackageTier, AddonService } from '../types';
import { formatRupiah, generateWhatsAppLink } from '../utils/formatters';

interface PricingCalculatorProps {
  selectedEntityId?: string;
  onSelectEntity?: (id: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ 
  selectedEntityId = 'pt-mikro-kecil',
  onSelectEntity 
}) => {
  const [currentEntityId, setCurrentEntityId] = useState<string>(selectedEntityId);
  const [selectedTier, setSelectedTier] = useState<PackageTier>('dasar');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [proposedCompanyName, setProposedCompanyName] = useState('');
  const [city, setCity] = useState('Jakarta / Jabodetabek');
  const [isCopied, setIsCopied] = useState(false);

  // Sync prop if changed externally
  React.useEffect(() => {
    if (selectedEntityId) {
      setCurrentEntityId(selectedEntityId);
    }
  }, [selectedEntityId]);

  const currentEntity = useMemo(() => {
    return LEGAL_ENTITIES.find(e => e.id === currentEntityId) || LEGAL_ENTITIES[0];
  }, [currentEntityId]);

  // Calculate Base Price according to tier
  const packagePrice = useMemo(() => {
    switch (selectedTier) {
      case 'dasar':
        return currentEntity.basePrice;
      case 'lengkap':
        return currentEntity.completePrice;
      case 'virtual_office':
        return currentEntity.virtualOfficePrice;
      default:
        return currentEntity.basePrice;
    }
  }, [currentEntity, selectedTier]);

  // Calculate Addon total
  const addonsTotal = useMemo(() => {
    return selectedAddons.reduce((sum, addonId) => {
      const addon = ADDON_SERVICES.find(a => a.id === addonId);
      return sum + (addon ? addon.price : 0);
    }, 0);
  }, [selectedAddons]);

  const grandTotal = packagePrice + addonsTotal;

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId) 
        : [...prev, addonId]
    );
  };

  const getTierLabel = (tier: PackageTier) => {
    switch (tier) {
      case 'dasar': return 'Paket Dasar (Akta, SK, NPWP, NIB)';
      case 'lengkap': return 'Paket Lengkap (+ Akta Cetak, BPJS, DJP Online, Rekening)';
      case 'virtual_office': return 'Paket All-In Virtual Office (+ Domisili Gedung 1 Thn)';
    }
  };

  const selectedAddonNames = useMemo(() => {
    return selectedAddons
      .map(id => ADDON_SERVICES.find(a => a.id === id)?.name)
      .filter(Boolean) as string[];
  }, [selectedAddons]);

  const whatsappURL = generateWhatsAppLink({
    entityName: currentEntity.name,
    tierName: getTierLabel(selectedTier),
    totalPrice: grandTotal,
    addons: selectedAddonNames,
    companyName: proposedCompanyName,
    userName: applicantName,
    userPhone: applicantPhone,
    city: city
  });

  const handleCopyQuotation = () => {
    const text = `ESTIMASI BIAYA LEGALITAS - BIKINLEGAL.COM
(Merek resmi PT. Bikin Legalitas Bisnis)
========================================
Badan Usaha : ${currentEntity.name}
Pilihan Paket : ${getTierLabel(selectedTier)}
Biaya Paket  : ${formatRupiah(packagePrice)}
${selectedAddonNames.length > 0 ? `\nLayanan Tambahan:\n` + selectedAddonNames.map((name, i) => `${i + 1}. ${name}`).join('\n') + `\nBiaya Addon  : ${formatRupiah(addonsTotal)}` : ''}
----------------------------------------
TOTAL BIAYA  : ${formatRupiah(grandTotal)}
Estimasi Waktu: ${currentEntity.processingTime}
100% Sah & Terdaftar di AHU Kemenkumham RI`;

    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="kalkulator" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-semibold mb-3">
            <Calculator className="w-4 h-4" />
            <span>Kalkulator & Simulator Biaya Transparan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
            Hitung Estimasi Biaya Legalitas Sesuai Kebutuhan
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Pilih bentuk badan usaha, paket kelengkapan dokumen, dan layanan tambahan. Dapatkan rincian biaya pasti tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Configuration Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Choose Legal Entity */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                    1
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    Pilih Bentuk Badan Usaha
                  </h3>
                </div>
                <span className="text-xs text-slate-400">10 Pilihan Entitas Resmi</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {LEGAL_ENTITIES.map((entity) => {
                  const isSelected = entity.id === currentEntityId;
                  return (
                    <button
                      key={entity.id}
                      type="button"
                      onClick={() => {
                        setCurrentEntityId(entity.id);
                        if (onSelectEntity) onSelectEntity(entity.id);
                      }}
                      className={`p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                        isSelected 
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md shadow-blue-500/10 ring-1 ring-blue-500' 
                          : 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/60 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-sm text-white leading-snug">
                          {entity.name}
                        </span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex items-baseline justify-between pt-1 border-t border-slate-700/50">
                        <span className="text-[11px] text-slate-400">Mulai dari</span>
                        <span className={`text-sm font-extrabold ${isSelected ? 'text-blue-300' : 'text-emerald-400'} font-display`}>
                          {formatRupiah(entity.basePrice)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Tier Package */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                    2
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    Pilih Kelengkapan Paket
                  </h3>
                </div>
                <span className="text-xs text-slate-400">Tingkat Layanan</span>
              </div>

              <div className="space-y-3">
                {/* Tier 1: Dasar */}
                <div
                  onClick={() => setSelectedTier('dasar')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedTier === 'dasar'
                      ? 'bg-blue-600/15 border-blue-500 ring-1 ring-blue-500'
                      : 'bg-slate-800/40 border-slate-700 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedTier === 'dasar' ? 'border-blue-400 bg-blue-500 text-white' : 'border-slate-500'}`}>
                        {selectedTier === 'dasar' && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Paket Dasar (Standard)</div>
                        <div className="text-xs text-slate-400">Akta Notaris, SK Kemenkumham, NPWP 16 Digit & NIB OSS RBA</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-extrabold text-white font-display">
                        {formatRupiah(currentEntity.basePrice)}
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold">Harga Dasar</span>
                    </div>
                  </div>
                </div>

                {/* Tier 2: Lengkap */}
                <div
                  onClick={() => setSelectedTier('lengkap')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                    selectedTier === 'lengkap'
                      ? 'bg-blue-600/15 border-blue-500 ring-1 ring-blue-500'
                      : 'bg-slate-800/40 border-slate-700 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedTier === 'lengkap' ? 'border-blue-400 bg-blue-500 text-white' : 'border-slate-500'}`}>
                        {selectedTier === 'lengkap' && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">Paket Lengkap Siap Operasi</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                            Paling Populer
                          </span>
                        </div>
                        <div className="text-xs text-slate-400">Paket Dasar + Buku Akta Cetak, BPJS, Akun Pajak DJP Online & Pengantar Rekening Bank VIP</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-extrabold text-amber-300 font-display">
                        {formatRupiah(currentEntity.completePrice)}
                      </div>
                      <span className="text-[10px] text-slate-400">All-in Dokumen</span>
                    </div>
                  </div>
                </div>

                {/* Tier 3: Virtual Office */}
                <div
                  onClick={() => setSelectedTier('virtual_office')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedTier === 'virtual_office'
                      ? 'bg-blue-600/15 border-blue-500 ring-1 ring-blue-500'
                      : 'bg-slate-800/40 border-slate-700 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedTier === 'virtual_office' ? 'border-blue-400 bg-blue-500 text-white' : 'border-slate-500'}`}>
                        {selectedTier === 'virtual_office' && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">Paket All-In + Virtual Office 1 Tahun</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-300 font-bold border border-blue-400/30">
                            Bebas Zonasi
                          </span>
                        </div>
                        <div className="text-xs text-slate-400">Paket Lengkap + Sewa Domisili Gedung CBD 1 Tahun, Resepsionis & Surat Resmi Gedung</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-extrabold text-blue-300 font-display">
                        {formatRupiah(currentEntity.virtualOfficePrice)}
                      </div>
                      <span className="text-[10px] text-slate-400">Termasuk Alamat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Select Optional Add-ons */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                    3
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    Layanan Tambahan (Add-Ons)
                  </h3>
                </div>
                <span className="text-xs text-slate-400">Opsional Sesuai Kebutuhan</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDON_SERVICES.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isChecked 
                          ? 'bg-emerald-950/40 border-emerald-500/80 ring-1 ring-emerald-500/50' 
                          : 'bg-slate-800/40 border-slate-700/80 hover:bg-slate-700/40'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-bold text-xs sm:text-sm text-white leading-tight">
                            {addon.name}
                          </span>
                          <div className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${isChecked ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-slate-500'}`}>
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">
                          {addon.description}
                        </p>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-slate-700/60 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">Tambahan Biaya:</span>
                        <div className="flex items-center gap-1.5">
                          {addon.originalPrice && (
                            <span className="text-[10px] text-slate-500 line-through">
                              {formatRupiah(addon.originalPrice)}
                            </span>
                          )}
                          <span className="text-xs font-bold text-emerald-400">
                            +{formatRupiah(addon.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary / Live Invoice Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-slate-800 border-2 border-slate-700 p-6 sm:p-7 shadow-2xl space-y-6">
              
              <div className="border-b border-slate-700 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Ringkasan Estimasi</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Garansi Harga Transparan
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1 font-display">
                  {currentEntity.name}
                </h3>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Estimasi Pengerjaan: <strong className="text-slate-200">{currentEntity.processingTime}</strong></span>
                </div>
              </div>

              {/* Price Calculation Items */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start text-slate-300">
                  <div>
                    <span className="font-semibold text-white block">Biaya Paket ({selectedTier.toUpperCase()})</span>
                    <span className="text-xs text-slate-400">{getTierLabel(selectedTier)}</span>
                  </div>
                  <span className="font-bold text-white">{formatRupiah(packagePrice)}</span>
                </div>

                {selectedAddonNames.length > 0 && (
                  <div className="pt-2 border-t border-slate-700/60">
                    <div className="text-xs font-semibold text-slate-400 mb-1.5">Layanan Tambahan Terpilih:</div>
                    {selectedAddons.map(id => {
                      const addon = ADDON_SERVICES.find(a => a.id === id);
                      if (!addon) return null;
                      return (
                        <div key={id} className="flex justify-between text-xs text-slate-300 py-1">
                          <span className="flex items-center gap-1.5">
                            <Plus className="w-3 h-3 text-emerald-400" />
                            {addon.name}
                          </span>
                          <span className="text-slate-200 font-medium">{formatRupiah(addon.price)}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Total Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/60 to-slate-900 border border-blue-500/40">
                <div className="flex items-center justify-between mb-1 text-xs text-blue-200 font-medium">
                  <span>TOTAL ESTIMASI INVESTASI:</span>
                  <span className="text-emerald-300">Termasuk PNBP & Notaris</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl sm:text-3xl font-black text-white font-display">
                    {formatRupiah(grandTotal)}
                  </span>
                  <span className="text-xs text-slate-400 font-normal">Nett / All-in</span>
                </div>
              </div>

              {/* Direct Booking Data Inputs */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Nama Pemohon / Penanggung Jawab
                  </label>
                  <input
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Contoh: Hendra Wijaya"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      No. WhatsApp Aktif
                    </label>
                    <input
                      type="tel"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="08123456789"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Domisili / Kota Usaha
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Jakarta / Surabaya dll"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Rencana Nama Perusahaan (Opsional)
                  </label>
                  <input
                    type="text"
                    value={proposedCompanyName}
                    onChange={(e) => setProposedCompanyName(e.target.value)}
                    placeholder="Contoh: PT Sinar Maju Digital"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesanan ke WhatsApp Notaris</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyQuotation}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <CheckCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Rincian Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Rincian Penawaran (Quotation)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Micro-guarantee */}
              <div className="text-[11px] text-center text-slate-400 pt-1">
                🔒 Tanpa komitmen pembayaran di muka. Konsultasikan draf akta dan pemilihan KBLI terlebih dahulu bersama tim notaris kami.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
