import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  Building, 
  Handshake, 
  HeartHandshake, 
  Users2,
  Download,
  Info
} from 'lucide-react';
import { generateWhatsAppLink } from '../utils/formatters';

export const DocumentRequirements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pt_perorangan' | 'pt_biasa' | 'cv' | 'yayasan' | 'koperasi'>('pt_perorangan');

  const requirementsData = {
    pt_perorangan: {
      title: 'Syarat Pendirian PT Perorangan',
      badge: 'Paling Ringkas',
      time: '1 - 2 Hari Kerja',
      docs: [
        'Foto E-KTP Pendiri Tunggal (Warga Negara Indonesia, usia minimal 17 tahun)',
        'Foto NPWP Pribadi Pendiri (Format 16 digit aktif)',
        'Pilihan Nama Usaha (Minimal 2 kata berbahasa Indonesia, diawali kata "PT")',
        'Alamat Lengkap Domisili Usaha (Bisa rumah tinggal, ruko, atau Virtual Office)',
        'Nomor WhatsApp Aktif & Email Resmi Usaha',
        'Uraian Rencana Kegiatan Usaha (Pemilihan 3-5 kode KBLI 2020)'
      ],
      notes: 'Tidak memerlukan akta notaris fisik dan tidak ada kewajiban setoran modal minimum di bank saat pendirian.'
    },
    pt_biasa: {
      title: 'Syarat Pendirian PT Biasa (Modal < 1M s/d > 5M)',
      badge: 'Minimal 2 Orang',
      time: '3 - 5 Hari Kerja',
      docs: [
        'Foto E-KTP minimal 2 Orang (Direktur & Komisaris / Pemegang Saham)',
        'Foto NPWP Pribadi seluruh Pemegang Saham & Pengurus',
        'Opsi 3 Pilihan Nama PT (Wajib terdiri dari minimal 3 kata bahasa Indonesia)',
        'Rincian Modal Dasar & Persentase Pembagian Saham antar Pendiri (Modal disetor min. 25%)',
        'Alamat Tempat Kedudukan PT (Surat kepemilikan/sewa kantor atau Virtual Office)',
        'Daftar Bidang Usaha KBLI 2020 yang akan dijalankan',
        'Nomor Telepon & Email Perusahaan'
      ],
      notes: 'Akta pendirian dibuat secara otentik oleh Notaris dan disahkan dengan SK Kementerian Hukum dan HAM RI.'
    },
    cv: {
      title: 'Syarat Pendirian CV (Persekutuan Komanditer)',
      badge: 'Kemitraan Modal Bebas',
      time: '2 - 4 Hari Kerja',
      docs: [
        'Foto E-KTP minimal 2 Orang (Sekutu Aktif & Sekutu Pasif)',
        'Foto NPWP Pribadi masing-masing sekutu pendiri',
        'Nama CV yang dikehendaki (Bebas, tidak wajib 3 kata)',
        'Penetapan Sekutu Pengurus (Direktur) & Sekutu Komanditer (Pemodal)',
        'Alamat Tempat Kedudukan Usaha CV',
        'Bidang Usaha yang Dijalankan (KBLI 2020)'
      ],
      notes: 'Nama CV terdaftar di Sistem Administrasi Badan Usaha (SABU) Kemenkumham RI dengan Akta Notaris.'
    },
    yayasan: {
      title: 'Syarat Pendirian Yayasan Sosial / Agama / Pendidikan',
      badge: 'Organisasi Nirlaba',
      time: '5 - 7 Hari Kerja',
      docs: [
        'Foto E-KTP & NPWP para Pendiri dan Pengurus (Pembina, Ketua, Sekretaris, Bendahara, Pengawas)',
        'Opsi 3 Pilihan Nama Yayasan (Wajib diawali kata "Yayasan")',
        'Surat Pernyataan Pemisahan Harta Kekayaan Pribadi Pendiri untuk Modal Awal Yayasan (Min. Rp 10 Juta)',
        'Alamat Sekretariat / Domisili Yayasan',
        'Tujuan & Program Kerja Bidang Sosial, Keagamaan, atau Kemanusiaan'
      ],
      notes: 'Wajib memiliki struktur organ lengkap (Pembina, Pengurus, Pengawas) dan tidak membagikan keuntungan kepada pendiri.'
    },
    koperasi: {
      title: 'Syarat Pendirian Koperasi (Primer)',
      badge: 'Ekonomi Anggota',
      time: '7 - 14 Hari Kerja',
      docs: [
        'Foto E-KTP & NPWP minimal 9 Orang Anggota Pendiri (Aturan Baru UU Ciptaker)',
        'Berita Acara Rapat Pembentukan Koperasi & Daftar Hadir Rapat',
        'Struktur Susunan Pengurus & Pengawas Koperasi Terpilih',
        'Rencana Anggaran Dasar (AD/ART) Koperasi',
        'Bukti Penyetoran Simpanan Pokok & Simpanan Wajib Awal Anggota',
        'Alamat Kantor Sekretariat Koperasi'
      ],
      notes: 'Dibuat oleh Notaris Pembuat Akta Koperasi (NPAK) dengan rekomendasi Kementerian Koperasi & UKM.'
    }
  };

  const currentData = requirementsData[activeTab];

  const waLink = generateWhatsAppLink({
    entityName: `Konsultasi Persyaratan: ${currentData.title}`,
    tierName: 'Konsultasi Syarat & Dokumen',
    totalPrice: 0
  });

  return (
    <section id="syarat" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 mb-3">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            Panduan Kelengkapan Berkas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Persyaratan Dokumen Pendirian
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Cukup siapkan dokumen identitas diri secara digital, tim kami yang menyiapkan seluruh draf akta dan perizinan.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('pt_perorangan')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'pt_perorangan'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>PT Perorangan</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('pt_biasa')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'pt_biasa'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>PT Biasa (Modal &lt;1M - &gt;5M)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('cv')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'cv'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Handshake className="w-4 h-4" />
            <span>CV Komanditer</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('yayasan')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'yayasan'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Yayasan</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('koperasi')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'koperasi'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Users2 className="w-4 h-4" />
            <span>Koperasi</span>
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                {currentData.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
                {currentData.title}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 block">Estimasi Pengerjaan:</span>
              <span className="text-sm font-extrabold text-emerald-600 font-display">
                {currentData.time}
              </span>
            </div>
          </div>

          <div className="py-6 grid md:grid-cols-2 gap-4">
            {currentData.docs.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Info className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{currentData.notes}</span>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shrink-0 flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>Kirim Berkas via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
