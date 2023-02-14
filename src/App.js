import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Contact from './components/Contact'
import Home from './components/Home'
import ItemDetail from './components/ItemDetail'
import { ContextProvider } from './context/Context'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
        <ContextProvider >
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:category' element={<Products />} />
            <Route path='/product/:id' element={<ItemDetail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
