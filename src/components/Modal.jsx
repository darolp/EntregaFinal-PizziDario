import React from 'react'

function Modal({ buyerInfo, handleBuyerInfoChange, handleCompletePurchase, setShowModal, handleCheckEmail, validMail }) {
  return (
    <div className='modalContainer'>
      <div className='modalBox'>
        <h2>Completa tus datos para realizar la compra</h2>
        <form className='modalForm'>
          <label>
            Nombre:
          </label>
          <input type='text' className='modalInput' name='name' value={buyerInfo.name} onChange={handleBuyerInfoChange} required />
          <label>
            Teléfono:
          </label>
          <input type='tel' className='modalInput' name='phone' value={buyerInfo.phone} onChange={handleBuyerInfoChange} required />
          <label>
            Correo electrónico:
          </label>
          <input type='email' className='modalInput' name='email' value={buyerInfo.email} onChange={handleBuyerInfoChange} required />
          <label>
            Confirmar Correo:
          </label>
          <input type='email' className={validMail ? 'modalInput' : ` modalInput invalid`} name='email'  onChange={handleCheckEmail} required />
          <label>
            Dirección:
          </label>
          <input type='text' className='modalInput' name='address' value={buyerInfo.address} onChange={handleBuyerInfoChange} required />
        </form>
        <div className='modalButtonContainer'>
          <button className='modalButton-buy' disabled={validMail} onClick={handleCompletePurchase}>Completar compra</button>
          <button className='modalButton-back' onClick={() => setShowModal(false)}>Volver</button>
        </div>
      </div>
    </div>
  )
}

export default Modal