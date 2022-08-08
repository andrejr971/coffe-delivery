import { produce } from 'immer'

import { Product } from '../../contexts/cart'
import { ActionTypes } from './actions'
export interface CartState {
  cart: Product[]
}

interface Action {
  type: keyof typeof ActionTypes
  payload: any
}

export function cartReducers(state: CartState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.product)
      })

    case ActionTypes.REMOVE_TO_CART:
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (product) => product.id !== action.payload.id,
        )
      })

    case ActionTypes.INCREMENT_PRODUCT: {
      const productIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id,
      )

      if (productIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.cart[productIndex].quantity =
          draft.cart[productIndex].quantity + 1
      })
    }

    case ActionTypes.DECREMENT_PRODUCT: {
      const productIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id,
      )

      if (productIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.cart[productIndex].quantity =
          draft.cart[productIndex].quantity - 1
      })
    }
    default:
      return state
  }
}
