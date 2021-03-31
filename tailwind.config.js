module.exports = {
  purge: [],
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
        "25/48": "52.083333%",
        "47/50": "94%",

        
      },
      backgroundImage: theme => ({
        'wood-pattern': "url('/src/images/retina_wood.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
