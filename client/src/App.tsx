import "@fontsource/montserrat/400.css";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
  extendTheme,
} from "@chakra-ui/react";
import { Logo } from "./Logo";

const theme = extendTheme({
  fonts: { heading: "Montserrat", body: "Montserrat" },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bg="gray.50">
        <VStack spacing={8}>
          <Logo h="32" pointerEvents="none" />
          <Heading as="h1" size="xl">
            Welcome here
          </Heading>
          <Text>Here you can donate</Text>

          <Text>total amount of donations</Text>
          <Heading as="h2" size="4xl">
            1230912434
          </Heading>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
