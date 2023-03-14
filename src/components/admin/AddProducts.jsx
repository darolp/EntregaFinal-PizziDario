import React from 'react'
import FormProduct from './FormProduct'
function AddProducts() {

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