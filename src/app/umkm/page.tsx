'use client';

import { useState, useMemo } from 'react';
import { umkmData, categories } from '@/lib/data';
import UmkmCard from '@/components/UmkmCard';
import SearchInput from '@/components/SearchInput';
import CategoryFilter from '@/components/CategoryFilter';

export default function UmkmPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredUmkm = useMemo(() => {
    return umkmData.filter((umkm) => {
      const matchesSearch =
        umkm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        umkm.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        umkm.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        umkm.products.some((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === 'Semua' || umkm.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-stone-50 to-amber-50/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12 text-center">
          <div className="inline-block mb-3 sm:mb-4 px-4 py-1.5 bg-white rounded-full border border-amber-200">
            <span className="text-xs sm:text-sm font-semibold text-amber-800">
              Katalog UMKM
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-3 sm:mb-4">
            Jelajahi Produk
            <span className="block text-amber-700 mt-1">
              UMKM Lokal
            </span>
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
            Temukan berbagai produk berkualitas dari pelaku UMKM Desa Makmur
          </p>
        </div>

        <div className="mb-8 sm:mb-10 space-y-4 sm:space-y-6 bg-white p-4 sm:p-6 rounded-xl border border-stone-200">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Cari UMKM, produk, atau kategori..."
          />

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-sm font-semibold text-stone-700 whitespace-nowrap">Filter:</span>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>

        {filteredUmkm.length === 0 ? (
          <div className="text-center py-16 sm:py-20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-800 mb-2">Tidak ada UMKM ditemukan</h3>
            <p className="text-stone-600 text-sm sm:text-base">Coba gunakan kata kunci atau filter yang berbeda</p>
          </div>
        ) : (
          <>
            <div className="mb-4 sm:mb-6 text-stone-600 font-medium text-sm sm:text-base">
              Menampilkan {filteredUmkm.length} UMKM
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredUmkm.map((umkm) => (
                <UmkmCard key={umkm.id} umkm={umkm} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}