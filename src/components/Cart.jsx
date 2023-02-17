import React, { useContext, useEffect, useState } from 'react'
import { context } from '../context/Context';
import { productService } from '../services/data';
import CartItem from './CartItem'
import { useNavigate } from "react-router-dom";

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
    cartList.forEach( () => {
      //comprobar stock
    })
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
      total: total
    };
    
    const order = await productService.newOrder(purchaseData)
    navigate(`/thanks/${order.id}`);
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

      {showModal &&
        <div className='modalContainer'>
          <div className='modalBox'>
            <h2>Completa tus datos para realizar la compra</h2>
            <form className='modalForm'>
              <label>
                Nombre:
                <input type='text' className='modalInput' name='name' value={buyerInfo.name} onChange={handleBuyerInfoChange} required />
              </label>
              <label>
                Teléfono:
                <input type='tel' className='modalInput' name='phone' value={buyerInfo.phone} onChange={handleBuyerInfoChange} required />
              </label>
              <label>
                Correo electrónico:
                <input type='email' className='modalInput' name='email' value={buyerInfo.email} onChange={handleBuyerInfoChange} required />
              </label>
              <label>
                Dirección:
                <input type='text' className='modalInput' name='address' value={buyerInfo.address} onChange={handleBuyerInfoChange} required />
              </label>
            </form>
            <div className='modalButtonContainer'>
            <button className='modalButton' onClick={handleCompletePurchase}>Completar compra</button>
            <button className='modalButton' onClick={() => setShowModal(false)}>Volver</button>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default Cart