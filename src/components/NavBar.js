import React, { useEffect, useRef } from 'react'
import logo from '../images/logo.jpg'
import CartWidget from './CartWidget'
import menu from '../images/menu.svg'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'


function NavBar() {
  const navarRef = useRef();
  const logoContainerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1) {
        navarRef.current.className = 'navBar navBarAnimation'
        logoContainerRef.current.className = 'logoContainer logoContainerAnimation'
      } else {
        navarRef.current.className = 'navBar'
        logoContainerRef.current.className = 'logoContainer'
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <>
      <nav className='navBar' ref={navarRef}>
        <a href='#inicio' className='logoContainer' ref={logoContainerRef}>
          <img src={logo} alt='logo' className='logo' />
        </a>
        <ul className='listContainer'>
          <li className='listItem'>INICIO</li>
          <li className='listItem'>PRODUCTOS</li>
          <li className='listItem'>CONTACTO</li>
        </ul>
        <div>
          <CartWidget />
        </div>
      </nav>
    </>
  )
}

export default NavBar
