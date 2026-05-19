"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Camera } from "lucide-react";

const reelImages = [
  {
    src: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=500&fit=crop",
    alt: "Clay vessel being shaped",
  },
  {
    src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=500&fit=crop",
    alt: "Hands working with pottery",
  },
  {
    src: "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?w=400&h=500&fit=crop",
    alt: "Artisan at work",
  },
  {
    src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=500&fit=crop",
    alt: "Finished ceramic piece",
  },
];

export default function VideoReel() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-surface-low">
      <div className="container-artisan">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-on-surface">
            See The Craft In Motion
          </h2>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-on-surface-muted hover:text-primary transition-colors font-display text-sm"
          >
            <Camera size={16} />
            <span>@artisan.collective</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reelImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-card group cursor-pointer"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/20 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Camera size={20} className="text-on-surface" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
