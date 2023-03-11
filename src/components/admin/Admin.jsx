import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

function Admin({setIsAdminPage }) {
  useEffect(() => {
    setIsAdminPage(true);
    return () => setIsAdminPage(false);
  }, [setIsAdminPage]);
  return (
    <>
      <div className='adminContainer'>
        <div className='adminMainBar'>
          {/* logo */}1asd
        </div>
        <div className='adminSideBar'>
          <Link to={'/admin'} className="link">Resumen</Link>
          <h2>Productos:</h2>
          <ul>
            <li><Link to={'/addProducts'}>Agregar productos</Link></li>
            <li><Link to={'/listProducts'}>Lista de productos</Link></li>
          </ul>
          <h2>Ordenes:</h2>
          <ul>
            <li><Link to={'/listOrders'}>Lista Ordenes</Link></li>
          </ul>
        </div>
        <div className='adminContent'>
          {/* resume of sales */}2  
        </div>
      </div>
    </>
  )
}

export default Admin