import { Grid, VStack, Heading, Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Logo } from '../../Logo';
import Counter from './components/donation/Counter';
import Leaderboard from './components/leaderboard';
import { gql, useQuery, useSubscription } from '@apollo/client';
import Donation from './components/donation';

interface IndexProps { }

const TotalDonationsQuery = gql`
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

const Dashboard: React.FC<IndexProps> = (props) => {
  const [totalDonations, setTotalDonations] = useState(0);
  const { data: queryData, loading: queryLoading, error: queryError } = useQuery(TotalDonationsQuery);
  const { data: updateData, loading: UpdateLoading, error: updateError } = useSubscription(TotalUpdatedDonationsSubscription);

  useEffect(() => {
    if (queryData?.totalDonations) {
      setTotalDonations(queryData.totalDonations);
    }
  }, [queryData]);

  useEffect(() => {
    if (updateData?.totalUpdated) {
      setTotalDonations(updateData.totalUpdated.total);
    }
  }, [updateData]);


  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bg="gray.50" backgroundColor="#b0c4b1">
        <VStack spacing={8}>
          <VStack p={5} width="60%">
            <Logo h="32" pointerEvents="none" />
            <Heading backgroundColor="#c5c5c55e" p={5} borderRadius="lg" as="h1" size="xl">
              Welcome here
            </Heading>
            <Text>Here you can donate</Text>
            <Donation />
          </VStack>
          <Text>total amount of donations</Text>
          <Heading as="h2" size="4xl">
            <Counter from={0} to={totalDonations} />
          </Heading>
          <Leaderboard />
        </VStack>
      </Grid>
    </Box>
  );
};

export default Dashboard;
