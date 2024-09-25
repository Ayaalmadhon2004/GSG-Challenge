import React from 'react'
import "./header.css"
import Logo from "../images/gsgLogo.png"

const Header = () => {
  return (
    <>
     <div className="containerH container">
        <div className="icon">
           <img src={Logo} alt="icon-img"/> 
        </div>
        <h1><span>GSG</span> Product List</h1>
        <div>
        <button className='btn'>Filter</button>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
     </div>
    </>
  )
}

export default Header
