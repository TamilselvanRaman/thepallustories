"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, itemCount, subtotal, isOpen, closeCart, updateQuantity, removeItem } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-on-surface/30 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-stone-100 bg-stone-50/50">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-[#8d4b00]" />
                <span className="font-display text-lg font-bold text-[#3E2C1C]">
                  Your Collection
                </span>
                {itemCount > 0 && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#f5e0c8] text-[#8d4b00]">
                    {itemCount}
                  </span>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeCart}
                className="text-stone-400 hover:text-stone-700 transition-all"
              >
                <X size={22} />
              </motion.button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4 scrollbar-thin scrollbar-thumb-stone-200">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-stone-300 animate-pulse" />
                  <p className="font-display text-lg text-stone-600 font-semibold">
                    Your collection is empty
                  </p>
                  <p className="text-xs text-stone-400 max-w-xs font-body leading-relaxed">
                    Ethereal Korean jewelry & aesthetic accessories — awaiting your personal touch.
                  </p>
                  <button
                    onClick={closeCart}
                    className="mt-2 px-6 py-2.5 border border-stone-200 text-[#8d4b00] rounded-full font-display text-xs font-bold hover:bg-[#fdf8f2] transition-colors"
                  >
                    Browse Collections
                  </button>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      className="flex gap-4 p-3 bg-stone-50/70 border border-stone-100 hover:bg-stone-50 hover:shadow-sm rounded-2xl transition-all duration-200"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-stone-200 flex-shrink-0 shadow-sm">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h4 className="font-display text-sm font-bold text-stone-850 leading-snug">
                              {item.name}
                            </h4>
                            <p className="text-[11px] text-[#8d4b00] font-medium tracking-wide font-body mt-0.5">
                              {item.subtitle}
                            </p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1, color: '#b91c1c' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeItem(item.id)}
                            className="text-stone-400 hover:text-red-650 transition-colors flex-shrink-0 p-1"
                          >
                            <X size={15} />
                          </motion.button>
                        </div>
                        <div className="flex items-end justify-between mt-2">
                          <div className="flex items-center gap-2.5 bg-white border border-stone-250 rounded-full px-2.5 py-1 shadow-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-stone-400 hover:text-[#8d4b00] p-0.5 transition-colors"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="font-display text-xs font-bold w-4 text-center text-stone-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-stone-400 hover:text-[#8d4b00] p-0.5 transition-colors"
                            >
                              <Plus size={11} />
                            </button>
                          </div>
                          <span className="font-display text-sm font-bold text-[#8d4b00]">
                            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-8 py-6 border-t border-stone-100 bg-stone-50/30 space-y-4">
                {/* Free Shipping Tracker */}
                <div className="bg-[#fdf8f2] border border-[#f5ece0] p-3.5 rounded-2xl space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-semibold text-[#5e3d2b]">
                    <span className="flex items-center gap-1.5">
                      {subtotal >= 499 ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Congrats! You've unlocked Free Shipping 🎉
                        </>
                      ) : (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          Add <span className="font-bold text-[#8d4b00]">₹{(499 - subtotal).toLocaleString("en-IN")}</span> more for Free Shipping
                        </>
                      )}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${subtotal >= 499 ? 'bg-emerald-500' : 'bg-[#8d4b00]'}`}
                      style={{ width: `${Math.min((subtotal / 499) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="font-medium text-stone-500 text-sm">Subtotal</span>
                  <span className="font-display text-xl font-extrabold text-[#3E2C1C]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 text-center font-body">
                  Taxes and shipping calculated at checkout
                </p>
                <div className="space-y-2 pt-1">
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="flex items-center justify-center gap-2 w-full py-4 text-white font-display font-bold text-sm tracking-wider uppercase rounded-full transition-all duration-300 hover:scale-[1.02] shadow-md cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #8d4b00 0%, #a05c10 100%)",
                      boxShadow: "0 6px 20px rgba(141,75,0,0.25)"
                    }}
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={16} />
                  </Link>
                  <button
                    onClick={closeCart}
                    className="w-full py-3.5 border border-stone-200 text-stone-700 font-display font-semibold text-sm rounded-full hover:border-[#8d4b00] hover:text-[#8d4b00] transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
