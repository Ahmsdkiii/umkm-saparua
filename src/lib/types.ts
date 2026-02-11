// src/lib/types.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  options?: {
    name: string;
    choices: string[];
  }[];
}

export interface UMKM {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  whatsapp: string;
  products: Product[];
}

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
}