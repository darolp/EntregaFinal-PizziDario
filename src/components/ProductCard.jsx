import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../context/Context';


function ProductCard({ id, img, title, price, stock }) {


  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("");
  const [maxQty, setMaxQty] = useState(0);
  const { updateCartList, cartList } = useContext(context);


  useEffect(() => {
    setMaxQty(stock[size])
  }, [size]);

  const addCart = () => {

    // obtener el producto en caso de que exista en el carrito.
    // Ver cuantos productos hay agregados para el size acutal
    // chequear que el stock permitido para ese size.
    // y si la suma no excede, del stock máximo, permitir agregar.
    if (size) {
      const product = cartList.find(elem => elem.idProducto === id && elem.size === size)
      if(product && product.amount + amount <= stock[size]) {
        
      } else {
        const newItem = {
          id: Math.random() * 10000,
          idProducto: id,
          img: img,
          amount: amount,
          size: size,
          title: title,
          price: price
        }
        updateCartList(newItem)
      }
    }
  }

  return (
    <div className='productCard' >
      <div className='productCard-img'>
        <img src={img} alt='product' />
      </div>
      <div className='productCard-text'>
        <h2>{title}</h2>
        <span className='tags'>$ {price}</span>
      </div>
      <div className='productCard-buttons'>
        <div>
          <select className='productCard-buttons-select' required onChange={(e) => setSize(e.target.value)} defaultValue={''}>
            <option disabled value={''}>Talle</option>
            <option value={'xs'} disabled={stock.xs === 0 ? true : false}>XS</option>
            <option value={'s'} disabled={stock.s === 0 ? true : false}>S</option>
            <option value={'m'} disabled={stock.m === 0 ? true : false}>M</option>
            <option value={'l'} disabled={stock.l === 0 ? true : false}>L</option>
            <option value={'xl'} disabled={stock.xl === 0 ? true : false}>XL</option>
          </select>
          <div className='productCard-buttons-amount'>
            <label>Cantidad: </label>
            <button onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}>-</button>
            <input type='number' value={amount} readOnly />
            <button onClick={() => setAmount( state=> state < maxQty ? state + 1 : maxQty)}>+</button>
          </div>
        </div>
        <div>
          <Link className='productCard-buttons-detail' to={`/product/${id}`}>Ver detalle</Link>
          <button className='productCard-buttons-addCart' onClick={addCart}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard