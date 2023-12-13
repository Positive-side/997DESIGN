/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // ✅ tailwind css 커스텀
    extend: {
      width: {
        500: '550px',
        '22%': '22%',
      },
      height: {
        500: '500px',
        700: '700px',
        800: '800px',
      },
      minHeight: {
        170: '170px',
        500: '500px',
        800: '800px',
      },
      maxHeight: {
        500: '500px',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
