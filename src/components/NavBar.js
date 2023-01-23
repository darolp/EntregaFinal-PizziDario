import React from 'react'
import logo from '../images/logo.jpg'
import CartWidget from './CartWidget'
function NavBar() {
  return (
    <>
      <nav className='navBar'>
        <a href='#inicio' className='logoContainer'>
          <img src={logo} alt='logo' className='logo'/>
        </a>
        <ul className='listContainer'>
          <li className='listItem'>INICIO</li>
          <li className='listItem'>PRODUCTOS</li>
          <li className='listItem'>CONTACTO</li>
        </ul>
        <div>
          <CartWidget/>
        </div>
      </nav>
    </>
  )
}

export default NavBar