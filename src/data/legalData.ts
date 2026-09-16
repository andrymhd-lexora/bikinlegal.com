import { LegalEntity, AddonService, Testimonial, FAQItem } from '../types';

export const LEGAL_ENTITIES: LegalEntity[] = [
  {
    id: 'pt-perorangan',
    name: 'PT Perorangan (Usaha Mikro & Kecil)',
    code: 'PT_PERORANGAN',
    shortDescription: 'Perseroan Terbatas untuk 1 orang pendiri (WNI), berbadan hukum resmi dengan pemisahan harta pribadi & modal fleksibel.',
    fullDescription: 'PT Perorangan didirikan berdasarkan UU Cipta Kerja khusus untuk pelaku Usaha Mikro dan Kecil (UMK). Cukup 1 orang pendiri yang merangkap sebagai Direktur, tanpa perlu akta notaris manual namun tetap berbadan hukum resmi dari Kemenkumham RI.',
    category: 'pt',
    badge: 'Paling Hemat & Cepat',
    popular: true,
    basePrice: 750000,
    completePrice: 1200000,
    virtualOfficePrice: 3450000,
    processingTime: '1 - 2 Hari Kerja',
    minCapital: 'Bebas (Maksimal Rp 5 Miliar omzet/aset)',
    minFounders: 'Tepat 1 Orang (WNI, usia min. 17 thn)',
    responsibility: 'Terbatas pada modal perseroan',
    inclusions: {
      dasar: [
        'Sertifikat Pendaftaran Pendirian Kemenkumham RI',
        'Pernyataan Pendirian Perseroan Perorangan Resmi',
        'NPWP Badan Usaha (Format 16 Digit Terbaru)',
        'SKT (Surat Keterangan Terdaftar) Pajak',
        'NIB (Nomor Induk Berusaha) OSS-RBA',
        'Hak Akses OSS RBA & Kode KBLI Usaha',
        'Free Konsultasi Pemilihan KBLI 2020'
      ],
      lengkap: [
        'Semua dokumen Paket Dasar',
        'Sertifikat Standar OSS RBA (untuk risiko menengah)',
        'Akun DJP Online & Sertifikat Elektronik Pajak',
        'Draft Surat Keputusan & Dokumen RUPS Perdana',
        'Template Kontrak Kerja Karyawan & SOP Standar',
        'Bantuan Pembukaan Rekening Giro Bank Rekanan VIP'
      ],
      virtual_office: [
        'Semua dokumen Paket Lengkap',
        'Alamat Virtual Office 1 Tahun Zonasi Perkantoran',
        'Surat Keterangan Domisili Gedung Perkantoran',
        'Mail Handling & Resepsionis Gedung Profesional',
        'Free Kuota Meeting Room 2 Jam / Bulan',
        'Nomor Telepon Bersama & Call Forwarding'
      ]
    },
    suitableFor: [
      'Founder / Solopreneur yang memulai bisnis mandiri',
      'Toko Online, Freelancer & Agensi Digital',
      'UMKM Kuliner, Fashion & Kerajinan',
      'Pebisnis pemula yang ingin legalitas berbadan hukum resmi tanpa partner'
    ],
    requirements: [
      'Foto KTP Direktur / Pendiri Tunggal (WNI)',
      'Foto NPWP Pribadi Pendiri',
      'Nama Usaha (Minimal 2 kata berbahasa Indonesia)',
      'Alamat domisili usaha & No. Telepon/Email aktif',
      'Uraian bidang kegiatan usaha (KBLI 2020)'
    ],
    icon: 'Building2'
  },
  {
    id: 'pt-mikro-kecil',
    name: 'PT Skala Kecil (Modal < Rp 1 Miliar)',
    code: 'PT_MIKRO_KECIL',
    shortDescription: 'PT Persekutuan Modal (min. 2 orang) skala mikro/kecil dengan akta notaris otentik & SK Kemenkumham lengkap.',
    fullDescription: 'Perseroan Terbatas konvensional berbadan hukum penuh dengan struktur Direksi & Komisaris untuk modal disetor di bawah Rp 1 Miliar. Cocok untuk startup, kemitraan usaha, dan perusahaan yang bersiap mengikuti tender pemerintah atau swasta.',
    category: 'pt',
    badge: 'Favorit Startup',
    popular: true,
    basePrice: 4500000,
    completePrice: 5500000,
    virtualOfficePrice: 7750000,
    processingTime: '3 - 5 Hari Kerja',
    minCapital: 'Modal Dasar < Rp 1 Miliar (Disetor min. 25%)',
    minFounders: 'Minimal 2 Orang (Direktur & Komisaris)',
    responsibility: 'Terbatas sebesar saham yang disetor',
    inclusions: {
      dasar: [
        'Pengecekan & Pemesanan Nama PT di AHU Kemenkumham',
        'Akta Pendirian Otentik Notaris Berpengalaman',
        'SK Pengesahan Badan Hukum Menkumham RI',
        'NPWP Badan Usaha (16 Digit) & SKT Pajak',
        'NIB (Nomor Induk Berusaha) Berbasis Risiko OSS-RBA',
        'Izin Usaha Dasar Sesuai KBLI 2020',
        'Hak Akses Akun OSS RBA Resmi'
      ],
      lengkap: [
        'Semua dokumen Paket Dasar',
        'Map & Buku Akta Notaris Eksklusif',
        'Sertifikat Standar / Izin Operasional OSS RBA',
        'Pendaftaran BPJS Ketenagakerjaan & Kesehatan Badan',
        'Akun DJP Online Pajak & Aktivasi E-Faktur / E-Nofa',
        'Fast-track Pembukaan Rekening Giro Bank (BCA/Mandiri/BRI/BNI)'
      ],
      virtual_office: [
        'Semua dokumen Paket Lengkap',
        'Sewa Virtual Office 1 Tahun di Gedung Bisnis Prestisius',
        'Surat Keterangan Domisili Gedung Resmi',
        'Layanan Penerimaan Surat & Paket Dokumen',
        'Penggunaan Ruang Rapat / Meeting Room Eksklusif',
        'Fasilitas Signage / Papan Nama Perusahaan (Opsional)'
      ]
    },
    suitableFor: [
      'Startup teknologi, agensi kreatif & konsultan',
      'Bisnis kemitraan 2 founder atau lebih',
      'Perusahaan yang butuh rekening giro atas nama PT',
      'Penyedia jasa yang ingin ikut tender proyek swasta'
    ],
    requirements: [
      'KTP & NPWP minimal 2 Orang (Direktur & Komisaris)',
      'Opsi 3 Nama PT (Terdiri dari min. 3 kata bahasa Indonesia)',
      'Struktur Pembagian Saham & Susunan Pengurus',
      'Alamat Usaha & Bukti Kepemilikan/Sewa/Virtual Office',
      'Nomor Kontak & Email Resmi Perusahaan'
    ],
    icon: 'Building'
  },
  {
    id: 'pt-menengah',
    name: 'PT Skala Menengah (Modal Rp 1 - <5 Miliar)',
    code: 'PT_MENENGAH',
    shortDescription: 'PT untuk skala bisnis berkembang dengan modal disetor Rp 1 - 5 Miliar, kapasitas tender & lisensi luas.',
    fullDescription: 'Perseroan Terbatas untuk korporasi skala menengah yang memerlukan legalitas berkapasitas modal lebih tinggi untuk izin konstruksi, distributor, tender BUMN, serta ekspansi bisnis nasional.',
    category: 'pt',
    badge: 'Skala Menengah',
    basePrice: 6500000,
    completePrice: 7500000,
    virtualOfficePrice: 9750000,
    processingTime: '3 - 5 Hari Kerja',
    minCapital: 'Modal Dasar Rp 1 Miliar s/d < Rp 5 Miliar',
    minFounders: 'Minimal 2 Orang / Badan Hukum',
    responsibility: 'Terbatas sebesar saham yang disetor',
    inclusions: {
      dasar: [
        'Pemesanan Nama PT Terdaftar AHU Online',
        'Akta Notaris Pendirian PT Modal Menengah',
        'SK Kemenkumham RI Status Badan Hukum Sah',
        'NPWP Badan Usaha & SKT Kantor Pelayanan Pajak',
        'NIB Berbasis Risiko OSS-RBA Multi KBLI',
        'Sertifikat Standar KBLI Risiko Menengah',
        'Akun OSS-RBA Akses Penuh'
      ],
      lengkap: [
        'Semua dokumen Paket Dasar',
        'Hardcopy Akta Notaris & SK Kemenkumham Bersegel',
        'Registrasi BPJS Ketenagakerjaan & Kesehatan Korporat',
        'Aktivasi Akun DJP Online & E-Faktur Perusahaan',
        'Pendampingan Rekening Giro Prioritas Bank',
        'Draft Standar Perjanjian Kerja Waktu Tertentu (PKWT)'
      ],
      virtual_office: [
        'Semua dokumen Paket Lengkap',
        'Virtual Office Premium 1 Tahun di Kawasan CBD',
        'Surat Domisili Gedung & Izin Zonasi Komersial',
        'Layanan Resepsionis & Penerimaan Telepon Representatif',
        'Akses Meeting Room 3 Jam / Bulan'
      ]
    },
    suitableFor: [
      'Perusahaan manufaktur, logistik, kontraktor, & distributor',
      'Perusahaan yang mengikuti tender proyek BUMN / Pemerintah',
      'Bisnis dengan rencana pengajuan fasilitas perbankan skala menengah',
      'Perusahaan yang berencana mengajukan izin sektoral spesifik'
    ],
    requirements: [
      'KTP & NPWP seluruh Pemegang Saham, Direktur & Komisaris',
      '3 Pilihan Nama PT (Minimal 3 kata bahasa Indonesia)',
      'Rincian Modal Dasar & Modal Ditempatkan',
      'Alamat Domisili Perusahaan & Surat Bukti Domisili',
      'Daftar KBLI Bidang Usaha yang Dijalankan'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'pt-besar',
    name: 'PT Skala Besar (Modal ≥ Rp 5 Miliar)',
    code: 'PT_BESAR',
    shortDescription: 'PT korporasi skala besar dengan struktur permodalan kokoh untuk industri, konsorsium & proyek strategis.',
    fullDescription: 'Perseroan Terbatas untuk pelaku usaha skala besar dengan modal dasar di atas Rp 5 Miliar. Memenuhi standar kualifikasi tertinggi untuk pengerjaan proyek mega, impor-ekspor komprehensif, kepemilikan aset bernilai tinggi, dan kemitraan multinasional.',
    category: 'pt',
    badge: 'Korporat Skala Besar',
    basePrice: 8500000,
    completePrice: 10000000,
    virtualOfficePrice: 12250000,
    processingTime: '4 - 7 Hari Kerja',
    minCapital: 'Modal Dasar ≥ Rp 5 Miliar',
    minFounders: 'Minimal 2 Orang / Badan Usaha Gabungan',
    responsibility: 'Terbatas sebesar saham yang disetor',
    inclusions: {
      dasar: [
        'Pemesanan & Approval Nama PT Korporat di AHU',
        'Akta Notaris Pendirian PT Skala Besar & Modal Tinggi',
        'SK Pengesahan Menkumham RI Status PT Besar',
        'NPWP Badan Usaha (Format Baru) & SKT KPP Pratama/Madya',
        'NIB Berbasis Risiko OSS-RBA Tingkat Tinggi (High Risk)',
        'Sertifikat Standar / Hak Akses OSS Komprehensif',
        'Konsultasi Regulasi Penanaman Modal & KBLI Strategis'
      ],
      lengkap: [
        'Semua dokumen Paket Dasar',
        'Bundle 2 Buku Akta Notaris Asli & SK Legalisir',
        'Pendaftaran BPJS Ketenagakerjaan & Kesehatan',
        'Aktivasi DJP Online, E-Faktur & Bimbingan Pajak Awal',
        'Pengantar Pembukaan Rekening Giro Bank Prioritas',
        'Draft Anggaran Rumah Tangga & SOP Internal Standar'
      ],
      virtual_office: [
        'Semua dokumen Paket Lengkap',
        'Virtual Office Dedicated CBD Premium 1 Tahun',
        'Surat Keterangan Zonasi & Domisili Gedung Resmi',
        'Fasilitas Ruang Rapat Eksekutif 5 Jam / Bulan',
        'Handling Surat Khusus & Dedicated Assistant'
      ]
    },
    suitableFor: [
      'Korporasi industri besar, holding company, & properti',
      'Kontraktor Grade Menengah/Besar & Eksportir/Importir',
      'Perusahaan konsorsium modal ventura & investasi',
      'Bisnis yang membutuhkan plafon tender tanpa batasan nilai'
    ],
    requirements: [
      'KTP & NPWP para Pemegang Saham, Direksi & Dewan Komisaris',
      'Pilihan Nama PT (Min. 3 kata)',
      'Rincian Modal Saham & Pembagian Portofolio Saham',
      'Alamat Kantor & Dokumen Kepemilikan/Sewa Tempat Usaha',
      'Pemilihan KBLI 2020 Sektor Terkait'
    ],
    icon: 'Landmark'
  },
  {
    id: 'cv',
    name: 'CV (Persekutuan Komanditer)',
    code: 'CV_KOMANDITER',
    shortDescription: 'Bentuk usaha kemitraan dengan modal fleksibel tanpa batasan minimum, terdiri dari Sekutu Aktif & Sekutu Pasif.',
    fullDescription: 'Commanditaire Vennootschap (CV) adalah badan usaha kemitraan yang sangat populer untuk UMKM dan kemitraan terpercaya. Didirikan oleh minimal 2 orang (Sekutu Aktif pengelola dan Sekutu Pasif pemodal) dengan proses pembukuan dan perpajakan yang lebih fleksibel dibanding PT.',
    category: 'kemitraan',
    badge: 'Favorit Kemitraan',
    popular: true,
    basePrice: 4000000,
    completePrice: 5000000,
    virtualOfficePrice: 7250000,
    processingTime: '2 - 4 Hari Kerja',
    minCapital: 'Bebas / Tanpa Batasan Minimum Modal',
    minFounders: 'Minimal 2 Orang (Sekutu Aktif & Pasif)',
    responsibility: 'Sekutu Aktif (tak terbatas), Sekutu Pasif (sebesar modal)',
    inclusions: {
      dasar: [
        'Pengecekan & Pemesanan Nama CV di AHU Kemenkumham',
        'Akta Notaris Pendirian CV Otentik',
        'SK Terdaftar di AHU Kemenkumham RI (SABU)',
        'NPWP Badan CV & SKT Pajak KPP',
        'NIB (Nomor Induk Berusaha) OSS-RBA',
        'Izin Usaha Dasar KBLI 2020 Terkait'
      ],
      lengkap: [
        'Semua dokumen Paket Dasar',
        'Buku Akta Asli Notaris & SK Kemenkumham',
        'Sertifikat Standar OSS RBA',
        'Pendaftaran Akun DJP Online & E-Faktur CV',
        'Bantuan Pembuatan Rekening Giro Bank CV',
        'Draft Surat Perjanjian Kerjasama Antar Sekutu'
      ],
      virtual_office: [
        'Semua dokumen Paket Lengkap',
        'Sewa Virtual Office 1 Tahun di Lokasi Strategis',
        'Surat Keterangan Domisili Usaha Gedung',
        'Layanan Penerimaan Surat & Resepsionis',
        'Akses Meeting Room 2 Jam / Bulan'
      ]
    },
    suitableFor: [
      'Kemitraan bisnis keluarga atau rekan terpercaya',
      'Supplier barang/jasa, percetakan, konveksi, & EO',
      'Agensi konsultan, arsitek & periklanan',
      'Pebisnis yang ingin mendirikan badan usaha tanpa kewajiban setor modal minimal'
    ],
    requirements: [
      'KTP & NPWP minimal 2 Orang Sekutu',
      'Pilihan Nama CV (Bebas, tidak wajib 3 kata)',
      'Penetapan Siapa Sekutu Aktif (Direktur) & Sekutu Pasif (Komanditer)',
      'Alamat Domisili Usaha Lengkap',
      'Uraian Kegiatan Usaha & KBLI'
    ],
    icon: 'Handshake'
  },
  {
    id: 'firma',
    name: 'Firma (Persekutuan Perdagangan)',
    code: 'FIRMA',
    shortDescription: 'Badan usaha kemitraan bersama yang didirikan di bawah satu nama untuk menjalankan usaha dagang/jasa.',
    fullDescription: 'Firma adalah persekutuan perdata yang didirikan untuk menjalankan perusahaan di bawah nama bersama, di mana tiap sekutu berhak bertindak atas nama firma dan bertanggung jawab secara tanggung renteng.',
    category: 'kemitraan',
    badge: 'Kemitraan Nama Bersama',
    basePrice: 4000000,
    completePrice: 5000000,
    virtualOfficePrice: 7250000,
    processingTime: '3 - 5 Hari Kerja',
    minCapital: 'Bebas sesuai kesepakatan para sekutu',
    minFounders: 'Minimal 2 Orang (WNI)',
    responsibility: 'Tanggung renteng seluruh sekutu secara pribadi',
    inclusions: {
      dasar: [
        'Pengecekan & Registrasi Nama Firma di AHU Kemenkumham',
        'Akta Notaris Pendirian Firma Resmi',
        'SK Pendaftaran Kemenkumham RI (SABU)',
        'NPWP Badan Usaha Firma & SKT Pajak',
        'NIB OSS-RBA Usaha',
        'Izin Usaha KBLI Terdaftar'
      ],
      lengkap: [
        'Semua dokumen Paket Dasar',
        'Hardcopy Akta Notaris & SK SABU Kemenkumham',
        'Sertifikat Standar OSS RBA',
        'Aktivasi Akun DJP Online Pajak',
        'Pendampingan Rekening Bank Firma'
      ],
      virtual_office: [
        'Semua dokumen Paket Lengkap',
        'Virtual Office 1 Tahun Alamat Zonasi Bisnis',
        'Surat Domisili Gedung Resmi',
        'Handling Surat & Paket Dokumen'
      ]
    },
    suitableFor: [
      'Kemitraan dagang bersama antar profesional',
      'Bisnis distribusi barang & perwakilan dagang',
      'Firma konsultan bisnis & manajemen bersama'
    ],
    requirements: [
      'KTP & NPWP para sekutu pendiri',
      'Nama Firma yang disepakati bersama',
      'Alamat domisili tempat kedudukan firma',
      'Anggaran dasar & bidang usaha'
    ],
    icon: 'Scale'
  },
  {
    id: 'persekutuan-perdata',
    name: 'Persekutuan Perdata (Maatschap)',
    code: 'PERSEKUTUAN_PERDATA',
    shortDescription: 'Bentuk persekutuan untuk profesi sejenis (dokter, akuntan, pengacara, arsitek, konsultan).',
    fullDescription: 'Persekutuan Perdata (Maatschap) adalah wadah legal resmi bagi para profesional dengan keahlian yang sama untuk berhimpun dan menjalankan praktik profesi bersama secara sah dengan akta notaris terdaftar Kemenkumham.',
    category: 'kemitraan',
    badge: 'Khusus Profesi & Ahli',
    basePrice: 4000000,
    completePrice: 5000000,
    virtualOfficePrice: 7250000,
    processingTime: '3 - 5 Hari Kerja',
    minCapital: 'Bebas (Inbreng keahlian / modal)',
    minFounders: 'Minimal 2 Orang Profesional',
    responsibility: 'Sesuai porsi tindakan masing-masing sekutu',
    inclusions: {
      dasar: [
        'Pengecekan & Pendaftaran Nama di AHU Kemenkumham',
        'Akta Notaris Persekutuan Perdata (Maatschap)',
        'SK Pendaftaran SABU Kemenkumham RI',
        'NPWP Badan Usaha & SKT Pajak',
        'NIB OSS-RBA Sektor Jasa Terkait'
      ],
      lengkap: [
        'Semua dokumen Paket Dasar',
        'Buku Akta Notaris Asli & SK Bersegel',
        'Aktivasi Akun DJP Online Pajak Badan',
        'Bantuan Rekening Bank Persekutuan'
      ],
      virtual_office: [
        'Semua dokumen Paket Lengkap',
        'Virtual Office 1 Tahun di Pusat Kota',
        'Surat Domisili Gedung Perkantoran'
      ]
    },
    suitableFor: [
      'Kantor Akuntan Publik (KAP) & Kantor Jasa Akuntan (KJA)',
      'Kantor Hukum / Law Firm / Advokat',
      'Klinik Bersama Dokter / Tenaga Medis',
      'Biro Arsitek, Desainer & Konsultan Perencana'
    ],
    requirements: [
      'KTP & NPWP para sekutu profesional',
      'Izin Profesi / Sertifikat Keahlian (Bila dipersyaratkan)',
      'Nama Persekutuan Perdata',
      'Alamat Tempat Kedudukan Kantor'
    ],
    icon: 'FileText'
  },
  {
    id: 'koperasi',
    name: 'Koperasi (Koperasi Primer / Sekunder)',
    code: 'KOPERASI',
    shortDescription: 'Badan usaha beranggotakan orang-seorang berdasarkan asas kekeluargaan & gotong royong ekonomi.',
    fullDescription: 'Pendirian Koperasi berbadan hukum resmi dengan pengesahan dari Kementerian Koperasi & UKM serta Kemenkumham RI. Menjadi wadah legal yang kuat untuk simpan pinjam, konsumen, produsen, pemasaran, dan jasa anggota.',
    category: 'sosial',
    badge: 'Ekonomi Kerakyatan',
    basePrice: 6500000,
    completePrice: 8000000,
    virtualOfficePrice: 10250000,
    processingTime: '7 - 14 Hari Kerja',
    minCapital: 'Simpanan Pokok & Simpanan Wajib Anggota',
    minFounders: 'Koperasi Primer min. 9 Orang (Aturan Baru UU Ciptaker)',
    responsibility: 'Terbatas pada simpanan anggota',
    inclusions: {
      dasar: [
        'Pengecekan & Pemesanan Nama Koperasi di AHU',
        'Pendampingan Berita Acara Rapat Pembentukan Koperasi',
        'Akta Notaris Pembuat Akta Koperasi (NPAK)',
        'SK Pengesahan Badan Hukum Koperasi Menkumham RI',
        'NPWP Koperasi & SKT Pajak KPP',
        'NIB OSS RBA Sektor Perkoperasian'
      ],
      lengkap: [
        'Semua dokumen Paket Dasar',
        'Buku Akta Notaris Asli & Salinan Sah Kemenkumham',
        'Draft Anggaran Dasar & Anggaran Rumah Tangga (AD/ART)',
        'Template Buku Administrasi Koperasi & Notulensi Rapat',
        'Aktivasi Akun DJP Online Koperasi',
        'Konsultasi Regulasi Kemenkop UKM'
      ],
      virtual_office: [
        'Semua dokumen Paket Lengkap',
        'Virtual Office Alamat Sekretariat 1 Tahun',
        'Surat Keterangan Domisili Sekretariat Koperasi'
      ]
    },
    suitableFor: [
      'Kelompok tani, peternak, nelayan, & pengrajin',
      'Koperasi Karyawan Perusahaan / Koperasi Pegawai',
      'Komunitas / Paguyuban Usaha Bersama',
      'Koperasi Jasa & Konsumen Masyarakat'
    ],
    requirements: [
      'KTP & NPWP minimal 9 orang anggota pendiri',
      'Susunan Pengurus & Dewan Pengawas',
      'Berita Acara Rapat Pembentukan & Daftar Hadir Pendiri',
      'Bukti Setoran Modal Awal (Simpanan Pokok & Wajib)',
      'Nama Koperasi & Alamat Sekretariat Koperasi'
    ],
    icon: 'Users2'
  },
  {
    id: 'yayasan',
    name: 'Yayasan (Sosial, Keagamaan & Kemanusiaan)',
    code: 'YAYASAN',
    shortDescription: 'Badan hukum nirlaba dengan kekayaan terpisah untuk mencapai tujuan bidang sosial, keagamaan, atau kemanusiaan.',
    fullDescription: 'Yayasan adalah badan hukum yang tidak mempunyai anggota dan didirikan dengan memisahkan sebagian harta kekayaan pendirinya sebagai modal awal untuk tujuan sosial, pendidikan, panti asuhan, lembaga keagamaan, atau amal.',
    category: 'sosial',
    badge: 'Lembaga Nirlaba & Amal',
    popular: true,
    basePrice: 5000000,
    completePrice: 6000000,
    virtualOfficePrice: 8250000,
    processingTime: '5 - 7 Hari Kerja',
    minCapital: 'Pemisahan Kekayaan Awal (min. Rp 10 Juta)',
    minFounders: 'Minimal 1 Orang atau Lebih (Pendiri)',
    responsibility: 'Organ Yayasan (Pembina, Pengurus, Pengawas)',
    inclusions: {
      dasar: [
        'Pengecekan & Pemesanan Nama Yayasan di AHU Kemenkumham',
        'Akta Notaris Pendirian Yayasan Resmi',
        'SK Pengesahan Badan Hukum Yayasan dari Kemenkumham RI',
        'NPWP Yayasan & Surat Keterangan Terdaftar (SKT) Pajak',
        'NIB OSS-RBA Bidang Pelayanan Sosial / Pendidikan'
      ],
      lengkap: [
        'Semua dokumen Paket Dasar',
        'Buku Akta Notaris Asli & SK Menkumham Bersegel',
        'Penyusunan AD/ART Yayasan Sesuai UU No. 28/2004',
        'Format Struktur Organ (Pembina, Pengurus, Pengawas)',
        'Akun DJP Online Yayasan & Bimbingan Bebas Pajak Donasi',
        'Pendampingan Rekening Bank Yayasan'
      ],
      virtual_office: [
        'Semua dokumen Paket Lengkap',
        'Virtual Office Alamat Sekretariat Yayasan 1 Tahun',
        'Surat Keterangan Domisili Kantor Yayasan',
        'Layanan Penerimaan Surat & Paket'
      ]
    },
    suitableFor: [
      'Lembaga Pendidikan, Sekolah, Pesantren & TPQ',
      'Panti Asuhan, Rumah Singgah & Yayasan Kemanusiaan',
      'Lembaga Amal, Zakat, Infaq & Sedekah (LAZ/Lembaga Sosial)',
      'Rumah Ibadah & Komunitas Keagamaan Berbadan Hukum'
    ],
    requirements: [
      'KTP & NPWP Pembina, Ketua, Sekretaris, Bendahara & Pengawas',
      'Pilihan 3 Nama Yayasan (diawali kata "Yayasan")',
      'Surat Pernyataan Pemisahan Kekayaan Pribadi Pendiri',
      'Alamat Kedudukan Sekretariat Yayasan',
      'Rencana Program Kerja Bidang Sosial/Agama/Kemanusiaan'
    ],
    icon: 'HeartHandshake'
  },
  {
    id: 'perkumpulan',
    name: 'Perkumpulan (Asosiasi & Paguyuban Berbadan Hukum)',
    code: 'PERKUMPULAN',
    shortDescription: 'Badan hukum berbasis keanggotaan untuk asosiasi profesi, hobi, paguyuban alumni, dan organisasi massa.',
    fullDescription: 'Perkumpulan Berbadan Hukum didirikan oleh sekumpulan orang yang memiliki kesamaan minat, profesi, atau tujuan bersama non-profit. Mendapatkan legitimasi hukum penuh dari Kemenkumham RI sehingga sah membuka rekening bank organisasi dan mengadakan kerjasama formal.',
    category: 'sosial',
    badge: 'Asosiasi & Komunitas',
    basePrice: 5000000,
    completePrice: 6000000,
    virtualOfficePrice: 8250000,
    processingTime: '5 - 7 Hari Kerja',
    minCapital: 'Iuran / Sumbangan Anggota (Non-profit)',
    minFounders: 'Minimal 2 Orang atau Lebih (Pendiri)',
    responsibility: 'Pengurus & Anggota sesuai Anggaran Dasar',
    inclusions: {
      dasar: [
        'Pengecekan & Pemesanan Nama Perkumpulan di AHU Kemenkumham',
        'Akta Notaris Pendirian Perkumpulan Berbadan Hukum',
        'SK Pengesahan Menkumham RI Status Badan Hukum Sah',
        'NPWP Badan Perkumpulan & SKT Pajak KPP',
        'NIB OSS-RBA Sektor Organisasi Kemasyarakatan'
      ],
      lengkap: [
        'Semua dokumen Paket Dasar',
        'Buku Akta Notaris Asli & Salinan Sah Kemenkumham',
        'Draft AD/ART Standar Organisasi & Kode Etik Anggota',
        'Aktivasi Akun DJP Online Perkumpulan',
        'Pengantar Rekening Bank Atas Nama Asosiasi'
      ],
      virtual_office: [
        'Semua dokumen Paket Lengkap',
        'Virtual Office Alamat Sekretariat Nasional 1 Tahun',
        'Surat Domisili Gedung Perkantoran',
        'Layanan Penanganan Surat Masuk'
      ]
    },
    suitableFor: [
      'Asosiasi Pengusaha, Profesi & Industri',
      'Ikatan Alumni Sekolah / Kampus Nasional',
      'Klub Otomotif, Olahraga & Komunitas Hobi',
      'Lembaga Swadaya Masyarakat (LSM) & Paguyuban Warga'
    ],
    requirements: [
      'KTP & NPWP Pendiri dan Pengurus (Ketua, Sekretaris, Bendahara, Pengawas)',
      'Nama Perkumpulan (diawali kata "Perkumpulan" atau "Asosiasi")',
      'Anggaran Dasar & Tujuan Organisasi',
      'Alamat Sekretariat Perkumpulan',
      'Berita Acara Rapat Pendirian'
    ],
    icon: 'Users'
  }
];

export const ADDON_SERVICES: AddonService[] = [
  {
    id: 'hki-merek',
    name: 'Pendaftaran Merek HKI / Hak Cipta',
    category: 'hki',
    description: 'Perlindungan legal merek dagang bisnis Anda di DJKI Kemenkumham selama 10 tahun penuh agar tidak ditiru kompetitor.',
    price: 1850000,
    originalPrice: 2350000,
    popular: true,
    icon: 'ShieldCheck',
    benefit: 'Termasuk penelusuran nama merek & biaya PNBP Resmi Kemenkumham'
  },
  {
    id: 'pkp-efaktur',
    name: 'Pengukuhan PKP (Pengusaha Kena Pajak)',
    category: 'pajak',
    description: 'Pengurusan status PKP resmi agar perusahaan dapat menerbitkan Faktur Pajak PPN dan mengikuti tender bernilai besar.',
    price: 1500000,
    originalPrice: 2000000,
    popular: true,
    icon: 'Receipt',
    benefit: 'Termasuk aktivasi E-Faktur, Sertifikat Elektronik & Akun DJP'
  },
  {
    id: 'perubahan-akta',
    name: 'Perubahan Akta & Anggaran Dasar',
    category: 'operasional',
    description: 'Perubahan direksi/komisaris, penambahan modal, perubahan alamat, atau penambahan bidang KBLI usaha di notaris & Kemenkumham.',
    price: 2500000,
    originalPrice: 3200000,
    icon: 'FileEdit',
    benefit: 'Termasuk Akta Notaris Perubahan & SK Penerimaan Pemberitahuan AHU'
  },
  {
    id: 'sertifikasi-halal-bpom',
    name: 'Sertifikasi Halal / BPOM / ISO 9001',
    category: 'sertifikasi',
    description: 'Pendampingan sertifikasi standar mutu resmi untuk produk makanan/minuman, kosmetik, atau sertifikasi manajemen ISO.',
    price: 3500000,
    originalPrice: 4500000,
    icon: 'Award',
    benefit: 'Bimbingan audit dokumen, pendaftaran BPJPH / BPOM sampai terbit'
  },
  {
    id: 'website-company-profile',
    name: 'Website Bisnis & Email Domain Perusahaan',
    category: 'operasional',
    description: 'Pembuatan website profil perusahaan modern, domain .co.id / .com resmi, dan email bisnis @namausaha.com profesional.',
    price: 1250000,
    originalPrice: 1850000,
    icon: 'Globe',
    benefit: 'Domain 1 tahun, hosting cepat, tampilan responsif mobile-friendly'
  },
  {
    id: 'laporan-pajak-tahunan',
    name: 'Laporan SPT Tahunan Badan & Konsultasi',
    category: 'pajak',
    description: 'Penyusunan laporan keuangan neraca & laba rugi standar fiskal serta pelaporan SPT Badan Tahunan ke kantor pajak.',
    price: 1000000,
    originalPrice: 1500000,
    icon: 'Calculator',
    benefit: 'Dikerjakan oleh praktisi pajak bersertifikat, bebas denda telat lapor'
  },
  {
    id: 'rekening-bank-vip',
    name: 'Fast-Track Rekening Giro Perusahaan VIP',
    category: 'perbankan',
    description: 'Pengantar prioritas pembukaan rekening giro badan usaha di bank mitra resmi (BCA, Mandiri, BRI, BNI, CIMB Niaga).',
    price: 450000,
    originalPrice: 750000,
    icon: 'CreditCard',
    benefit: 'Tanpa antre panjang, penjemputan berkas oleh officer bank'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Budi Santoso, S.Kom',
    role: 'Founder & CEO',
    company: 'PT Kreasi Solusi Digital',
    city: 'Jakarta Selatan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'Proses pendirian PT skala kecil di BikinLegal.com luar biasa cepat! Dalam 4 hari kerja, Akta Notaris, SK Kemenkumham, NPWP 16 digit, dan NIB OSS RBA sudah langsung jadi dan valid di AHU Online. Harganya jujur tanpa biaya tersembunyi.',
    rating: 5,
    serviceUsed: 'PT Modal < Rp 1 Miliar',
    date: '14 Agustus 2026'
  },
  {
    id: '2',
    name: 'Rina Anggraini',
    role: 'Owner',
    company: 'PT Dapur Nusantara Rasa (PT Perorangan)',
    city: 'Bandung',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    content: 'Cuma Rp 750.000 sudah bisa punya PT Perorangan resmi Kemenkumham. Sangat membantu UMKM seperti saya untuk masuk ke supermarket dan supply corporate. Konsultasi KBLI-nya juga sangat sabar dan teliti!',
    rating: 5,
    serviceUsed: 'PT Perorangan Rp 750rb',
    date: '28 Juli 2026'
  },
  {
    id: '3',
    name: 'Ir. Hendra Gunawan',
    role: 'Managing Partner',
    company: 'CV Mitra Logistik Perkasa',
    city: 'Surabaya',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'Pendirian CV plus Virtual Office di CBD sangat memuaskan. Surat domisili gedung langsung keluar dan rekening bank BCA perusahaan kami langsung disetujui tanpa kendala. BikinLegal.com sangat profesional.',
    rating: 5,
    serviceUsed: 'CV Paket All-in Virtual Office',
    date: '02 Agustus 2026'
  },
  {
    id: '4',
    name: 'Dr. Siti Nurhaliza',
    role: 'Ketua Pembina',
    company: 'Yayasan Lentera Cahaya Kasih',
    city: 'Yogyakarta',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content: 'Mendirikan yayasan sosial pendidikan kini sangat mudah. Pengesahan SK Menkumham beres dalam seminggu. Kami langsung bisa membuka rekening giro atas nama yayasan untuk menerima donasi masyarakat.',
    rating: 5,
    serviceUsed: 'Yayasan Sosial Rp 5 Juta',
    date: '21 Juni 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'umum',
    question: 'Berapa lama proses pembuatan PT atau CV sampai selesai?',
    answer: 'Untuk PT Perorangan proses selesai dalam 1–2 hari kerja setelah data lengkap. Untuk PT Persekutuan (< 1 Miliar s/d > 5 Miliar) dan CV, proses pembuatan Akta Notaris hingga terbitnya SK Pengesahan Kemenkumham RI dan NIB OSS RBA memakan waktu 3–5 hari kerja.'
  },
  {
    id: 'faq-2',
    category: 'pt',
    question: 'Apa perbedaan utama PT Perorangan dengan PT Biasa (Persekutuan)?',
    answer: 'PT Perorangan didirikan oleh 1 orang saja (WNI) tanpa akta notaris manual, dengan kriteria modal/aset usaha mikro-kecil (maksimal omzet 5 Miliar). Sedangkan PT Biasa didirikan minimal oleh 2 orang pemegang saham (memiliki Direktur dan Komisaris) menggunakan akta notaris otentik dan tidak ada batasan maksimal permodalan.'
  },
  {
    id: 'faq-3',
    category: 'pt',
    question: 'Apakah nama PT harus terdiri dari 3 kata?',
    answer: 'Ya, sesuai PP No. 43 Tahun 2011, nama Perseroan Terbatas (PT) penanaman modal dalam negeri (PMDN) wajib terdiri dari minimal 3 kata berbahasa Indonesia dan belum pernah dipakai oleh perseroan lain. Tim kami menyediakan layanan cek ketersediaan nama gratis untuk memastikan nama Anda lolos AHU Online.'
  },
  {
    id: 'faq-4',
    category: 'virtual_office',
    question: 'Bagaimana jika saya belum memiliki kantor fisik? Bisakah menggunakan Virtual Office?',
    answer: 'Sangat bisa! Anda dapat memilih Paket All-In Virtual Office kami. Kami menyediakan alamat domisili gedung zonasi perkantoran prestisius (CBD Jakarta, Surabaya, Bali, dll) lengkap dengan surat keterangan domisili gedung, resepsionis penerima surat, dan fasilitas meeting room yang 100% sah untuk pembuatan NIB dan NPWP Badan.'
  },
  {
    id: 'faq-5',
    category: 'cv',
    question: 'Berapa modal minimal untuk mendirikan CV atau PT?',
    answer: 'Untuk CV dan PT Perorangan tidak ada batas minimal modal (bebas ditentukan oleh pendiri). Untuk PT Biasa, modal disetor minimal adalah 25% dari modal dasar yang dicantumkan dalam akta pendirian, tanpa perlu menyetorkan bukti rekening koran saat pendirian.'
  },
  {
    id: 'faq-6',
    category: 'pajak_izin',
    question: 'Apakah dokumen yang diterbitkan 100% legal dan sah di instansi pemerintah & perbankan?',
    answer: 'Dijamin 100% Sah dan Legal. Seluruh dokumen diterbitkan langsung oleh Notaris resmi rekanan Ikatan Notaris Indonesia, terdaftar di Ditjen AHU Kementerian Hukum dan HAM RI, Ditjen Pajak Kemenkeu, serta sistem OSS RBA Kementerian Investasi/BKPM RI. Kami memberikan garansi uang kembali jika dokumen tidak terdaftar resmi.'
  }
];
