import React from 'react'
import { CartProvider } from './cart'
import { LocationContextProvider } from './location'
import { ThemeContextProvider } from './theme'

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeContextProvider>
      <LocationContextProvider>
        <CartProvider>{children}</CartProvider>
      </LocationContextProvider>
    </ThemeContextProvider>
  )
}
