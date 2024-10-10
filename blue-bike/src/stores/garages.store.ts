import {create} from 'zustand';
import {ParkingResult} from '../interfaces/garages.interface';

type State = {
  garages: ParkingResult[] | null;
};

type Action = {
  setGarages: (garages: State['garages']) => void;
};

const useGaragesStore = create<State & Action>(set => ({
  garages: null,
  setGarages: (garages: ParkingResult[] | null) => set({garages}),
}));

export default useGaragesStore;
