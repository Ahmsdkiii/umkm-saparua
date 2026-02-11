// lib/data.ts
import { UMKM } from './types';

export const umkmData: UMKM[] = [
  {
    id: '1',
    slug: 'warung-bu-siti',
    name: 'Warung Bu Siti',
    category: 'Kuliner',
    shortDescription: 'Menyediakan berbagai makanan tradisional dengan cita rasa autentik',
    fullDescription: 'Warung Bu Siti telah berdiri sejak 2015 dan menjadi favorit warga desa. Kami menyediakan berbagai makanan tradisional yang dibuat dengan resep turun temurun dan bahan-bahan pilihan.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    whatsapp: '6281234567890',
    products: [
      {
        id: 'p1',
        name: 'Nasi Goreng Kampung',
        price: 15000,
        description: 'Nasi goreng dengan bumbu tradisional',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
        options: [
          {
            name: 'Level Pedas',
            choices: ['Tidak Pedas', 'Sedang', 'Pedas']
          },
          {
            name: 'Topping',
            choices: ['Telur', 'Ayam', 'Seafood']
          }
        ]
      },
      {
        id: 'p2',
        name: 'Soto Ayam',
        price: 12000,
        description: 'Soto ayam kuah bening dengan rempah pilihan',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'
      },
      {
        id: 'p3',
        name: 'Es Teh Manis',
        price: 3000,
        description: 'Teh manis segar',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
        options: [
          {
            name: 'Ukuran',
            choices: ['Small', 'Medium', 'Large']
          }
        ]
      }
    ]
  },
  {
    id: '2',
    slug: 'kerajinan-bamboo-mas-budi',
    name: 'Kerajinan Bamboo Mas Budi',
    category: 'Kerajinan',
    shortDescription: 'Produk kerajinan tangan dari bamboo berkualitas tinggi',
    fullDescription: 'Kami adalah pengrajin bamboo yang telah berpengalaman lebih dari 10 tahun. Setiap produk dibuat dengan teliti dan mengutamakan kualitas serta keindahan desain.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    whatsapp: '6281234567891',
    products: [
      {
        id: 'p4',
        name: 'Keranjang Bamboo',
        price: 45000,
        description: 'Keranjang multifungsi dari bamboo pilihan',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
        options: [
          {
            name: 'Ukuran',
            choices: ['Small', 'Medium', 'Large']
          }
        ]
      },
      {
        id: 'p5',
        name: 'Lampu Hias Bamboo',
        price: 85000,
        description: 'Lampu hias dengan desain modern',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'
      }
    ]
  },
  {
    id: '3',
    slug: 'toko-kue-ibu-ani',
    name: 'Toko Kue Ibu Ani',
    category: 'Kuliner',
    shortDescription: 'Aneka kue basah dan kering untuk berbagai acara',
    fullDescription: 'Toko Kue Ibu Ani menyediakan berbagai macam kue tradisional dan modern. Semua kue dibuat fresh setiap hari dengan bahan berkualitas tanpa pengawet.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    whatsapp: '6281234567892',
    products: [
      {
        id: 'p6',
        name: 'Kue Lapis Legit',
        price: 150000,
        description: 'Kue lapis dengan 18 layer',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
        options: [
          {
            name: 'Ukuran',
            choices: ['20cm', '25cm', '30cm']
          }
        ]
      },
      {
        id: 'p7',
        name: 'Nastar Premium',
        price: 75000,
        description: 'Nastar dengan selai nanas asli per toples',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'
      },
      {
        id: 'p8',
        name: 'Kastengel',
        price: 65000,
        description: 'Kastengel renyah dengan keju edam per toples',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'
      }
    ]
  },
  {
    id: '4',
    slug: 'sablon-pak-joko',
    name: 'Sablon Pak Joko',
    category: 'Jasa',
    shortDescription: 'Jasa sablon kaos, tote bag, dan merchandise',
    fullDescription: 'Sablon Pak Joko melayani sablon untuk berbagai kebutuhan dengan kualitas terbaik dan harga terjangkau. Kami menggunakan teknik sablon manual dan digital printing.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    whatsapp: '6281234567893',
    products: [
      {
        id: 'p9',
        name: 'Sablon Kaos',
        price: 35000,
        description: 'Sablon kaos dengan desain custom',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
        options: [
          {
            name: 'Ukuran',
            choices: ['S', 'M', 'L', 'XL', 'XXL']
          },
          {
            name: 'Warna Kaos',
            choices: ['Putih', 'Hitam', 'Navy', 'Merah']
          }
        ]
      },
      {
        id: 'p10',
        name: 'Tote Bag Custom',
        price: 25000,
        description: 'Tote bag kanvas dengan sablon',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'
      }
    ]
  },
  {
    id: '5',
    slug: 'tanaman-hias-pak-Ahmad',
    name: 'Tanaman Hias Pak Ahmad',
    category: 'Pertanian',
    shortDescription: 'Penjual tanaman hias dan tanaman buah dalam pot',
    fullDescription: 'Kami menyediakan berbagai jenis tanaman hias indoor dan outdoor serta tanaman buah dalam pot. Semua tanaman dirawat dengan baik dan siap menghiasi rumah Anda.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    whatsapp: '6281234567894',
    products: [
      {
        id: 'p11',
        name: 'Monstera Deliciosa',
        price: 95000,
        description: 'Tanaman hias tropis dengan daun berlubang',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
        options: [
          {
            name: 'Ukuran',
            choices: ['Small', 'Medium', 'Large']
          }
        ]
      },
      {
        id: 'p12',
        name: 'Lidah Mertua',
        price: 35000,
        description: 'Tanaman hias yang mudah perawatan',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'
      },
      {
        id: 'p13',
        name: 'Paket Tanaman Sukulen',
        price: 55000,
        description: 'Paket 5 tanaman sukulen mini',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'
      }
    ]
  },
  {
    id: '6',
    slug: 'madu-alami-bu-rina',
    name: 'Madu Alami Bu Rina',
    category: 'Pertanian',
    shortDescription: 'Madu murni hasil ternak lebah lokal',
    fullDescription: 'Madu Alami Bu Rina adalah madu murni 100% tanpa campuran yang dihasilkan dari ternak lebah di area perkebunan desa. Kualitas terjamin dan telah tersertifikasi.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    whatsapp: '6281234567895',
    products: [
      {
        id: 'p14',
        name: 'Madu Murni',
        price: 85000,
        description: 'Madu murni botol 500ml',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
        options: [
          {
            name: 'Ukuran',
            choices: ['250ml', '500ml', '1L']
          }
        ]
      },
      {
        id: 'p15',
        name: 'Madu Kelengkeng',
        price: 95000,
        description: 'Madu dari nektar bunga kelengkeng 500ml',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'
      }
    ]
  }
];

export const categories = ['Semua', 'Kuliner', 'Kerajinan', 'Jasa', 'Pertanian'];