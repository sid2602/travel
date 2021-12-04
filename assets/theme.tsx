const fontSizes = {
  headline1: "5.75rem",
  headline2: "3.75rem",
  headline3: "3rem",
  headline4: "2.25rem",
  headline5: "1.5rem",
  headline6: "1.25rem",
  body1: "1rem",
  body2: "0.75rem",
  subtitle1: "1rem",
  subtitle2: "0.875rem",
  button: "0.875rem",
  caption: "0.75rem",
  overline: "0.625rem",
};

const lightColors = {
  background: "#F9F9F9",
  card: "#ffffff",
  shadow: "rgba(0,0,0,0.25)",
  grey: "#747474",
  lightGray: "#f0f0f0",
};

const LightTheme = {
  fontSizes,
  colors: {
    primary: "#ff8e3c",
    error: "#B00020",
    ...lightColors,
  },
};

export default LightTheme;

export type ThemeTypes = typeof LightTheme;
