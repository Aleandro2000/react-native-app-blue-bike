import React, {useEffect, useState} from 'react';
import StackNavigation from '../navigation/stack.navigator';
import SplashScreen from './splash.screen';

export default function MainScreen(): React.JSX.Element {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return <SplashScreen />;
  }

  return <StackNavigation />;
}
