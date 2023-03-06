import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const Header = () => {


  // Display Menu Buttons
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  // Hide Menu Buttons
  const hideMenu = () => {
    setShowMenu(false)
  }

  return (
    <div >
      <header className='flex justify-between  w-full h-15 border-b border-black-500 bg-white-300 p-4 sticky top-0 left-0 right-0'>
        <a href="" className="flex items-center gap-1">

          {/* Header Logo */}
          <span className='font-bold text-xl'>deutsche international</span>
        </a>

        {/* Header Icon */}
        <div className="header-menu-icon"
          onClick={handleMenuClick}
          style={{
            display: 'none',
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>    


        {showMenu && <div className='flex gap-2 border-gray-300 rounded px-4 py-2 navbar-navigation md:hidden block '>
          {/*Header Navigation  */}
          <Link to={'/'}>Home</Link>
          <Link to={'/facility'}>Facility</Link>
          <Link to={'/staff'}>Staff</Link>
          <Link to={'#about'}>About Us</Link>
          <Link to={'/enroll'}>Admission</Link>

          {/* Exit Btn*/}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            onClick={hideMenu}
            className="w-6 h-6 exitMenu">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

          <a href="" className="flex menu-logo items-center gap-1">

            {/* Header Logo */}
            <span className='font-bold text-xl'>deutsche international</span>
          </a>

          {/*Search Button  */}
          <div className="findbtn">
            <input className="findbtn-text" placeholder='Search' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>}
      </header>
    </div>
  )
}

export default Header