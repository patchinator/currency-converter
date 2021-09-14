import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./Nightmode/theme";
import Toggle from "./Nightmode/Toggle";

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <Toggle />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
