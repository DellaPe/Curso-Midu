import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import '../css/Cart.css'
import { useCart } from '../hooks/useCart.js'

function CartItem ({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <h3>{title}<strong>{price}</strong></h3>
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckoxId = useId()
  const { cart, addToCart, clearCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckoxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem key={product.id} {...product} addToCart={() => addToCart(product)} />))
          }
        </ul>
        <button className='clear-cart' onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
