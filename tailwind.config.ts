import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ink-brown": "#3E2C1C",
        "tertiary-container": "#926d43",
        "primary-container": "#b15f00",
        "on-surface-variant": "#554336",
        "inverse-surface": "#33302b",
        "primary-fixed-dim": "#ffb77d",
        outline: "#887364",
        "secondary-container": "#f1dfd9",
        "on-background": "#1e1b17",
        "inverse-primary": "#ffb77d",
        "inverse-on-surface": "#f7f0e8",
        "surface-container-high": "#eee7df",
        "on-primary": "#ffffff",
        "surface-container-highest": "#e8e1da",
        "on-tertiary-container": "#fffbff",
        "on-secondary-fixed-variant": "#504440",
        "surface-bright": "#fff8f1",
        "on-primary-fixed-variant": "#6e3900",
        "surface-container-low": "#f9f3eb",
        "tertiary-fixed": "#ffddb9",
        "on-secondary-container": "#6f625d",
        "on-primary-fixed": "#2f1500",
        "on-surface": "#1e1b17",
        "surface-container": "#f4ede5",
        background: "#fff8f1",
        "surface-tint": "#904d00",
        tertiary: "#77552d",
        "outline-variant": "#dbc2b0",
        "warm-beige": "#EED9C4",
        "on-secondary-fixed": "#231a16",
        error: "#ba1a1a",
        primary: "#8d4b00",
        "tertiary-fixed-dim": "#ecbe8d",
        "on-error-container": "#93000a",
        "error-container": "#ffdad6",
        "secondary-fixed-dim": "#d4c3bd",
        "on-tertiary": "#ffffff",
        surface: "#fff8f1",
        "glass-white": "rgba(255, 255, 255, 0.4)",
        "secondary-fixed": "#f1dfd9",
        "on-secondary": "#ffffff",
        "surface-variant": "#e8e1da",
        "surface-dim": "#dfd9d1",
        "surface-container-lowest": "#ffffff",
        secondary: "#685c57",
        "primary-fixed": "#ffdcc3",
        "on-primary-container": "#fffbff",
        "on-tertiary-fixed": "#2b1700",
        "on-tertiary-fixed-variant": "#5f401a",
        "on-error": "#ffffff",
        
        // Legacy colors kept for compatibility
        "primary-hover": "#b15f00",
        "primary-light": "#ffb77d",
        "surface-card": "#ffeadb",
        "on-surface-muted": "#554336",
        "outline-subtle": "#dbc2b0",
      },
      fontFamily: {
        display: ["Hanken Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "display-lg": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "headline-lg": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-lg-mobile": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "display-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }]
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
        card: "16px",
        "card-lg": "24px",
      },
      spacing: {
        "section-gap": "120px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
        base: "8px",
        gutter: "24px",
        section: "128px",
      },
      maxWidth: {
        container: "1440px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(62, 44, 28, 0.05)",
        "card-hover": "0 20px 50px rgba(62, 44, 28, 0.12)",
        glass: "0 4px 24px rgba(62, 44, 28, 0.08)",
      },
      transitionTimingFunction: {
        artisan: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};

export default config;

