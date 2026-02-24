import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// FIXME: вынести в глобал
type Location = {
  city: string;
  country: string;
  lat: number;
  lon: number;
};

type LocationStore = {
  current: Location | null;
  setLocation: (location: Location) => void;
};

export const useLocationStore = create<LocationStore>()(
  persist(
    (set) => ({
      current: null,
      setLocation: (location) => set({ current: location }),
    }),
    {
      name: 'location-storage',
    },
  ),
);
