import React from 'react'
import { Button } from '@mui/material';
import './Footer2.css';
import VISA from "../../assets/visa.png";
import AExpress from "../../assets/aExpress.png";
import MasterCard from "../../assets/masterCard.png";
import Maestro from "../../assets/maestro.png";

import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import YouTube from "../../assets/youtube.png";
import Pinterest from "../../assets/pinterest.png";
import Whatsapp from "../../assets/whatsapp.png"; 
import Copyright from "../../assets/copyright.png";


const Footer2 = () => {
  return (
    <div className='main-footer2'>
      <div className="container">
             
      <div className="row">
        <div className="col1"> 
        <p className='heading'>Join Our NewsLetter</p>
        <div className="form-group">
            <input
                type='text'
                name='email'
                className='form-control formInput'
                placeholder='Enter e-mail address'
                style={{ fontSize: '16px' }}
            />
            <Button variant="contained" className='buttonSub'>SUBSCRIBE </Button>
        </div>
        <div className="details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  <br /> 
            eiusmod tempor incididunt ut labore et commodo ullamco<br /> 
            dolore magna aliqua. Ut enim ad minim veniam, nostrud. <br /></p>
        </div>
         </div>
         
         </div>



            <div className="row" >
            <div className="col1">
                <div className="cardSocial">
                <div className="cards">
                    <img src={VISA} alt="" width={50} />
                    <img src={AExpress} alt="" width={50}/>
                    <img src={MasterCard} alt=""width={50} />
                    <img src={Maestro} alt="" width={50}/>
                </div>

                <div className="social">
                    <h3> CONTACT US  | <img src={Facebook} alt="" width={18} /> 
                                     <img src={Twitter} alt="" width={18}/>
                                     <img src={YouTube} alt="" width={18}/>
                                     <img src={Pinterest} alt="" width={18}/>
                                     <img src={Whatsapp} alt="" width={18}/></h3>
                </div>

                <div className="copyright">
                    <img src={Copyright} alt="" width={14} /> <p> 2009 - 2023 Sample lorim ipsu. All Rights Reserved. </p>
                </div>
                </div>
            </div>
            </div>

        </div>
    </div>

  )
}

export default Footer2
