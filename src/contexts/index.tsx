import React from 'react'
import { CartProvider } from './cart'

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return <CartProvider>{children}</CartProvider>
}
