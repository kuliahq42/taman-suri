export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readMinutes: number;
  tags: string[];
  category: "Kepo" | "Drama & Humor" | "Tips & Tutorial";
}

export const blogPosts: BlogPost[] = [
  {
    id: "b001",
    slug: "kenapa-monstera-deliciosa-populer",
    title:
      "Kenapa Sih Monstera Deliciosa Masih Jadi 'Ratu' Tanaman Hias Interior?",
    excerpt:
      "Mengulas alasan di balik populernya Monstera Deliciosa sebagai dekorasi interior rumah modern.",
    content: `Kalau kamu pernah scroll-scroll Pinterest atau Instagram bertema home decor, kemungkinan besar kamu sering nemuin tanaman dengan daun bolong-bolong yang estetik banget. Yup, itu adalah Monstera Deliciosa!

Tapi kenapa sih tanaman ini kepo-able banget dan selalu jadi buruan pecinta tanaman interior?

1. Bentuk Daun Unik: Fenestrasi (sobekan alami pada daun) bikin kesan tropis modern langsung terasa di dalam ruangan.
2. Perawatan Gampang: Tanaman ini toleran dengan cahaya sedang (indirect light) dan gak perlu disiram tiap jam.
3. Pembersih Udara: Selain cantik, Monstera juga bantu menyaring polutan udara harian di dalam rumah.

Biar Monstera kamu tampil makin elegan, pemilihan pot dan penataan sudut ruangan itu kunci utamanya. Kalau kamu mau cari Monstera berkualitas atau konsultasi botanical styling untuk sudut rumahmu, kamu bisa cek katalog lengkapnya langsung di <a href='/#shop' class='text-forest-600 underline font-semibold'>Taman Suri Shop</a>.`,
    coverImage:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=1600&q=85",
    author: {
      name: "Andini Putri",
      avatar: "https://i.pravatar.cc/150?img=47",
      role: "Plant Stylist · Taman Suri",
    },
    publishedAt: "2026-09-12",
    readMinutes: 4,
    tags: ["Monstera", "Tanaman Indoor", "Home Decor"],
    category: "Kepo",
  },
  {
    id: "b002",
    slug: "drama-ibu-ibu-dan-janda-bolong",
    title: "Drama Ibu-Ibu dan Pohon Janda Bolong: Sebuah Konspirasi Tetangga",
    excerpt:
      "Sisi humor seputar tren merawat tanaman hias dan persaingan antar tetangga.",
    content: `Ada satu misteri terbesar di kompleks rumah gue: Kenapa setiap kali ada tetangga yang beli tanaman hias baru, besoknya satu RT langsung pada pamer sisa pot kosong di teras?

Kemarin lusa, nyokap gue mendadak heboh gara-gara liat 'Janda Bolong' punya tetangga sebelah daunnya makin rimbun. Katanya, 'Ini pasti ditaruh jimat pemikat siraman air beras pagi hari!' Padahal pas gue tanya ke pemiliknya, tanamannya cuma rutin disiram biasa sama ditaruh di tempat yang teduh.

Ternyata merawat taman rumah itu emang penuh drama. Kadang disiram tiap hari malah layu, didiemin malah tumbuh lebat kayak hutan amazon. Buat kalian yang lelah sama drama siram-menyiram dan mau taman rumah yang estetik tanpa bikin darah tinggi, mending serahin aja urusan lanskap dan tanaman hias kamu ke ahlinya di <a href='/#services' class='text-forest-600 underline font-semibold'>Jasa Landscape Taman Suri</a>. Dijamin tetangga auto kepo tanpa perlu pakai jimat air beras!`,
    coverImage:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1600&q=85",
    author: {
      name: "Rizky Pratama",
      avatar: "https://i.pravatar.cc/150?img=12",
      role: "Landscape Designer · Taman Suri",
    },
    publishedAt: "2026-10-04",
    readMinutes: 3,
    tags: ["Humor", "Kehidupan", "Gardening"],
    category: "Drama & Humor",
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((p) => p.slug === slug);
};

export const getAllBlogSlugs = (): string[] => {
  return blogPosts.map((p) => p.slug);
};
