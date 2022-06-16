import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Article from '../Pages/Article'
import Entertainment from '../Pages/Entertainment'
import Home from '../Pages/Home'
import Nation from '../Pages/Nation'
import Sports from '../Pages/Sports'
import Tech from '../Pages/Tech'
import World from '../Pages/World'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'

const AllRoutes = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/entertainment" element={<Entertainment/>}></Route>
        <Route path="/nation" element={<Nation/>}></Route>
        <Route path='/world' element={<World/>}></Route>
        <Route path='/technology' element={<Tech/>}></Route>
        <Route path='/sports' element={<Sports/>}></Route>
        <Route path='/articles' element={<Article/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default AllRoutes