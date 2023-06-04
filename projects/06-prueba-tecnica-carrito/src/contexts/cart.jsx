import { createContext, useReducer } from 'react'
import { reduceCart, initialStateCart } from '../reducers/cart'

export const CartContext = createContext()

export function useReducerCart () {
  const [state, dispatch] = useReducer(reduceCart, initialStateCart)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  return { cart: state, addToCart, clearCart, removeFromCart }
}
export function CartProvider ({ children }) {
  const { cart: state, addToCart, clearCart, removeFromCart } = useReducerCart()
  return (
    <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
