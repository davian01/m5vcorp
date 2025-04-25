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
        'h1': ['clamp(2.75rem, 5vw, 3.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['clamp(1.9rem, 4vw, 2.2rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['clamp(1.5rem, 3vw, 1.6rem)', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['clamp(1.1rem, 2vw, 1.25rem)', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['clamp(0.95rem, 1.5vw, 1.05rem)', { lineHeight: '1.4', fontWeight: '400' }],
      },
      fontFamily: {
        'calibre': ['Calibre Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config 