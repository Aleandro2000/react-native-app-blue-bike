import React from 'react';
import {Box, Heading, Text, VStack, Divider} from 'native-base';
import {BikesResult} from '../interfaces/bikes.interface';

const BikerCardTemplate: React.FC<{
  bike: BikesResult;
}> = ({bike}): React.JSX.Element => {
  return (
    <Box mx={3}>
      <Box
        bg="white"
        borderWidth={1}
        borderColor="gray.300"
        borderRadius="lg"
        padding={6}
        shadow={3}
        maxW={600}
        w="full"
        mx="auto"
        marginBottom={4}>
        <VStack space={3}>
          <Heading size="lg" color="black">
            {bike.name}
          </Heading>
          <Divider />
          <Text color="gray.600" fontSize="md">
            <Text fontWeight="bold">Last Seen:</Text> {bike.last_seen}
          </Text>
          <Text color="gray.600" fontSize="md">
            <Text fontWeight="bold">Bikes in Use:</Text> {bike.bikes_in_use}
            <Text fontWeight="bold" marginLeft={2}>
              | Available:
            </Text>{' '}
            {bike.bikes_available}
          </Text>
          <Text color="gray.600" fontSize="md">
            <Text fontWeight="bold">Total Bikes:</Text>{' '}
            {bike.bikes_in_use + bike.bikes_available}
          </Text>
          <Text color="gray.600" fontSize="md">
            <Text fontWeight="bold">Type:</Text> {bike.type}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default BikerCardTemplate;
