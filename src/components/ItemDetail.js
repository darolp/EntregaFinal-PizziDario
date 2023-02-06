import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/data.json'
function ItemDetail() {
  const {id} = useParams()
  const [product, setProduct] = useState(products.find(e => e.id.toString() === id));
  return (
    <>
      <div className='itemDetailContainer'>
        <div className='itemDetalImgContainer'>
          <img alt='product' src={product.img}/>
        </div>
        <div className='itemDetailTextContainer'>
          <div className='itemDetailTextTitle'>
            <h2 className='title'>{product.title}</h2>
          </div>
          <div className='itemDetailTextInfo'>
            <div>{product.description}</div>
            <div>Precio: ${product.price}</div>
          </div>
          <div className='itemDetailTextButtons'>
            <button className='itemDetailTextButtons-buyNow'>Comprar Ahora</button>
            <button className='itemDetailTextButtons-addCart'>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail