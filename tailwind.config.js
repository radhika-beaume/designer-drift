/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--background)',
        surface: 'var(--surface-light)',
        'chip-border': 'var(--border-chips)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        light: 'var(--text-light)',
        teal: 'var(--accent)',
      },
    },
  },
  plugins: [],
}

