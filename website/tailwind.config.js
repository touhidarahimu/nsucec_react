/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Ensure JSX/TSX files are included
    ],
    theme: {
      extend: {
        fontFamily: {
          bebas: ['"Bebas Neue"', 'cursive'], // Add custom font name
        },
      },
    },
    plugins: [],
  };
  