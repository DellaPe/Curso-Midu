import { useContext } from 'react'
import { CartContext } from '../contexts/cart.jsx'

export function useCart () {
  const context = useContext(CartContext)
  const { cart } = context

  if (cart === undefined) throw new Error('useCart must be used within a CartProvider')

  return context
}
