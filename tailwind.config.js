/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-06 21:40:37
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-07 18:12:55
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Cedarville:"Cedarville Cursive"
    },
    extend: {},
    
  },
  plugins: [],
}