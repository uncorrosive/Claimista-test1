/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        bauhaus: {
          red: '#FF4B4B',
          yellow: '#FFD600',
          blue: '#4B4BFF',
          primary: '#FF4B4B',
          secondary: '#4B4BFF',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'shape-rotate': 'shapeRotate 20s linear infinite',
        'shape-float': 'shapeFloat 6s ease-in-out infinite',
      },
      keyframes: {
        shapeRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shapeFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};