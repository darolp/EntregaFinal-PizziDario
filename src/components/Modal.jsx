import React from 'react'

function Modal({buyerInfo , handleBuyerInfoChange , handleCompletePurchase, setShowModal}) {
  return (
    
    <div className='modalContainer'>
    <div className='modalBox'>
      <h2>Completa tus datos para realizar la compra</h2>
      <form className='modalForm'>
        <label>
          Nombre:
          <input type='text' className='modalInput' name='name' value={buyerInfo.name} onChange={handleBuyerInfoChange} required />
        </label>
        <label>
          Teléfono:
          <input type='tel' className='modalInput' name='phone' value={buyerInfo.phone} onChange={handleBuyerInfoChange} required />
        </label>
        <label>
          Correo electrónico:
          <input type='email' className='modalInput' name='email' value={buyerInfo.email} onChange={handleBuyerInfoChange} required />
        </label>
        <label>
          Dirección:
          <input type='text' className='modalInput' name='address' value={buyerInfo.address} onChange={handleBuyerInfoChange} required />
        </label>
      </form>
      <div className='modalButtonContainer'>
      <button className='modalButton' onClick={handleCompletePurchase}>Completar compra</button>
      <button className='modalButton' onClick={() => setShowModal(false)}>Volver</button>
      </div>
    </div>
  </div>
  )
}

export default Modal