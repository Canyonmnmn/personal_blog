/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-06 21:40:37
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-07 11:26:37
 */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}