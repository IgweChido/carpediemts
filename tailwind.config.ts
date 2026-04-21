import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#86A300',
          dark: '#6E8A00',
          soft: '#F1F7D3',
        },
        ink: '#1F2937',
        mist: '#6B7280',
        line: '#E5E7EB',
        canvas: '#FAFBF7',
      },
      boxShadow: {
        panel: '0 16px 40px rgba(15, 23, 42, 0.08)',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(134, 163, 0, 0.12) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
} satisfies Config;
