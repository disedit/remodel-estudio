/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'storyblok/**/**.vue'
  ],
  theme: {
    colors: {
      'rose': {
        light: '#fbecf1',
        DEFAULT: '#ef827f'
      },
      'gray': {
        300: '#757575',
        500: '#606060',
        700: '#595959'
      },
      'white': '#fff',
      'black': '#282828',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}

