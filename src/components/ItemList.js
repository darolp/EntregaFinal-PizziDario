import React from 'react'
import ProductCard from './ProductCard';
function ItemList({products}) {
  return (
    <div className='productsList'>{products.map(e=> <ProductCard  id={e.id} img={e.img} title={e.title} description={e.description} price={e.price} category={e.category} stock={e.stock} key={e.id}/> )}</div>
  )
}

export default ItemList