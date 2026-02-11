'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { umkmData } from '@/lib/data';
import { Product, CustomerInfo } from '@/lib/types';
import ProductCard from '@/components/ProductCard';
import QuantitySelector from '@/components/QuantitySelector';
import Button from '@/components/Button';
import CustomerInfoModal from '@/components/CustomerInfoModal';
import { formatPrice, createWhatsAppMessage } from '@/lib/utils';

interface OrderItem {
  product: Product;
  quantity: number;
  selectedOptions: { [key: string]: string };
}

export default function UmkmDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const umkm = umkmData.find((u) => u.slug === slug);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  if (!umkm) {
    notFound();
  }

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    const initialOptions: { [key: string]: string } = {};
    product.options?.forEach((option) => {
      initialOptions[option.name] = option.choices[0];
    });
    setSelectedOptions(initialOptions);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    setCart([
      ...cart,
      {
        product: selectedProduct,
        quantity,
        selectedOptions: { ...selectedOptions },
      },
    ]);
    setSelectedProduct(null);
    setQuantity(1);
    setSelectedOptions({});
  };

  const handleRemoveFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    setShowCustomerModal(true);
  };

  const handleCustomerSubmit = (customerInfo: CustomerInfo) => {
    const items = cart.map((item) => ({
      productName: item.product.name,
      quantity: item.quantity,
      options: item.selectedOptions,
      price: item.product.price,
    }));

    const message = createWhatsAppMessage(umkm.name, customerInfo, items);
    const whatsappUrl = `https://wa.me/${umkm.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setShowCustomerModal(false);
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-stone-50 to-amber-50/20 pt-16">
      <div className="relative h-80 sm:h-[450px] w-full overflow-hidden">
        <Image
          src={umkm.image}
          alt={umkm.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 w-full">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
              <span className="text-xs sm:text-sm font-semibold text-white">{umkm.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4">{umkm.name}</h1>
            <div className="flex items-center space-x-2 sm:space-x-3 text-white/90">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium text-sm sm:text-base">{umkm.whatsapp}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-3 sm:mb-4">Tentang UMKM</h2>
          <p className="text-stone-600 leading-relaxed text-sm sm:text-base lg:text-lg">{umkm.fullDescription}</p>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">Produk Kami</h2>
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-600 text-white rounded-full text-xs sm:text-sm font-semibold">
              {umkm.products.length} Produk
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {umkm.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={handleSelectProduct}
              />
            ))}
          </div>
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-800 mb-2">{selectedProduct.name}</h3>
                    <p className="text-2xl sm:text-3xl font-bold text-amber-700">
                      {formatPrice(selectedProduct.price)}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-stone-400 hover:text-stone-600 transition-colors p-2 hover:bg-stone-100 rounded-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="relative h-56 sm:h-64 w-full mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-stone-600 mb-6 leading-relaxed text-sm sm:text-base">{selectedProduct.description}</p>

                {selectedProduct.options && selectedProduct.options.length > 0 && (
                  <div className="space-y-5 mb-8">
                    {selectedProduct.options.map((option) => (
                      <div key={option.name}>
                        <label className="block text-sm font-semibold text-stone-700 mb-3">
                          {option.name}
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {option.choices.map((choice) => (
                            <button
                              key={choice}
                              onClick={() =>
                                setSelectedOptions({
                                  ...selectedOptions,
                                  [option.name]: choice,
                                })
                              }
                              className={`px-4 py-2.5 rounded-lg font-medium transition-all text-sm ${
                                selectedOptions[option.name] === choice
                                  ? 'bg-amber-600 text-white'
                                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                              }`}
                            >
                              {choice}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-stone-700 mb-3">Jumlah</label>
                  <QuantitySelector
                    quantity={quantity}
                    onIncrease={() => setQuantity(quantity + 1)}
                    onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
                  />
                </div>

                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                  className="w-full"
                  size="lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Tambah ke Keranjang
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}

        {cart.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-800">Keranjang Pesanan</h3>
                  <p className="text-xs sm:text-sm text-stone-600">{cart.length} produk dipilih</p>
                </div>
                <div className="text-right">
                  <div className="text-xs sm:text-sm text-stone-600 mb-1">Total Pembayaran</div>
                  <div className="text-xl sm:text-2xl font-bold text-amber-700">
                    {formatPrice(totalPrice)}
                  </div>
                </div>
              </div>

              <div className="max-h-32 sm:max-h-40 overflow-y-auto mb-4 sm:mb-5 space-y-2 sm:space-y-3">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-amber-50 p-3 sm:p-4 rounded-lg border border-amber-100"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-stone-800 text-sm sm:text-base truncate">{item.product.name}</p>
                      <p className="text-xs sm:text-sm text-stone-600">
                        {item.quantity}x {formatPrice(item.product.price)}
                        {Object.keys(item.selectedOptions).length > 0 && (
                          <span className="ml-2 text-amber-700">
                            ({Object.entries(item.selectedOptions)
                              .map(([key, value]) => `${key}: ${value}`)
                              .join(', ')})
                          </span>
                        )}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(index)}
                      className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-all ml-2 flex-shrink-0"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                onClick={handleCheckout}
                className="w-full"
                size="lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Lanjutkan ke WhatsApp
                </span>
              </Button>
            </div>
          </div>
        )}
      </div>

      <CustomerInfoModal
        isOpen={showCustomerModal}
        onClose={() => setShowCustomerModal(false)}
        onSubmit={handleCustomerSubmit}
      />
    </div>
  );
}