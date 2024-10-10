import React, {useEffect, useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import MainScreen from './src/screens/main.screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import ErrorScreen from './src/screens/error.screen';

LogBox.ignoreAllLogs();

export default function App(): React.JSX.Element {
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
  }, [isConnected]);

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        {isConnected ? <MainScreen /> : <ErrorScreen />}
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
