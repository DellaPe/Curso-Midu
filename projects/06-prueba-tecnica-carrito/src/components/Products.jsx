import '../css/Products.css'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext)
  const checkProductInCart = product => {
    return cart.find((item) => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title} - <strong>${product.price}</strong></h3>
              </div>
              <div>
                <button
                  className={isProductInCart ? 'remove-from-cart' : 'add-to-cart'}
                  onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
