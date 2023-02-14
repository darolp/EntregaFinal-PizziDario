import React from 'react'
import cart from '../images/shopping-cart-line.svg'
import { useContext } from 'react';
import { context } from '../context/Context';

function CartWidget() {
  const {cartList} = useContext(context);
  return (
    <>
      <div className='cartWidget'>
        <img src={cart} alt='cart' className='cartWidgetIcon'/>
        <span className='cartWidgetCount'>{cartList.length}</span>
      </div>
    </>
  )
}

export default CartWidget