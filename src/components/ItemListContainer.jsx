import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import ItemList from './ItemList';
import { productService } from '../services/data';

function ItemListContainer() {
  const { category } = useParams()
  const [productList, setProductList] = useState([]);

  useEffect(() => {

    if (category) {
      productService.getAll().then(response => {
        const productsFilter = response.filter(e => e.category == category)
        setProductList(productsFilter);
      })
    } else {
      productService.getAll().then(response => setProductList(response))
    }
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
        {(productList.length === 0) ? <Loading /> : <ItemList products={productList} />}
      </div>

    </>
  )
}

export default ItemListContainer