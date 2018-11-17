import Typography from "typography";

const typography = new Typography({
  baseFontSize: "22px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: [
    {
      name: "Satisfy",
      styles: ["400"]
    },
    {
      name: "Vollkorn",
      styles: ["400", "400i", "700", "700i"]
    }
  ],
  headerFontFamily: ["Satisfy", "cursive"],
  bodyFontFamily: ["Vollkorn", "Arial", "serif"],
  includeNormalize: true,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    "h2, h3, h4, h5": {
      fontFamily: ["Vollkorn", "Arial", "serif"].join(",")
    },
    h1: {
      fontSize: rhythm(2),
      transform: "rotate(-2deg)"
    },
    "h3, h4, h5": {
      marginBottom: rhythm(1 / 2)
    },
    body: {
      color: "#454130"
    }
  })
});

export default typography;
