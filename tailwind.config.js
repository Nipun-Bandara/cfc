const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        header: ["var(--font-space-grotesk)"],
        mono: ["var(--font-dm-mono)"],
      },

      colors: {
        green: {
          50: "oklch(98.2% 0.018 155.826)",
          100: "oklch(96.2% 0.044 156.743)",
          200: "oklch(92.5% 0.084 155.995)",
          300: "oklch(87.1% 0.15 154.449)",
          400: "oklch(79.2% 0.209 151.711)",
          500: "oklch(72.3% 0.219 149.579)",
          600: "oklch(62.7% 0.194 149.214)",
          700: "oklch(52.7% 0.154 150.069)",
          800: "oklch(44.8% 0.119 151.328)",
          900: "oklch(39.3% 0.095 152.535)",
          950: "oklch(26.6% 0.065 152.934)",
        },
        background: "var(--background)",
        backgroundSecondary: "var(--background-secondary)",
        foreground: "var(--foreground)",
        primary: "var(--text-primary)",
        textPrimary: "var(--text-primary)",
        textLoop: "var(--text-loop)",
        hoverPrimary: "var(--hover-primary)",
        borderPrimary: "var(--border-primary)",
        border: "var(--border)",
      },
      keyframes: {
        "slide-in-top": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pathTriangle: {
          "33%": { strokeDashoffset: "74" },
          "66%": { strokeDashoffset: "147" },
          "100%": { strokeDashoffset: "221" },
        },
        dotTriangle: {
          "33%": { transform: "translate(0, 0)" },
          "66%": { transform: "translate(10px, -18px)" },
          "100%": { transform: "translate(-10px, -18px)" },
        },
        pathRect: {
          "25%": { strokeDashoffset: "64" },
          "50%": { strokeDashoffset: "128" },
          "75%": { strokeDashoffset: "192" },
          "100%": { strokeDashoffset: "256" },
        },
        dotRect: {
          "25%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(18px, -18px)" },
          "75%": { transform: "translate(0, -36px)" },
          "100%": { transform: "translate(-18px, -18px)" },
        },
        pathCircle: {
          "25%": { strokeDashoffset: "125" },
          "50%": { strokeDashoffset: "175" },
          "75%": { strokeDashoffset: "225" },
          "100%": { strokeDashoffset: "275" },
        },
      },
      animation: {
        "slide-in-top":
          "slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "dot-rect": "dotRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
        "path-rect": "pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
        "path-triangle": "pathTriangle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
        "dot-triangle": "dotTriangle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
        "path-circle": "pathCircle 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
      },
    },
  },
  plugins: [daisyui],
};

export default config;
