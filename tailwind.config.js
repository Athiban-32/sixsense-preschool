// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#87CEEB',
        'sunny-yellow': '#FFD700',
        'grass-green': '#90EE90',
        'soft-pink': '#FFB6C1',
        'brand-purple': '#9370DB',
        'light-bg': '#F0F8FF',
        'dark-text': '#4F4F4F',
        // NEW COLORS
        'crayon-red': '#FF6347',
        'sky-blue-light': 'rgba(135, 206, 235, 0.1)',
        'grass-green-light': 'rgba(144, 238, 144, 0.1)',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}