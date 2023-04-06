/* eslint-disable import/no-extraneous-dependencies */
// @ts-nocheck
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

// Rotate X utilities
const rotateX = plugin(({ addUtilities }) => {
  addUtilities({
    '.rotate-x-0': {
      transform: 'rotateX(0deg)',
    },
    '.rotate-x-20': {
      transform: 'rotateX(20deg)',
    },
    '.rotate-x-45': {
      transform: 'rotateX(45deg)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
    '.-rotate-x-90': {
      transform: 'rotateX(-90deg)',
    },
    '.rotate-y-0': {
      transform: 'rotateY(0deg)',
    },
    '.rotate-y-45': {
      transform: 'rotateY(45deg)',
    },
    '.rotate-y-90': {
      transform: 'rotateY(90deg)',
    },
    '.transform-style': {
      'transform-style': 'preserve-3d',
    },

  });
});

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        wavePhone: '543px',
        sp: '375px',
        mp: '390px',
        bp: '430px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      borderRadius: {
        wave: '50% 50%',
      },
      colors: {
        headingColor: '#2e2e2e',
        textColor: '#515151',
        cartNumBg: '#e80013',
        primary: '#f5f3f3',
        cardOverlay: 'rgba(256,256,256,0.4)',
        lighttextGray: '#9ca0ab',
        card: 'rgba(256,256,256,0.8)',
        cartBg: '#282a2c',
        cartItem: '#2e3033',
        cartTotal: '#343739',
        yellow: '#FFC244',
        green: '#01A082',
        blackGray: '#1D1D1D',
      },
      backgroundImage: {
        'hero-patern': "url('./Assets/Images/banner/bg-banner-1.png')",
        'hero-patern2': "url('./Assets/Images/banner/bg-banner2.png')",
        'hero-patern3': "url('./Assets/Images/banner/bg-banner3.png')",
        'hero-patern4': "url('./Assets/Images/banner/bg-banner4.png')",
        'contact-bg': "url('./Assets/Images/contact/contact-bg.png')",
        wave: "url('./Assets/Images/wave2.svg')",
        contact50: "url('./Assets/Images/contact/contact50.png')",
        galery1: "url('./Assets/Images/galery/gal1.jpeg')",
        galery2: "url('./Assets/Images/galery/gal2.jpeg')",
        galery3: "url('./Assets/Images/galery/gal3.jpeg')",
        galery4: "url('./Assets/Images/galery/gal4.jpeg')",
        galery5: "url('./Assets/Images/galery/gal5.jpeg')",
        galery6: "url('./Assets/Images/galery/gal6.jpeg')",
        galery7: "url('./Assets/Images/galery/gal7.jpeg')",
        galery8: "url('./Assets/Images/galery/gal8.jpeg')",
        'yellow-gradient': 'linear-gradient(to right, #f7971e, #ffd200)',
        'yellow-orange-gradient': 'linear-gradient(to right, #ffb347, #ffcc33)',
      },
      keyframes: {
        bgAnimation: {
          '0%': {
            'background-position': 'left',
          },
          '50%': {
            'background-position': 'right',
          },
          '100%': {
            'background-position': 'left',
          },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            top: '-50px',
          },

          to: {
            opacity: '1',
            top: '0',
          },
        },
        upwards: {
          from: {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        downwards: {
          from: {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        bgAnimation: 'bgAnimation 5s linear infinite',
        fadeInUp: 'fadeInUp .2s linear',
        upwards: 'upwards 1s forwards',
        downwards: 'downwards 1s forwards',
      },
    },
  },
  mode: 'jit',
  plugins: [rotateX],
};
