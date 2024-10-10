import Clipboard from '@react-native-clipboard/clipboard';
import {Dimensions, Linking, PixelRatio, Platform} from 'react-native';
import Snackbar from 'react-native-snackbar';

const scale = Dimensions.get('window').width / 380;

export const normalize = (size: number) => {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size * scale));
  }
  return Math.round(PixelRatio.roundToNearestPixel(size * scale)) - 2;
};

export const logger = (message: any) => {
  if (__DEV__) {
    console.log(message);
  }
};

export const copyToClipboard = (text: string) => {
  Clipboard.setString(text);
  Snackbar.show({
    text: 'Copied to clipboard!',
    duration: Snackbar.LENGTH_SHORT,
  });
};

export const openUrl = async (url: string) => {
  try {
    await Linking.openURL(url);
  } catch (err) {
    logger(err);
  }
};

export const isEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== 'object' ||
    obj1 === null ||
    typeof obj2 !== 'object' ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};
