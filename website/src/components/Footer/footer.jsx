import React from 'react'
import './footer.css';
import FooterImg from "../../assets/coffelogo01.png";
import Location from "../../assets/pin.png";
import Call from "../../assets/phone-call.png";
import Mail from "../../assets/email.png";

const footer = () => {
  return (
    <div>
       <div className='main-footer'>
    <div className="container">
             <div className="row">

            <div className="col1"> 
                  <img src={FooterImg} alt="" width={60} /> 
                    <p><img src={Location} alt="" width={12} style={{ marginRight: '5px' }} />10-14 Perent Road,</p>
                    <p style={{ marginLeft: '16px' }}>Colombo, W11 1EN</p>
                    <p style={{ marginLeft: '16px' }}>Srilanka</p>
                    <p> <img src={Call} alt="" width={12} style={{ marginRight: '5px' }}/>0205 334 3671</p>
                    <p><img src={Mail} alt="" width={12} style={{ marginRight: '5px', alignItems: "center"}}/>samplemail@gmail.com</p>
            </div>

            </div>
            <div className="row">

            <div className="col1">
                <p className='heading'>QUICK LINKS</p>
                <ul className="list-unstyled">
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Career</li>
                    <li>Chech-List</li>
                </ul>
            </div>
            </div>
        <div className="row">

            <div className="col1">
            <p className='heading'>IMPORTANT LINKS</p>
                <ul className="list-unstyled">
                    <li>Payment Policy</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>

        <div className="row">

<div className="col1">
    <p className='heading'>QUICK LINKS</p>
    <ul className="list-unstyled">
        <li>Visit Example</li>
        <li>Visit Example</li>
        <li>Visit Example</li>
        <li>Visit Example</li>
    </ul>
</div>
</div>


    </div>
</div>
    </div>
  )
}

export default footer
