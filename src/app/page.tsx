import Link from 'next/link';
import Image from 'next/image';
import { umkmData } from '@/lib/data';
import UmkmCard from '@/components/UmkmCard';
import Button from '@/components/Button';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  const featuredUmkm = umkmData.slice(0, 3);

  return (
    <div className="pt-16">
      <section className="relative h-[85vh] sm:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/40 to-amber-900/30 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600"
          alt="Desa Makmur"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-xs sm:text-sm font-medium">🏡 Platform UMKM Digital Desa</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Selamat Datang di
            <span className="block text-amber-300 mt-1">
              Desa Makmur
            </span>
          </h1>
          <p className="text-base sm:text-xl mb-8 sm:mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed px-4">
            Temukan produk berkualitas dari UMKM lokal dan dukung ekonomi desa yang berkelanjutan
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
            <Link href="/umkm">
              <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                <span className="flex items-center justify-center gap-2">
                  Jelajahi UMKM
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-3 sm:mb-4 px-4 py-1.5 bg-amber-50 rounded-full border border-amber-200">
              <span className="text-xs sm:text-sm font-semibold text-amber-800">Tentang Kami</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-4 sm:mb-6 leading-tight">
              Membangun Ekonomi Desa yang
              <span className="block text-amber-700 mt-1">
                Lebih Baik
              </span>
            </h2>
            <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
              Desa Makmur terletak di Kecamatan Sejahtera, Kabupaten Bahagia dengan populasi sekitar 5.000 jiwa yang produktif dan inovatif.
            </p>
            <p className="text-stone-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
              Kami bangga dengan beragam UMKM berkualitas yang menghasilkan produk kuliner tradisional, kerajinan tangan unik, hingga hasil pertanian organik.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-700 mb-1 sm:mb-2">50+</div>
                <div className="text-xs sm:text-sm text-stone-600">UMKM Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-700 mb-1 sm:mb-2">100+</div>
                <div className="text-xs sm:text-sm text-stone-600">Produk Lokal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-700 mb-1 sm:mb-2">5K+</div>
                <div className="text-xs sm:text-sm text-stone-600">Pelanggan</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-80 sm:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=800"
                alt="Tentang Desa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-50/50 via-stone-50 to-amber-50/30 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-3 sm:mb-4 px-4 py-1.5 bg-white rounded-full border border-amber-200">
              <span className="text-xs sm:text-sm font-semibold text-amber-800">
                UMKM Pilihan
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-3 sm:mb-4">UMKM Unggulan Kami</h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-base sm:text-lg">
              Produk berkualitas dari pelaku UMKM terpercaya di Desa Makmur
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {featuredUmkm.map((umkm) => (
              <UmkmCard key={umkm.id} umkm={umkm} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/umkm">
              <Button size="lg">
                <span className="flex items-center gap-2">
                  Lihat Semua UMKM
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-100">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2 sm:mb-3">Mudah Berbelanja</h3>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">Pilih produk favorit dan pesan langsung via WhatsApp dengan cepat</p>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-100">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2 sm:mb-3">Produk Berkualitas</h3>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">Semua produk terjamin kualitas, kehigienisan, dan kehalalannya</p>
          </div>

          <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-100 sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2 sm:mb-3">Dukung Lokal</h3>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">Bantu pertumbuhan ekonomi desa dengan membeli produk lokal</p>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}