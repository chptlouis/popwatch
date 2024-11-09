import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'panton': ['Panton', 'sans-serif'],
      sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbar: '#212529',
        section: '#495057',
      },
      extend: {
        blackOverlay: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 100)",
      },
    },
  },
  plugins: [],
} satisfies Config;
