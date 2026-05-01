import type { Product } from "#/types/product";

export const product: Product[] = [
  {
    id: 1,
    name: 'Keripik Tempe Rejeki',
    slug: 'keripik-tempe-rejeki',
    price: 15000,
    description:
      '<p>Keripik tempe tipis renyah yang diolah menggunakan resep warisan keluarga dengan bumbu rempah tradisional yang meresap sempurna. Proses penggorengan dilakukan dengan teknik khusus untuk memastikan kerenyahan yang tahan lama tanpa menggunakan bahan pengawet buatan.</p><p>Cocok dinikmati sebagai camilan saat bersantai atau sebagai pelengkap lauk makan Anda. Dikemas secara higienis untuk menjaga kualitas rasa dan aroma rempah asli Indonesia di setiap gigitannya.</p>',
    store: 'Rejeki Snack',
    image:[
      'https://ik.imagekit.io/rulls/sisfodes/demo/product/Keripik%20Tempe%20Sri%20Rejeki.png?updatedAt=1777645175891?tr-f=fwebp',
      'https://ik.imagekit.io/rulls/sisfodes/demo/product/Keripik%20Tempe%20Sri%20Rejeki-Detail1.png?updatedAt=1777645734650?tr-f=fwebp',
    ],
    category: { id: 1, name: 'Makanan' },
    contact: '081234567890',
    created_at: new Date('2026-04-18T10:00:00Z')
  },
  {
    id: 2,
    name: 'Batu Bata Merah Pak Aang',
    slug: 'batu-bata-merah-pak-aang',
    price: 1000,
    description:
      '<p>Batu bata merah berkualitas tinggi buatan Pak Aang diproduksi menggunakan tanah liat pilihan dan melalui proses pembakaran yang sempurna. Memiliki tekstur padat, kuat, dan presisi, sangat cocok untuk konstruksi bangunan yang kokoh dan tahan lama.</p><p>Produk ini telah dipercaya oleh banyak kontraktor lokal untuk berbagai proyek pembangunan rumah tinggal maupun gedung komersial karena ketahanan bebannya yang luar biasa.</p>',
    store: 'UD Berkah Bata',
    image: [
      'https://ik.imagekit.io/rulls/sisfodes/demo/product/Batu%20Bata%20Merah%20Pak%20Aang.png?updatedAt=1777645593911?tr-f=fwebp',
      'https://ik.imagekit.io/rulls/sisfodes/demo/product/Batu%20Bata%20Merah%20Pak%20Aang-Detail1.png?updatedAt=1777645786609?tr-f=fwebp',
      'https://ik.imagekit.io/rulls/sisfodes/demo/product/Batu%20Bata%20Merah%20Pak%20Aang-Detail1.png?updatedAt=1777645786609?tr-f=fwebp'
    ],
    category: { id: 2, name: 'Bahan Bangunan' },
    contact: '081234567891',
    created_at: new Date('2026-04-20T08:00:00Z')
  },
  {
    id: 3,
    name: 'Susu Kurma',
    slug: 'susu-kurma',
    price: 12000,
    description:
      '<p>Minuman kesehatan Susu Kurma yang menyegarkan, terbuat dari perpaduan susu sapi segar pilihan dan kurma berkualitas tinggi. Tanpa tambahan gula buatan dan bahan pengawet, menjadikannya minuman yang kaya nutrisi dan energi alami untuk aktivitas harian Anda.</p><p>Sangat baik dikonsumsi untuk menjaga daya tahan tubuh, melancarkan pencernaan, serta sebagai booster ASI bagi ibu menyusui. Nikmati kebaikan alam dalam setiap tegukan Susu Kurma kami.</p>',
    store: 'Healthy Drink Desa',
    image: [
      'https://ik.imagekit.io/rulls/sisfodes/demo/product/Susu%20Kurma.png?updatedAt=1777646072821?tr-f=fwebp',
      'https://ik.imagekit.io/rulls/sisfodes/demo/product/Susu%20Kurma-Detail1.png?updatedAt=1777646218552?tr-f=fwebp'
    ],
    category: { id: 1, name: 'Minuman' },
    contact: '081234567892',
    created_at: new Date('2026-04-22T09:00:00Z')
  },
  {
    id: 4,
    name: 'Tape Madu Sanjaya',
    slug: 'tape-madu-sanjaya',
    price: 25000,
    description:
      '<p>Tape Madu Sanjaya adalah tape singkong premium yang memiliki rasa manis alami layaknya madu dengan tekstur yang sangat lembut (lumer di mulut). Dibuat dari singkong mentega pilihan yang difermentasi dengan ragi berkualitas dalam suhu yang terjaga.</p><p>Produk unggulan Desa Sumberkejayan ini sudah terkenal hingga ke luar daerah karena aromanya yang khas dan rasanya yang konsisten. Dikemas dengan rapi, cocok sebagai oleh-oleh spesial untuk keluarga tercinta.</p>',
    store: 'Tape Sanjaya',
    image: [
      'https://ik.imagekit.io/rulls/sisfodes/demo/product/Tape%20Madu%20Sanjaya.png?updatedAt=1777646571744?tr-f=fwebp',
    ],
    category: { id: 1, name: 'Makanan' },
    contact: '081234567893',
    created_at: new Date('2026-04-25T07:00:00Z')
  }
];
