import React from 'react';
import { 
  MessagesSquare, 
  FileSignature, 
  Building2, 
  FileCheck2, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { generateWhatsAppLink } from '../utils/formatters';

export const ProcessFlow: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Konsultasi & Cek Nama Usaha',
      description: 'Konsultasikan bidang bisnis, pemilihan KBLI 2020 yang tepat, dan tim kami mengecek ketersediaan nama PT/CV langsung di Ditjen AHU Kemenkumham.',
      icon: <MessagesSquare className="w-6 h-6 text-blue-600" />,
      tag: 'Gratis & Cepat'
    },
    {
      step: '02',
      title: 'Pengumpulan Berkas KTP & NPWP',
      description: 'Kirimkan foto KTP, NPWP pengurus/pendiri, serta alamat domisili usaha via WhatsApp atau form online. Kami siapkan draft minuta akta notaris.',
      icon: <FileSignature className="w-6 h-6 text-emerald-600" />,
      tag: '100% Online'
    },
    {
      step: '03',
      title: 'Tanda Tangan Akta & Pengesahan',
      description: 'Penandatanganan Akta Notaris secara resmi, kemudian notaris memproses Surat Keputusan (SK) Pengesahan Badan Hukum di Kemenkumham RI.',
      icon: <Building2 className="w-6 h-6 text-amber-600" />,
      tag: 'Resmi Kemenkumham'
    },
    {
      step: '04',
      title: 'Penerbitan NIB & Serah Terima',
      description: 'Penerbitan NPWP Badan 16 digit, NIB OSS-RBA, Sertifikat Standar, dan seluruh berkas fisik dikirim aman ke alamat Anda dengan garansi 100% sah.',
      icon: <FileCheck2 className="w-6 h-6 text-indigo-600" />,
      tag: 'Siap Beroperasi'
    }
  ];

  const waLink = generateWhatsAppLink({
    entityName: 'Konsultasi Alur Pendirian',
    tierName: 'Konsultasi Awal',
    totalPrice: 0
  });

  return (
    <section id="alur" className="py-20 sm:py-28 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            SOP Legalitas Standar Kemenkumham
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Alur Pendirian 4 Langkah Cepat & Transparan
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tanpa birokrasi berbelit. Seluruh proses pendampingan dipantau langsung oleh konsultan hukum dan notaris resmi rekanan kami.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between relative hover:bg-slate-100/80 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-300 font-display">
                    {item.step}
                  </span>
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 mb-2">
                  {item.tag}
                </span>

                <h3 className="text-base font-bold text-slate-900 leading-snug font-display mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Didampingi Notaris Resmi</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
          >
            <span>Mulai Langkah Pertama: Konsultasi Gratis</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
