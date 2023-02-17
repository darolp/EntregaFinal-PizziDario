import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextProvider } from './context/Context'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import Contact from './components/Contact'
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Thanks from './components/Thanks'

function App() {

  return (
    <>
      <BrowserRouter>
        <ContextProvider >
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/products/:category' element={<ItemListContainer />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/thanks/:id' element={<Thanks/>}/>
          </Routes>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
