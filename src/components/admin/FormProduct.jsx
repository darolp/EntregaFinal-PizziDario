import React from 'react'

function FormProduct({ handleSubmit }) {
  return (
    <>
      <form className='formContainer' onSubmit={handleSubmit}>
        <label>
          Titulo
          <input type="text" placeholder="Agregar Titulo" required/>
        </label>

        <label>
          Precio
          <input type="number" value={0} required/>
        </label>

        <label >
          Desciption
          <textarea placeholder='Agregar descripcion' required></textarea>
        </label>

        <label className='formStock'>
          Stock
          <div>
            <label>
              XS
              <input type="number" required value={0}/>
            </label>
            <label>
              X
              <input type="number" required value={0}/>
            </label>
            <label>
              M
              <input type="number" required value={0}/>
            </label>
            <label>
              L
              <input type="number" required value={0}/>
            </label>
            <label>
              XL
              <input type="number" required value={0}/>
            </label>
          </div>
        </label>

        <label>
          Destacado?
          <input type={'checkbox'} />
        </label>

        <label>
          Imagen princial
          <input type="file" />
        </label>
        <div className='btnContainer'>
          <button className="formSubmit">Agregar</button>
        </div>
      </form>
    </>
  )
}

export default FormProduct