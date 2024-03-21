import React from 'react';
import { IDonation } from '../../../../../types';
import { Avatar, Badge, Flex, Text } from '@chakra-ui/react';
import { formatDate } from '../../../../../utils/formatDate';

interface ILeaderboardItemProps {
  donation: IDonation
}

const LeaderboardItem: React.FC<ILeaderboardItemProps> = ({donation}) => {
  return (
    <Flex 
      boxShadow="md" p={5}  bg="#dedbd2" borderRadius="lg" width='50%' 
    >
      <Avatar size="lg" position="relative" left="-50px" />
      <Flex ml="-35px" h="100%" flex="1" justifyContent="space-between">
        <Flex flexDirection="column" textAlign="left">
          <Text fontWeight="bold" color="blue.500" fontSize="sm" textTransform="capitalize">{donation.team}</Text>
          <Text fontWeight="bold" fontSize="sm">{donation.name}</Text>
          <Text fontWeight="bold" fontSize="sm">{donation.message}</Text>
        </Flex>
        <Flex flexDirection="column" justifyContent="space-around" textAlign="left">
          <Badge py={2} px={3}>{donation.count}$</Badge>
          <Text fontSize="sm">{formatDate(donation.createdAt)}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LeaderboardItem;
