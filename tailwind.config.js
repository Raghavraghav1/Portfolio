/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: '#07070d',
        purple: { DEFAULT: '#a855f7', light: '#c084fc' },
        pink: '#ec4899',
        orange: '#f97316',
      },
      backgroundImage: {
        'grad-brand': 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)',
      },
      backdropBlur: { glass: '16px' },
      animation: {
        'float-a': 'floatA 4s ease-in-out infinite',
        'float-b': 'floatB 5s ease-in-out infinite',
        'float-c': 'floatC 3.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        floatA: { '0%,100%': { transform: 'translateY(0) rotate(-2deg)' }, '50%': { transform: 'translateY(-12px) rotate(2deg)' } },
        floatB: { '0%,100%': { transform: 'translateY(0) rotate(1deg)' }, '50%': { transform: 'translateY(-18px) rotate(-3deg)' } },
        floatC: { '0%,100%': { transform: 'translateY(0) rotate(-1deg)' }, '50%': { transform: 'translateY(-8px) rotate(3deg)' } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 20px rgba(168,85,247,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(168,85,247,0.6), 0 0 60px rgba(236,72,153,0.2)' } },
      },
    },
  },
  plugins: [],
}