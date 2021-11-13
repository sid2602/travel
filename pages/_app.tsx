import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/globalStyles";
import LightTheme from "../assets/theme";
import "leaflet/dist/leaflet.css";
import { MonumentsProvider } from "../contexts/Monuments";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <MonumentsProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </MonumentsProvider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
