"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
  Truck,
  RefreshCw,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

/* ── Inline social icons – filled paths for reliable rendering ───── */
const Instagram = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const Youtube = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const LINKS = {
  shop: [
    { label: "New Arrivals", href: "/collection" },
    { label: "Trending Now", href: "/collection" },
    { label: "Necklaces", href: "/collection" },
    { label: "Earrings", href: "/collection" },
    { label: "Rings", href: "/collection" },
    { label: "Clutches", href: "/collection" },
    { label: "Gift Sets", href: "/collection" },
  ],
  help: [
    { label: "Track My Order", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Returns & Exchange", href: "#" },
    { label: "Size Guide", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  about: [
    { label: "Our Story", href: "/about" },
    { label: "The Pallu Stories", href: "https://www.instagram.com/the.pallu.stories?igsh=OHplNDhuZWcxZjAz" },
    { label: "Sustainability", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const TRUST_BADGES = [
  { icon: Truck, text: "Free Shipping", sub: "Above ₹499" },
  { icon: RefreshCw, text: "Easy Returns", sub: "Within 7 Days" },
  { icon: ShieldCheck, text: "Secure Checkout", sub: "100% Safe" },
  { icon: CreditCard, text: "COD Available", sub: "All India" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "#1a0f08" }}>

      {/* ── Decorative top glow ── */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, #8d4b00 30%, #ffdcc3 50%, #8d4b00 70%, transparent)" }}
      />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8d4b00, transparent)" }} />

      {/* ── Trust Strip ── */}
      <div style={{ borderBottom: "1px solid rgba(141,75,0,0.25)" }}>
        <div className="container-artisan px-6 md:px-16 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_BADGES.map(({ icon: Icon, text, sub }) => (
              <div key={text} className="flex items-center gap-4 group">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(141,75,0,0.15)", border: "1px solid rgba(141,75,0,0.3)" }}
                >
                  <Icon size={18} color="#ffdcc3" />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#fff8f1" }}>{text}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(249,243,235,0.55)" }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="container-artisan px-6 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-7">
            {/* Logo */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2" style={{ color: "#8d4b00" }}>
                The Pallu Stories
              </p>
              <h2 className="font-bold text-4xl leading-none tracking-tight" style={{ fontFamily: "Hanken Grotesk, sans-serif", color: "#fff8f1" }}>
                The Pallu Stories
              </h2>
            </div>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(249,243,235,0.65)" }}>
              Curated jewelry & accessories for the modern Indian woman. Pretty things for soft, aesthetic, everyday luxury.
            </p>

            {/* Social Icons */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(249,243,235,0.4)" }}>Follow Us</p>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://www.instagram.com/the.pallu.stories?igsh=OHplNDhuZWcxZjAz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: "rgba(141,75,0,0.2)", border: "1px solid rgba(141,75,0,0.4)" }}
                  aria-label="Instagram"
                >
                  <Instagram size={16} color="#ffdcc3" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://www.instagram.com/the.pallu.stories?igsh=OHplNDhuZWcxZjAz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: "rgba(141,75,0,0.2)", border: "1px solid rgba(141,75,0,0.4)" }}
                  aria-label="YouTube"
                >
                  <Youtube size={16} color="#ffdcc3" />
                </motion.a>
                {/* Pinterest SVG */}
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: "rgba(141,75,0,0.2)", border: "1px solid rgba(141,75,0,0.4)" }}
                  aria-label="Pinterest"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffdcc3">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2.5">
              <a href="mailto:hello@pallu.store" className="flex items-center gap-3 group" style={{ color: "rgba(249,243,235,0.6)" }}>
                <Mail size={14} color="#8d4b00" />
                <span className="text-sm group-hover:text-[#ffdcc3] transition-colors">hello@pallu.store</span>
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-3 group" style={{ color: "rgba(249,243,235,0.6)" }}>
                <Phone size={14} color="#8d4b00" />
                <span className="text-sm group-hover:text-[#ffdcc3] transition-colors">+91 99999 99999</span>
              </a>
              <div className="flex items-center gap-3" style={{ color: "rgba(249,243,235,0.6)" }}>
                <MapPin size={14} color="#8d4b00" />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="md:col-span-5 grid grid-cols-3 gap-6">
            {/* Shop */}
            <div className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#ffdcc3" }}>Shop</h3>
              <ul className="space-y-3">
                {LINKS.shop.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}
                      className="text-sm transition-all duration-200 hover:translate-x-1 inline-block"
                      style={{ color: "rgba(249,243,235,0.6)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#ffdcc3")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(249,243,235,0.6)")}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#ffdcc3" }}>Help</h3>
              <ul className="space-y-3">
                {LINKS.help.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}
                      className="text-sm transition-all duration-200 hover:translate-x-1 inline-block"
                      style={{ color: "rgba(249,243,235,0.6)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#ffdcc3")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(249,243,235,0.6)")}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#ffdcc3" }}>About</h3>
              <ul className="space-y-3">
                {LINKS.about.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}
                      className="text-sm transition-all duration-200 hover:translate-x-1 inline-block"
                      style={{ color: "rgba(249,243,235,0.6)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#ffdcc3")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(249,243,235,0.6)")}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-1" style={{ color: "#ffdcc3" }}>Stay In The Loop</h3>
              <p className="font-bold text-xl leading-snug" style={{ fontFamily: "Hanken Grotesk, sans-serif", color: "#fff8f1" }}>
                Get early access to drops & exclusive offers ✨
              </p>
            </div>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl p-4 text-center"
                style={{ background: "rgba(141,75,0,0.2)", border: "1px solid rgba(141,75,0,0.4)" }}
              >
                <p className="text-sm font-semibold" style={{ color: "#ffdcc3" }}>
                  You're in! 💖 <br />
                  <span className="font-normal" style={{ color: "rgba(249,243,235,0.7)" }}>We'll send you the good stuff only.</span>
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" color="#8d4b00" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(141,75,0,0.4)",
                      color: "#fff8f1",
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#8d4b00")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(141,75,0,0.4)")}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                  style={{ background: "#8d4b00", color: "#fff8f1" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#b15f00")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#8d4b00")}
                >
                  Subscribe <ArrowRight size={14} />
                </motion.button>
                <p className="text-xs" style={{ color: "rgba(249,243,235,0.4)" }}>
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}

            {/* Instagram CTA */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="https://www.instagram.com/the.pallu.stories?igsh=OHplNDhuZWcxZjAz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl group transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(131,58,180,0.15), rgba(253,29,29,0.1), rgba(252,176,69,0.15))",
                border: "1px solid rgba(141,75,0,0.3)",
              }}
            >
              <Instagram size={20} color="#ffdcc3" />
              <div>
                <p className="text-sm font-semibold" style={{ color: "#fff8f1" }}>@the.pallu.stories</p>
                <p className="text-xs" style={{ color: "rgba(249,243,235,0.5)" }}>Follow for daily inspo ✨</p>
              </div>
              <ArrowRight size={14} color="#8d4b00" className="ml-auto transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div style={{ borderTop: "1px solid rgba(141,75,0,0.2)" }}>
        <div className="container-artisan px-6 md:px-16 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-center md:text-left" style={{ color: "rgba(249,243,235,0.4)" }}>
              © 2025 The Pallu Stories. Made with{" "}
              <Heart size={11} className="inline-block" style={{ color: "#8d4b00" }} fill="#8d4b00" />{" "}
              for every pretty girl.
            </p>

            {/* Intentionally left empty – payment badges removed */}

            {/* Right links */}
            <div className="flex items-center gap-5">
              {["Terms", "Privacy", "Sitemap"].map(l => (
                <Link
                  key={l}
                  href="#"
                  className="text-[11px] uppercase tracking-wider transition-colors duration-200"
                  style={{ color: "rgba(249,243,235,0.4)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#ffdcc3")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(249,243,235,0.4)")}
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
