import React from 'react'
import ProductCard from './ProductCard';
import { useState } from 'react';
function FeaturedProducts({products}) {
  const [productList, setProductList] = useState(products);
  return (
    <>
      <h2>Feactured Products</h2>
      <div className='featuredProductsFilter'>
        <button onClick={() =>setProductList(products)}>Todo</button>
        <button onClick={()=>setProductList(products.filter(e=> e.category == 'remera'))}>Remeras</button>
        <button onClick={()=>setProductList(products.filter(e=> e.category == 'campera'))}>Camperas</button>
        <button onClick={() =>setProductList(products.filter(e=> e.category == 'buzo'))}>Buzos</button>
      </div>
      <div className='products'>
        {productList.map(e=> <ProductCard  img={e.img} title={e.title} description={e.description} price={e.price} category={e.category} /> )}
      </div>
    </>
  )
}

export default FeaturedProducts