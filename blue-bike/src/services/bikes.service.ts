import axios from 'axios';
import {BikesInterface} from '../interfaces/bikes.interface';
import {logger} from '../utils';

export default {
  get_dampoort: async (): Promise<BikesInterface | null> => {
    try {
      return (
        await axios.get(
          'https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-dampoort/records',
        )
      ).data;
    } catch (err) {
      logger(err);
      return null;
    }
  },
  get_sint_pieters: async (): Promise<BikesInterface | null> => {
    try {
      return (
        await axios.get(
          'https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein/records',
        )
      ).data;
    } catch (err) {
      logger(err);
      return null;
    }
  },
};
