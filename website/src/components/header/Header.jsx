import React from 'react'
import './header.css';
import '../../index.css'
import Logo from "../../assets/coffeeShop.png";


const Header = () => {
  return (
    <nav className="container">

       <img className="logo" src={Logo} alt=""/> 

       <button className="button"> Contact </button>   
       
   </nav> 
  )
}

export default Header


