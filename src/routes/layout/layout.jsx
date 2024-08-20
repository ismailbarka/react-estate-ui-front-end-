import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../homaPage/HomePage'
import { Outlet } from 'react-router-dom'
import "./layout.scss"

const Layout = () => {
  return (
    <div className="layout">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
