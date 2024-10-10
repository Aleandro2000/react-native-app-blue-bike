import React from 'react';
import {Center, Heading, Text, Box} from 'native-base';

export default function AuthorScreen() {
  return (
    <Center flex={1} padding={4}>
      <Box
        width="100%"
        padding={4}
        borderRadius="md"
        shadow={2}
        backgroundColor="white">
        <Heading size="lg">Aleandro2000</Heading>
        <Text mt={2}>
          Aleandro2000 is a passionate developer with a love for creating
          innovative applications and contributing to open-source projects.
          Always eager to learn and share knowledge with the community.
        </Text>
      </Box>
    </Center>
  );
}
