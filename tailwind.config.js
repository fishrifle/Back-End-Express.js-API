/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#111111",   // page bg
        surface: "#1A1A1A",      // cards / header
        primary: "#2563EB",      // neon blue button
        primaryHover: "#1E40AF",
        text: "#F3F4F6",         // main text
        muted: "#9CA3AF",        // secondary text
      },
      borderRadius: {
        xl: "12px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.40)",
      },
    },
  },
  plugins: [],
};
