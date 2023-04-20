/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        one: '0px 0px 100px rgba(0, 0, 0, 0.02)',
        two: '0 0 10px 1200px rgb(0 0 0 / 70%)',
      },
    },
  },
  plugins: [],
};
