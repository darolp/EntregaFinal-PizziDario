import React from 'react'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import whatsapp from '../images/whatsapp.svg'
import logo from '../images/logo.jpg'

function Footer() {
  return (
    <div className='footer'>
      <div className='footerRedes'>
        <h4>Seguinos en nuestras redes:</h4>
        <a target='_blank' href='https://instagram.com'><img src={instagram} alt='redes' />Instagram</a> 
        <a target='_blank' href='https://facebook.com'><img src={facebook} alt='redes' />Facebook</a> 
      </div>
      <div className='footerLogo'>
        <img src={logo} />
      </div>
      <div className='footerContacto'>
        <h4>Contactanos:</h4>
        <p>Tel: 1212341234</p>
        <p>Correo: 121234@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer