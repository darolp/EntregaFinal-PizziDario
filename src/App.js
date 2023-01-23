import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import InfoRow from './components/InfoRow'
import FeaturedProducts from './components/FeaturedProducts'
function App() {
  const featuredProducts = [
    {
      img: 'https://cdn.shopify.com/s/files/1/0496/8602/0247/products/ArtDept_0003_IMG_8650_320x@2x.progressive.jpg?v=1673346480',
      title: 'remera one for the road',
      description: 'remera comoda ideal',
      category: 'remera',
      price: '2000'
    },
    {
      img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/704/127/products/sin-titulo-9011-19ce511845b414abd016637053887337-640-0.webp',
      title: 'Buzo Dragon ball',
      description: '100% algodon',
      category: 'buzo',
      price: '2500'
    },
    {
      img: 'https://d2r9epyceweg5n.cloudfront.net/stores/693/470/products/ozono_31-f498faf89a26d2966215465402112127-640-0.png',
      title: 'Campera Anti viento',
      description: 'ideal para andar en moto',
      category: 'campera',
      price: '5000'
    },
    {
      img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/591/146/products/1-campera-cuero-moto-racer-original-liam-leather1-8cae52c9f06d104e5215566570820639-480-0.jpg',
      title: 'Campera de cuero',
      description: '100% de cuero maxima calidad',
      category: 'campera',
      price: '6000'
    }
  ]
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido"}/>
      <InfoRow/>
      <FeaturedProducts products={featuredProducts}/>
    </>
  )
}

export default App
