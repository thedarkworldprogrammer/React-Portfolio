/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        colorCycle: {
          '0%, 100%': { color: '#ff0000' }, // Red
          '25%': { color: '#00ff00' }, // Green
          '50%': { color: '#0000ff' }, // Blue
          '75%': { color: '#ff00ff' }, // Magenta
        },
      },
      animation: {
        colorCycle: 'colorCycle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
