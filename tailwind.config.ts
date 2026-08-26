import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#07111F',      // Primary Deep Navy Dark
          cyan: '#20D9FF',      // Secondary Electric Cyan
          accent: '#39E58C',    // Accent Safety Green
          alert: '#FFB547',     // Alert Amber
          danger: '#FF4D4D',    // Critical Alert Red
          light: '#F6F8FA',     // Off-white light background
          surface: '#EEF4F8',   // Soft blue-gray surface
          cardDark: '#0D1B2E',  // Dark Card background
          borderDark: '#1E2D42',// Dark Card border
          mutedDark: '#8A99AD', // Muted text on dark
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
