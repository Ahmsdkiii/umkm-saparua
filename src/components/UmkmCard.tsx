import Link from 'next/link';
import Image from 'next/image';
import { UMKM } from '@/lib/types';

interface UmkmCardProps {
  umkm: UMKM;
}

export default function UmkmCard({ umkm }: UmkmCardProps) {
  return (
    <Link href={`/umkm/${umkm.slug}`} className="group block h-full">
      <div className="bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-amber-300 transition-all duration-300 h-full flex flex-col">
        <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-stone-100 flex-shrink-0">
          <Image
            src={umkm.image}
            alt={umkm.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-amber-700 border border-amber-200">
              {umkm.category}
            </span>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-base font-semibold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors line-clamp-1">
            {umkm.name}
          </h3>
          <p className="text-stone-600 text-sm line-clamp-2 mb-3 leading-relaxed flex-grow">
            {umkm.shortDescription}
          </p>
          <div className="flex items-center text-amber-700 font-medium text-sm pt-2 border-t border-stone-100">
            <span>Lihat Detail</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}