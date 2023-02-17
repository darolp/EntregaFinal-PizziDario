import React from 'react'
function ItemDetail({ product }) {
  return (
    <>
      <div className='itemDetalImgContainer'>
        <img alt='product' src={product.img} />
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
    </>
  )
}

export default ItemDetail