'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { type AppStore, createAppStore, } from '@/stores/app-store'

export type AppStoreApi = ReturnType<typeof createAppStore>

export const AppStoreContext = createContext<AppStoreApi | undefined>(
  undefined,
)

export interface CounterStoreProviderProps {
  children: ReactNode
}

export const AppStoreProvider = ({
  children,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<AppStoreApi>(null)
  if (!storeRef.current) {
    storeRef.current = createAppStore()
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  )
}

export const useAppStore = <T,>(
  selector: (store: AppStore) => T,
): T => {
  const appStoreContext = useContext(AppStoreContext)

  if (!appStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`)
  }

  return useStore(appStoreContext, selector)
}
