/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",      // eye-catching red
        secondary: "#FFD93D",    // bright yellow
        accent: "#6BCB77",       // green
        muted: "#4B5563",        // dull gray
        background: "#1F2937",   // dark background
        card: "#374151",         // slightly lighter card bg
        highlight: "#5B21B6",    // purple accent
        textPrimary: "#F3F4F6",  // off-white for text
        textSecondary: "#9CA3AF" // dull gray text
      },
    },
  },
  plugins: [],
};


