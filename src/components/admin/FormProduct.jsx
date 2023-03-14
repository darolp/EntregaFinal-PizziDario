import React from 'react'

function FormProduct({ handleSubmit }) {
  return (
    <>
      <form className='formContainer'>
        <label>
          Titulo
          <input type="text" placeholder="Agregar Titulo" />
        </label>

        <label>
          Precio
          <input type="number" />
        </label>

        <label >
          Desciption
          <textarea placeholder='Agregar descripcion'></textarea>
        </label>

        <label className='formStock'>
          Stock
          <div>
            <label>
            XS
            <input type="number" />
            </label>
            <label>
            X
            <input type="number" />
            </label>
            <label>
            M
            <input type="number" />
            </label>
            <label>
            L
            <input type="number" />
            </label>
            <label>
            XL
            <input type="number" />
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

        <button onSubmit={handleSubmit}>submit</button>
      </form>
    </>
  )
}

export default FormProduct