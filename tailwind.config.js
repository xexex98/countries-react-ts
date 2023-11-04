/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        elements: { dark: 'hsl(209, 23%, 22%)', light: 'hsl(0, 0%, 100%)' },
        texts: { light: 'hsl(200, 15%, 8%)', dark: 'hsl(0, 0%, 100%)' },
        backgrounds: { light: 'hsl(0, 0%, 98%)', dark: 'hsl(207, 26%, 17%)' },
        inputs: { light: 'hsl(0, 0%, 52%)', dark: 'hsl(0, 0%, 100%)' },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
