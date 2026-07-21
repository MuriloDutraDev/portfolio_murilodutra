/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#080808',
        ink: '#FAFAFA',
        muted: '#A1A1AA',
        line: '#2A2A2E',
        surface: '#0D0D0E',
        panel: '#141416',
        brand: '#D4D4D8',
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: {
        soft: '0 24px 70px -28px rgba(0,0,0,.6)',
        blue: '0 18px 45px -18px rgba(255,255,255,.2)',
      },
    },
  },
  plugins: [],
}
