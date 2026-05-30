/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'bg-page': 'var(--bg-page)',
        'surface': 'var(--bg-surface)',
        'bg-surface-2': 'var(--bg-surface-2)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'border': 'var(--border)',
        'accent': 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
      },
    },
  },
  plugins: [],
}
