import React from 'react'
import { CartProvider } from './cart'
import { LocationContextProvider } from './location'

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <LocationContextProvider>
      <CartProvider>{children}</CartProvider>
    </LocationContextProvider>
  )
}
