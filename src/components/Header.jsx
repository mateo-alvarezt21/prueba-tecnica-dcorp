import React from 'react'
import "./styles/Header.css"

const Header = () => {
  return (
    <header className='header'>
        <div className="header1">
            <div className='header__logo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" alt="" />
            </div>
            <h2>HOME</h2>
            <h2>PERSONAJES</h2>
        </div>
        <div className='header2'>
            <i className='bx bxs-bell'></i>
            <i className='bx bxs-cog' ></i>
        </div>
    </header>
  )
}

export default Header