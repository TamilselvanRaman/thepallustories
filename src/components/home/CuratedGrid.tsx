"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/products";

const featured = products.slice(0, 6);

export default function CuratedGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-surface">
      <div className="container-artisan">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-display text-xs font-bold tracking-[0.15em] uppercase text-primary mb-3">
              Our Pieces
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-on-surface leading-tight">
              Curated Essentials
            </h2>
          </div>
          <Link
            href="/collection"
            className="hidden md:flex items-center gap-2 text-primary font-display text-sm font-semibold hover:gap-3 transition-all"
          >
            View Collection →
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="flex justify-center mt-10 md:hidden">
          <Link
            href="/collection"
            className="px-8 py-3 border border-outline-subtle rounded-full font-display text-sm font-semibold text-on-surface hover:border-primary hover:text-primary transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
