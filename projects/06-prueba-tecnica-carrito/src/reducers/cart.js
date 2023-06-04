export const initialStateCart = JSON.parse(window.localStorage.getItem('cart')) || []

export function updateLocalStorageCart (state) {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const setLocalStorageCart = (state) => {
  updateLocalStorageCart(state)
  return state
}

export function reduceCart (state, action) {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.find(item => item.id === id) // check if product is already in cart
      if (productInCartIndex !== undefined) {
        const newState = state.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        return setLocalStorageCart(newState)
      }
      const newState = [...state, { ...actionPayload, quantity: 1 }] // add product to cart
      return setLocalStorageCart(newState)
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      return setLocalStorageCart(newState)
    }
    case 'CLEAR_CART': {
      return setLocalStorageCart([])
    }
  }
  return state
}
