"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "Our Story" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 ${
        scrolled ? "shadow-glass" : ""
      }`}>
        {/* Announcement Bar */}
        <div className="w-full h-10 overflow-hidden flex items-center bg-[#ffe1b3] text-[#8D4B00] shadow-inner">
          <div className="announcement-scroll whitespace-nowrap flex gap-12 text-[10px] font-semibold uppercase tracking-[0.25em]">
            {[
              "✨ Free Shipping on orders above ₹499 ✨",
              "Daily New Drops: Check out the Soft Girl Collection 🎀",
              "COD Available Pan India 📦",
              "7-Day Easy Returns 🔄",
              "✨ Free Shipping on orders above ₹499 ✨",
              "Daily New Drops: Check out the Soft Girl Collection 🎀",
              "COD Available Pan India 📦",
              "7-Day Easy Returns 🔄",
            ].map((t, i) => (
              <span key={i} className="inline-block">{t}</span>
            ))}
          </div>
        </div>

        {/* Main Header */}
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`w-full transition-all duration-300 ${
            scrolled 
              ? "bg-surface/90 backdrop-blur-md border-b border-primary/10 shadow-sm" 
              : "bg-surface/40 backdrop-blur-sm border-b border-outline-variant/25"
          }`}
          style={{ height: "var(--navbar-height, 72px)" }}
        >
          <div className="container-artisan flex items-center justify-between h-full px-6 md:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.span
              className="font-display text-xl font-bold tracking-[0.15em] text-on-surface uppercase"
              whileHover={{ color: "#8d4b00" }}
              transition={{ duration: 0.2 }}
            >
            The Pallu Stories
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link font-display text-sm font-medium tracking-wide ${
                  pathname === link.href ? "active text-primary" : "text-on-surface-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex text-on-surface-muted hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex text-on-surface-muted hover:text-primary transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative text-on-surface-muted hover:text-primary transition-colors"
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    key={itemCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-white text-xs font-display font-bold rounded-full flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-on-surface-muted hover:text-primary"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.header>
    </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[112px] bottom-0 z-40 glass-nav border-t border-outline-subtle px-6 py-8 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-display text-lg font-medium ${
                    pathname === link.href ? "text-primary" : "text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
