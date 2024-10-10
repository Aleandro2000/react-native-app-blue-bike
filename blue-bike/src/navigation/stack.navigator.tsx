import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthorScreen from '../screens/author.screen';
import DashboardScreen from '../screens/dashboard.screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfo} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'native-base';

const Stack = createNativeStackNavigator();

export default function StackNavigation(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={({route, navigation}) => ({
          orientation: 'portrait',
          headerTitle: 'Blue Bikes',
          headerRight: () =>
            route.name !== 'Author' ? (
              <Button
                bg="black"
                accessibilityLabel="Go to Author Info"
                _pressed={{backgroundColor: 'initial'}}
                onPress={() => navigation.navigate('Author')}>
                <FontAwesomeIcon color="white" icon={faInfo} />
              </Button>
            ) : null,
        })}>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="Author"
          component={AuthorScreen}
          options={{headerTitle: 'Author'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
