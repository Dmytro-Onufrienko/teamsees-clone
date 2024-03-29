import { Box, Heading, Radio, RadioGroup, Stack, VStack } from "@chakra-ui/react";
import { FC } from "react";
import LeaderboardItem from "./LeaderboardItem";
import { useQuery } from "@apollo/client";
import { IDonation } from "../../../../types";
import { TotalDonationsQuery } from "../../gql/queries";

interface ILeaderboardProps { }

const Leaderboard: FC<ILeaderboardProps> = ({ }) => {
  const { data, loading, error } = useQuery<{donations: IDonation[]}>(TotalDonationsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" bg="#dfcabb0f">
      <>
        <Heading>
          LEADERBOARD
        </Heading>
        <VStack
          p={5} gap={5} width='100%'
        >
          {data ? data.donations?.map((donation: IDonation) => (
              <LeaderboardItem key={donation.id} donation={donation} />
            )) : ""}
        </VStack>
      </>
    </Box>
  )
}

export default Leaderboard;