import {create} from 'zustand';
import {BikesResult} from '../interfaces/bikes.interface';

type State = {
  bikes: BikesResult[] | null;
};

type Action = {
  setBikes: (bikes: State['bikes']) => void;
};

const useBikesStore = create<State & Action>(set => ({
  bikes: null,
  setBikes: (bikes: BikesResult[] | null) => set({bikes}),
}));

export default useBikesStore;
