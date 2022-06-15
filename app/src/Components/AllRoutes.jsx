import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Entertainment from '../Pages/Entertainment'
import Home from '../Pages/Home'
import Nation from '../Pages/Nation'
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
      </Routes>
      <Footer/>
    </>
  )
}

export default AllRoutes