"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Earthen Vessel is more than just a bowl; it's a centerpiece of my daily morning ritual. You can feel the fingerprints of the maker in the clay.",
    author: "Kiera R.",
    title: "Interior Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
    rating: 5,
  },
  {
    quote:
      "I've replaced all my mass-produced dinnerware with Artisan pieces. There is a weight and a quality to these objects that brings so much joy to our table.",
    author: "Julien M.",
    title: "Chef",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop",
    rating: 5,
  },
  {
    quote:
      "The customer service alone is the products that come into this experience. Each purchase feels like a collaboration with the maker.",
    author: "Sophie B.",
    title: "Ceramics Collector",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-surface">
      <div className="container-artisan">
        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={18} className="text-primary fill-primary" />
            ))}
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-on-surface text-center">
            Echoes of Gratitude
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="artisan-card p-8 flex flex-col gap-6"
              >
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <blockquote className="font-body text-base text-on-surface-muted leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-outline-subtle">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-outline-subtle">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-on-surface">{t.author}</p>
                    <p className="font-body text-xs text-on-surface-muted">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
