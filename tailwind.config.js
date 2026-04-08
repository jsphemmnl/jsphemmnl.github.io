/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-color)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        border: 'var(--border)',
        'glass-bg': 'var(--glass-bg)',
        'glass-bg-hover': 'var(--glass-bg-hover)',
        'glass-border': 'var(--glass-border)',
        'glass-border-hover': 'var(--glass-border-hover)',
        'glass-glow': 'var(--glass-glow)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 var(--glass-shadow), inset 0 1px 0 0 var(--glass-inset)',
        'glass-hover': '0 15px 40px 0 var(--glass-shadow-hover), 0 0 20px var(--glass-glow), inset 0 1px 0 0 var(--glass-inset-hover)',
      },
      animation: {
        'liquid-mesh': 'liquidMesh 20s ease-in-out infinite alternate',
      },
      keyframes: {
        liquidMesh: {
          '0%': { transform: 'rotate(0deg) scale(1.1)', filter: 'hue-rotate(0deg)' },
          '50%': { transform: 'rotate(15deg) scale(1)', filter: 'hue-rotate(180deg)' },
          '100%': { transform: 'rotate(-10deg) scale(1.15)', filter: 'hue-rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
