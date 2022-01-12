import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {setClick(!click)}
    useEffect(() => {
        var navbar = document.getElementsByClassName('navbar_coin');
        var navbartop = document.getElementsByClassName('top');

        var sticky = navbar[0].offsetTop;    
        window.onscroll = function name(e) {
            console.log("a", sticky, window.scrollY)
            if (window.scrollY-100 >= sticky) {
                navbar[0].classList.add('sticky')
                navbartop[0].classList.add('disappear')
              } else {
                navbar[0].classList.remove('sticky');
                navbartop[0].classList.remove('disappear')
              }
        }
    
    }, [])

    return(
        <div>
            <div className="float-right form-inline top">
                <div className="form-inline nav_shop mt-5 mr-3">
                    <p className="top_sticky_lable mt-3">0 Item(s) - AED 0 - 0 <strong>point(s)</strong> </p>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div>
                    <div>
                        <i className="fa fa-user"></i>
                    </div>
                    <Link className="nav_auth" to="/">Login and Register</Link>
                </div>
            </div>

            <div className={click?"active navbar_coin w-100":" navbar_coin w-100"}>
                <Link className="nav_items" onClick={handleClick} to="/">CONTACT US</Link>
                <Link className="nav_items" onClick={handleClick} to="/">E-SHOP</Link>
                <Link className="nav_items" onClick={handleClick} to="/">TOP PLAYERS</Link>
                <Link className="nav_items" onClick={handleClick} to="/coin/tutorial">TUTORIAL</Link>
                <Link className="nav_items" onClick={handleClick} to="/coin/join">JOIN</Link>
                <Link className="nav_items" onClick={handleClick} to="/coin/members">MEMBERS</Link>
                <Link className="nav_items" onClick={handleClick} to="/coin/affiliates">AFFILIATES</Link>
                <Link id="dropTour" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav_items dropdown-toggle" onClick={handleClick} to="/">TOURNAMENT</Link>
                    <div className="dropdown-menu tour_items" aria-labelledby="dropTour">
                        <Link to="/" className="dropdown-item tour_letter" href="#">Local venues</Link>
                        <Link to="/" className="dropdown-item tour_letter" href="#">CALENDAR</Link>
                        <Link to="/" className="dropdown-item tour_letter" href="#">MERIT INTERNATIONAL OASIS <br/> BACKGAMMON CUP</Link>
                        <Link to="/" className="dropdown-item tour_letter" href="#">ONLINE TOURNAMENTS</Link>
                    </div>
                <Link className="nav_items" onClick={handleClick} to="/coin/aboutus">ABOUT US</Link>
                <Link className="nav_items" onClick={handleClick} to="/coin/home">Home</Link>

            </div>
        </div>
    )
}

export default Header;