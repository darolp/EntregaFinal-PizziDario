import React from 'react'

function Banner({title , text}) {
  return (
    <div className='banner'>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Banner