import { Product } from '../../contexts/cart'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_TO_CART = 'REMOVE_TO_CART',
  INCREMENT_PRODUCT = 'INCREMENT_PRODUCT',
  DECREMENT_PRODUCT = 'DECREMENT_PRODUCT',
  TOTAL_PRODUCTS_IN_CART = 'TOTAL_PRODUCTS_IN_CART',
}

export function addProductToCartAction(product: Product) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product,
    },
  }
}

export function removeProductToCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_TO_CART,
    payload: {
      id,
    },
  }
}

export function incrementProductCartAction(id: number) {
  return {
    type: ActionTypes.INCREMENT_PRODUCT,
    payload: {
      id,
    },
  }
}

export function decrementProductCartAction(id: number) {
  return {
    type: ActionTypes.DECREMENT_PRODUCT,
    payload: {
      id,
    },
  }
}
