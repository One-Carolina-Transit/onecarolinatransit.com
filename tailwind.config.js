/** @type {import('tailwindcss').Config} */
// Same theme tokens that were previously inlined in every page's CDN <script>.
module.exports = {
  content: ['./*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: { 900: '#0F2E5C', 700: '#1E4B8F', 500: '#3B6BB0' },
        accent:  { 600: '#2563EB', 500: '#3B82F6', 400: '#60A5FA' }, // 400: labels on navy (4.5:1 contrast; 500 is only 3.6:1)
        success: { 600: '#3E8E5A' },
        neutral: { 50: '#FAF9F7', 100: '#F2F0EC', 300: '#D6D3CC', 600: '#5B5B5B', 900: '#1A1A1A' },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      borderRadius: { sm: '8px', DEFAULT: '12px', lg: '16px', xl: '24px' },
    },
  },
  plugins: [],
};
