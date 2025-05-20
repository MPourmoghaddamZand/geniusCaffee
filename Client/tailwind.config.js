/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4E342E',     // قهوه‌ای تیره
        secondary: '#D7CCC8',   // قهوه‌ای روشن / بژ
        accent: '#8D6E63',      // برای دکمه‌ها
        textDark: '#212121',    // متن تیره
        bgWhite: '#FFFFFF',     // پس‌زمینه
      },
    },
  },
  plugins: [],
}

