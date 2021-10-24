import LightTheme from "./assets/theme";

type CustomTheme = typeof LightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
