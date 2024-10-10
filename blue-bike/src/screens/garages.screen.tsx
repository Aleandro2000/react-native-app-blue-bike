import {Box, Text, ScrollView, Spinner} from 'native-base';
import React, {useEffect, useState} from 'react';
import { isEqual, logger, normalize, openUrl} from '../utils';
import {Pressable} from 'react-native';
import useGaragesStore from '../stores/garages.store';
import garagesService from '../services/garages.service';
import GarageCardTemplate from '../template/garage-card.template';

export default function GaragesScreen(): React.JSX.Element {
  const {garages, setGarages} = useGaragesStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = (await garagesService.get())?.results ?? [];
        if (!isEqual(garages, result)) {
          setGarages(result);
        }
      } catch (err) {
        logger(err);
      } finally {
        setLoading(false);
      }
    };
    const intervalId = setInterval(fetchData, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [garages, setGarages]);

  return (
    <ScrollView pb={100}>
      {loading && !garages?.length ? (
        <Box my={5} mx="auto">
          <Spinner />
        </Box>
      ) : garages?.length ? (
        <Box my={5}>
          {garages?.map((item, key) => (
            <Pressable
              key={key}
              onPress={() =>
                openUrl(
                  `https://www.google.com/maps/?q=${item.location.lat},${item.location.lon}`,
                )
              }>
              <GarageCardTemplate garage={item} />
            </Pressable>
          ))}
        </Box>
      ) : (
        <Box my={5} mx="auto">
          <Text fontSize={normalize(18)} bold>
            No garages available
          </Text>
        </Box>
      )}
    </ScrollView>
  );
}
