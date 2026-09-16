import React from 'react';
import { Check, X, HelpCircle, Shield, ArrowRight } from 'lucide-react';
import { formatRupiah } from '../utils/formatters';

interface ComparisonTableProps {
  onSelectEntity: (entityId: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onSelectEntity }) => {
  const comparisonData = [
    {
      feature: 'Dasar Hukum',
      ptPerorangan: 'UU Cipta Kerja No. 6/2023',
      ptBiasa: 'UU PT No. 40/2007 & UU Ciptaker',
      cv: 'KUHD (Kitab UU Hukum Dagang)',
      yayasan: 'UU Yayasan No. 28/2004'
    },
    {
      feature: 'Jumlah Pendiri',
      ptPerorangan: 'Tepat 1 Orang (WNI)',
      ptBiasa: 'Minimal 2 Orang / Badan Hukum',
      cv: 'Minimal 2 Orang (Sekutu Aktif & Pasif)',
      yayasan: '1 Orang / Lebih (Organ: Pembina, Pengurus, Pengawas)'
    },
    {
      feature: 'Status Badan Hukum',
      ptPerorangan: 'Ya, Berbadan Hukum Kemenkumham',
      ptBiasa: 'Ya, Berbadan Hukum Kemenkumham',
      cv: 'Badan Usaha Terdaftar SABU Kemenkumham',
      yayasan: 'Ya, Badan Hukum Nirlaba Kemenkumham'
    },
    {
      feature: 'Pemisahan Harta Pribadi',
      ptPerorangan: 'Ya (Tanggung jawab sebatas modal)',
      ptBiasa: 'Ya (Tanggung jawab sebatas saham)',
      cv: 'Sekutu Aktif tanggung renteng hingga harta pribadi',
      yayasan: 'Ya (Kekayaan yayasan dipisahkan dari pendiri)'
    },
    {
      feature: 'Akta Notaris Manual',
      ptPerorangan: 'Tidak Perlu (Pernyataan Pendirian Online Kemenkumham)',
      ptBiasa: 'Wajib Akta Notaris Otentik',
      cv: 'Wajib Akta Notaris Otentik',
      yayasan: 'Wajib Akta Notaris Otentik'
    },
    {
      feature: 'Ketentuan Batasan Modal',
      ptPerorangan: 'Maksimal Modal/Aset Rp 5 Miliar (UMK)',
      ptBiasa: 'Bebas / Sesuai Skala (<1M, 1-5M, >5M)',
      cv: 'Bebas tanpa batas minimum modal',
      yayasan: 'Pemisahan kekayaan awal min. Rp 10 Juta'
    },
    {
      feature: 'Rekening Bank Badan Usaha',
      ptPerorangan: 'Bisa (Rekening Giro PT Perorangan)',
      ptBiasa: 'Bisa (Rekening Giro PT Corporate)',
      cv: 'Bisa (Rekening Giro CV)',
      yayasan: 'Bisa (Rekening Giro Yayasan / Lembaga)'
    },
    {
      feature: 'Perlakuan Pajak Penghasilan',
      ptPerorangan: 'Tarif PPh Final UMKM 0.5% (Omzet <4.8M)',
      ptBiasa: 'PPh Badan 22% / Fasilitas PPh Final UMKM',
      cv: 'PPh Badan & Prive Tidak Dikenakan Pajak Dividen',
      yayasan: 'Bebas PPh Badan untuk surplus sisa hasil operasional sosial'
    },
    {
      feature: 'Biaya Mulai Dari',
      ptPerorangan: 'Rp 750.000',
      ptBiasa: 'Rp 4.500.000',
      cv: 'Rp 4.000.000',
      yayasan: 'Rp 5.000.000'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-3">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            Matriks Perbandingan Hukum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Perbandingan Badan Usaha di Indonesia
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Pelajari perbedaan mendasar antara PT Perorangan, PT Biasa, CV, dan Yayasan sebelum menentukan pilihan.
          </p>
        </div>

        {/* Responsive Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs sm:text-sm font-display">
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-slate-400 w-1/4">
                    Karakteristik & Ketentuan
                  </th>
                  <th className="p-4 sm:p-5 font-bold w-1/5 bg-slate-800/90 text-blue-300">
                    <div>PT Perorangan</div>
                    <span className="text-[11px] font-normal text-slate-400">1 Orang Pendiri</span>
                  </th>
                  <th className="p-4 sm:p-5 font-bold w-1/5 text-amber-300">
                    <div>PT Biasa (Persekutuan)</div>
                    <span className="text-[11px] font-normal text-slate-400">Min. 2 Pemegang Saham</span>
                  </th>
                  <th className="p-4 sm:p-5 font-bold w-1/5 text-teal-300">
                    <div>CV Komanditer</div>
                    <span className="text-[11px] font-normal text-slate-400">Kemitraan Modal Bebas</span>
                  </th>
                  <th className="p-4 sm:p-5 font-bold w-1/5 text-purple-300">
                    <div>Yayasan Sosial</div>
                    <span className="text-[11px] font-normal text-slate-400">Organisasi Nirlaba</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 bg-blue-50/30 text-slate-800 font-medium">
                      {row.ptPerorangan}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-800 font-medium">
                      {row.ptBiasa}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-800 font-medium">
                      {row.cv}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-800 font-medium">
                      {row.yayasan}
                    </td>
                  </tr>
                ))}
                {/* Action Row */}
                <tr className="bg-slate-100/80">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">
                    Pilih Layanan
                  </td>
                  <td className="p-4 sm:p-5 bg-blue-50/50">
                    <button
                      type="button"
                      onClick={() => onSelectEntity('pt-perorangan')}
                      className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm transition-all hover:scale-105 cursor-pointer"
                    >
                      <span>Pilih PT Perorangan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                  <td className="p-4 sm:p-5">
                    <button
                      type="button"
                      onClick={() => onSelectEntity('pt-mikro-kecil')}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm transition-all hover:scale-105 cursor-pointer"
                    >
                      <span>Pilih PT Biasa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                  <td className="p-4 sm:p-5">
                    <button
                      type="button"
                      onClick={() => onSelectEntity('cv')}
                      className="w-full py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm transition-all hover:scale-105 cursor-pointer"
                    >
                      <span>Pilih CV</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                  <td className="p-4 sm:p-5">
                    <button
                      type="button"
                      onClick={() => onSelectEntity('yayasan')}
                      className="w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm transition-all hover:scale-105 cursor-pointer"
                    >
                      <span>Pilih Yayasan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
