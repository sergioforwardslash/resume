import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.png';
import './navbar.css'

const Menu = () => (
  <>
    <p><a href='/'>Home</a></p>
    <p><a href='/skills'>Skills</a></p>
    <p><a href='/projects'>Projects</a></p>
    <p><a href='/contact'>Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='dff__navbar'>
      <div className='dff__navbar-links'>
        <div className='dff__navbar-links_logo'>
        </div>
        <div className='dff__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='dff__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} className='swirl-in-fwd'/>
        }
        {toggleMenu && (
          <div className='dff__navbar-menu_container slide-in-top'>
            <div className='dff__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar