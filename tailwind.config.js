// tailwind.config.js
export default {
  darkMode: "class",   // ✅ allow dark/light toggle using "class"
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        blob: "blob 10s infinite",
      },
      backgroundImage: {
        "skills-gradient":
          "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",

        // ✅ You can add light/dark variants for gradients if needed
        "light-grid":
          "linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)",
        "dark-grid":
          "linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)",
      },
    },
  },
  plugins: [],
};
