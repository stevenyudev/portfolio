import { create } from 'zustand';

type NavOpenState = {
  open: boolean;
  toggle: () => void;
};

export const useNavOpenStore = create<NavOpenState>((set) => ({
  open: false,
  toggle: () => set((state) => ({ open: !state.open })),
}));
