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
  let message = `*PESANAN BARU*\n\n`;
  message += `*Informasi Pelanggan:*\n`;
  message += `Nama: ${customerInfo.name}\n`;
  message += `No. HP: ${customerInfo.phone}\n`;
  message += `Alamat: ${customerInfo.address}\n\n`;
  message += `*Pesanan dari ${umkmName}:*\n\n`;
  
  let total = 0;
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.productName}\n`;
    message += `   Jumlah: ${item.quantity}\n`;
    
    if (item.options) {
      Object.entries(item.options).forEach(([key, value]) => {
        message += `   ${key}: ${value}\n`;
      });
    }
    
    const subtotal = item.price * item.quantity;
    total += subtotal;
    message += `   Subtotal: ${formatPrice(subtotal)}\n\n`;
  });
  
  message += `*Total Pembayaran: ${formatPrice(total)}*\n\n`;
  message += 'Terima kasih telah memesan!';
  
  return encodeURIComponent(message);
}