import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/globalStyles";
import LightTheme from "../assets/theme";
import "leaflet/dist/leaflet.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
