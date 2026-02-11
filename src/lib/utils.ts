// src/lib/utils.ts
import { CustomerInfo } from './types';

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
}

export function createWhatsAppMessage(
  umkmName: string,
  customerInfo: CustomerInfo,
  items: Array<{
    productName: string;
    quantity: number;
    options?: { [key: string]: string };
    price: number;
  }>
): string {
  let message = `Halo *${umkmName}*!\n\n`;
  message += `Saya ingin memesan:\n\n`;
  
  let total = 0;
  items.forEach((item, index) => {
    message += `${index + 1}. *${item.productName}*\n`;
    message += `   Jumlah: ${item.quantity}\n`;
    
    if (item.options) {
      Object.entries(item.options).forEach(([key, value]) => {
        message += `   ${key}: ${value}\n`;
      });
    }
    
    const subtotal = item.price * item.quantity;
    total += subtotal;
    message += `   Harga: ${formatPrice(subtotal)}\n\n`;
  });
  
  message += `*Total: ${formatPrice(total)}*\n\n`;
  message += `*Detail Pengiriman:*\n`;
  message += `Nama: ${customerInfo.name}\n`;
  message += `No. HP: ${customerInfo.phone}\n`;
  message += `Alamat: ${customerInfo.address}\n\n`;
  message += 'Mohon konfirmasi ketersediaan produk. Terima kasih!';
  
  return encodeURIComponent(message);
}