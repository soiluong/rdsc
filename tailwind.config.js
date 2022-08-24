/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      borderWidth: {
        3: '3px',
        5: '5px'
      },
      height: {
        0.75: '0.1875rem',
        19: '4.75rem'
      },
      maxWidth: {
        '6.5xl': '76rem',
        '8xl': '90rem'
      },
      padding: {
        18: '4.5rem'
      }
    },
    colors: {
      green: 'var(--color-green)',
      yellow: 'var(--color-yellow)',
      red: 'var(--color-red)',
      purple: 'var(--color-purple)',
      blue: 'var(--color-blue)',
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      grey: 'var(--color-grey)',
      orange: 'var(--color-orange)',
      p2: 'var(--color-p2)'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      futura: ['Futura', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
