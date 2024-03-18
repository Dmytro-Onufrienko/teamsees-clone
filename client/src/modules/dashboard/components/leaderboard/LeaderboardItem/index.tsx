import React from 'react';
import { IDonation } from '../../../../../types';
import { Avatar, Flex } from '@chakra-ui/react';

interface ILeaderboardItemProps {
  donation: IDonation
}

const LeaderboardItem: React.FC<ILeaderboardItemProps> = ({donation}) => {
  return (
    <Flex 
      boxShadow="md" p={3} bg="#dedbd2" borderRadius="lg" width='100%' justifyContent="space-between" alignItems="center"
    >
      <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
      <div>
        {donation.name}
      </div>
      <div>
        {donation.createdAt as unknown as string}
      </div>
    </Flex>
  );
};

export default LeaderboardItem;
