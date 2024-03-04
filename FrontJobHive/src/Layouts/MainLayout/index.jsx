import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import SearchSeaction from '../../Components/LayoutsComponents/SearchSection'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <SearchSeaction/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout