import React from 'react'
import cart from '../images/shopping-cart-line.svg'

function CartWidget() {
  return (
    <>
      <div className='cartContainer'>
        <img src={cart} alt='cart' className='cartIcon'/>
        <span className='cartCount'>2</span>
      </div>
    </>
  )
}

export default CartWidget