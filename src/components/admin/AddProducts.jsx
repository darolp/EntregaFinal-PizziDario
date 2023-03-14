import React from 'react'
import FormProduct from './FormProduct'
function AddProducts() {

  const handleSubmit = (e) => {
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