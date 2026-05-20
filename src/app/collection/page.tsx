"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import { products, formatPrice } from "@/lib/products";

const collectionsList = [
  {
    name: "Women’s Fashion Collection",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ9P-6vIiLqGQIDsYfz-B9ebEdWcrbMFAzTf_5w4HrQ4Dns9QtlDpZhY8b0D8eXVc-hn6-5KEvpE58lU3aWcvVvWmBIslJu7nhj9olpfxgR01VFfD0pjZvph6CE6D6sf5p5lWUbGw_nDZtVDewIdLwfsBQAvgYhhrlHfTO_e4be2IMWnTuzMwmHfv85Px5_ZYuiJbNoq52brIHGLYm5XkdtWFqbNGDJz_jgNvduwBbe4j5y4nNG8en6LI0bUQ8ulLIaYWpjBD5P4A"
  },
  {
    name: "Necklaces",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFfCF18GdbPbvEEpRJrj-2NTmnM0Uz1P0ZsYe1ftqH2NiSYaIouJyWSf3HB5N5Y3LUpK0XAZVT9dAJWogODs2m64wNpIwewlCLeDpZmq_lFk_K6PbezcRkD8try-4DX-16T4Wzt8uWl7bk1xyZ1MP6G5CLHRU4eBT4HxFMJV1Kg7_NcMHsrZhcYOigsQCzaVKsnk0SCEBJR993GGR2dF71BGhMVFVJR1yNuB966ar4M8VsP5jGAXkMqECSe3wZtMwi_P1TOgvNG7o"
  },
  {
    name: "Earrings",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrCHq6mdSG-WfzG1Jgbz2oLfeKWduZBf5AR6ZSNJUyfazlHr5r9hZ9ktQRaA5cQf1UFEWTrXKqGdAi_x1zs2WkWFXI9t46SwPudIyByKuOGXABUrvr0DB3I93RlR-tYVUSGgIssd6P-M_XAxhMmXPZNm_DqhsaVQaas-um9fZ8kCVfJRx8J24r-5moyyO70hsu_OKonktylEVUwEfh4Gh5D2JpIRxyMRl6VgIfEOztl6tr5nsN9pdJgrSJlV1g1AZFUtYEBlq5xDY"
  },
  {
    name: "Rings",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMXvB0Bsv7-rcOfkzSaQ8qV7tu5xM8KhMgCJ9esSdWXWqL0UwawBLWMYWKRnzJclJJYLYOtedPNXHvcWO1Emu_x2JwhDRii-0hhbPM2EbnTyVz-E1YQ8KGN4Ag-leKkjbS4zmUOC3pbpB9LVd8Q6z-3PVKugt9dqq_LDgzlO2G2Hwue8CNv0dHRI47ro80gq22ZxgVSJDRHP3zpQitdJ_3x08-3v2fKLwtyH1pjGfPkYkNxcDoqbkjBEUpPZnOk1DwdvHzxJjuhT0"
  },
  {
    name: "Watches",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUwIrjR__QywxQIKbmWlTj8e_17FWiiGCwDJeQ7ab-hbqM6dwvkAF8pSPmFr5XELyEgmO9Gb5P44mBQakFjQvmzK509CLW0-gE1JGIvUD52oCq-LPB2UJt5Cq2sJDlokVTHzfcHklciEyRhrr56GpMhRtlpTjYiw9nVgCvvaFGjh6evE_cat0CEQCYZ5PzhAzaU7QE8nfn6hGQsYS5WD2vteUXba06ghGXQ4w-iF1EVqP_CpKJ9xcSF6oC19Hw7-xUS0q1i-I8FNc"
  },
  {
    name: "Clutches",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBInObag0rINR8ns4pOvBfYQyqoYQPT1wPx3rZxJBLzZAWDf2s4JXI_GDH09JrhOHKpIcQ42JyGKsPOEMSbaGdcU1qgm_W7HtFwS4GbkhT4V8axRcCjOaJCtlUSrzlsKXZVB2Nx-9ptqwlUQsVBdIaTTp_wY3BaPZbD7xR5LU8zvJstibVWUkTREnjj88qLdGWM5b5FWHtQ6AWz8gV5kQaXh0fpN3BNV0XyYgqF10xfchnBaDyVhe3bWoCcutjuRzb7AJiIB1C0HM"
  },
  {
    name: "Cute Accessories",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJoAabqQeP2WifGAmVW2Pi5Pn1IeWxLcvU4hihHrN0BTdv7Trm3xFs34CDI9HesyHLUR5Bmh3LMMzFEU61FwpaL-ohXctR1jUB_cnAoZm5KfW22l29NTRjD8XlBMQf9uWrGi-SuTINbbUcUO_6D7cp9C6d_c01BDg5d3NzETMJFsf-bAYdwXoEki1ClELuFXc4sH8AJ0yb0GkE3WJt_7WF0eKlTMoY0uWoR5L6WJYKmLpihai1fyjo8tudOPaMHgzG7J0HDi7oB8M"
  },
  {
    name: "Gift Items",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL1EKIPnuB1G4WZ8w0uYbU7_LU0DG57cJlEweIH0y6ZMrnz-TcKjVGIfDjMGIGRpa_3b991f7LtOxsI4s2qDT7IU5-sZ7k_PDKKNsEgywpUtaByfphSSO4lEe-4BeHzWdhU6ZwPM05nBBrBCNpvL4VlD-vWVAaLPIx_z3mUlU3ta8wCVEcaIhY4pLRON3Wt61Xd6EnaxjCjlyL4LdIoTnqtB5D3KZWjwBRHjC4UxmJdOwZ8ozJhcdUqt_bjG7mZlQ4bkveRMhbCZo"
  },
  {
    name: "Trendy Fashion Jewelry",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ2RWrE9Na6Vt6anPpp6v7CfLdMkbqjtK7J-QgT7Brgbgytvl7V5Kf770HomRFEAhguQrK0WQoj6P0Fe1DFUbXEk0Zmzeiv-xSxGf8QFlJB9yaAmg5s4FckTXVAM3lY7G-b5lqyplXfjcnjTvadHL5t7pTuMHpYb6-grW2egoi4ckS9YRMhqrN-O4cU5XghT_m9ydPY_lhFxptd-CZvuasBaTosKK4roj52IrIw_h40gYCpI0M2IWaDh0wWlOT2LJKcOcLfCZqmgI"
  },
  {
    name: "Korean Accessories",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpI3tzBOtKsmL3VTSYyB7foHV9W-AmDOJXj7-s3otsBLvqTXwjn5Q7_T7_D617r_krMKuDPSPyC6Ue-0fSXIH4ElBHLBDf88HZKhfJ6y41dBWCr0Skdtx9TUa8U4bPPZqrQZQt7jBnkWtVZ6j9ARhqZ8awUibsHjMQlW1HQ0PUQHJRpRt_wLeNKgUxfNIexOVEUOr8Q6fiRX6S_hiLIjM5eyt20KuN-vOFjmLyOEeGfTi_618k-aYjJ1EZgPsRAig0bHz6Pq5-Irc"
  }
];

/* ── Sidebar filter categories with counts ─────────────────── */
const SIDEBAR_CATS = [
  { name: "All",              label: "All Items",          count: products.length },
  { name: "Necklaces",        label: "Necklaces",          count: products.filter(p => p.category === "Necklaces").length },
  { name: "Earrings",         label: "Earrings",           count: products.filter(p => p.category === "Earrings").length },
  { name: "Rings",            label: "Rings",              count: products.filter(p => p.category === "Rings").length },
  { name: "Watches",          label: "Watches",            count: products.filter(p => p.category === "Watches").length },
  { name: "Clutches",         label: "Clutches",           count: products.filter(p => p.category === "Clutches").length },
  { name: "Cute Accessories", label: "Cute Accessories",   count: products.filter(p => p.category === "Cute Accessories").length },
  { name: "Gift Items",       label: "Gift Items",         count: products.filter(p => p.category === "Gift Items").length },
];

const MATERIALS = [
  "Gold Plated",
  "Oxidized Silver",
  "Rose Gold Plated",
  "Freshwater Pearl",
  "American Diamond",
  "Stainless Steel",
  "Acrylic & Metal",
  "Soft Silicone",
];

export default function CollectionPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 35 });
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // Filtering states
  const [selectedSidebarCat, setSelectedSidebarCat] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("Women's Fashion Collection");
  const [showTrending, setShowTrending] = useState(false);
  const [showBestSeller, setShowBestSeller] = useState(false);
  const [showNewDrops, setShowNewDrops] = useState(false);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  // keep selectedColor for legacy compat
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes } = prev;
        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;
          if (hours > 0) {
            hours--;
          } else {
            hours = 23;
            if (days > 0) days--;
          }
        }
        return { days, hours, minutes };
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Real-time combined filtering
  const filteredProducts = products.filter((p) => {
    // 0. Sidebar category filter (new editorial sidebar)
    if (selectedSidebarCat !== "All" && p.category !== selectedSidebarCat) return false;

    // 1. Top-nav Collection Filter (circle highlights)
    if (selectedCategory !== "Women's Fashion Collection") {
      if (selectedCategory === "Trendy Fashion Jewelry") {
        if (!p.trending && !p.bestSeller) return false;
      } else if (selectedCategory === "Korean Accessories") {
        const isKorean =
          p.tag.toLowerCase().includes("korean") ||
          p.description.toLowerCase().includes("korean") ||
          p.category === "Cute Accessories";
        if (!isKorean) return false;
      } else {
        if (p.category !== selectedCategory) return false;
      }
    }

    // 2. Price Filter
    if (p.price > maxPrice) return false;

    // 3. Material Filter
    if (selectedMaterial && !p.material.toLowerCase().includes(selectedMaterial.toLowerCase())) return false;

    // 4. In Stock Only
    if (inStockOnly && !p.inStock) return false;

    return true;
  });

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      {/* ── PREMIUM HERO ──────────────────────────────────────────── */}
      <header
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fdf8f2 0%, #f5ece0 40%, #eedcc8 100%)",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #ffdcc3 0%, transparent 70%)" }} />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #8d4b00 0%, transparent 70%)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10"
            style={{ background: "radial-gradient(ellipse, #d4a574 0%, transparent 70%)" }} />
        </div>

        <div className="relative container-artisan px-6 md:px-16 py-28 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-20">

            {/* ── LEFT COPY ── */}
            <div className="lg:w-1/2 space-y-8 z-10">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <span
                  className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]"
                  style={{
                    background: "rgba(141,75,0,0.1)",
                    border: "1.5px solid rgba(141,75,0,0.25)",
                    color: "#8d4b00",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8d4b00] animate-pulse inline-block" />
                  Premium Curation
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="leading-[1.05] text-ink-brown"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700 }}
              >
                Collections<br />
                Curated For<br />
                <em style={{ fontStyle: "italic", color: "#8d4b00" }}>Every Pretty Mood.</em>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-[#5e3d2b]/75 leading-relaxed max-w-sm"
                style={{ fontSize: "1.05rem" }}
              >
                Ethereal Korean jewelry & aesthetic accessories — designed for your digital moodboard life.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex items-center gap-4 flex-wrap"
              >
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 12px 32px rgba(141,75,0,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-9 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300"
                  style={{ background: "#8d4b00", color: "#fff8f1", boxShadow: "0 6px 20px rgba(141,75,0,0.25)" }}
                >
                  Shop The Mood ✦
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-9 py-4 rounded-full font-semibold text-sm tracking-wide border-2 transition-all duration-300"
                  style={{ borderColor: "#8d4b00", color: "#8d4b00", background: "transparent" }}
                >
                  View Lookbook
                </motion.button>
              </motion.div>

              {/* Stats strip */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="flex items-center gap-8 pt-2"
              >
                {[
                  { val: "500+", label: "Pieces" },
                  { val: "4.9★", label: "Avg Rating" },
                  { val: "15K+", label: "Customers" },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-bold text-xl" style={{ color: "#3E2C1C" }}>{val}</div>
                    <div className="text-[11px] uppercase tracking-widest mt-0.5" style={{ color: "#9d7e6a" }}>{label}</div>
                  </div>
                ))}
                <div className="h-8 w-px bg-[#dbc2b0] mx-2 hidden sm:block" />
                <div className="text-xs font-medium" style={{ color: "#9d7e6a" }}>
                  Free shipping<br />above ₹499
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT FLOATING COLLAGE ── */}
            <div className="lg:w-1/2 relative h-[600px] w-full hidden lg:block">

              {/* Ambient glow behind cards */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(141,75,0,0.12) 0%, transparent 70%)" }} />

              {/* Card 1 – Top Right: necklace */}
              <motion.div
                initial={{ opacity: 0, rotate: 4, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1, y: [0, -14, 0], rotate: 4 } : {}}
                transition={{
                  opacity: { duration: 0.9, delay: 0.2 },
                  scale: { duration: 0.9, delay: 0.2 },
                  y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                }}
                className="absolute top-4 right-4 w-56 h-68 rounded-[32px] overflow-hidden z-20"
                style={{ boxShadow: "0 20px 60px rgba(141,75,0,0.25), 0 0 0 3px rgba(255,220,195,0.6)" }}
              >
                <Image fill className="object-cover" alt="Gold layered necklaces"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmrpiw59utQcQc0OEV35OKF5_Q4VKxssgvX6nSA4Qdg7ncwrW7_PzQ5nIDdULcnecgQuXpCS06rBw4vexHKoIcnoJSaiUG9MXPbtA1-fXU9WJdp6v6RjerNIBDBvDvmIoAHzSdfjd5AI5zVZznB68PZPjBJ0srA3Vv9gZxRn0r88EKBb_VZ6RHmFLjfjpj_3jjg02hSxV_xpoQ9B7wFXFPmS2EAFNwVs-1QGuZGPAQ2vdBNE1IULgLvNTijx5u0m8HhcQzo0re10M"
                  sizes="224px" />
                {/* label tag */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: "rgba(255,248,241,0.9)", color: "#8d4b00", backdropFilter: "blur(8px)" }}>
                  Necklaces ✦
                </div>
              </motion.div>

              {/* Card 2 – Bottom Left: earrings */}
              <motion.div
                initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1, y: [0, -10, 0], rotate: -5 } : {}}
                transition={{
                  opacity: { duration: 0.9, delay: 0.45 },
                  scale: { duration: 0.9, delay: 0.45 },
                  y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
                }}
                className="absolute bottom-4 left-4 w-60 h-76 rounded-[32px] overflow-hidden z-10"
                style={{ boxShadow: "0 20px 60px rgba(141,75,0,0.2), 0 0 0 3px rgba(255,220,195,0.5)" }}
              >
                <Image fill className="object-cover" alt="Korean aesthetic earrings"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP8zpjHSsRpBeST_6MkhsBQnR032EjhuNfUCKGLWgxcchVBhlZUIZPyrZAePi5w8a8rJskGMCKJzZ-iQnd0cEB3jNYo_9XSP_K0RutE8DMQR5yUslsDgQD-JHqu9AikomMv5hapjb5ZX-bcQwogXWd_7O-V57YKctBxlPWN1zQWmZ7hH86uYxD74IqlbUU4Cz6Z_t483gQ3XhmvOR42k9EcOzD_PV_pGszEy-WHCn0rp7Y-8WZtdwDbMLZcD8_ppbWHeAI19mlgWQ"
                  sizes="240px" />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: "rgba(255,248,241,0.9)", color: "#8d4b00", backdropFilter: "blur(8px)" }}>
                  Earrings ✦
                </div>
              </motion.div>

              {/* Card 3 – Center foreground: model */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={heroInView ? { opacity: 1, scale: 1, y: [0, -18, 0] } : {}}
                transition={{
                  opacity: { duration: 0.9, delay: 0.65 },
                  scale: { duration: 0.9, delay: 0.65 },
                  y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                }}
                className="absolute top-[15%] left-[28%] w-64 h-80 rounded-[32px] overflow-hidden z-30"
                style={{ boxShadow: "0 28px 80px rgba(62,44,28,0.3), 0 0 0 3px rgba(255,220,195,0.7)" }}
              >
                <Image fill className="object-cover" alt="Model wearing aesthetic accessories"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ9P-6vIiLqGQIDsYfz-B9ebEdWcrbMFAzTf_5w4HrQ4Dns9QtlDpZhY8b0D8eXVc-hn6-5KEvpE58lU3aWcvVvWmBIslJu7nhj9olpfxgR01VFfD0pjZvph6CE6D6sf5p5lWUbGw_nDZtVDewIdLwfsBQAvgYhhrlHfTO_e4be2IMWnTuzMwmHfv85Px5_ZYuiJbNoq52brIHGLYm5XkdtWFqbNGDJz_jgNvduwBbe4j5y4nNG8en6LI0bUQ8ulLIaYWpjBD5P4A"
                  sizes="256px" />
                {/* floating review chip */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 px-3 py-2 rounded-2xl text-[11px] font-semibold"
                  style={{ background: "rgba(255,248,241,0.95)", color: "#3E2C1C", backdropFilter: "blur(12px)", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
                >
                  ⭐ 4.9 · 15K reviews
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </header>

      {/* ── CATEGORY NAVIGATION ────────────────────────────── */}
      <section
        className="mb-12"
        style={{ background: "linear-gradient(to right, #fdf8f2, #f5ece0, #fdf8f2)", borderTop: "1px solid rgba(141,75,0,0.08)", borderBottom: "1px solid rgba(141,75,0,0.08)" }}
      >
        <div className="px-6 md:px-16 py-5">
          <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
            {collectionsList.map((cat, i) => {
              const isActive = selectedCategory === cat.name;
              return (
                <motion.button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 flex-shrink-0 snap-start px-4 py-2.5 rounded-2xl transition-all duration-300 cursor-pointer border relative overflow-hidden"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, #8d4b00 0%, #a05c10 100%)"
                      : "rgba(255,255,255,0.7)",
                    borderColor: isActive ? "#8d4b00" : "rgba(141,75,0,0.15)",
                    boxShadow: isActive
                      ? "0 6px 20px rgba(141,75,0,0.25)"
                      : "0 2px 8px rgba(0,0,0,0.06)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0"
                    style={{
                      boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.2)" : "0 2px 6px rgba(0,0,0,0.12)",
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image src={cat.img} alt={cat.name} fill className="object-cover" sizes="40px" />
                    </div>
                  </div>

                  {/* Label */}
                  <span
                    className="text-xs font-bold whitespace-nowrap leading-tight"
                    style={{ color: isActive ? "#fff8f1" : "#5e3d2b" }}
                  >
                    {cat.name}
                  </span>

                  {/* Count bubble */}
                  {('count' in cat) && (cat as any).count !== undefined && (
                    <span
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
                      style={{
                        background: isActive ? "rgba(255,255,255,0.2)" : "rgba(141,75,0,0.1)",
                        color: isActive ? "#fff8f1" : "#8d4b00",
                      }}
                    >
                      {(cat as any).count}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>


      {/* Main Browsing Area */}
      <main className="container-artisan px-6 md:px-12 mx-auto flex flex-col md:flex-row gap-8">
        {/* ── EDITORIAL SIDEBAR FILTER ────────────────────────── */}
        <aside className="w-full md:w-60 flex-shrink-0">
          <div className="md:hidden mb-4">
            <button 
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#ece0d5] rounded-xl font-bold text-[#7c5c42] uppercase tracking-widest text-[11px] shadow-sm"
            >
              <span>{isMobileFilterOpen ? "Hide Filters" : "Show Filters"}</span>
              <span className="material-symbols-outlined text-lg" style={{ fontFamily: '"Material Symbols Outlined"' }}>{isMobileFilterOpen ? "expand_less" : "expand_more"}</span>
            </button>
          </div>
          <div className={`sticky top-24 ${isMobileFilterOpen ? "block" : "hidden"} md:block`} style={{
            background: "#fdf8f2",
            borderRadius: "16px",
            padding: "28px 20px",
            border: "1px solid #ece0d5",
          }}>

            {/* Header row */}
            <div className="flex justify-between items-center mb-6">
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#7c5c42", textTransform: "uppercase" }}>
                Filters
              </span>
              {(selectedSidebarCat !== "All" || maxPrice < 5000 || selectedMaterial || inStockOnly) && (
                <button
                  onClick={() => {
                    setSelectedSidebarCat("All");
                    setMaxPrice(5000);
                    setSelectedMaterial(null);
                    setInStockOnly(false);
                  }}
                  style={{ fontSize: 10, color: "#a06c42", textDecoration: "underline", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", background: "none", border: "none" }}
                >
                  Clear All
                </button>
              )}
            </div>

            {/* ── CATEGORY ─────────────────────────── */}
            <div style={{ paddingBottom: 20, marginBottom: 20, borderBottom: "1px solid #e8d9cc" }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", color: "#7c5c42", textTransform: "uppercase", marginBottom: 14 }}>
                Category
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                {SIDEBAR_CATS.map((cat) => {
                  const isActive = selectedSidebarCat === cat.name;
                  return (
                    <li key={cat.name}>
                      <button
                        onClick={() => setSelectedSidebarCat(cat.name)}
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "7px 0",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <span style={{
                          fontSize: 13.5,
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? "#8d4b00" : "#5e3d2b",
                          transition: "color 0.2s",
                        }}>
                          {cat.label}
                        </span>
                        <span style={{
                          fontSize: 11,
                          fontWeight: 500,
                          color: isActive ? "#8d4b00" : "#9d7e6a",
                          background: isActive ? "#f5e0c8" : "#ece0d5",
                          borderRadius: 20,
                          padding: "2px 8px",
                          minWidth: 28,
                          textAlign: "center",
                        }}>
                          {String(cat.count).padStart(2, "0")}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ── PRICE RANGE ──────────────────────── */}
            <div style={{ paddingBottom: 20, marginBottom: 20, borderBottom: "1px solid #e8d9cc" }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", color: "#7c5c42", textTransform: "uppercase", marginBottom: 14 }}>
                Price Range
              </p>
              <div style={{ position: "relative" }}>
                <input
                  type="range"
                  min={199}
                  max={5000}
                  step={50}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#8d4b00", cursor: "pointer" }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 8 }}>
                <span style={{ fontSize: 11, color: "#9d7e6a" }}>₹199</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#8d4b00" }}>
                  {formatPrice(maxPrice)}
                </span>
                <span style={{ fontSize: 11, color: "#9d7e6a" }}>₹5,000</span>
              </div>
            </div>

            {/* ── MATERIAL ─────────────────────────── */}
            <div style={{ paddingBottom: 20, marginBottom: 20, borderBottom: "1px solid #e8d9cc" }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", color: "#7c5c42", textTransform: "uppercase", marginBottom: 14 }}>
                Material
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {MATERIALS.map((mat) => {
                  const isActive = selectedMaterial === mat;
                  return (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(isActive ? null : mat)}
                      style={{
                        fontSize: 11.5,
                        fontWeight: 500,
                        padding: "5px 12px",
                        borderRadius: 20,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        background: isActive ? "#3E2C1C" : "transparent",
                        color: isActive ? "#fff8f1" : "#5e3d2b",
                        border: isActive ? "1.5px solid #3E2C1C" : "1.5px solid #dbc2b0",
                      }}
                    >
                      {mat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── IN STOCK ONLY ────────────────────── */}
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                style={{ width: 15, height: 15, accentColor: "#8d4b00", cursor: "pointer", flexShrink: 0 }}
              />
              <span style={{ fontSize: 13, color: "#5e3d2b", fontWeight: 400 }}>
                Show In Stock Only
              </span>
            </label>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-grow">
          {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="cursor-pointer"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-warm-beige/30 text-center">
              <span className="material-symbols-outlined text-5xl text-outline-variant mb-4">search_off</span>
              <h3 className="font-headline-md text-ink-brown mb-2">No Products Found</h3>
              <p className="text-on-surface-variant max-w-sm mb-6">
                We couldn't find any accessories matching your selected combination of filters. Try clearing some of the filters!
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Women’s Fashion Collection");
                  setShowTrending(false);
                  setShowBestSeller(false);
                  setShowNewDrops(false);
                  setMaxPrice(5000);
                  setSelectedColor(null);
                }}
                className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm shadow-md hover:scale-105 transition-transform cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>
      </main>


      {/* Shop By Vibe Section */}
      <section className="container-artisan px-6 md:px-12 mx-auto md:mt-20 mb-section-gap">
        <div className="mb-12 text-center">
          <h2 className="font-display-lg text-headline-lg text-ink-brown mb-4">Shop By Vibe</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Find the perfect match for your aesthetic mood. Whether you're feeling romantic or ready for a party.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {[
            {
              title: "Soft Girl",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpI3tzBOtKsmL3VTSYyB7foHV9W-AmDOJXj7-s3otsBLvqTXwjn5Q7_T7_D617r_krMKuDPSPyC6Ue-0fSXIH4ElBHLBDf88HZKhfJ6y41dBWCr0Skdtx9TUa8U4bPPZqrQZQt7jBnkWtVZ6j9ARhqZ8awUibsHjMQlW1HQ0PUQHJRpRt_wLeNKgUxfNIexOVEUOr8Q6fiRX6S_hiLIjM5eyt20KuN-vOFjmLyOEeGfTi_618k-aYjJ1EZgPsRAig0bHz6Pq5-Irc",
            },
            {
              title: "Date Night",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmqmGF2aTYMAjvKYdstuByU9HO7wcGLDM9ArwxjsQ4G8oFsMpLyYU9Zo34Nql-jLWp3Wq88aldUVnFpXkJ_Uw3rXn6SWff41V9LPN8EAQTRE2mR-wE-jfdhWB3s4QuW7Yc4Rfcn8Psb4dSMzgWq8kTG8ny36xLeg3N_4fniXZge6LRRqvIayKvsL2kW-UBwy7NJqiEOc6Zm0aP-O0ZKWI4vQTqLrDe7IVv08aoY1GbuYvmd1pj8oHA2bX4Vq5FGv2ecBcMVsqfI50",
            },
            {
              title: "Korean Style",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ2RWrE9Na6Vt6anPpp6v7CfLdMkbqjtK7J-QgT7Brgbgytvl7V5Kf770HomRFEAhguQrK0WQoj6P0Fe1DFUbXEk0Zmzeiv-xSxGf8QFlJB9yaAmg5s4FckTXVAM3lY7G-b5lqyplXfjcnjTvadHL5t7pTuMHpYb6-grW2egoi4ckS9YRMhqrN-O4cU5XghT_m9ydPY_lhFxptd-CZvuasBaTosKK4roj52IrIw_h40gYCpI0M2IWaDh0wWlOT2LJKcOcLfCZqmgI",
            },
          ].map((vibe, i) => (
            <div key={i} className="group relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <Image fill className="w-full h-full object-cover" alt={vibe.title} src={vibe.img} />
              <div className="absolute inset-0 bg-ink-brown/20 flex flex-col items-center justify-center text-white opacity-100 group-hover:bg-ink-brown/40 transition-all z-10">
                <h3 className="font-display-lg text-headline-lg mb-2">{vibe.title}</h3>
                <p className="font-body-md border-b border-white pb-1">Shop Collection</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Strip (Reel Style) */}
      <section className="mb-section-gap">
        <div className="container-artisan px-6 md:px-12 mx-auto mb-8 flex justify-between items-end">
          <div>
            <h2 className="font-display-lg text-headline-lg text-ink-brown">Trending On Instagram</h2>
            <p className="text-on-surface-variant">The pieces everyone is obsessing over right now 📸</p>
          </div>
          <a
            href="https://www.instagram.com/thepallustories/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8d4b00] font-bold flex items-center gap-2 group cursor-pointer hover:underline"
          >
            View Reels <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-8 px-6 md:px-12 md:ml-15 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-warm-beige [&::-webkit-scrollbar-thumb]:rounded-full snap-x">
          {[
            {
              views: "24.5k views",
              src: "/videos/video - 5.mp4",
            },
            {
              views: "18.2k views",
              src: "/videos/video - 6.mp4",
            },
            {
              views: "42.1k views",
              src: "/videos/video - 7.mp4",
            },
            {
              views: "31k views",
              src: "/videos/video - 8.mp4",
            },
          ].map((reel, i) => (
            <div key={i} className="flex-shrink-0 w-[80vw] md:w-72 h-[450px] rounded-xl overflow-hidden relative shadow-md snap-start group">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={reel.src} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 z-10 pointer-events-none">
                <div className="flex items-center gap-2 text-white mb-2">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  <span className="text-label-sm">{reel.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Trending Drop Countdown */}
      <section className="container-artisan px-6 md:px-12 mx-auto mb-section-gap">
        <div className="bg-ink-brown rounded-xl p-12 text-center text-warm-beige relative overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 space-y-8">
            <span className="text-label-sm uppercase tracking-widest text-primary-fixed">Incoming Heat 🔥</span>
            <h2 className="font-display-lg text-display-lg">The Celestial Drop</h2>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-1">{timeLeft.days.toString().padStart(2, '0')}</div>
                <div className="text-label-sm uppercase opacity-60">Days</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-label-sm uppercase opacity-60">Hours</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-label-sm uppercase opacity-60">Mins</div>
              </div>
            </div>
            <button className="bg-warm-beige text-ink-brown px-12 py-4 rounded-full font-bold hover:bg-white transition-colors">
              Notify Me ✨
            </button>
          </div>
        </div>
      </section>

      {/* Styled By Our Girls (Wall) */}
      <section className="container-artisan px-6 md:px-12 mx-auto mb-section-gap">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-lg text-ink-brown">Styled By Our Girls</h2>
          <p className="text-on-surface-variant">
            Tag{" "}
            <a
              href="https://www.instagram.com/thepallustories/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8d4b00] font-semibold hover:underline"
            >
              @ThePalluStories
            </a>{" "}
            to get featured on our wall 💖
          </p>
        </div>
        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {[
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBBInObag0rINR8ns4pOvBfYQyqoYQPT1wPx3rZxJBLzZAWDf2s4JXI_GDH09JrhOHKpIcQ42JyGKsPOEMSbaGdcU1qgm_W7HtFwS4GbkhT4V8axRcCjOaJCtlUSrzlsKXZVB2Nx-9ptqwlUQsVBdIaTTp_wY3BaPZbD7xR5LU8zvJstibVWUkTREnjj88qLdGWM5b5FWHtQ6AWz8gV5kQaXh0fpN3BNV0XyYgqF10xfchnBaDyVhe3bWoCcutjuRzb7AJiIB1C0HM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDiU0X_fp5PEDTup6srKUdzc0Q7k8O6EktcMOPgSsTCfNj-5bHSTrsLSkSc1-j2Qyd6WoNQRBwFyuQAkZxrbZCddNYwZK0o3xuzPGV_LlqPrb-6gpalMPU1ZAbj7D-njXsfFdrXSVqBU9xAzEry6vT0DX0DQq8Uky12S78nltzYLDQ9dDFE1Vu4t1VGtiY0WuEEVRrlXi04sYqNmx07CYLDmxDfIJNJd-1cmRGpe1it0YPRaNudeGbaTrI5z0UZCmnIhXA5vrXbV2w",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDwUQnrBa-Gzl8rZkTMoK3GEvV3WLgmdVTCAaWnKxNg-GrKLVe13znnyHmMYApSRSizQfp_CtX-WaS1j-Cn-JgO5VYNOsDesZr30DLogPoF7ZA9qqNLC4aiokO9UtJDsTouKlUT6mm4PeEkaDMKpTxqNvG6riTnejFISGXs9x67L-LIwn4bu-Y7MSQo6fIUAuaXd1q6YwBxVq2bDSBNeSQn6iMiXpe7Am-_jogkNwlEBFnLGFLua3KLc1OBxXnzF__ghFfUWMxot9E",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAYnRkL2nTy5EAHQfGTRyWlww_OeGdDRVRGn8z-WuViVZmJxLuhdgHhEr5q1ukkJEusHd7y0Wge_9e72CUiNiX-5syspaLdPezAKko0d0OCUfdLyH6JagspJ7qzTFDkO0j9mY5v_6n96EZ9qbGELHfB3oLzCJQ-nwHjs8_UqG-Vigv7lzeCKjnX10Op4ctFOCO6BKQQ9GCskeEGGadu-ZVcWAL2oM0YtHfno4HtY0i1hiURLTosv5prplzsO0wW0kr64ALcRdfC9pY",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCBB-eVnBLZAx7n4bKHMzvZbsrOSlWF3JoiMH8aTOi8LxRlRSQRsCltpb_qIu9iH5FrPAYy383prKyxNGJ7UvLNjlh5R2ywX19kvnQmSKAkup4srLnNJbL46nSBvFS8atevz61t8mxXYYSQrw8urnZ1uaJkXtMzHoFpwbNZReuFDOJO4voWO-i5ZNts_VO73E-6ugrfwjS2AiztPYHiSRSUyM8x5Xiv5_GD5Uio-1_Imuit-xoU02WTTdR52P_rqdyijySrh9mfkNQ",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBxd-KrL7JcNOSLxqiEUD-suw44oB2KMcsD9Omj1K7HwQWYXEK8MaynHx9HrHa01lLGMWzgo2ayk0jUUrV80OguT8R0kOLFwi6qYIZf7zZQAYXGro2wH9ByCMo6PgxSPDS3HywIHS78jH4g3ymeFMVu7ZEXUszjAmKiRVcD_qpQceJDBD4gDUmNeeZaBJbpEbqtGgbW6nK49LfxP6oQZqIbDCQEAC7qAuoJ99BCw3S2bGYnKXII5mCf8AVuP06QQMBLN9_KJqEknrQ",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBMXvB0Bsv7-rcOfkzSaQ8qV7tu5xM8KhMgCJ9esSdWXWqL0UwawBLWMYWKRnzJclJJYLYOtedPNXHvcWO1Emu_x2JwhDRii-0hhbPM2EbnTyVz-E1YQ8KGN4Ag-leKkjbS4zmUOC3pbpB9LVd8Q6z-3PVKugt9dqq_LDgzlO2G2Hwue8CNv0dHRI47ro80gq22ZxgVSJDRHP3zpQitdJ_3x08-3v2fKLwtyH1pjGfPkYkNxcDoqbkjBEUpPZnOk1DwdvHzxJjuhT0",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCUwIrjR__QywxQIKbmWlTj8e_17FWiiGCwDJeQ7ab-hbqM6dwvkAF8pSPmFr5XELyEgmO9Gb5P44mBQakFjQvmzK509CLW0-gE1JGIvUD52oCq-LPB2UJt5Cq2sJDlokVTHzfcHklciEyRhrr56GpMhRtlpTjYiw9nVgCvvaFGjh6evE_cat0CEQCYZ5PzhAzaU7QE8nfn6hGQsYS5WD2vteUXba06ghGXQ4w-iF1EVqP_CpKJ9xcSF6oC19Hw7-xUS0q1i-I8FNc"
          ].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-sm relative">
              {/* Added aspect ratios for masonry effect using arbitrary aspect ratios to simulate image loading sizes */}
              <div className={`relative w-full ${i % 3 === 0 ? 'aspect-[3/4]' : i % 2 === 0 ? 'aspect-square' : 'aspect-[4/5]'}`}>
                 <Image fill className="w-full h-full object-cover" alt={`Customer styled ${i}`} src={src} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

