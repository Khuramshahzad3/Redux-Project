import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './container/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductListings from './container/ProductListings'
import ProductDetails from './container/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<ProductListings />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route >404 NOT FOUND! </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App
