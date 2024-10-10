import React from 'react';
import {Box, Center, PresenceTransition, Spinner, Text} from 'native-base';
import {normalize} from '../utils';
import LogoSvg from '../common/logo-svg.common';

export default function ErrorScreen(): React.JSX.Element {
  return (
    <Box
      flex={1}
      flexDirection="row"
      justifyContent="center"
      bg="white"
      alignItems="center">
      <PresenceTransition
        initial={{
          opacity: 0,
        }}
        visible
        animate={{
          opacity: 1,
          transition: {
            duration: 3000,
          },
        }}>
        <Center>
          <Box accessibilityLabel="Blue Bike Logo">
            <LogoSvg width={150} height={150} />
          </Box>
          <Box display="flex" alignItems="center" mx={5}>
            <Text bold textAlign="center" fontSize={normalize(18)}>
              Whoops! There was a problem! Maybe it is your internet connection.
            </Text>
            <Spinner my={5} />
          </Box>
        </Center>
      </PresenceTransition>
    </Box>
  );
}
