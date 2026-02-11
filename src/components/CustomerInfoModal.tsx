'use client';

import { useState } from 'react';
import { CustomerInfo } from '@/lib/types';
import Button from './Button';

interface CustomerInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (info: CustomerInfo) => void;
}

export default function CustomerInfoModal({ isOpen, onClose, onSubmit }: CustomerInfoModalProps) {
  const [formData, setFormData] = useState<CustomerInfo>({
    name: '',
    phone: '',
    address: ''
  });

  const [errors, setErrors] = useState<Partial<CustomerInfo>>({});

  const validate = () => {
    const newErrors: Partial<CustomerInfo> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nama wajib diisi';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor HP wajib diisi';
    } else if (!/^[0-9]{10,13}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Nomor HP tidak valid';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Alamat wajib diisi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({ name: '', phone: '', address: '' });
      setErrors({});
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-800 mb-2">Informasi Pengiriman</h3>
              <p className="text-stone-600 text-sm">Lengkapi data diri untuk melanjutkan pesanan</p>
            </div>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-stone-600 transition-colors p-2 hover:bg-stone-100 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                  errors.name ? 'border-red-500' : 'border-stone-300'
                }`}
                placeholder="Masukkan nama lengkap"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Nomor HP / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                  errors.phone ? 'border-red-500' : 'border-stone-300'
                }`}
                placeholder="08xxxxxxxxxx"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Alamat Lengkap <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none ${
                  errors.address ? 'border-red-500' : 'border-stone-300'
                }`}
                placeholder="Masukkan alamat lengkap untuk pengiriman"
              />
              {errors.address && <p className="text-red-500 text-xs mt-1.5">{errors.address}</p>}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Batal
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="flex-1"
              >
                Lanjutkan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}