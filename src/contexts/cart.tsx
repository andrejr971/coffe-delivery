import React, { createContext, useEffect, useReducer, useState } from 'react'
import {
  addProductToCartAction,
  decrementProductCartAction,
  incrementProductCartAction,
  removeProductToCartAction,
} from '../reducers/cart/actions'
import { cartReducers } from '../reducers/cart/reducer'
export interface Product {
  id: number
  name: string
  thumbnailUrl: string
  price: number
  quantity: number
}

type TotalProducts = {
  total: number
  quantityProducts: number
}

export interface CartContextData {
  cart: Product[]
  totalProducts: TotalProducts
  addToCart: (data: Product) => void
  removeToCart: (id: number) => void
  increment: (id: number) => void
  decrement: (id: number) => void
}

interface CartProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducers,
    {
      cart: [],
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return {
        cart: [],
      }
    },
  )

  const { cart } = cartState

  const [totalProducts, setTotalProducts] = useState<TotalProducts>({
    quantityProducts: 0,
    total: 0,
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  useEffect(() => {
    const total = cart.reduce(
      (acc, product) => {
        const productSubtotal = product.price * product.quantity

        return {
          total: acc.total + productSubtotal,
          quantityProducts: acc.quantityProducts + product.quantity,
        }
      },
      {
        quantityProducts: 0,
        total: 0,
      },
    )

    setTotalProducts(total)
  }, [cart])

  function addToCart(data: Product) {
    dispatch(addProductToCartAction(data))
  }

  function increment(id: number) {
    dispatch(incrementProductCartAction(id))
  }

  function decrement(id: number) {
    dispatch(decrementProductCartAction(id))
  }

  function removeToCart(id: number) {
    dispatch(removeProductToCartAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart || [],
        addToCart,
        removeToCart,
        increment,
        decrement,
        totalProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
