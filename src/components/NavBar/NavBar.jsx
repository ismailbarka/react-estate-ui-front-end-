import React, { useState } from 'react'
import './navBar.scss'
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [open , setOpen] = useState(false);

  const user = true;

  return (
        <nav>
            <div className="left">
              <a href='/' className='logo'>
                <img src="/logo.png" alt="logo"/>
                <span>lamaEstate</span>
              </a>
              <a href='/'>Home</a>
              <a href='/'>About</a>
              <a href='/'>Contact</a>
              <a href='/'>Agents</a>
            </div>
            <div className="right">
              {
              user ? <div className='user'>
                <img src="/logo.png" alt="" />
                <span>Ismail barka</span>
                <Link className='profile' to="/profile">
                  <div className="notification">3</div>
                  <span>Profile</span>
                </Link>
              </div> :
              <>
                <a href='/' className='SignIn'>SignIn</a>
                <a href='/' className="SignUp">SignUp</a>
              </>
              }
              <div className="menuIcon">
                <img alt='menu.png' src='/menu.png' onClick={() =>setOpen(!open)}/>
              </div>
              <div className={open ? "menu active": "menu"}>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
                <a href='/'>SignIn</a>
                <a href='/'>SignUp</a>
              </div>
            </div>
        </nav>
  )
}

export default NavBar
