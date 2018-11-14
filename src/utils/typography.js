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
  includeNormalize: true
});

export default typography;
