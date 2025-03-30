/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Asegura que Tailwind escanee los archivos JSX/TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
