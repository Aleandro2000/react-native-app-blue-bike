import {Box, Text, ScrollView, Spinner} from 'native-base';
import React, {useEffect, useState} from 'react';
import useBikesStore from '../stores/bikes.store';
import bikesService from '../services/bikes.service';
import {copyToClipboard, isEqual, logger, normalize} from '../utils';
import BikerCardTemplate from '../template/bike-card.template';
import {Pressable} from 'react-native';

export default function BikesScreen(): React.JSX.Element {
  const {bikes, setBikes} = useBikesStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = [
          ...((await bikesService.get_dampoort())?.results ?? []),
          ...((await bikesService.get_sint_pieters())?.results ?? []),
        ];
        if (!isEqual(bikes, result)) {
          setBikes(result);
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
  }, [bikes, setBikes]);

  return (
    <ScrollView pb={100}>
      {loading && !bikes?.length ? (
        <Box my={5} mx="auto">
          <Spinner />
        </Box>
      ) : bikes?.length ? (
        <Box my={5}>
          {bikes?.map((item, key) => (
            <Pressable key={key} onLongPress={() => copyToClipboard(item.name)}>
              <BikerCardTemplate bike={item} />
            </Pressable>
          ))}
        </Box>
      ) : (
        <Box my={5} mx="auto">
          <Text fontSize={normalize(18)} bold>
            No bikes available
          </Text>
        </Box>
      )}
    </ScrollView>
  );
}
