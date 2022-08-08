import { useContext } from 'react'
import { LocationContext } from '../contexts/location'

export function useLocation() {
  const context = useContext(LocationContext)
  return context
}
