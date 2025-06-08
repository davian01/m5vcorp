/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#1c1b1a',
        'off-white': '#fafaf5',
        'accent-blue': '#008db7',
      },
      fontSize: {
        'h1': ['clamp(3rem, 6vw, 4rem)', { lineHeight: '1.05', fontWeight: '700' }],
        'h2': ['clamp(2.25rem, 4vw, 2.75rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h3': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', fontWeight: '500' }],
        'body': ['clamp(1.125rem, 2vw, 1.25rem)', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.4', fontWeight: '400' }],
      },
      fontFamily: {
        'calibre': ['Calibre Web', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up-on-view': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up-on-view': 'fade-in-up-on-view 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}

export default config 