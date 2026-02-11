'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Bagaimana cara memesan produk di Desa Makmur?',
    answer: 'Sangat mudah! Pilih UMKM yang Anda inginkan, pilih produk, klik tombol "Pilih", atur jumlah dan opsi produk, lalu tambahkan ke keranjang. Setelah selesai belanja, klik "Lanjutkan ke WhatsApp" dan isi data diri Anda. Pesanan akan otomatis dikirim ke WhatsApp penjual.'
  },
  {
    question: 'Apakah saya perlu membuat akun untuk berbelanja?',
    answer: 'Tidak perlu! Platform kami dirancang untuk kemudahan. Anda hanya perlu memilih produk dan melanjutkan pemesanan melalui WhatsApp tanpa harus mendaftar atau login.'
  },
  {
    question: 'Bagaimana cara pembayarannya?',
    answer: 'Pembayaran dilakukan langsung dengan penjual melalui WhatsApp. Setelah Anda mengirim pesanan, penjual akan memberikan informasi metode pembayaran yang tersedia (transfer bank, COD, atau metode lainnya).'
  },
  {
    question: 'Berapa lama waktu pengiriman produk?',
    answer: 'Waktu pengiriman berbeda-beda tergantung UMKM dan lokasi Anda. Setelah konfirmasi pesanan melalui WhatsApp, penjual akan memberikan estimasi waktu pengiriman. Umumnya pengiriman dalam area desa 1-2 hari kerja.'
  },
  {
    question: 'Apakah produk bisa diantar ke luar daerah?',
    answer: 'Ya, beberapa UMKM melayani pengiriman ke luar daerah. Silakan konfirmasi dengan penjual melalui WhatsApp mengenai ketersediaan layanan pengiriman ke alamat Anda dan biaya ongkos kirim yang berlaku.'
  },
  {
    question: 'Bagaimana jika produk yang saya terima tidak sesuai?',
    answer: 'Anda dapat menghubungi penjual langsung melalui WhatsApp untuk komplain atau pengembalian. Setiap UMKM memiliki kebijakan masing-masing terkait retur dan pengembalian dana.'
  },
  {
    question: 'Apakah semua produk dijamin halal dan berkualitas?',
    answer: 'Ya, semua produk dari UMKM Desa Makmur telah melalui kurasi dan dijamin kehalalannya serta kualitasnya. Produk makanan diproduksi dengan standar kebersihan yang baik.'
  },
  {
    question: 'Bisakah saya memesan dalam jumlah banyak (grosir)?',
    answer: 'Tentu! Untuk pemesanan dalam jumlah besar atau grosir, silakan hubungi penjual melalui WhatsApp untuk mendapatkan harga khusus dan ketersediaan stok.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-amber-50/30 via-stone-50 to-amber-50/20 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4 px-4 py-1.5 bg-white rounded-full border border-amber-200">
            <span className="text-xs sm:text-sm font-semibold text-amber-800">
              Pertanyaan Umum
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-3 sm:mb-4">
            Cara Pembelian
            <span className="block text-amber-700 mt-1">
              di Desa Makmur
            </span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Temukan jawaban untuk pertanyaan yang sering diajukan seputar pembelian produk UMKM
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-all duration-300 hover:border-amber-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left transition-colors hover:bg-amber-50/50"
              >
                <span className="font-semibold text-stone-800 text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-1">
                  <div className="h-px bg-stone-200 mb-4"></div>
                  <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>     
      </div>
    </section>
  );
}