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
import Counter from "./donations/Counter";
import { gql, useQuery, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";

const theme = extendTheme({
  fonts: { heading: "Montserrat", body: "Montserrat" },
});

const TotalDonationsSubscription = gql`
  query TotalDonations {
    totalDonations
}

`;

const TotalUpdatedDonationsSubscription = gql`
  subscription TotalUpdated {
    totalUpdated {
      total
    }
  }
`;

export const App = () => {
  const [totalDonations, setTotalDonations] = useState(0);
  const { data: queryData, loading: queryLoading, error: queryError } = useQuery(TotalDonationsSubscription);
  const { data: updateData, loading: UpdateLoading, error: updateError } = useSubscription(TotalUpdatedDonationsSubscription);

  useEffect(() => {
    if (queryData?.totalDonations) {
      console.log(queryData)
      setTotalDonations(queryData.totalDonations);
    }
  }, [queryData]);

  useEffect(() => {
    if (updateData?.totalUpdated) {
      setTotalDonations(updateData.totalUpdated.total);
    }
  }, [updateData]);

  return (
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
              <Counter from={0} to={totalDonations} />
            </Heading>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
};
