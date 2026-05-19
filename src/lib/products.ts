// Women's Fashion Jewelry & Accessories — India Store (₹ Prices)

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;           // in ₹
  originalPrice?: number;  // in ₹ (MRP)
  category: string;
  material: string;
  tag: string;
  badge?: string;
  description: string;
  longDescription: string;
  artisan: { name: string; location: string; specialty: string; image: string };
  images: string[];
  inStock: boolean;
  careInstructions: string;
  shippingDetails: string;
  relatedIds: string[];
  rating: number;
  reviewCount: number;
  trending?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  colors?: string[];
}

export const products: Product[] = [
  // ── NECKLACES ──────────────────────────────────────────────────────────────
  {
    id: "1",
    slug: "gold-heart-pendant-necklace",
    name: "Gold Heart Pendant Necklace",
    subtitle: "Minimal Chain Necklace",
    price: 499,
    originalPrice: 999,
    category: "Necklaces",
    material: "Gold Plated",
    tag: "TRENDING",
    badge: "BEST SELLER",
    description: "Delicate gold-plated chain with a dainty heart-shaped pendant. Perfect for layering or wearing alone for an effortlessly chic look.",
    longDescription: "Crafted from high-quality brass with 18K gold plating, this minimal heart pendant necklace features an adjustable chain length perfect for any neckline. A timeless piece every modern woman needs.",
    artisan: { name: "Priya Designs", location: "Jaipur, Rajasthan", specialty: "Gold Plated Jewelry", image: "/products/necklace_gold_heart.png" },
    images: ["/products/necklace_gold_heart.png", "/products/necklace_layered_chain.png"],
    inStock: true,
    careInstructions: "Avoid contact with water and perfume. Store in pouch when not in use.",
    shippingDetails: "Ships in 2–3 business days. Free shipping above ₹499.",
    relatedIds: ["4", "10", "5", "2"],
    rating: 4.8,
    reviewCount: 342,
    trending: true,
    bestSeller: true,
  },
  {
    id: "4",
    slug: "pink-heart-necklace",
    name: "Pink Heart Necklace",
    subtitle: "Cute Aesthetic Necklace",
    price: 349,
    originalPrice: 699,
    category: "Necklaces",
    material: "Rose Gold Plated",
    tag: "CUTE",
    badge: "TRENDING",
    description: "Adorable pink heart pendant on a dainty rose gold chain. Perfect for gifting or treating yourself.",
    longDescription: "This sweet pink heart necklace is the embodiment of cute aesthetic fashion. The rose-tinted heart pendant features a delicate enamel finish on a rose gold plated chain.",
    artisan: { name: "Blush Jewels", location: "Delhi, India", specialty: "Cute Fashion Jewelry", image: "/products/necklace_pink_heart.png" },
    images: ["/products/necklace_pink_heart.png", "/products/necklace_gold_heart.png"],
    inStock: true,
    careInstructions: "Store separately. Avoid chemicals.",
    shippingDetails: "Ships in 2–3 days. Comes in gift box.",
    relatedIds: ["1", "10", "2"],
    rating: 4.9,
    reviewCount: 423,
    trending: true,
    bestSeller: true,
  },
  {
    id: "10",
    slug: "layered-chain-necklace",
    name: "Layered Chain Necklace",
    subtitle: "Multi-Layer Gold Necklace",
    price: 649,
    originalPrice: 1299,
    category: "Necklaces",
    material: "Gold Plated",
    tag: "LAYERED",
    badge: "HOT",
    description: "Effortlessly chic 3-layer gold chain necklace. Pre-layered for that perfect stacked look.",
    longDescription: "Features three delicate chains of varying lengths, pre-connected for the perfect layered look. No effort needed for that influencer-worthy neck stack.",
    artisan: { name: "Chain Studio", location: "Chennai, Tamil Nadu", specialty: "Chain Jewelry", image: "/products/necklace_layered_chain.png" },
    images: ["/products/necklace_layered_chain.png", "/products/necklace_gold_heart.png"],
    inStock: true,
    careInstructions: "Store flat to avoid tangles.",
    shippingDetails: "Ships in 2–3 days.",
    relatedIds: ["1", "4", "6"],
    rating: 4.8,
    reviewCount: 312,
    trending: true,
    bestSeller: true,
  },
  {
    id: "13",
    slug: "pearl-strand-necklace",
    name: "Pearl Strand Necklace",
    subtitle: "Classic Freshwater Pearl",
    price: 799,
    originalPrice: 1599,
    category: "Necklaces",
    material: "Freshwater Pearl",
    tag: "CLASSIC",
    description: "Timeless single strand freshwater pearl necklace — the ultimate feminine luxury piece.",
    longDescription: "Handpicked freshwater pearls strung on a silk thread with a gold-plated clasp. Each pearl is graded for its lustrous surface and round shape.",
    artisan: { name: "Pearl Essence", location: "Hyderabad, Telangana", specialty: "Pearl Jewelry", image: "/products/earrings_pearl_drop.png" },
    images: ["/products/earrings_pearl_drop.png", "/products/necklace_layered_chain.png"],
    inStock: true,
    careInstructions: "Wipe with soft cloth. Store separately.",
    shippingDetails: "Ships in 2–3 days. Gift wrapped.",
    relatedIds: ["1", "4", "9"],
    rating: 4.7,
    reviewCount: 98,
    newArrival: true,
  },

  // ── EARRINGS ───────────────────────────────────────────────────────────────
  {
    id: "2",
    slug: "black-square-earrings",
    name: "Black Square Earrings",
    subtitle: "Korean Geometric Earrings",
    price: 299,
    originalPrice: 599,
    category: "Earrings",
    material: "Acrylic & Metal",
    tag: "KOREAN STYLE",
    badge: "VIRAL",
    description: "Bold geometric black square drop earrings inspired by Korean street fashion. Lightweight and statement-making.",
    longDescription: "Made with premium acrylic and hypoallergenic metal hooks, these trendy black square earrings are a K-fashion staple. Comfortable for all-day wear.",
    artisan: { name: "Seoul Style Co.", location: "Imported, Korea", specialty: "Korean Aesthetic Jewelry", image: "/products/earrings_black_square.png" },
    images: ["/products/earrings_black_square.png", "/products/earrings_silver_jhumka.png"],
    inStock: true,
    careInstructions: "Wipe gently with dry cloth. Avoid moisture.",
    shippingDetails: "Ships in 1–2 business days.",
    relatedIds: ["5", "9", "11"],
    rating: 4.6,
    reviewCount: 218,
    trending: true,
    newArrival: true,
  },
  {
    id: "5",
    slug: "silver-jhumka-earrings",
    name: "Silver Jhumka Earrings",
    subtitle: "Traditional Ethnic Earrings",
    price: 449,
    originalPrice: 899,
    category: "Earrings",
    material: "Oxidized Silver",
    tag: "ETHNIC FUSION",
    description: "Handcrafted oxidized silver jhumkas with intricate stone work. Traditional meets modern fashion.",
    longDescription: "Beautifully handcrafted oxidized silver jhumkas blending traditional Indian craftsmanship with contemporary design. Colorful stone accents.",
    artisan: { name: "Rajasthani Craft House", location: "Jodhpur, Rajasthan", specialty: "Ethnic Jewelry", image: "/products/earrings_silver_jhumka.png" },
    images: ["/products/earrings_silver_jhumka.png", "/products/earrings_pearl_drop.png"],
    inStock: true,
    careInstructions: "Polish with soft cloth. Store in dry place.",
    shippingDetails: "Ships in 3–5 business days.",
    relatedIds: ["2", "1", "3"],
    rating: 4.5,
    reviewCount: 189,
    bestSeller: true,
  },
  {
    id: "9",
    slug: "pearl-drop-earrings",
    name: "Pearl Drop Earrings",
    subtitle: "Classic Freshwater Pearl",
    price: 599,
    originalPrice: 1199,
    category: "Earrings",
    material: "Freshwater Pearl",
    tag: "CLASSIC",
    description: "Timeless freshwater pearl drop earrings — elegant, feminine and perfect for any occasion.",
    longDescription: "Genuine freshwater pearls suspended from gold-plated hooks. A wardrobe essential for the modern Indian woman — works from office to parties.",
    artisan: { name: "Pearl Essence", location: "Hyderabad, Telangana", specialty: "Pearl Jewelry", image: "/products/earrings_pearl_drop.png" },
    images: ["/products/earrings_pearl_drop.png", "/products/earrings_silver_jhumka.png"],
    inStock: true,
    careInstructions: "Store separately. Avoid chemicals and perfume.",
    shippingDetails: "Ships in 2–3 days. Gift wrapped.",
    relatedIds: ["2", "5", "1"],
    rating: 4.6,
    reviewCount: 178,
    newArrival: true,
  },
  {
    id: "14",
    slug: "gold-hoop-earrings",
    name: "Gold Hoop Earrings",
    subtitle: "Classic Mini Hoops",
    price: 249,
    originalPrice: 499,
    category: "Earrings",
    material: "Gold Plated",
    tag: "CLASSIC",
    badge: "MUST HAVE",
    description: "Everyday gold mini hoop earrings. Versatile, comfortable and eternally trendy.",
    longDescription: "These lightweight mini gold hoops are hypoallergenic and perfect for everyday wear. Diameter 25mm — small enough to be subtle, big enough to make a statement.",
    artisan: { name: "Golden Hour Studio", location: "Bangalore, Karnataka", specialty: "Gold Plated Jewelry", image: "/products/earrings_pearl_drop.png" },
    images: ["/products/earrings_pearl_drop.png", "/products/earrings_black_square.png"],
    inStock: true,
    careInstructions: "Keep dry. Store in pouch.",
    shippingDetails: "Ships in 1–2 days.",
    relatedIds: ["2", "5", "9"],
    rating: 4.8,
    reviewCount: 521,
    bestSeller: true,
    trending: true,
  },

  // ── RINGS ──────────────────────────────────────────────────────────────────
  {
    id: "3",
    slug: "american-diamond-rings",
    name: "American Diamond Ring Set",
    subtitle: "AD Stone Adjustable Rings",
    price: 399,
    originalPrice: 799,
    category: "Rings",
    material: "American Diamond",
    tag: "LUXURY INSPIRED",
    badge: "NEW",
    description: "Sparkling American diamond rings with adjustable band. Luxury-inspired design at an affordable price.",
    longDescription: "Brilliant cubic zirconia stones set in gold-plated metal. The adjustable band ensures a perfect fit for all finger sizes — ideal for gifting.",
    artisan: { name: "Sparkle Atelier", location: "Mumbai, Maharashtra", specialty: "Diamond-Inspired Jewelry", image: "/products/rings_american_diamond.png" },
    images: ["/products/rings_american_diamond.png", "/products/ring_gold_statement.png"],
    inStock: true,
    careInstructions: "Keep dry. Polish with soft cloth for shine.",
    shippingDetails: "Ships in 2–4 business days. Gift wrapped.",
    relatedIds: ["6", "1", "4"],
    rating: 4.7,
    reviewCount: 156,
    newArrival: true,
  },
  {
    id: "6",
    slug: "gold-statement-rings",
    name: "Gold Statement Ring",
    subtitle: "Chunky Designer Ring",
    price: 549,
    originalPrice: 1099,
    category: "Rings",
    material: "Gold Plated Brass",
    tag: "STATEMENT",
    badge: "LUXURY",
    description: "Bold chunky gold statement ring with intricate design. Instantly elevates any outfit.",
    longDescription: "Premium brass with thick 18K gold plating. The sculptural design adds instant luxury to any look — perfect for parties, weddings and festive occasions.",
    artisan: { name: "Golden Hour Studio", location: "Bangalore, Karnataka", specialty: "Statement Jewelry", image: "/products/ring_gold_statement.png" },
    images: ["/products/ring_gold_statement.png", "/products/rings_american_diamond.png"],
    inStock: true,
    careInstructions: "Avoid water. Remove before sleeping.",
    shippingDetails: "Ships in 2–3 days. Premium packaging.",
    relatedIds: ["3", "1", "4"],
    rating: 4.7,
    reviewCount: 97,
    trending: true,
  },
  {
    id: "15",
    slug: "stackable-band-rings",
    name: "Stackable Band Ring Set",
    subtitle: "Set of 3 Minimalist Rings",
    price: 299,
    originalPrice: 599,
    category: "Rings",
    material: "Gold & Silver Plated",
    tag: "STACKABLE",
    description: "Set of 3 delicate stackable band rings — mix and match for endless looks.",
    longDescription: "Three minimalist band rings in gold, silver and rose gold. Wear them individually or stacked together for the perfect K-fashion ring game.",
    artisan: { name: "Minimal Atelier", location: "Pune, Maharashtra", specialty: "Minimal Jewelry", image: "/products/rings_stackable_bands.png" },
    images: ["/products/rings_stackable_bands.png", "/products/ring_gold_statement.png"],
    inStock: true,
    careInstructions: "Keep dry. Store in pouch.",
    shippingDetails: "Ships in 2–3 days.",
    relatedIds: ["3", "6", "1"],
    rating: 4.9,
    reviewCount: 287,
    trending: true,
    newArrival: true,
  },

  // ── CLUTCHES ───────────────────────────────────────────────────────────────
  {
    id: "7",
    slug: "stone-studded-clutch",
    name: "Stone Studded Clutch Bag",
    subtitle: "Party Wear Rhinestone Clutch",
    price: 1299,
    originalPrice: 2499,
    category: "Clutches",
    material: "Rhinestone & Satin",
    tag: "PARTY WEAR",
    badge: "BRIDAL",
    description: "Stunning rhinestone-encrusted clutch for parties, weddings and special occasions.",
    longDescription: "Hundreds of hand-set rhinestones on a satin base. Magnetic clasp closure, interior mirror and detachable chain strap included. Perfect for bridal functions.",
    artisan: { name: "Glamour Atelier", location: "Surat, Gujarat", specialty: "Party Accessories", image: "/products/clutch_rhinestone.png" },
    images: ["/products/clutch_rhinestone.png"],
    inStock: true,
    careInstructions: "Store in dust bag. Wipe with dry cloth only.",
    shippingDetails: "Ships in 3–5 days. Gift boxed.",
    relatedIds: ["1", "3", "6"],
    rating: 4.8,
    reviewCount: 264,
    bestSeller: true,
  },

  // ── CUTE ACCESSORIES ───────────────────────────────────────────────────────
  {
    id: "11",
    slug: "korean-hair-clips-set",
    name: "Korean Hair Clips Set",
    subtitle: "Aesthetic Hair Accessories",
    price: 249,
    originalPrice: 499,
    category: "Cute Accessories",
    material: "Acrylic & Metal",
    tag: "KOREAN",
    badge: "CUTE",
    description: "Set of 6 trendy Korean-style hair clips — pearl, bow, and floral designs.",
    longDescription: "Six Korean-inspired hair clips including pearl-studded barrettes, satin bow clips and delicate floral pins. Perfect for K-fashion hairstyles.",
    artisan: { name: "K-Beauty Accessories", location: "Imported, Korea", specialty: "Korean Hair Accessories", image: "/products/accessories_korean_hair.png" },
    images: ["/products/accessories_korean_hair.png"],
    inStock: true,
    careInstructions: "Handle gently. Keep away from heat.",
    shippingDetails: "Ships in 1–2 days. Comes in cute packaging.",
    relatedIds: ["8", "2", "4"],
    rating: 4.9,
    reviewCount: 567,
    trending: true,
    newArrival: true,
  },

  // ── WATCHES ────────────────────────────────────────────────────────────────
  {
    id: "12",
    slug: "rose-gold-womens-watch",
    name: "Rose Gold Women's Watch",
    subtitle: "Minimalist Fashion Watch",
    price: 1899,
    originalPrice: 3499,
    category: "Watches",
    material: "Stainless Steel",
    tag: "LUXURY",
    badge: "PREMIUM",
    description: "Elegant minimalist rose gold watch for the modern Indian woman. Japanese quartz movement.",
    longDescription: "Clean minimalist dial, Japanese quartz movement, premium mesh stainless steel bracelet. Water resistant up to 30m. Perfect for gifting.",
    artisan: { name: "Tempo Luxe", location: "Delhi, India", specialty: "Fashion Timepieces", image: "/products/watch_rose_gold.png" },
    images: ["/products/watch_rose_gold.png"],
    inStock: true,
    careInstructions: "Wipe with soft cloth. Water resistant to 30m.",
    shippingDetails: "Ships in 3–5 days. Premium gift box included.",
    relatedIds: ["7", "6", "3"],
    rating: 4.7,
    reviewCount: 134,
    bestSeller: true,
  },

  // ── GIFT ITEMS ─────────────────────────────────────────────────────────────
  {
    id: "8",
    slug: "blue-cartoon-monster-toy",
    name: "Blue Cartoon Monster Toy",
    subtitle: "Cute Squishy Stress Toy",
    price: 199,
    originalPrice: 399,
    category: "Gift Items",
    material: "Soft Silicone",
    tag: "VIRAL",
    badge: "INSTAGRAM HIT",
    description: "The viral blue monster squishy toy! Perfect stress-buster and the cutest gift item.",
    longDescription: "Adorable blue cartoon monster made from premium soft silicone. Satisfying to squeeze and incredibly cute to display. The most gifted item on our store.",
    artisan: { name: "Viral Gifts Co.", location: "Imported", specialty: "Cute Collectibles", image: "/products/gift_monster_toy.png" },
    images: ["/products/gift_monster_toy.png"],
    inStock: true,
    careInstructions: "Keep away from sharp objects. Wipe with damp cloth.",
    shippingDetails: "Ships in 1–2 days.",
    relatedIds: ["11", "4", "2"],
    rating: 4.9,
    reviewCount: 1247,
    trending: true,
    newArrival: true,
  },
];

// ── UTILITY ──────────────────────────────────────────────────────────────────

export const categories = [
  { name: "All",               count: products.length,                                                icon: "✨" },
  { name: "Necklaces",         count: products.filter(p => p.category === "Necklaces").length,         icon: "📿" },
  { name: "Earrings",          count: products.filter(p => p.category === "Earrings").length,          icon: "💎" },
  { name: "Rings",             count: products.filter(p => p.category === "Rings").length,             icon: "💍" },
  { name: "Watches",           count: products.filter(p => p.category === "Watches").length,           icon: "⌚" },
  { name: "Clutches",          count: products.filter(p => p.category === "Clutches").length,          icon: "👛" },
  { name: "Cute Accessories",  count: products.filter(p => p.category === "Cute Accessories").length,  icon: "🎀" },
  { name: "Gift Items",        count: products.filter(p => p.category === "Gift Items").length,        icon: "🎁" },
];

export const materials = ["Gold Plated", "Silver", "American Diamond", "Pearl", "Acrylic", "Stainless Steel", "Oxidized Silver"];

/** Format price in Indian Rupees */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getRelatedProducts(ids: string[]): Product[] {
  return products.filter(p => ids.includes(p.id));
}

export function getTrendingProducts(): Product[] {
  return products.filter(p => p.trending);
}

export function getBestSellers(): Product[] {
  return products.filter(p => p.bestSeller);
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.newArrival);
}

export function getDiscount(price: number, originalPrice?: number): number | null {
  if (!originalPrice) return null;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
