import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/globalStyles";
import LightTheme from "../assets/theme";
import "leaflet/dist/leaflet.css";
import { MonumentsProvider } from "../contexts/Monuments";
import React from "react";
import { MapProvider } from "../contexts/MapContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <MonumentsProvider>
          <MapProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </MapProvider>
        </MonumentsProvider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
