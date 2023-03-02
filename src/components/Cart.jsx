import React, { useContext, useEffect, useState } from 'react'
import { context } from '../context/Context';
import { productService } from '../services/data';
import CartItem from './CartItem'
import { useNavigate } from "react-router-dom";
import Modal from './Modal';
function Cart() {

  const { cartList, removeCartItem, cleanCart } = useContext(context);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handlePay = () => {
    setShowModal(true);
  }                                     

  const handleBuyerInfoChange = (event) => {
    setBuyerInfo({
      ...buyerInfo,
      [event.target.name]: event.target.value
    });
  }

  const handleCompletePurchase = async () => {
    const purchaseData = {
      buyer: {
        name: buyerInfo.name,
        phone: buyerInfo.phone,
        email: buyerInfo.email,
        address: buyerInfo.address
      },
      items: cartList.map(item => ({ id: item.idProducto, price: item.price, title: item.title })),
      timeStamp: new Date().toLocaleString('es-AR', { timeZone: 'UTC' }),
      state: "Generada",
      total: total
    };
    
    const order = await productService.newOrder(purchaseData)
    navigate(`/checkOut/${order.id}`);
    cleanCart();
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
        {cartList.length > 0
          ? cartList.map(e => <CartItem key={e.id} id={e.id} img={e.img} amount={e.amount} size={e.size} title={e.title} price={e.price} removeCartItem={removeCartItem} />)
          : 'Aun no agregado ningun producto al carrito'}
        <div>Total a pagar: ${total}</div>
        <button onClick={handlePay}>Pagar</button>
      </div>

      {showModal && <Modal setShowModal={setShowModal} handleCompletePurchase={handleCompletePurchase} handleBuyerInfoChange={handleBuyerInfoChange} buyerInfo={buyerInfo}/>}

    </>
  )
}

export default Cart