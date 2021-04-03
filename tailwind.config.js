module.exports = {
purge: {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  // These options are passed through directly to PurgeCSS
  options: {
    safelist: ['bg-lakers',"bg-lakers-secondary",
    'bg-blazers',"bg-blazers-secondary",
    'bg-bucks',"bg-bucks-secondary",
    'bg-hawks',"bg-hawks-secondary",
    'bg-rockets',"bg-rockets-secondary",
    'px-4'],
  },
},
  darkMode: false, // or 'media' or 'class'
  theme: {
  
    extend: {
      colors: {
        lakers: {
          DEFAULT: "#FDB927",
          secondary: "#552583"
        },
        blazers: {
          DEFAULT: "#E03A3E",
          secondary: "#000000"
        },
        rockets: {
          DEFAULT: "#CE1141",
          secondary: "#000000"
        },
        bucks: {
          DEFAULT: "#00471B",
          secondary: "#000000"
        },
        hawks: {
          DEFAULT: "#E03A3E",
          secondary: "#26282A"
        },
      },
      padding: {
        '2/3': '66.666667%',
        "921/1024": "89.99414%",
        "732/1023": "71.55435%"

        
      },
      backgroundImage: theme => ({
        'wood-pattern': "url('/src/images/retina_wood.png')",
        "bb-sm": "url('/src/images/bb-sm.jpg')",
        "bb-lg": "url('/src/images/bb-lg.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
