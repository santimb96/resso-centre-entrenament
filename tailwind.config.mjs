/* eslint-disable import/no-anonymous-default-export */
import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        whatsapp: '#22B33B'
      },
      boxShadow: {
        custom: '0 -4px 8px -2px rgba(0, 0, 0, 0.1), 0 8px 12px -2px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marqueeReverse: 'marqueeReverse 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    animations
  ],
}
