import React, { useState } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  RefreshCw, 
  Building2, 
  Handshake, 
  Building, 
  HeartHandshake,
  Users2,
  ShieldCheck
} from 'lucide-react';
import { LEGAL_ENTITIES } from '../data/legalData';
import { formatRupiah, generateWhatsAppLink } from '../utils/formatters';

interface EntityQuizProps {
  onSelectEntity: (entityId: string) => void;
}

export const EntityQuiz: React.FC<EntityQuizProps> = ({ onSelectEntity }) => {
  const [step, setStep] = useState<number>(1);
  const [foundersCount, setFoundersCount] = useState<string>('1');
  const [capitalRange, setCapitalRange] = useState<string>('micro');
  const [goal, setGoal] = useState<string>('commercial');
  const [liability, setLiability] = useState<string>('limited');
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  const calculateRecommendation = () => {
    setIsCalculated(true);
  };

  const getRecommendedEntityId = () => {
    if (goal === 'social') return 'yayasan';
    if (goal === 'coop') return 'koperasi';
    if (goal === 'association') return 'perkumpulan';
    if (goal === 'profesi') return 'persekutuan-perdata';

    // Commercial
    if (foundersCount === '1') {
      return 'pt-perorangan';
    }

    if (liability === 'personal') {
      return 'cv';
    }

    if (capitalRange === 'micro' || capitalRange === 'small') {
      return 'pt-mikro-kecil';
    } else if (capitalRange === 'medium') {
      return 'pt-menengah';
    } else {
      return 'pt-besar';
    }
  };

  const recommendedId = getRecommendedEntityId();
  const matchedEntity = LEGAL_ENTITIES.find(e => e.id === recommendedId) || LEGAL_ENTITIES[0];

  const handleReset = () => {
    setStep(1);
    setFoundersCount('1');
    setCapitalRange('micro');
    setGoal('commercial');
    setLiability('limited');
    setIsCalculated(false);
  };

  const waLink = generateWhatsAppLink({
    entityName: `Hasil Rekomendasi Quiz: ${matchedEntity.name}`,
    tierName: 'Paket Dasar',
    totalPrice: matchedEntity.basePrice
  });

  return (
    <section id="cek-usaha" className="py-20 bg-white border-y border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-3">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Smart Legal Matcher</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Cek Bentuk Usaha yang Paling Tepat untuk Anda
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Jawab 3 pertanyaan sederhana untuk mendapatkan rekomendasi legalitas bisnis yang paling efisien, aman secara hukum, dan hemat biaya.
          </p>
        </div>

        {!isCalculated ? (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
            
            {/* Steps Progress */}
            <div className="flex items-center justify-between mb-8 max-w-xs mx-auto">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                1
              </div>
              <div className={`flex-1 h-1 mx-2 rounded ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                2
              </div>
              <div className={`flex-1 h-1 mx-2 rounded ${step >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                3
              </div>
            </div>

            {/* Step 1: Tujuan Usaha & Jumlah Pendiri */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    Berapa jumlah orang pendiri / pemegang saham?
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Pilih sesuai struktur kepemilikan bisnis Anda</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setFoundersCount('1')}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      foundersCount === '1'
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Hanya 1 Orang (Solo)</div>
                    <p className="text-xs text-slate-500 mt-1">Saya pemilik tunggal, merangkap direktur tanpa partner saham.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFoundersCount('2_or_more')}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      foundersCount === '2_or_more'
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                      <Building className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">2 Orang atau Lebih</div>
                    <p className="text-xs text-slate-500 mt-1">Ada rekan pendiri (Direktur & Komisaris atau Sekutu Kemitraan).</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFoundersCount('many')}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      foundersCount === 'many'
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                      <Users2 className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm">Banyak Anggota / Organisasi</div>
                    <p className="text-xs text-slate-500 mt-1">Kelompok masyarakat, asosiasi profesi, atau koperasi.</p>
                  </button>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Lanjut ke Langkah 2</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Tujuan & Bidang */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    Apa fokus & tujuan utama dari kegiatan ini?
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Tentukan orientasi tujuan organisasi/perusahaan Anda</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setGoal('commercial')}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      goal === 'commercial'
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">Bisnis & Perdagangan Komersial (Profit)</div>
                    <p className="text-xs text-slate-500 mt-1">Menjual produk/jasa, teknologi, kuliner, pengadaan barang, konstruksi, atau ekspor-impor untuk mencari laba.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('social')}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      goal === 'social'
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">Kegiatan Sosial, Agama, atau Pendidikan (Nirlaba)</div>
                    <p className="text-xs text-slate-500 mt-1">Panti asuhan, sekolah, pondok pesantren, lembaga zakat/infaq, donasi amal, atau rumah ibadah.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('profesi')}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      goal === 'profesi'
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">Praktik Profesi Bersama (Kantor Jasa)</div>
                    <p className="text-xs text-slate-500 mt-1">Kantor hukum advokat, kantor akuntan publik, biro arsitek, atau klinik bersama dokter.</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('coop')}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      goal === 'coop'
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">Ekonomi Anggota / Koperasi Simpan Pinjam</div>
                    <p className="text-xs text-slate-500 mt-1">Koperasi karyawan, kelompok tani/nelayan, atau simpan pinjam gotong royong.</p>
                  </button>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-100 cursor-pointer"
                  >
                    &larr; Kembali
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Lanjut ke Langkah 3</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Modal & Tanggung Jawab */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    Berapa estimasi permodalan & kebutuhan proteksi aset?
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Memastikan kapasitas badan usaha sesuai peruntukan proyek</p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Estimasi Modal Dasar:</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setCapitalRange('micro')}
                      className={`p-3 rounded-xl border text-xs font-bold text-center cursor-pointer ${capitalRange === 'micro' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-200 text-slate-700'}`}
                    >
                      Bebas / Mikro (&lt; 100 Jt)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCapitalRange('small')}
                      className={`p-3 rounded-xl border text-xs font-bold text-center cursor-pointer ${capitalRange === 'small' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-200 text-slate-700'}`}
                    >
                      Kecil (&lt; Rp 1 Miliar)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCapitalRange('medium')}
                      className={`p-3 rounded-xl border text-xs font-bold text-center cursor-pointer ${capitalRange === 'medium' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-200 text-slate-700'}`}
                    >
                      Menengah (Rp 1 - 5 M)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCapitalRange('large')}
                      className={`p-3 rounded-xl border text-xs font-bold text-center cursor-pointer ${capitalRange === 'large' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-200 text-slate-700'}`}
                    >
                      Besar (&gt; Rp 5 Miliar)
                    </button>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">Pemisahan Harta Pribadi & Perusahaan:</div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setLiability('limited')}
                      className={`p-4 rounded-xl border text-left cursor-pointer ${liability === 'limited' ? 'bg-blue-50 border-blue-600 ring-1 ring-blue-600' : 'bg-white border-slate-200'}`}
                    >
                      <div className="font-bold text-xs text-slate-900">Perlu Pemisahan Harta (PT)</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Tanggung jawab terbatas hanya pada modal yang disetor. Harta pribadi aman bila terjadi risiko rugi/utang perseroan.</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setLiability('personal')}
                      className={`p-4 rounded-xl border text-left cursor-pointer ${liability === 'personal' ? 'bg-blue-50 border-blue-600 ring-1 ring-blue-600' : 'bg-white border-slate-200'}`}
                    >
                      <div className="font-bold text-xs text-slate-900">Fleksibel Tanpa Batasan (CV/Kemitraan)</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Pendirian lebih praktis, pembagian laba prive tanpa pajak dividen, cocok untuk usaha keluarga/partner terpercaya.</p>
                    </button>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-100 cursor-pointer"
                  >
                    &larr; Kembali
                  </button>
                  <button
                    type="button"
                    onClick={calculateRecommendation}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Lihat Hasil Rekomendasi</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* Result Card */
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] pointer-events-none"></div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>Rekomendasi Terbaik Berdasarkan Kriteria Anda</span>
              </div>

              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                    {matchedEntity.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {matchedEntity.fullDescription}
                  </p>

                  <div className="space-y-2 pt-2 text-xs text-slate-200">
                    <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">Keunggulan untuk Anda:</div>
                    {matchedEntity.suitableFor.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5 p-6 rounded-2xl bg-slate-800/90 border border-slate-700 text-center space-y-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">Biaya Pendirian Mulai Dari</span>
                    <span className="text-3xl font-black text-emerald-400 font-display">
                      {formatRupiah(matchedEntity.basePrice)}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Waktu Proses: {matchedEntity.processingTime}</span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      type="button"
                      onClick={() => onSelectEntity(matchedEntity.id)}
                      className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer"
                    >
                      <span>Simulasikan Biaya Paket Ini</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Konsultasi WA Khusus Paket Ini</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full py-2 text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1.5 cursor-pointer pt-1"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Ulangi Quiz dari Awal</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
