const products = [
  // Men Shoes Collection
  {
    id: 1,
    name: "Nike Air Max 270",
    description: "Experience all-day comfort with the Air Max 270. Its large Air unit delivers exceptional cushioning while the sleek design adds a modern touch to any outfit.",
    price: 12999,
    category: "men-shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    brand: "Nike",
    rating: 4.8
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    description: "Unleash your energy with Ultraboost 22. Featuring responsive BOOST cushioning and a supportive Primeknit upper for your most comfortable run yet.",
    price: 15999,
    category: "men-shoes",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center",
    brand: "Adidas",
    rating: 4.9
  },
  {
    id: 3,
    name: "Puma RS-X Running Shoes",
    description: "Bold design meets comfort in these modern running shoes. Perfect for both athletic performance and street style.",
    price: 8999,
    category: "men-shoes",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
    brand: "Puma",
    rating: 4.6
  },
  {
    id: 4,
    name: "Reebok Classic Leather",
    description: "Timeless style and premium comfort. These classic leather shoes are perfect for everyday wear and casual outings.",
    price: 6999,
    category: "men-shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop&crop=center",
    brand: "Reebok",
    rating: 4.7
  },

  // Women Shoes Collection
  {
    id: 5,
    name: "Nike Air Max 90 Women",
    description: "Iconic style meets modern comfort. The Air Max 90 for women features classic design with contemporary updates.",
    price: 11999,
    category: "women-shoes",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop&crop=center",
    brand: "Nike",
    rating: 4.8
  },
  {
    id: 6,
    name: "Adidas Stan Smith Women",
    description: "Clean, minimalist design that never goes out of style. Perfect for casual wear and versatile styling.",
    price: 7999,
    category: "women-shoes",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop&crop=center",
    brand: "Adidas",
    rating: 4.7
  },
  {
    id: 7,
    name: "Puma Cali Women's Sneakers",
    description: "California-inspired design with a modern twist. These sneakers combine retro vibes with contemporary comfort.",
    price: 8499,
    category: "women-shoes",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center",
    brand: "Puma",
    rating: 4.6
  },

  // Men Slippers Collection
  {
    id: 8,
    name: "Woodland Leather Slippers",
    description: "Premium leather slippers for ultimate comfort. Perfect for indoor and light outdoor use.",
    price: 2999,
    category: "men-slippers",
    image: "https://images.unsplash.com/photo-1506629905073-5aa3c35b6c10?w=400&h=400&fit=crop&crop=center",
    brand: "Woodland",
    rating: 4.5
  },
  {
    id: 9,
    name: "Bata Memory Foam Slippers",
    description: "Soft memory foam cushioning provides all-day comfort. Ideal for daily wear and relaxation.",
    price: 1999,
    category: "men-slippers",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center",
    brand: "Bata",
    rating: 4.3
  },

  // Women Slippers Collection
  {
    id: 10,
    name: "Relaxo Women's Comfort Slippers",
    description: "Lightweight and comfortable slippers perfect for everyday use. Soft sole for maximum comfort.",
    price: 899,
    category: "women-slippers",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop&crop=center",
    brand: "Relaxo",
    rating: 4.2
  },
  {
    id: 11,
    name: "VKC Pride Women's Slippers",
    description: "Stylish and durable slippers with excellent grip. Perfect for indoor and outdoor use.",
    price: 1299,
    category: "women-slippers",
    image: "https://images.unsplash.com/photo-1562349019-94d9da0bdf85?w=400&h=400&fit=crop&crop=center",
    brand: "VKC Pride",
    rating: 4.4
  },

  // Crocs Collection
  {
    id: 12,
    name: "Crocs Classic Clog",
    description: "The iconic Crocs comfort in a classic design. Lightweight, durable, and perfect for all-day wear.",
    price: 3499,
    category: "crocs",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=400&h=400&fit=crop&crop=center",
    brand: "Crocs",
    rating: 4.6
  },
  {
    id: 13,
    name: "Crocs LiteRide Clog",
    description: "Next-generation comfort with LiteRide foam technology. Ultra-soft and incredibly lightweight.",
    price: 4999,
    category: "crocs",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&h=400&fit=crop&crop=center",
    brand: "Crocs",
    rating: 4.7
  },
  {
    id: 14,
    name: "Crocs Bistro Clog",
    description: "Professional-grade Crocs with enhanced slip resistance. Perfect for work and casual wear.",
    price: 3999,
    category: "crocs",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    brand: "Crocs",
    rating: 4.5
  },

  // Men Watches Collection
  {
    id: 15,
    name: "Casio Edifice EFR-552",
    description: "Sporty chronograph watch with stainless steel construction. Perfect for the modern man who values precision.",
    price: 12999,
    category: "men-watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    brand: "Casio",
    rating: 4.6
  },
  {
    id: 16,
    name: "Titan Steel Men's Watch",
    description: "Elegant steel watch with premium finishing. Combines traditional craftsmanship with contemporary design.",
    price: 8999,
    category: "men-watches",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop&crop=center",
    brand: "Titan",
    rating: 4.5
  },
  {
    id: 17,
    name: "Fossil Grant Chronograph",
    description: "Classic chronograph design with modern functionality. Perfect for business and casual occasions.",
    price: 15999,
    category: "men-watches",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=400&fit=crop&crop=center",
    brand: "Fossil",
    rating: 4.7
  },
  {
    id: 18,
    name: "Seiko Automatic Watch",
    description: "Japanese precision in automatic movement. Reliable timekeeping with sophisticated style.",
    price: 18999,
    category: "men-watches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop&crop=center",
    brand: "Seiko",
    rating: 4.8
  },

  // Women Watches Collection
  {
    id: 19,
    name: "Titan Raga Women's Watch",
    description: "Elegant timepiece designed specifically for women. Features delicate design with premium materials.",
    price: 6999,
    category: "women-watches",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&h=400&fit=crop&crop=center",
    brand: "Titan",
    rating: 4.6
  },
  {
    id: 20,
    name: "Casio Sheen Women's Watch",
    description: "Sophisticated design with sparkling crystals. Perfect for special occasions and daily elegance.",
    price: 9999,
    category: "women-watches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center",
    brand: "Casio",
    rating: 4.7
  },
  {
    id: 21,
    name: "Fossil Jacqueline Women's Watch",
    description: "Timeless design with modern functionality. Features rose gold tone and leather strap for elegant style.",
    price: 11999,
    category: "women-watches",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=center",
    brand: "Fossil",
    rating: 4.8
  }
];

export default products;
