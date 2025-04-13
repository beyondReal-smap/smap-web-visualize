/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0046FE',
          700: '#0037CB',
          800: '#002C9E',
          900: '#002272',
        },
        primary: '#0046FE',
      },
      fontFamily: {
        sans: ['SUITE Variable', 'sans-serif'],
        suite: ['SUITE Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 