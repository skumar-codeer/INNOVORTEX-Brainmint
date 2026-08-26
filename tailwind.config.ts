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
        space: {
          bg: '#05070D',       // Primary space dark background
          surface: '#080B14',  // Surface dark
          card: '#0B1020',     // Panel dark card
          border: '#182238',   // Border accent line
        },
        deep: {
          white: '#F5F7FF',    // Primary high-contrast text
          slate: '#9DA7BC',    // Secondary slate text
          blue: '#35C8FF',     // Accent Blue
          purple: '#8B5CF6',   // Accent Purple
          cyan: '#22D3EE',     // Accent Cyan
          green: '#39E58C',    // Success Green
          amber: '#FFB547',    // Warning Amber
        },
        brand: {
          dark: '#05070D',
          cyan: '#35C8FF',
          accent: '#39E58C',
          alert: '#FFB547',
          danger: '#FF4D4D',
          light: '#F6F8FA',
          surface: '#EEF4F8',
          cardDark: '#0B1020',
          borderDark: '#182238',
          mutedDark: '#9DA7BC',
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
