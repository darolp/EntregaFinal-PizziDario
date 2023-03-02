import React from 'react'
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import { productService } from '../services/data';
import Loading from './Loading';

function FeaturedProducts() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    productService.getAll().then(response => setProductList(response.filter(item => item.featured)))
  }, []);

  return (
    <>
      <h2 className='featuredProductsTitle'>PRODUCTOS DESTACADOS</h2>
      <div className='FeaturedProducts'>
        {(productList.length === 0) ? <Loading /> : productList.map(e => <ProductCard id={e.id} img={e.img} title={e.title} description={e.description} price={e.price} category={e.category} stock={e.stock} key={e.id} />)}
      </div>
    </>
  )
}

export default FeaturedProducts