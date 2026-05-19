"use client";

import { useState, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Minus, Plus, ChevronDown, ChevronRight, ZoomIn, 
  MessageCircle, Star, Heart, Shield, CheckCircle2,
  Gift, Sparkles, PlayCircle, StarIcon
} from "lucide-react";
import { getProductBySlug, getRelatedProducts, formatPrice, getDiscount } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ui/ProductCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: Props) {
  // Next.js 15 — unwrap async params
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.relatedIds).slice(0, 4);
  const { addItem, openCart } = useCart();
  const discount = getDiscount(product.price, product.originalPrice);

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("desc");

  // Countdown timer logic for the limited drop
  const [timeLeft, setTimeLeft] = useState({ h: 4, m: 21, s: 59 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        slug: product.slug,
        name: product.name,
        subtitle: product.subtitle,
        price: product.price,
        image: product.images[0],
      });
    }
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    { key: "desc", title: "Product Details", content: product.longDescription || product.description },
    { key: "care", title: "Care Instructions", content: product.careInstructions || "Avoid contact with water and perfume." },
    { key: "shipping", title: "Shipping & Returns", content: product.shippingDetails || "Free shipping on orders over ₹499. Easy 30-day returns." },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen pb-12 overflow-x-hidden">
      {/* Main Container */}
      <main className="container-artisan px-6 md:px-12 mx-auto pt-32 md:pt-40">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 font-body text-xs font-medium mb-8 text-on-surface-muted">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collection" className="hover:text-primary transition-colors">Collection</Link>
          <span>/</span>
          <Link href={`/collection?category=${product.category}`} className="hover:text-primary transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-on-surface">{product.name}</span>
        </nav>

        {/* Product Showcase Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-section-gap">
          {/* Left: Aesthetic Gallery */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="relative group rounded-2xl overflow-hidden shadow-sm" style={{ border: "1px solid rgba(141,75,0,0.08)" }}>
              <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                {product.trending && (
                  <span className="badge badge-rose shadow-md">
                    🔥 Viral Pick
                  </span>
                )}
                {product.newArrival && (
                  <span className="badge badge-gold shadow-md">
                    💖 Girls Favorite
                  </span>
                )}
                {product.badge && (
                  <span className="badge badge-rose shadow-md">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="w-full h-[500px] md:h-[650px] relative bg-surface-variant">
                <Image 
                  src={product.images[activeImage] || product.images[0]} 
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                />
              </div>
            </div>
            
            {/* Small Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
                {product.images.slice(0, 5).map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-full aspect-square rounded-xl overflow-hidden hover:opacity-90 transition-all ${activeImage === idx ? 'ring-2 ring-primary ring-offset-2' : 'border border-outline-variant'}`}
                  >
                    <Image src={img} alt={`${product.name} ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="md:col-span-5 md:sticky md:top-28 h-fit flex flex-col gap-8">
            <div>
              <span className="chip chip-primary text-[10px] mb-3">{product.category}</span>
              <h1 className="font-display-lg text-4xl font-bold text-ink-brown mb-3 leading-tight">
                {product.name}
              </h1>
              <p className="font-body text-base text-on-surface-muted leading-relaxed">
                {product.subtitle || "Minimal luxury jewelry designed to elevate your everyday style."}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="font-display font-bold text-3xl text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="font-body text-lg line-through text-on-surface-muted">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {discount && (
                <span className="badge badge-rose" style={{ transform: "translateY(-2px)" }}>
                  -{discount}% OFF
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 py-5 border-y border-outline-variant">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-background bg-warm-beige overflow-hidden">
                  <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwUQnrBa-Gzl8rZkTMoK3GEvV3WLgmdVTCAaWnKxNg-GrKLVe13znnyHmMYApSRSizQfp_CtX-WaS1j-Cn-JgO5VYNOsDesZr30DLogPoF7ZA9qqNLC4aiokO9UtJDsTouKlUT6mm4PeEkaDMKpTxqNvG6riTnejFISGXs9x67L-LIwn4bu-Y7MSQo6fIUAuaXd1q6YwBxVq2bDSBNeSQn6iMiXpe7Am-_jogkNwlEBFnLGFLua3KLc1OBxXnzF__ghFfUWMxot9E" width={32} height={32} alt="reviewer" className="object-cover w-full h-full" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-background bg-primary-container overflow-hidden">
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiU0X_fp5PEDTup6srKUdzc0Q7k8O6EktcMOPgSsTCfNj-5bHSTrsLSkSc1-j2Qyd6WoNQRBwFyuQAkZxrbZCddNYwZK0o3xuzPGV_LlqPrb-6gpalMPU1ZAbj7D-njXsfFdrXSVqBU9xAzEry6vT0DX0DQq8Uky12S78nltzYLDQ9dDFE1Vu4t1VGtiY0WuEEVRrlXi04sYqNmx07CYLDmxDfIJNJd-1cmRGpe1it0YPRaNudeGbaTrI5z0UZCmnIhXA5vrXbV2w" width={32} height={32} alt="reviewer" className="object-cover w-full h-full" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-background bg-tertiary-container overflow-hidden">
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuC64vlyIvwKU7M6X8LWz136r4Bcsu2FoQdTFbQ6Iw9xZDhAdJB4WkV9-05WwhTa3vFffuE9D7m_-mG1XKqMV6fpqJ_Uwiw_Y5Ru8cmaaUzIrFCmcPWrUlh7rRsPEbaKFPgsYGCBFEQ88hkjUwhdFN1NAlFvGid1LpLXxi9GD3stq4Xun4x396rf0eK8EyvOQeQVqVOlg0eg9Pp8_YahVsIck2W0RwpFcQ6PG7rehM3djQAgGH-X4_uyc-IBq5MEHO3H8bQPE0H4-BY" width={32} height={32} alt="reviewer" className="object-cover w-full h-full" />
                </div>
              </div>
              <p className="font-body text-sm font-medium">
                <span className="font-bold text-ink-brown">{product.reviewCount.toLocaleString()}+ reviews</span> 💖 
                <span className="text-primary ml-2 font-semibold bg-rose-50 px-2 py-0.5 rounded-md text-xs inline-block">Trending on IG 🔥</span>
              </p>
            </div>

            {/* Product Options */}
            <div className="space-y-6">
              <div>
                <span className="font-label-sm uppercase tracking-widest text-on-surface-muted block mb-3">Color Variant</span>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 rounded-full border-2 border-primary text-primary font-bold text-sm bg-primary/5 transition-all">
                    Gold
                  </button>
                  <button className="px-6 py-2.5 rounded-full border border-outline-variant text-on-surface-muted font-medium text-sm transition-all hover:border-primary hover:text-primary">
                    Silver
                  </button>
                </div>
              </div>
              
              <div>
                <span className="font-label-sm uppercase tracking-widest text-on-surface-muted block mb-3">Quantity</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-outline-variant rounded-full p-1 bg-surface">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-variant transition-colors">
                      <Minus size={16} className="text-ink-brown" />
                    </button>
                    <span className="w-10 text-center font-bold text-sm">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-variant transition-colors">
                      <Plus size={16} className="text-ink-brown" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 pt-2">
              <div className="flex gap-3">
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 btn-primary py-4 text-base font-bold flex items-center justify-center gap-2"
                  style={{ borderRadius: "100px", boxShadow: "0 8px 24px rgba(141,75,0,0.25)" }}
                >
                  {!product.inStock ? "Out of Stock" : added ? "✓ Added To Cart!" : "Add To Cart ✨"}
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setWishlisted(!wishlisted)}
                  className="w-14 h-14 rounded-full border-2 border-outline-variant flex items-center justify-center transition-colors hover:border-primary bg-surface"
                >
                  <Heart size={22} fill={wishlisted ? "var(--color-primary)" : "none"} stroke={wishlisted ? "var(--color-primary)" : "var(--color-ink-brown)"} />
                </motion.button>
              </div>
              <button 
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full py-3.5 rounded-full font-body text-base font-bold bg-ink-brown text-warm-beige hover:bg-[#2d1e11] transition-all shadow-md disabled:opacity-70"
              >
                {!product.inStock ? "Out of Stock" : added ? "✓ Added To Cart!" : "Buy It Now 💖"}
              </button>
              <a className="flex items-center justify-center gap-2 font-medium text-sm text-on-surface-muted hover:text-primary transition-colors mt-2" href="#">
                <MessageCircle size={18} />
                Need help? WhatsApp Us
              </a>
            </div>

            {/* Description */}
            <div className="pt-4 border-t border-outline-variant mt-2">
              <p className="font-body text-sm leading-relaxed text-on-surface-muted">
                {product.description}
              </p>
            </div>

            {/* Accordions */}
            <div className="divide-y divide-outline-variant border-b border-outline-variant">
              {accordions.map(acc => (
                <div key={acc.key} className="py-1">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex justify-between items-center py-4 font-display font-semibold text-base text-ink-brown hover:text-primary transition-colors"
                  >
                    {acc.title}
                    <motion.div animate={{ rotate: openAccordion === acc.key ? 180 : 0 }} className="text-primary">
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openAccordion === acc.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 text-sm text-on-surface-muted leading-relaxed pr-8">
                          <p>{acc.content}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Why Girls Love This Section */}
        <section className="mb-section-gap py-12 rounded-3xl" style={{ background: "linear-gradient(to bottom, #fdf8f2, transparent)" }}>
          <div className="text-center mb-12">
            <span className="font-label-sm uppercase tracking-widest text-primary block mb-3">Our Promise</span>
            <h2 className="font-display-lg text-4xl text-ink-brown">Why Girls Love This ✨</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8">
            {[
              { icon: CheckCircle2, title: "Affordable Luxury", desc: "Premium materials without the boutique markup." },
              { icon: Gift, title: "Cute Packaging", desc: "Unboxing experience designed for your stories." },
              { icon: Shield, title: "Tarnish Free", desc: "Shower, swim, and shine every single day." },
              { icon: Sparkles, title: "Viral Style", desc: "As seen on your favorite fashion creators." },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-warm-beige/50 text-center flex flex-col items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink-brown">{feature.title}</h3>
                <p className="font-body text-sm text-on-surface-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Styling Inspiration Moodboard */}
        <section className="mb-section-gap">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4 text-center md:text-left">
            <div>
              <span className="font-label-sm uppercase tracking-widest text-primary block mb-2">Lookbook</span>
              <h2 className="font-display-lg text-4xl text-ink-brown">Style It Like This ✦</h2>
              <p className="font-body text-base mt-3 text-on-surface-muted max-w-lg">Your guide to the ultimate aesthetic. See how our community styles their favorite pieces.</p>
            </div>
            <button className="btn-secondary rounded-full px-6 py-2.5 text-sm">View Moodboard</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-2 md:px-0">
            {[
              { src: "/videos/video - 5.mp4", rotation: "rotate-2", offset: "" },
              { src: "/videos/video - 6.mp4", rotation: "-rotate-3", offset: "md:mt-12" },
              { src: "/videos/video - 7.mp4", rotation: "rotate-1", offset: "md:-mt-4" },
              { src: "/videos/video - 8.mp4", rotation: "-rotate-2", offset: "md:mt-8" },
            ].map((video, idx) => (
              <div key={idx} className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform ${video.rotation} hover:rotate-0 transition-all duration-500 group ${video.offset}`}>
                <video 
                  src={video.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle size={20} className="text-white fill-white" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Instagram Reels Section */}
        {/* <section className="mb-section-gap overflow-hidden -mx-6 md:mx-0 px-6 md:px-0">
          <div className="text-center mb-10">
            <h2 className="font-display-lg text-4xl text-ink-brown mb-3">As Seen On Reels 📸</h2>
            <p className="text-on-surface-muted">Watch how our community styles their favorites.</p>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-8 snap-x [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-warm-beige [&::-webkit-scrollbar-thumb]:rounded-full">
            {[
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA59ZBJL_eV0MgWXuUTAlfgPZNv0XKNfA1nOGlt2Y7yj6xQh_540B5z6Dcyq1Xpn4hY0hMPo7CszJ1EFqbutiVeYWomwxyXzop7rf-GHkLcH3H3vx6KcD6EMQPHUhaojt_WJBGCYMMh80JkRadmRviRhhck3bh9JmZrI4usHKWV8u_sZ3-us8hGw61xAuy4DgiTieMZMCdJCft9KuoaFCCR1-Wn8ebG4IhKw3IBY3gZ6zfDsS0wB2s7vtv8MJlJ4EamUzBuZMmfo9E", title: "Unboxing Magic ✨" },
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkCDivcvNJN5Q_MVaT_DLbRqw9_K8OjTgXQf0rnjWTzdApo8tXJ3ENaAOZMNrn3YsgFtfiWgXgjt05-17mV1FYb-aKESDkUwMLQc9Qc_9uA3hQOzLkAUSOzAfhWEdH7icEZ1KEhdu59fzh2vNSDEP686uW7bohMBca4Q8_k5LAcpiA6S1k62vIGNqVw0XIKp0_f_RTJpu2eJHJaESYhRMCELNj-STfAicqRjNskKGnGRpUJIjovXs4ohLMQt3TKxgwt4JGInidk5s", title: "Styling Transitions 💖" },
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzIglGOz3n58WdOpdD36JNguBYCob9Tanwd2rqfUjkbrvu7pSlaGvyXYGUfpgUO6u95AqG9pPAy4dbgtQYzQJKXhu3l2CZexrV4psZwQ_5XToy8papD899FqQN1CWV_viGRqXYDmKhxBOR62J3GFS08azeENap_zi6gmG6OUfkw8DLJ4WN69p6NdGA8SxSq1bn1oLA5dAwgEX8xSChhvcRn8JzOFQguwSx_1fhzlQ1vSlbT7lEjYXyRTZ-CHGj_Dk0L1CMSwH-5b8", title: "Golden Hour Glow ✨" },
              { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATRaFC3mmTqnOGshzFuIXUjMrMHuJYKUCBFgLnDK5cwAunMVFXXbK93GFlbGbr8ruovJK4kcZI1zLeSmfUtxaKlnFsuXt_Kww430-3yrPqhwiOO8wwNg6QSInHSGsw5n6TwN_V0ezlPTWeyEzXSiJKaVyiZE_KWEyYm4PHzNpEFOacPo94R7lfU8j0Sdvl6m4EKijLl9rVj27k_-C061RjRsNNqCcxte9l9YacPOUlfQ8nVZoLkEko3f3U3mc5lNFFOKp74Z0YF-A", title: "Girl Talk Review 🔥" },
            ].map((reel, idx) => (
              <div key={idx} className="flex-none w-[280px] h-[480px] rounded-2xl relative group cursor-pointer overflow-hidden snap-center shadow-md">
                <Image src={reel.src} alt={reel.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 z-10 transition-opacity group-hover:opacity-90">
                  <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <PlayCircle size={28} className="text-white fill-white" />
                  </div>
                  <div className="text-white font-display text-lg tracking-wide">{reel.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Customer Reviews */}
        <section className="mb-section-gap">
          <div className="text-center mb-12">
            <h2 className="font-display-lg text-4xl text-ink-brown">Literally obsessed 😭💖</h2>
            <p className="text-on-surface-muted mt-3">Real love from our amazing community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "@hailey.styling", bg: "#fdf8f2", text: "\"The quality is insane for the price. I've been wearing it everyday and it still looks brand new. The packaging was so cute too! 🎀\"" },
              { name: "@jess_boutique", bg: "#fef6f9", text: "\"Found this on TikTok and had to get it. It's the perfect dainty heart necklace. Honestly obsessed 😭💖\"" },
              { name: "@minhee_k", bg: "#f4f8fc", text: "\"Shipping was so fast to Sydney! The gold color is perfect, not too yellow. Highly recommend! ✨\"" },
            ].map((rev, idx) => (
              <div key={idx} className="p-8 rounded-3xl flex flex-col gap-5 shadow-sm border border-outline-variant/50 hover:shadow-md transition-shadow" style={{ backgroundColor: rev.bg }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface shadow-sm border-2 border-white overflow-hidden flex-shrink-0">
                    <Image src={`https://lh3.googleusercontent.com/aida-public/AB6AXuDwUQnrBa-Gzl8rZkTMoK3GEvV3WLgmdVTCAaWnKxNg-GrKLVe13znnyHmMYApSRSizQfp_CtX-WaS1j-Cn-JgO5VYNOsDesZr30DLogPoF7ZA9qqNLC4aiokO9UtJDsTouKlUT6mm4PeEkaDMKpTxqNvG6riTnejFISGXs9x67L-LIwn4bu-Y7MSQo6fIUAuaXd1q6YwBxVq2bDSBNeSQn6iMiXpe7Am-_jogkNwlEBFnLGFLua3KLc1OBxXnzF__ghFfUWMxot9E`} width={48} height={48} alt={rev.name} className="object-cover w-full h-full opacity-70" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-base text-ink-brown">{rev.name}</p>
                    <div className="flex mt-1">
                      {[1,2,3,4,5].map(s => <StarIcon key={s} size={14} className="fill-primary text-primary" />)}
                    </div>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed text-ink-brown/80">{rev.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Complete The Look Slider */}
        {related.length > 0 && (
          <section className="mb-section-gap">
            <div className="flex justify-between items-end mb-8">
              <h2 className="font-display-lg text-4xl text-ink-brown">Complete The Look ✨</h2>
              <Link href="/collection" className="text-primary font-bold hover:underline hidden sm:block">View All</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* Limited Drop Section */}
        <section className="p-12 md:p-16 rounded-[2rem] bg-ink-brown mb-12 relative overflow-hidden text-center shadow-2xl">
          {/* Decorative Background Elements */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-warm-beige/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-6 items-center">
            <span className="font-label-sm uppercase tracking-widest text-primary-fixed block mb-2">Exclusive Release 🔥</span>
            <h2 className="font-display-lg text-5xl text-warm-beige">The Limited Drop</h2>
            <p className="text-warm-beige/80 font-body text-lg leading-relaxed">
              Only 14 pieces left in stock for this batch. Don't miss out on your favorite everyday staple.
            </p>
            
            <div className="flex justify-center gap-6 md:gap-10 py-6">
              <div className="text-center">
                <span className="block font-display text-5xl md:text-6xl font-bold text-white tracking-tight">{timeLeft.h.toString().padStart(2, '0')}</span>
                <span className="text-warm-beige/60 font-label-sm uppercase tracking-widest mt-3 block">Hours</span>
              </div>
              <span className="font-display text-4xl md:text-5xl font-bold text-white/30 pt-2">:</span>
              <div className="text-center">
                <span className="block font-display text-5xl md:text-6xl font-bold text-white tracking-tight">{timeLeft.m.toString().padStart(2, '0')}</span>
                <span className="text-warm-beige/60 font-label-sm uppercase tracking-widest mt-3 block">Mins</span>
              </div>
              <span className="font-display text-4xl md:text-5xl font-bold text-white/30 pt-2">:</span>
              <div className="text-center">
                <span className="block font-display text-5xl md:text-6xl font-bold text-white tracking-tight">{timeLeft.s.toString().padStart(2, '0')}</span>
                <span className="text-warm-beige/60 font-label-sm uppercase tracking-widest mt-3 block">Secs</span>
              </div>
            </div>
            
            <button 
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="bg-warm-beige text-ink-brown px-12 py-4 rounded-full font-display text-lg font-bold hover:bg-white transition-all mt-4 shadow-[0_8px_30px_rgba(255,220,195,0.15)] hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
            >
              {!product.inStock ? "Out of Stock" : added ? "✓ Added To Cart!" : "Claim Yours Now ✨"}
            </button>
          </div>
          
          {/* Sparkles Overlay */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[10%] left-[10%] md:left-[20%] text-white/30 animate-pulse text-2xl" style={{ animationDuration: '3s' }}>✨</div>
            <div className="absolute bottom-[20%] right-[10%] md:right-[20%] text-white/20 animate-pulse text-3xl" style={{ animationDuration: '4s' }}>✨</div>
            <div className="absolute top-[30%] right-[15%] md:right-[30%] text-primary/30 animate-pulse text-xl" style={{ animationDuration: '2.5s' }}>✦</div>
            <div className="absolute bottom-[30%] left-[15%] text-warm-beige/30 animate-pulse text-2xl" style={{ animationDuration: '3.5s' }}>✧</div>
          </div>
        </section>
      </main>
    </div>
  );
}
