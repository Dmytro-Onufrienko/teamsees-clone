import "@fontsource/montserrat/400.css";
import {
  ChakraProvider,
  extendTheme,
  ColorModeScript,
} from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import { apoloClient } from "./apolloConfig";
import Dashboard from "./modules/dashboard";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise, options } from "./stripeConfig";

const theme = extendTheme({
  fonts: { heading: "Montserrat", body: "Montserrat" },
});


export const App = () => {
  return (
    <React.StrictMode>
      <ColorModeScript />
      <ApolloProvider client={apoloClient}>
        <ChakraProvider theme={theme}>
          <Elements stripe={stripePromise} options={options}>
            <Dashboard />
          </Elements>
        </ChakraProvider>
      </ApolloProvider>
    </React.StrictMode>
  )
};
