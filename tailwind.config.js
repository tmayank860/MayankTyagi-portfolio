/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'graphql-color': '#E535AB',
      },
    },
    fontFamily : {
      signature : ['Lobster']
    }
  },
  plugins: [],
}

