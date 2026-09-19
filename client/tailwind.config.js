/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          950: "#140d09",
          900: "#1e140d",
          850: "#271b12",
          800: "#322318",
          700: "#443021",
        },
        journal: {
          cream: "#fbf8ef",
          page: "#f6f1e3",
          linen: "#eee8d5",
          aged: "#e5dcbe",
        },
        scrapbook: {
          kraft: {
            100: "#f6ebe0",
            200: "#edd8c4",
            300: "#dfbfa1",
            400: "#cfa37d",
            500: "#b5845c",
            600: "#986745",
            700: "#7b5037",
          },
          parchment: {
            100: "#fcf9ee",
            200: "#f7f1db",
            300: "#eee4be",
            400: "#dfce9b",
            500: "#c8b376",
          },
          sage: {
            100: "#e6eee7",
            200: "#cedfcf",
            300: "#aac8ad",
            400: "#81ab86",
            500: "#608f65",
          },
          terracotta: {
            100: "#f5e8e3",
            200: "#ecd3c9",
            300: "#deb5a6",
            400: "#cc8f7c",
            500: "#b86e58",
          },
          blueprint: {
            100: "#e1eef2",
            200: "#c6dbe3",
            300: "#9ebfcd",
            400: "#709cb0",
            500: "#507e93",
          },
          espresso: {
            100: "#f3ede9",
            200: "#e4d8d1",
            300: "#cebdb2",
            400: "#ad9587",
            500: "#8a6f60",
            600: "#6e5447",
            700: "#554035",
            800: "#3d2d25",
            900: "#271c17",
          }
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"Courier Prime"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'journal': '0 30px 60px -12px rgba(15, 10, 6, 0.45), 0 10px 24px -6px rgba(15, 10, 6, 0.35)',
        'ephemera': '0 10px 25px -4px rgba(35, 20, 10, 0.18), 0 4px 10px -2px rgba(35, 20, 10, 0.12)',
        'ephemera-hover': '0 25px 45px -8px rgba(35, 20, 10, 0.28), 0 10px 20px -4px rgba(35, 20, 10, 0.18)',
      }
    },
  },
  plugins: [],
}
