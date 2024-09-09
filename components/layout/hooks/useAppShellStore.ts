import { createRef, MutableRefObject, RefObject } from 'react';
import { create } from 'zustand';

interface AppShellStore {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
  closeNavbar: () => void;
  mainScrollPosition: number;
  mainScrollAreaRef: RefObject<HTMLDivElement>;
  setScrollPosition: (position: number) => void;
}

const MAIN_SCROLL_AREA_REF: MutableRefObject<HTMLDivElement | null> = createRef<HTMLDivElement>();
MAIN_SCROLL_AREA_REF.current = null;

export const useAppShellStore = create<AppShellStore>((set) => ({
  isNavbarOpen: false,
  toggleNavbar: () => set((state) => ({ isNavbarOpen: !state.isNavbarOpen })),
  closeNavbar: () => set({ isNavbarOpen: false }),
  mainScrollPosition: 0,
  mainScrollAreaRef: MAIN_SCROLL_AREA_REF,
  setScrollPosition: (position) => set({ mainScrollPosition: position }),
}));
