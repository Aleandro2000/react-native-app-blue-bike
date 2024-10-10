import React from 'react';
import {Box, Heading, Text, VStack, Divider} from 'native-base';
import {ParkingResult} from '../interfaces/garages.interface';
import {normalize} from '../utils';
import ReadMore from '@fawazahmed/react-native-read-more';

const GarageCardTemplate: React.FC<{
  garage: ParkingResult;
}> = ({garage}): React.JSX.Element => {
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
            {garage.name}
          </Heading>
          <Divider />
          <Text color="gray.600" fontSize="md">
            <Text fontWeight="bold">Last Update:</Text> {garage.lastupdate}
          </Text>
          <Text color="gray.600" fontSize="md">
            <Text fontWeight="bold">Total Capacity:</Text>{' '}
            {garage.totalcapacity}
          </Text>
          <Text color="gray.600" fontSize="md">
            <Text fontWeight="bold">Available Capacity:</Text>{' '}
            {garage.availablecapacity}
          </Text>
          <Text color="gray.600" fontSize="md">
            <Text fontWeight="bold">Occupation:</Text> {garage.occupation}%
          </Text>
          <ReadMore
            numberOfLines={2}
            style={{color: 'black', fontSize: normalize(18)}}
            seeMoreText="See More"
            seeMoreStyle={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: normalize(18),
            }}
            seeLessStyle={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: normalize(18),
            }}>
            <Text color="gray.600" fontSize="md">
              <Text fontWeight="bold">Description:</Text> {garage.description}
            </Text>
          </ReadMore>
          <Text color="gray.600" fontSize="md">
            <Text fontWeight="bold">Open Now:</Text>{' '}
            {garage.isopennow ? 'Yes' : 'No'}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default GarageCardTemplate;
