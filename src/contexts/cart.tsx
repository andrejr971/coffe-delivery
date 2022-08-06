import React, { createContext, useEffect, useState } from 'react'
import { productsService } from '../services/products'

type Cart = {
  id: number
  amount: number
}

interface Product {
  id: number
  name: string
  thumbnailUrl: string
  price: number
  amount: number
}

export interface CartContextData {
  cart: Cart[]
  productsCart: Product[]
  addToCart: (data: Cart) => void
  removeToCart: (id: number) => void
}

interface CartProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart[]>([
    {
      id: 1,
      amount: 3,
    },
  ])
  const [productsCart, setProductsCart] = useState<Product[]>([])

  useEffect(() => {
    function mapperCart() {
      const products = cart.map((item) => {
        const product = productsService.find(
          (findProduct) => findProduct.id === item.id,
        )

        return {
          ...product,
          amount: item.amount,
        }
      }) as Product[]

      setProductsCart(products)
    }

    mapperCart()
  }, [cart])

  function addToCart(data: Cart) {
    const findIndex = cart.find((findCart) => findCart.id === data.id)

    if (!findIndex) {
      setCart([...cart, data])
    } else {
      if (data.amount === 0) {
        setCart((state) => state.filter((item) => item.id !== data.id))
      }

      setCart((state) =>
        state.map((item) => {
          if (item.id === data.id) {
            return {
              ...item,
              amount: data.amount,
            }
          }

          return item
        }),
      )
    }
  }

  function removeToCart(id: number) {
    const findIndex = cart.find((findCart) => findCart.id === id)

    if (findIndex) {
      setCart((state) => state.filter((item) => item.id !== id))
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        productsCart,
        removeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
