"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Search, Heart, User, Play, ArrowRight, Star, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { products, formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";

/* ── helpers ── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function useCountdown(targetMs: number) {
  const calc = () => {
    const diff = Math.max(0, targetMs - Date.now());
    return {
      d: String(Math.floor(diff / 86400000)).padStart(2, "0"),
      h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
      m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
      s: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

/* ── data ── */
const TRENDING = [
  {
    id: "trending-1",
    slug: "celestial-hoop-set",
    name: "Gold Heart Necklace",
    subtitle: "18K Gold · Delicate Chain",
    price: 999,
    images: ["/products/necklace_gold_heart.png"],
    badge: "VIRAL PICK",
    reviewCount: 12400,
    bgLight: true,
  },
  {
    id: "trending-2",
    slug: "pearl-dream-choker",
    name: "Pearl Drop Earrings",
    subtitle: "Freshwater Pearl · Silver",
    price: 1499,
    images: ["/products/earrings_pearl_drop.png"],
    badge: "NEW IN",
    reviewCount: 8200,
    bgLight: true,
  },
  {
    id: "trending-3",
    slug: "rhinestone-clutch",
    name: "Rhinestone Clutch",
    subtitle: "Crystal Embellished · Evening",
    price: 2199,
    images: ["/products/clutch_rhinestone.png"],
    badge: "STAFF PICK",
    reviewCount: 4500,
    bgLight: true,
  },
  {
    id: "trending-4",
    slug: "layered-chain-necklace",
    name: "Layered Chain Necklace",
    subtitle: "Gold Plated · Boho Stack",
    price: 1299,
    images: ["/products/necklace_layered_chain.png"],
    badge: "TRENDING",
    reviewCount: 6800,
    bgLight: true,
  },
  {
    id: "trending-5",
    slug: "diamond-rings-stack",
    name: "American Diamond Rings",
    subtitle: "Statement Set · 3 Pieces",
    price: 899,
    images: ["/products/rings_american_diamond.png"],
    badge: "BESTSELLER",
    reviewCount: 9100,
    bgLight: true,
  },
  {
    id: "trending-6",
    slug: "korean-hair-clip",
    name: "Korean Hair Accessories",
    subtitle: "Aesthetic · Set of 6",
    price: 549,
    images: ["/products/accessories_korean_hair.png"],
    badge: "NEW IN",
    reviewCount: 3200,
    bgLight: true,
  },
];
const DROP_TARGET = Date.now() + (2 * 86400 + 14 * 3600 + 56 * 60) * 1000;

const MOODS = [
  { title: "Soft Girl Collection", sub: "Pastels, pearls & delicate gold", img: "/products/necklace_gold_heart.png", span: "col-span-2 row-span-2" },
  { title: "Korean Aesthetic", sub: "", img: "/products/accessories_korean_hair.png", span: "col-span-1" },
  { title: "Date Night Looks", sub: "", img: "/products/earrings_pearl_drop.png", span: "col-span-1" },
  { title: "Luxury On Budget", sub: "Looks expensive, actually isn't", img: "/products/rings_american_diamond.png", span: "col-span-2" },
];

const SELFIE = [
  "/products/necklace_gold_heart.png",
  "/products/clutch_rhinestone.png",
  "/products/earrings_pearl_drop.png",
  "/products/rings_american_diamond.png",
  "/products/accessories_korean_hair.png",
];

const REVIEWS = [
  { name: "Priya S.", city: "Mumbai", stars: 5, text: "Absolutely love my gold heart necklace! The quality is amazing and came so beautifully packaged 💛" },
  { name: "Ananya M.", city: "Bangalore", stars: 5, text: "The Korean hair clips are so cute! Exactly like the photos. Fast delivery and great packaging." },
  { name: "Shreya K.", city: "Delhi", stars: 5, text: "The rhinestone clutch was perfect for my cousin's wedding. Everyone kept asking where I got it!" },
  { name: "Nisha R.", city: "Chennai", stars: 5, text: "Super happy with my pearl earrings. They look so premium and elegant. Worth every rupee!" },
  { name: "Divya P.", city: "Hyderabad", stars: 5, text: "Love love love! The packaging is so aesthetic and the necklace is even prettier in person ✨" },
];

const JOURNEY = [
  { video: "/videos/video -1.mp4", label: "Behind the Scenes ✨" },
  { video: "/videos/video - 2.mp4", label: "Aesthetic Flatlays 🌸" },
  { video: "/videos/video - 3.mp4", label: "Styling Inspo 💫" },
  { video: "/videos/video -4.mp4", label: "Unboxing Magic 🎁" },
];

/* ── token vars (exact from DESIGN.md) ── */
const C = {
  bg: "#fff8f1",
  bgLow: "#f9f3eb",
  primary: "#8d4b00",
  primaryFixed: "#ffdcc3",
  secondaryFixed: "#f1dfd9",
  inkBrown: "#3E2C1C",
  warmBeige: "#EED9C4",
  onSurface: "#1e1b17",
  onSurfaceVar: "#554336",
  outlineVar: "#dbc2b0",
  outline: "#887364",
};

/* ══════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const { addItem, openCart, items } = useCart();
  const [email, setEmail] = useState("");
  const { d, h, m, s } = useCountdown(DROP_TARGET);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 320 : scrollLeft + 320;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div>

      {/* ── HERO ─────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(140deg, #fdf8f2 0%, #f7ede0 50%, #f0dfd0 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, #ffdcc3 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #8d4b00 0%, transparent 65%)" }} />
        </div>

        <div className="relative container-artisan px-6 md:px-14 mx-auto py-32 flex flex-col md:flex-row items-center gap-16 w-full">

          {/* ── LEFT COPY ── */}
          <div className="w-full md:w-1/2 space-y-8 z-10">

            {/* Badge */}
            <motion.div {...fade(0.1)} className="flex items-center gap-3">
              <span
                className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em]"
                style={{
                  background: "rgba(141,75,0,0.1)",
                  border: "1.5px solid rgba(141,75,0,0.22)",
                  color: "#8d4b00",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block" style={{ background: "#8d4b00" }} />
                Summer &apos;25 Collection
              </span>
              <span className="text-[11px] font-semibold" style={{ color: "#b08060" }}>New Arrivals ✦</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fade(0.2)}
              className="leading-[1.07] text-ink-brown font-bold"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 5vw, 4.2rem)" }}
            >
              Cute Things.<br />
              Pretty Moods.<br />
              <em style={{ color: "#8d4b00", fontStyle: "italic" }}>Everyday Luxury.</em>
            </motion.h1>

            {/* Subtext */}
            <motion.p {...fade(0.3)}
              className="leading-relaxed max-w-md"
              style={{ color: "#6b4c39", fontSize: "1.05rem" }}
            >
              Curated jewelry for the modern Indian romantic. Effortless elegance that feels like a warm hug and looks like a Pinterest board.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fade(0.4)} className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/collection"
                className="px-9 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-105 active:scale-95"
                style={{ background: "#8d4b00", color: "#fff8f1", boxShadow: "0 8px 24px rgba(141,75,0,0.3)" }}
              >
                Shop Trending
              </Link>

              {/* Watch Reels — opens Instagram */}
              <a
                href="https://www.instagram.com/the.pallu.stories?igsh=OHplNDhuZWcxZjAz"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm tracking-wide border-2 overflow-hidden transition-all active:scale-95"
                style={{ borderColor: "#8d4b00", color: "#8d4b00" }}
              >
                {/* bottom → top fill */}
                <span
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-out"
                  style={{ background: "#8d4b00" }}
                />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-[#fff8f1] transition-colors duration-200">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Reels
                </span>
              </a>
            </motion.div>

          </div>

          {/* ── RIGHT FLOATING COLLAGE ── */}
          <div className="w-full md:w-1/2 relative h-[600px] hidden md:block">

            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 55% 50%, rgba(141,75,0,0.1) 0%, transparent 70%)" }} />

            {/* Card 1 – Earrings (back-left) */}
            <motion.div
              initial={{ opacity: 0, rotate: 3 }}
              animate={heroInView ? { opacity: 1, y: [0, -10, 0], rotate: 3 } : {}}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
              }}
              className="absolute top-20 left-36 w-56 h-72 rounded-[32px] overflow-hidden z-0"
              style={{ boxShadow: "0 20px 50px rgba(141,75,0,0.2), 0 0 0 3px rgba(255,220,195,0.5)" }}
            >
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd3W8kihZHnna2RP-j9GaKXaNPib2igH1oNp_Usgb9dSYcwF7HHHlQSm3pioUEnquTn4gZ20WPyy1DNJ_22-T8hjCzHYfmUN23SnNikz8vBGYQfPG2QUv3_q20n65YzzriQ3nh-zG8oASlnOhWZitjG-KRsoqft_PzoftQ7wtPi4B-f0i6pLU_20pXTvGBxqB6oVG630fcGG_28Q5zpcbxZsd6rGnWMgcFpXt5yT2wup7stX65NHzUBwiwLkr0O2HmmRo-HrGTLgg"
                alt="Earrings" fill className="object-cover" sizes="224px" />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{ background: "rgba(255,248,241,0.92)", color: "#8d4b00", backdropFilter: "blur(8px)" }}>
                Earrings ✦
              </div>
            </motion.div>

            {/* Card 2 – Model (center foreground) */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={heroInView ? { opacity: 1, y: [0, -14, 0], rotate: -1 } : {}}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                y: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
              }}
              className="absolute bottom-6 left-2 w-64 h-80 rounded-[32px] overflow-hidden z-10"
              style={{ boxShadow: "0 24px 60px rgba(62,44,28,0.28), 0 0 0 3px rgba(255,220,195,0.65)" }}
            >
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEj8IBwDvD0Gjwa-ptyXk_T9M9qosCf5i0xRoBn_TCtppz5abJ2SJdG8VrFq_gVBeNWBLfntF7MqkNFqEh8eifLgb4rhwjvYtR3gl3o6-eEbk5Su9kmi6InUGpaxg0g7WudOuJyxHNm7DUYilYYdWYSumBJLz8NsdKCr3dPUX62x7mxZ0hoLnSKZo8qBo9ugJy9pY6n7-l9j1obJxAUKun1w5ZmnSMUkQOEs54R4cC8eoywH6uW91c5w6dhiqFST_QUTlTeDMMKzs"
                alt="Model jewelry" fill className="object-cover" sizes="288px" />
              {/* floating review chip */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 px-3 py-2 rounded-2xl text-[11px] font-semibold"
                style={{ background: "rgba(255,248,241,0.95)", color: "#3E2C1C", backdropFilter: "blur(12px)", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
              >
                ⭐ 4.9 · 15K reviews
              </motion.div>
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{ background: "rgba(255,248,241,0.92)", color: "#8d4b00", backdropFilter: "blur(8px)" }}>
                New Arrivals ✦
              </div>
            </motion.div>

            {/* Card 3 – Pendant (top right) */}
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              animate={heroInView ? { opacity: 1, y: [0, -10, 0], rotate: -5 } : {}}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
              }}
              className="absolute top-0 right-8 w-60 h-72 rounded-[32px] overflow-hidden z-20"
              style={{ boxShadow: "0 20px 50px rgba(141,75,0,0.22), 0 0 0 3px rgba(255,220,195,0.55)" }}
            >
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Ask6XWFrchZBIBk2bmI2qJuRrHteEckSsuNEwn2hErjw5K6PUrVlU2unuFIYBvUHzf7hYdBe09o_xKTxtaj5nAv2BBVjD2TMjVPDnuHRDWfi_mC7eSilbmXTQ2NBUO1zhMZOqqfKEuvOyGGA1HfZfe2eiusUiQpUWVQlvMIfya8SMXPLr9ijbUd_4t36nPvuXUm3VGfETVbX_dHsJs71KxBNliudvJDaII42wwtY3VddFrrHNsTOYOX5yqASrnkRfGZnEuC8gys"
                alt="Gold pendant" fill className="object-cover" sizes="256px" />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{ background: "rgba(255,248,241,0.92)", color: "#8d4b00", backdropFilter: "blur(8px)" }}>
                Necklaces ✦
              </div>
            </motion.div>

          </div>
        </div>
      </section>



      {/* ── CURATED PICKS (Editorial Grid) ──── */}
      <section className="container-artisan px-6 md:px-12 mx-auto my-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-10"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-2">Our Picks</p>
            <h2 className="font-display-lg text-headline-lg text-ink-brown leading-tight">
              Curated Essentials
            </h2>
          </div>
          
          <div className="flex items-center gap-6">
            <Link
              href="/collection"
              className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-ink-brown transition-colors group hidden sm:flex"
            >
              View Collection
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {/* Scroll Navigation Chevrons */}
            <div className="flex gap-2.5">
              <button 
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-outline-subtle bg-white/80 hover:bg-white text-ink-brown hover:text-primary flex items-center justify-center shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-outline-subtle bg-white/80 hover:bg-white text-ink-brown hover:text-primary flex items-center justify-center shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Horizontal Scrolling Carousel */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-12 pt-4 snap-x snap-mandatory -mx-6 px-6 md:-mx-12 md:px-12 hide-scroll" 
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scroll::-webkit-scrollbar { display: none; }
          `}} />
          {TRENDING.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer flex-none w-[70vw] sm:w-[240px] md:w-[260px] lg:w-[280px] snap-start"
            >
              <Link href={`/products/${p.slug}`}>
                {/* Image Box */}
                <div
                  className="relative overflow-hidden rounded-2xl mb-5"
                  style={{
                    aspectRatio: "4/5",
                    background: (p as any).bgLight ? "#f9f3eb" : "#2e1f13",
                  }}
                >
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                  />
                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Badge */}
                  {p.badge && (
                    <span
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.15em]"
                      style={{ background: "rgba(255,255,255,0.9)", color: "#8d4b00", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.5)", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}
                    >
                      {p.badge}
                    </span>
                  )}
                  {/* Quick Add Button Premium */}
                  <button
                    onClick={e => {
                      e.preventDefault();
                      addItem({ id: p.id, slug: p.slug, name: p.name, subtitle: p.subtitle, price: p.price, image: p.images[0] });
                      openCart();
                    }}
                    className="absolute bottom-4 left-4 right-4 py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-[0.23,1,0.32,1] shadow-[0_8px_30px_rgba(141,75,0,0.15)] overflow-hidden group/add"
                    style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)", color: "#8d4b00", border: "1px solid rgba(255,255,255,1)" }}
                  >
                    <span className="absolute inset-0 bg-[#8d4b00] translate-y-full group-hover/add:translate-y-0 transition-transform duration-400 ease-out z-0" />
                    <ShoppingBag size={16} className="relative z-10 transition-colors duration-300 group-hover/add:text-white" />
                    <span className="relative z-10 transition-colors duration-300 group-hover/add:text-white tracking-wide">Quick Add</span>
                  </button>
                </div>

                {/* Text */}
                <div className="space-y-0.5">
                  <h3 className="font-semibold text-sm text-ink-brown group-hover:text-primary transition-colors" style={{ fontFamily: "Hanken Grotesk, sans-serif" }}>
                    {p.name}
                  </h3>
                  <p className="text-xs" style={{ color: "#887364" }}>{p.subtitle}</p>
                  <p className="text-sm font-bold text-primary pt-1">₹{p.price.toLocaleString("en-IN")}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SHOP BY MOOD ─────────────────────── */}
      <section className="container-artisan px-6 md:px-12 mx-auto mb-24">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-label-sm">Find Your Aesthetic</span>
          <h2 className="font-display-lg text-headline-lg text-ink-brown mt-2">Shop By Mood</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[220px] md:auto-rows-[280px]">
          {MOODS.map((m,i)=>(
            <motion.div key={i}
              initial={{ opacity:0, scale:0.96 }} whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }} transition={{ delay:i*0.1 }}
              className={`relative h-full rounded-[24px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${m.span}`}>
              <Image src={m.img} alt={m.title} fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110" sizes="(max-width:768px)50vw,25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e1f13]/90 via-[#2e1f13]/20 to-transparent flex flex-col justify-end p-6 md:p-8 transition-opacity duration-500">
                <span className="text-[#ffdcc3] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[0.23,1,0.32,1]">Explore</span>
                <h3 className="text-white font-headline-md font-bold text-2xl md:text-3xl transform group-hover:-translate-y-1 transition-transform duration-500 ease-[0.23,1,0.32,1]">{m.title}</h3>
                {m.sub && <p className="text-[#f1dfd9] text-sm mt-1.5 max-w-xs transform group-hover:-translate-y-1 transition-transform duration-500 delay-75 ease-[0.23,1,0.32,1] opacity-90 group-hover:opacity-100">{m.sub}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── COUNTDOWN ────────────────────────── */}
      <section className="container-artisan px-6 md:px-12 mx-auto mb-24 text-center">
        <div className="bg-ink-brown rounded-3xl p-12 text-warm-beige relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 space-y-8">
            <motion.h2 initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
              className="font-display-lg text-headline-lg">
              Next Trending Drop In ...
            </motion.h2>
            
            <div className="flex justify-center gap-2 sm:gap-6 md:gap-12 my-8">
              {[["Days",d],["Hours",h],["Mins",m],["Secs",s]].map(([label,val],i,arr)=>(
                <div key={label} className="flex items-center gap-2 sm:gap-6 md:gap-12">
                  <div className="text-center min-w-[48px] sm:min-w-[64px]">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display text-primary-fixed">{val}</div>
                    <div className="text-[9px] sm:text-xs uppercase opacity-70 mt-1 sm:mt-2 tracking-wider">{label}</div>
                  </div>
                  {i<arr.length-1 && <div className="text-2xl sm:text-4xl text-warm-beige/30 font-light pb-3 sm:pb-0">:</div>}
                </div>
              ))}
            </div>

            <motion.button whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
              className="px-10 py-4 rounded-full font-semibold bg-primary text-white hover:bg-white hover:text-ink-brown shadow-lg transition-all duration-300">
              Notify Me When Live ✨
            </motion.button>
          </div>
        </div>
      </section>

      {/* ── LOVED BY YOU ─────────────────────── */}
      <section className="container-artisan px-6 md:px-12 mx-auto mb-24">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-display-lg text-headline-lg text-ink-brown">Loved By You</h2>
          <p className="text-on-surface-variant mt-2">
            Tag{" "}
            <a
              href="https://www.instagram.com/the.pallu.stories?igsh=OHplNDhuZWcxZjAz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline cursor-pointer"
            >
              @the.pallu.stories
            </a>{" "}
            to be featured 📸
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {SELFIE.map((src,i)=>(
            <motion.div key={i} whileHover={{ scale:1.04 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
              <Image src={src} alt={`customer ${i+1}`} fill className="object-cover" sizes="20vw" />
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {REVIEWS.map((r,i)=>(
            <motion.div key={r.name}
              initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.07 }}
              className="p-7 bg-white/60 backdrop-blur-xl border border-white/80 rounded-[24px] shadow-[0_12px_40px_rgba(141,75,0,0.05)] hover:shadow-[0_16px_50px_rgba(141,75,0,0.08)] transition-shadow duration-300 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {Array.from({length:r.stars}).map((_,s)=><Star key={s} size={14} fill="#8d4b00" stroke="none" />)}
                </div>
                <p className="text-[15px] leading-relaxed text-[#554336] italic font-medium">&ldquo;{r.text}&rdquo;</p>
              </div>
              <div className="pt-2 border-t border-black/5 mt-auto">
                <p className="font-bold text-ink-brown text-[15px]">{r.name}</p>
                <p className="text-[11px] uppercase tracking-wider text-[#887364] font-semibold mt-0.5">{r.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FOLLOW OUR JOURNEY ───────────────── */}
      <section className="container-artisan px-6 md:px-12 mx-auto mb-24">
        <div className="text-center mb-12">
          <h2 className="font-display-lg text-headline-lg text-ink-brown">Follow Our Journey</h2>
          <p className="text-primary font-semibold mt-2">
            <a
              href="https://www.instagram.com/the.pallu.stories?igsh=OHplNDhuZWcxZjAz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              @the.pallu.stories
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {JOURNEY.map((j,i)=>(
            <motion.div key={i} whileHover={{ scale:1.03 }}
              className="relative group aspect-[9/16] rounded-2xl overflow-hidden shadow-md bg-ink-brown">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              >
                <source src={j.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-body-md">{j.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <motion.a
            whileHover={{ scale:1.04 }}
            href="https://www.instagram.com/the.pallu.stories?igsh=OHplNDhuZWcxZjAz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold border-2 border-ink-brown text-ink-brown hover:bg-ink-brown hover:text-white transition-colors duration-300 shadow-sm"
          >
            Follow on Instagram ✨
          </motion.a>
        </div>
      </section>

    </div>
  );
}
