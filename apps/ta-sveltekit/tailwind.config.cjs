module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}', './node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@brainandbones/skeleton/tailwind/theme.cjs')],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Candara'],
        sans: ['Raleway'],
      }
    },
  },
};
