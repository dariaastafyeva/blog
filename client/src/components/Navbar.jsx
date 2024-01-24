import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png"
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <Link className='link' to='/?art'>
            <h6>ART</h6>
          </Link>
          <Link className='link' to='/?art'>
            <h6>SIENCE</h6>
          </Link>
          <Link className='link' to='/?art'>
            <h6>TEHNOLOGY</h6>
          </Link>
          <Link className='link' to='/?art'>
            <h6>CINEMA</h6>
          </Link>
          <Link className='link' to='/?art'>
            <h6>DESIGN</h6>
          </Link>
          <Link className='link' to='/?art'>
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className='link' to='/login'>
              Login
            </Link>
          )}
          <span className='write'>
            <Link className='link' to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar