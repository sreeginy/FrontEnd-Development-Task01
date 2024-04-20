import React from 'react';
import './header.css';
import '../../index.css';
import Logo from "../../assets/logoCoffee01.png";
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const Header = () => {

  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate('/contact-us');
  };


  return (
    <nav className="container">

       <img className="logo " src={Logo} alt=""/> 

       <button className="button" onClick={handleConsultationClick}> Contact </button>   
       
   </nav> 
  )
}

export default Header


