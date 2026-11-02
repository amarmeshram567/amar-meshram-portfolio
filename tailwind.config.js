/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#050505',
          800: '#080808',
          700: '#0D0D0F',
        },
        amber: { DEFAULT: '#F5C067' },
        cobalt: { DEFAULT: '#6EA8FE' },
        bone: '#F5F5F5',
        mute: '#8E8E93',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Sora', 'system-ui', 'sans-serif'],
        serif: ['"DM Serif Display"', '"Bodoni Moda"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
    },
  },
  plugins: [],
};
