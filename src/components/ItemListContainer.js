import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../data/data.json'
import Loading from './Loading';
import ItemList from './ItemList';

function ItemListContainer() {
  const {category} = useParams()
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(()=>{
        resolve(category ? data.filter(e => e.category === category) : data)
      }, 500);
    });
    promise.then((products) => {
      setProductList(products);
    })
  }, [category]);

  return (
    <>
    <div className='productsFilter'>
        <Link to={'/products'}>Todo</Link>
        <Link to={'/products/remera'}>Remeras</Link>
        <Link to={'/products/campera'}>Camperas</Link>
        <Link to={'/products/buzo'}>Buzos</Link>
    </div>
    
    <div className='productsList'>
      {(productList.length === 0) ?  <Loading/> : <ItemList products={productList}/>}
    </div>
      
    </>
  )
}

export default ItemListContainer