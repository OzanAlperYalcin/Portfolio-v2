/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          'brand': "url('http://alperyalcin.com.tr/images/alper.png')",
        }
    },
  },
  plugins: [],
}
