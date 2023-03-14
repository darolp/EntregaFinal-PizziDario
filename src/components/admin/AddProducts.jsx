import React, {useState} from 'react'

import FormProduct from './FormProduct'
function AddProducts() {

  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0,
    description: '',
    stock: {
      xs: 0,
      s: 0,
      m: 0,
      l: 0,
      xl: 0
    },
    feactured: false,
    img: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("llegue aca")
  }

  return (
    <>
      <div className='addProductsContainer'>
        <h2>Agregar Productos</h2>
        <FormProduct handleSubmit={handleSubmit} />
      </div>
    </>
  )
}

export default AddProducts