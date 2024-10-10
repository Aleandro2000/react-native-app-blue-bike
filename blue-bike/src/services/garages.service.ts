import axios from 'axios';
import {GaragesInterface} from '../interfaces/garages.interface';
import {logger} from '../utils';

export default {
  get: async (): Promise<GaragesInterface | null> => {
    try {
      return (
        await axios.get(
          'https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?where=occupation%20%3C%3D%2050&order_by=occupation',
        )
      ).data;
    } catch (err) {
      logger(err);
      return null;
    }
  },
};
