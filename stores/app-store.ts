import { createStore } from 'zustand/vanilla'

export type AppState = {
  activeTab: string
}

export type CounterActions = {
  setActiveTab: (tab: string) => void
}

export type AppStore = AppState & CounterActions

export const defaultInitState: AppState = {
  activeTab: '#home',
}

export const createAppStore = (
  initState: AppState = defaultInitState,
) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setActiveTab: (tab: string) => set({ activeTab: tab }),
  }))
}
