/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent:"#179957",
        accentDark:"'#1A202C",
      },
      container:{
        center:true,
        padding:"15px",
      },
    },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         accentDark: '#1A202C', // Replace with your desired color
//         accent: '#2D3748', // Replace with your desired color
//         accentLight: '#4A5568', // Replace with your desired color
//       },
//     },
//   },
// };
