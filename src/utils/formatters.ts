export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function generateWhatsAppLink({
  entityName,
  tierName,
  totalPrice,
  addons = [],
  companyName = '',
  userName = '',
  userPhone = '',
  city = ''
}: {
  entityName: string;
  tierName: string;
  totalPrice: number;
  addons?: string[];
  companyName?: string;
  userName?: string;
  userPhone?: string;
  city?: string;
}): string {
  const adminNumber = '6285830831654'; // Official WhatsApp Business / CS Hotline number
  
  let message = `Halo BikinLegal.com (PT. Bikin Legalitas Bisnis), saya ingin konsultasi & order paket legalitas usaha:%0A%0A`;
  message += `📌 *Layanan:* ${encodeURIComponent(entityName)}%0A`;
  message += `📦 *Pilihan Paket:* ${encodeURIComponent(tierName)}%0A`;
  message += `💰 *Estimasi Biaya:* ${encodeURIComponent(formatRupiah(totalPrice))}%0A`;

  if (companyName) {
    message += `🏢 *Rencana Nama Usaha:* ${encodeURIComponent(companyName)}%0A`;
  }
  if (city) {
    message += `📍 *Domisili/Kota:* ${encodeURIComponent(city)}%0A`;
  }
  if (userName) {
    message += `👤 *Nama Pemohon:* ${encodeURIComponent(userName)}%0A`;
  }
  if (userPhone) {
    message += `📞 *No. Kontak:* ${encodeURIComponent(userPhone)}%0A`;
  }

  if (addons.length > 0) {
    message += `%0A➕ *Layanan Tambahan (Add-ons):*%0A`;
    addons.forEach((addon, idx) => {
      message += `${idx + 1}. ${encodeURIComponent(addon)}%0A`;
    });
  }

  message += `%0AMohon info langkah awal & persyaratan dokumen yang dibutuhkan. Terima kasih!`;

  return `https://api.whatsapp.com/send?phone=${adminNumber}&text=${message}`;
}
