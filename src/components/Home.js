import React from 'react'
import InfoRow from './InfoRow'
import FeaturedProducts from './FeaturedProducts'
import Banner from './Banner'
import About from './About'
import Hero from './Hero'
import featuredProducts from '../data/feacturedProducts.json'
function Home() {
  
  return (
    <>
        <Hero  />
        <InfoRow />
        <FeaturedProducts products={featuredProducts} /> 
        <Banner />
        <About />
    </>
  )
}

export default Home