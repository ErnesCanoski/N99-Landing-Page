/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', "sans-serif"],
        raj: ["Rajdhani", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#070b12",
          card: "#0c1422",
          card2: "#090e1a",
        },
        brand: {
          blue: "#1a6ef5",
          cyan: "#00c8ff",
        },
        ink: {
          DEFAULT: "#e4eaf6",
          muted: "#6a83aa",
        },
      },
      borderColor: {
        border: "rgba(26,110,245,0.18)",
        "border-hi": "rgba(0,200,255,0.35)",
      },
      boxShadow: {
        glow: "0 0 28px rgba(0,200,255,0.25)",
        "glow-blue": "0 0 24px rgba(26,110,245,0.3)",
        panel: "0 18px 50px rgba(0,0,0,0.5), 0 0 24px rgba(26,110,245,0.3)",
      },
      keyframes: {
        pulse2: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0.25 } },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(22px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        scrollLine: {
          "0%": { opacity: 1, transform: "scaleY(1) translateY(0)" },
          "100%": { opacity: 0, transform: "scaleY(0) translateY(10px)", transformOrigin: "top" },
        },
        bob: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        pulse2: "pulse2 2s infinite",
        fadeUp: "fadeUp 0.7s ease both",
        "fadeUp-1": "fadeUp 0.7s 0.1s ease both",
        "fadeUp-2": "fadeUp 0.7s 0.2s ease both",
        "fadeUp-3": "fadeUp 0.7s 0.3s ease both",
        "fadeUp-4": "fadeUp 0.7s 0.35s ease both",
        "fadeUp-5": "fadeUp 0.7s 0.45s ease both",
        "fadeUp-6": "fadeUp 0.7s 0.5s ease both",
        scrollLine: "scrollLine 2s ease infinite",
        bob: "bob 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
