'use client';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={onDecrease}
        className="w-10 h-10 rounded-lg bg-stone-100 hover:bg-amber-600 hover:text-white flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-stone-100 disabled:hover:text-stone-700"
        disabled={quantity <= 1}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
        </svg>
      </button>
      <span className="text-2xl font-bold w-12 text-center text-stone-800">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center transition-all hover:bg-amber-700"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
}