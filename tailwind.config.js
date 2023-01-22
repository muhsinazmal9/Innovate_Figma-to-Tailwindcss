/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      // fonts part start
      fontFamily: {
        opens: ['Open Sans', 'sans-serif'],
        papri: ['Paprika', 'cursive'],
        naruto: ['Nunito', 'sans-serif'],
        quick: ['Quicksand', 'sans-serif'],
      },
      // fonts part end

      // colors part start
      colors: {
        // menu ===
        'menuBg': '#160C6D',
        'menuText': '#EFF4FA',
        'menuTextHover': '#1BBF00',
        'buttonText': '#FFFFFF',
        'buttonTextHover': '#F9F9F9',
        'buttonBg': '#1BBF00',
        // home section ===
        'homeOverlay': '#6B62C5',
        'homeHeroText': '#FAFAFE',
        'homePara': '#E6E5F3',
        //gallary section ===
        'gallaryBg': '#F9F9FB',
        'gallaryItemBg': '#C4C4C4',
        // whyChoose section
        'whyChooseBg': '#FDFDFD',
        'whyChooseH3': '#141135',
        'whyChooseP': '#726E9E',
        // whatWeDo
        'whatWeDoBg': '#F6F5FF',
        // footer
        'footerBg': '#48409C',
      },
      // colors part end

      // container part start
      maxWidth: {
        // navmenu container
        'container': '1170px',
        // home banner container
        'homeContainer': '962px',
        
      },
      // container part end

      // BG part start
      backgroundImage: {
        // home banner Background
        'homeBg': "url('./src/images/homeBg.jpg')",
      },
    },
  },
  plugins: [],
}
