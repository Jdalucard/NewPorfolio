/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      boxShadow: {
        'theme-md': '0 4px 6px -1px var(--color-shadow), 0 2px 4px -2px var(--color-shadow)',
        'theme-lg': '0 10px 15px -3px var(--color-shadow), 0 4px 6px -4px var(--color-shadow)',
      },
    },
    
  },
  plugins: [],
};
