import React, { useEffect, useRef, useState } from 'react'
import logo from '../images/logo.jpg'
import CartWidget from './CartWidget'
import menu from '../images/menu.svg'


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

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className='navBar' ref={navarRef}>
        <div className='buttonsContainer'>
          <a href='#inicio' className='logoContainer' ref={logoContainerRef}>
            <img src={logo} alt='logo' className='logo' />
          </a>
          <div>
            <CartWidget />
          </div>
          <div className='toggle-menu' onClick={() => setShowMenu(!showMenu)}>
            <img src={menu}/>
          </div>
        </div>
        <ul className={`listContainer ${showMenu ? '' : 'hide'}`}>
          <li className='listItem'>INICIO</li>
          <li className='listItem'>PRODUCTOS</li>
          <li className='listItem'>CONTACTO</li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
