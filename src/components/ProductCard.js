import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function ProductCard({ id, img, title, price, stock }) {
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("");

  const addCart = () => {

  }
  return (
    <div className='productCard' >
      <div className='productCard-img'>
        <img src={img} alt='product' />
      </div>
      <div className='productCard-text'>
        <h2>{title}</h2>
        <span className='tags'>${price}</span>
      </div>
      <div className='productCard-buttons'>
        <div>
          <select className='productCard-buttons-select' onChange={(e) => setSize(e.target.value)}>
            <option selected>Talle</option>
            <option value={'xs'} disabled={stock.xs === 0 ? true : false}>XS</option>
            <option value={'s'} disabled={stock.s === 0 ? true : false}>S</option>
            <option value={'m'} disabled={stock.m === 0 ? true : false}>M</option>
            <option value={'l'} disabled={stock.l === 0 ? true : false}>L</option>
            <option value={'xl'} disabled={stock.xl === 0 ? true : false}>XL</option>
          </select>
          <div className='productCard-buttons-amount'>
            <label>Cantidad: </label>
            <button onClick={() => setAmount(amount > 1 ? amount - 1 : 1)}>-</button>
            <input type='number' value={amount} />
            <button onClick={() => setAmount(amount + 1)}>+</button>
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