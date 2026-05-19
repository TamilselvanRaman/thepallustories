"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const words = ["Crafted", "For", "Intentional", "Living."];

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;
    const spans = headlineRef.current.querySelectorAll(".word");
    gsap.fromTo(
      spans,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  const imageTiles = [
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      alt: "Artisan ceramic vessel",
      className: "col-span-1 row-span-2 rounded-card-lg",
    },
    {
      src: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
      alt: "Clay pottery process",
      className: "col-span-1 rounded-card",
    },
    {
      src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=280&fit=crop",
      alt: "Handmade ceramic plate",
      className: "col-span-1 rounded-card",
    },
  ];

  return (
    <section className="min-h-screen pt-[72px] bg-surface flex items-center overflow-hidden">
      <div className="container-artisan w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-8">
            <div className="chip chip-primary self-start">The Essential Collection</div>

            <div ref={headlineRef} className="overflow-hidden">
              <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,4rem)] leading-[1.08] tracking-tight text-on-surface">
                {words.map((word, i) => (
                  <span key={i} className="word inline-block mr-[0.3em]" style={{ opacity: 0 }}>
                    {word}
                  </span>
                ))}
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="font-body text-lg text-on-surface-muted leading-relaxed max-w-[480px]"
            >
              Discover a curated ecosystem of handmade goods inspired by the quiet rhythms of
              nature. Every piece is an invitation to slow down, breathe, and appreciate the raw
              beauty of earth-born materials.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/collection"
                className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-display font-bold text-sm tracking-wider uppercase rounded-full hover:bg-primary-hover transition-all duration-300 hover:scale-[1.03] shadow-md"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-on-surface font-display font-semibold text-sm hover:text-primary transition-colors group"
              >
                <span>Meet the Artisans</span>
                <motion.span
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex gap-10 pt-4 border-t border-outline-subtle"
            >
              <div>
                <p className="font-display text-2xl font-bold text-on-surface">10K+</p>
                <p className="font-body text-xs text-on-surface-muted tracking-wide uppercase mt-1">
                  Happy Finds
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-on-surface">100%</p>
                <p className="font-body text-xs text-on-surface-muted tracking-wide uppercase mt-1">
                  Handmade
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-on-surface">12</p>
                <p className="font-body text-xs text-on-surface-muted tracking-wide uppercase mt-1">
                  Master Artisans
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Image Mosaic */}
          <div className="grid grid-cols-2 gap-4 h-[500px] lg:h-[600px]">
            {imageTiles.map((tile, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4 + i * 0.15,
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`relative overflow-hidden ${tile.className} bg-surface-high`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 30vw"
                  priority={i === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
