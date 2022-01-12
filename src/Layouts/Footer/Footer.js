import React, { useState, useEffect } from "react";
import './Footer.css'

const Footer = () => {
    var today = new Date();
    var hours = today.getHours();
    var mins = today.getMinutes();
    const [hour, setHour] = useState(hours)
    const [min, setMin] = useState(mins)

    useEffect(()=>{
        setHour(hours);
        setMin(mins);
    }, [hours, mins])
    return(
        <div className="footer">
            <div className="form-inline">
                <div className="form-inline timebar">
                    <h3>{hour}: </h3>
                    <h3>{min}</h3>
                </div>
                <marquee width="" direction="left comment"  >
                    <strong>System message : </strong>
                    Heads up tournaments with Tournament Coin Stake is now available in the Play Lobby. To buy Tournament Coins via Paypal, get in contact or write to
                    patrickgebeili@gmail.com !
                </marquee>
                <div>

                </div>
            </div>
        </div>
        // <div>
        //     <div class="fixed-header">
        //         <div class="container">
        //             <nav>
        //                 <a href="#">Home</a>
        //                 <a href="#">About</a>
        //                 <a href="#">Products</a>
        //                 <a href="#">Services</a>
        //                 <a href="#">Contact Us</a>
        //             </nav>
        //         </div>
        //     </div>
        //     <div class="container">
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        //     </div>    
        //     <div class="fixed-footer">
        //         <div class="container">Copyright &copy; 2016 Your Company</div>        
        //     </div>
        // </div>
    )
}

export default Footer;