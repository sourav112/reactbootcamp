import React from 'react'
import Navbar from '../components/shared/Navbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import ProductList from '../components/Product/ProductList'

export default function Homepage() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Categories/>
        <ProductList/>
    </div>
  )
}
