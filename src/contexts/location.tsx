import React, { createContext, useEffect, useState } from 'react'

export interface LocationData {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

interface LocationContextData {
  location: string
  address: LocationData
  setLocation: (location: string) => void
  setAddress: (address: LocationData) => void
}

interface LocationContextProviderProps {
  children: React.ReactNode
}

export const LocationContext = createContext({} as LocationContextData)

export function LocationContextProvider({
  children,
}: LocationContextProviderProps) {
  const [location, setLocation] = useState('')
  const [address, setAddress] = useState({} as LocationData)

  function handleLocation(location: string) {
    setLocation(location)

    localStorage.setItem('@coffee-delivery:location-1.0.0', location)
  }

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation: handleLocation,
        address,
        setAddress,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
