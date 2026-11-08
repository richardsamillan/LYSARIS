/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4EDDC',
        cream2: '#EEE0BC',
        paper: '#FFFDF8',
        honey: '#F5C542',
        honeyDeep: '#C9941F',
        olive: '#5C6B2E',
        rust: '#B8541A',
        ink: '#2B2410',
      },
      boxShadow: {
        petal: '0 24px 48px -20px rgba(43, 36, 16, 0.35)',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        script: ['Yellowtail', 'cursive'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
