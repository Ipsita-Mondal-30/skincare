/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
     
        amber: {
          50: '#FFFBEB',
          200: '#FDE68A',
          600: '#D97706',
        },
        orange: {
          50: '#FFF7ED',
          200: '#FDBA74',
          600: '#C2410C',
        },
        purple: {
          50: '#FAF5FF',
          200: '#E9D5FF',
          600: '#7C3AED',
        },
        green: {
          50: '#ECFDF5',
          200: '#A7F3D0',
          600: '#047857',
        },
        pink: {
          50: '#FCE7F3',
          300: '#F9A8D4',
          400: '#EC4899',
          500: '#DB2777',
        },
        blue: {
          50: '#EFF6FF',
          200: '#BFDBFE',
          400: '#60A5FA',
        },
        yellow: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#F59E0B',
        },
        red: {
          50: '#FEF2F2',
          200: '#FECACA',
          400: '#F87171',
        },
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          600: '#4B5563',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
