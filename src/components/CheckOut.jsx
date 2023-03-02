import React from 'react'
import { useParams } from 'react-router-dom'
function CheckOut() {
  const {id} = useParams()
  return (
    <>
      <h2 className='title'>Gracias por su compra, su numero de orden es: {id}</h2>
    </>
  )
}

export default CheckOut