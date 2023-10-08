import { create } from "zustand";

type HookProps = {
  isOpen: boolean;
  onToggle: (bool: boolean) => void;
};

export const useMenu = create<HookProps>()((set) => ({
  isOpen: false,
  onToggle: (bool) => set(() => ({ isOpen: bool })),
}));
