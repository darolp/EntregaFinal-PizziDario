import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Divider, Stack , Text, Heading, Image , DarkMode} from '@chakra-ui/react'

function ProductCard({img, title, description, price, category}) {
  return (

    <div className='productCard' >
      <div className='productCard-img'>
        <img src={img}/>
      </div>
      <div className='productCard-text'>
        <h2>{title}</h2>
        <span className='tags'>{category}</span>
      </div>
      <div className='productCard-buttons'>

      </div>
    </div>
  )
}

export default ProductCard