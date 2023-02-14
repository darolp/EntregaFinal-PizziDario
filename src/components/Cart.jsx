import React, { useContext , useEffect, useState} from 'react'
import { context } from '../context/Context';
import CartItem from './CartItem'

function Cart() {
  const {cartList , removeCartItem, cleanCart} = useContext(context);
  const [total, setTotal] = useState(0);

  const handlePay = () => {
    
  }

  useEffect(() => {
    let newTotal = 0;
    cartList.forEach((item) => {
      newTotal += item.price * item.amount;
    });
    setTotal(newTotal);
  }, [cartList]);

  return (
    <>
      <div className='cartContainer'>
        { cartList.length > 0 
          ? cartList.map(e => <CartItem key={e.id} id={e.id} img={e.img} amount={e.amount} size={e.size} title={e.title} price={e.price} removeCartItem={removeCartItem} />)
          : 'Aun no agregado ningun producto al carrito'}
        <div>Total a pagar: ${total}</div>
        <button onClick={handlePay}>Pagar</button>
      </div>
    </>
  )
}

export default Cart