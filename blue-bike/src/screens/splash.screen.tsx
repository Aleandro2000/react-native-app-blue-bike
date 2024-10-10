import React, {useEffect, useMemo} from 'react';
import {Animated} from 'react-native';
import {Box} from 'native-base';
import LogoSvg from '../common/logo-svg.common';

export default function SplashScreen(): React.JSX.Element {
  const fadeAnim = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Box flex={1} alignItems="center" justifyContent="center" bg="white">
      <Animated.View style={{opacity: fadeAnim}}>
        <Box accessibilityLabel="Blue Bike Logo">
          <LogoSvg width={300} height={300} />
        </Box>
      </Animated.View>
    </Box>
  );
}
