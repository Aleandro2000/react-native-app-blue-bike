import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BikesScreen from '../screens/bikes.screen';
import GaragesScreen from '../screens/garages.screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {normalize} from '../utils';
import {Box} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBicycle, faParking} from '@fortawesome/free-solid-svg-icons';
import {useWindowDimensions} from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation(): React.JSX.Element {
  const {bottom} = useSafeAreaInsets();
  const {height} = useWindowDimensions();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          borderRadius: height,
          marginHorizontal: 10,
          marginVertical: 10 + bottom,
        },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        headerShown: false,
        tabBarIcon: ({color}) => {
          switch (route.name) {
            case 'Bikes':
              return (
                <Box accessibilityLabel="Bikes Screen Button">
                  <FontAwesomeIcon
                    icon={faBicycle}
                    color={color}
                    size={normalize(24)}
                  />
                </Box>
              );
            case 'Garages':
              return (
                <Box accessibilityLabel="Garages Screen Button">
                  <FontAwesomeIcon
                    icon={faParking}
                    color={color}
                    size={normalize(24)}
                  />
                </Box>
              );
            default:
              return null;
          }
        },
      })}>
      <Tab.Screen name="Bikes" component={BikesScreen} />
      <Tab.Screen name="Garages" component={GaragesScreen} />
    </Tab.Navigator>
  );
}
