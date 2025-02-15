import { createStore } from "zustand/vanilla";

export type AppState = {
  activeTab: string;
  disableOnEnterViewport: boolean;
};

export type CounterActions = {
  setActiveTab: (tab: string) => void;
  onViewPortEnter: (tab: string) => void;
};

export type AppStore = AppState & CounterActions;

export const defaultInitState: AppState = {
  activeTab: "#home",
  // Prevent the onViewportEnter event from firing when the user scroll across the page towards the active tab.
  disableOnEnterViewport: true,
};

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setActiveTab: (activeTab: string) =>
      set({ activeTab, disableOnEnterViewport: true }),
    onViewPortEnter: (tab: string) =>
      set((state) => {
        // Once the user reaches the active tab, enable the onViewportEnter event.
        if (state.activeTab === tab) {
          return { ...state, disableOnEnterViewport: false };
        }
        // If the use scrolls past the tab set it to the active tab.
        if (!state.disableOnEnterViewport) {
          return { ...state, activeTab: tab };
        }
        return { ...state };
      }),
  }));
};
