import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { productService } from '../services/data'
function ItemDetail() {
  const {id} = useParams()
  const [product, setProduct] = useState();

  useEffect(() => {
    productService.get(id).then(response => console.log(response))
  }, [id]);
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