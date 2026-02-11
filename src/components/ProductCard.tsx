import Image from 'next/image';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-amber-300 transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-stone-100 flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h4 className="text-base sm:text-lg font-semibold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors line-clamp-1">
          {product.name}
        </h4>
        <p className="text-stone-600 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-stone-100 mt-auto">
          <span className="text-lg sm:text-xl font-bold text-amber-700">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => onSelect(product)}
            className="px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-colors"
          >
            Pilih
          </button>
        </div>
      </div>
    </div>
  );
}