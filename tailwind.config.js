export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#024e4e',
          dark: '#013838',
          light: '#036b6b',
        },
        sand: {
          DEFAULT: '#e0d8cb',
          light: '#f2ede6',
        },
        accent: {
          DEFAULT: '#bb5c18',
          light: '#d47430',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}