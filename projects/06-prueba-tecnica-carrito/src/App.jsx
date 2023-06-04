import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer.jsx'
import { Cart } from './components/Cart'
import { CartProvider } from './contexts/cart'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
