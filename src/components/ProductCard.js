import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function ProductCard({ id, img, title, description, price, category }) {
  const [amount, setAmount] = useState(1);
  return (
    <div className='productCard' >
      <div className='productCard-img'>
        <img src={img} alt='product' />
      </div>
      <div className='productCard-text'>
        <h2>{title}</h2>
        <span className='tags'>{category}</span>
      </div>
      <div className='productCard-buttons'>
        <div>
          <select className='productCard-buttons-select'>
            <option selected>Talle</option>
            <option value={'xs'}>XS</option>
            <option value={'s'}>S</option>
            <option value={'m'}>M</option>
            <option value={'l'}>L</option>
            <option value={'xl'}>XL</option>
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
          <button className='productCard-buttons-addCart'>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard