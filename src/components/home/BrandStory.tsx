"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "100%", label: "Sustainable Materials" },
  { value: "Zero", label: "Industrial Waste" },
  { value: "12", label: "Master Craftsmen" },
];

export default function BrandStory() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-surface-low overflow-hidden">
      <div className="container-artisan">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-card-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=800&h=700&fit=crop"
                alt="Artisan workshop with natural light"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-8 right-8 bg-primary text-white px-6 py-5 rounded-card shadow-xl"
            >
              <p className="font-display text-3xl font-bold">12</p>
              <p className="font-body text-xs text-white/80 mt-1 uppercase tracking-wider">
                Master Craftsmen
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="font-display text-xs font-bold tracking-[0.15em] uppercase text-primary mb-4">
                Our Story
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-on-surface leading-[1.1]">
                Born From Clay,
                <br />
                Shaped By Time.
              </h2>
            </div>

            <p className="font-body text-lg text-on-surface-muted leading-relaxed">
              We believe that the objects we surround ourselves with carry energy. That&apos;s why
              every Artisan piece is created with intention, using traditional techniques that have
              been passed down through generations.
            </p>

            <p className="font-body text-base text-on-surface-muted leading-relaxed">
              Our journey began in a small seaside studio with a single wheel and a passion for
              slow living. Today, we collaborate with a collection of masters to bring soulful
              utility to modern homes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-outline-subtle">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="font-body text-xs text-on-surface-muted mt-1 leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
