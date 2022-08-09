import React, { createContext, useEffect, useState } from 'react'
import { DefaultTheme } from 'styled-components'
import dark from '../styles/dark'
import light from '../styles/light'

export interface ThemeContextData {
  theme: typeof light
  handleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextData)

interface ThemeContextProviderProps {
  children: React.ReactNode
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(light)

  function handleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  useEffect(() => {
    const storageParseJSON = localStorage.getItem(
      '@coffee-delivery:theme-1.0.0',
    )

    if (storageParseJSON) {
      setTheme(JSON.parse(storageParseJSON))
    } else {
      setTheme(light)
    }
  }, [])

  useEffect(() => {
    const storageStringfy = JSON.stringify(theme)

    localStorage.setItem('@coffee-delivery:theme-1.0.0', storageStringfy)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
