"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import { Product, formatPrice, getDiscount } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const discount = getDiscount(product.price, product.originalPrice);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      subtitle: product.subtitle,
      price: product.price,
      image: product.images[0],
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
    openCart();
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="product-card relative">

        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Badge */}
          {product.badge && (
            <span className="badge badge-gold">{product.badge}</span>
          )}

          {/* Discount */}
          {discount && (
            <span className="absolute top-12 left-3 badge badge-rose" style={{ position: "absolute", top: product.badge ? "46px" : "12px", left: "12px" }}>
              -{discount}% OFF
            </span>
          )}

          {/* Wishlist */}
          <motion.button
            onClick={(e) => { e.preventDefault(); setWishlisted(w => !w); }}
            whileTap={{ scale: 0.85 }}
            className="wishlist-btn"
            aria-label="Add to wishlist"
          >
            <Heart
              size={16}
              fill={wishlisted ? "#BE185D" : "none"}
              stroke={wishlisted ? "#BE185D" : "#7A5C44"}
            />
          </motion.button>

          {/* Quick Add — appears on hover */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.97 }}
              className="w-full btn-primary py-2.5 text-sm"
              style={{ borderRadius: "12px" }}
            >
              {addedToCart ? (
                <span>✓ Added!</span>
              ) : (
                <>
                  <ShoppingBag size={14} />
                  Add to Cart
                </>
              )}
            </motion.button>
          </motion.div>
        </div>

        {/* Info */}
        <div className="p-4 space-y-2">
          {/* Category chip */}
          <span className="chip chip-primary text-[10px]">{product.category}</span>

          <h3 className="font-body font-semibold text-sm leading-snug"
            style={{ color: "var(--color-on-surface)" }}>
            {product.name}
          </h3>

          <p className="font-body text-xs" style={{ color: "var(--color-on-surface-muted)" }}>
            {product.material}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  fill={i < Math.floor(product.rating) ? "#D97706" : "none"}
                  className={i < Math.floor(product.rating) ? "star-filled" : "star-empty"}
                />
              ))}
            </div>
            <span className="font-body text-xs" style={{ color: "var(--color-on-surface-muted)" }}>
              ({product.reviewCount})
            </span>
          </div>

          {/* Price in ₹ */}
          <div className="flex items-center gap-2 pt-1">
            <span className="font-display font-bold text-base" style={{ color: "var(--color-primary)" }}>
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="font-body text-xs line-through" style={{ color: "var(--color-on-surface-muted)" }}>
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
