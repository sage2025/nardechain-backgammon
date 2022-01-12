import React from "react";
import './CoinFooter.css';

const CoinFooter = () => {
    return(
        <div className="w-100">
            <footer className="page-footer font-small blue-grey lighten-5">
                <div style={{backgroundColor: "rgb(144, 65, 65)"}}>
                    <div className="">
                        <div className="text-left contact_us">
                            <h1>Contact Us</h1>
                            <p>"Let the battle of FEARLESS Minds begin"</p>                        
                        </div>
                        <div className="form-inline">

                            <div className="footer_parts">
                                <i className="fa fa-map-marker-alt mr-1" aria-hidden="true"></i>
                                <span>Map</span>
                                <p className="footer_labels">Dubai Silicon Oasis, Dubai UAE</p>
                            </div>                            
                            <div className="footer_parts">
                                <i className="fa fa-phone-alt mr-1" aria-hidden="true"></i>
                                <span>Phone</span>
                                <p className="footer_labels">+971 50 853 0510</p>
                            </div>
                            <div className="footer_parts">
                                <i className="far fa-envelope-square mr-1"></i>
                                <span>Email</span>
                                <p className="footer_labels">play@mindskillzme.com</p>
                            </div>
                            <div className="footer_parts">
                                <i className="far fa-share-alt mr-1"></i>
                                <span>Social Media</span>
                                <p className="footer_labels">
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab ml-2 fa-facebook-f"></i>
                                </p>
                            </div>     
                            <div className="footer_parts_submit">
                                <p>Newsletter</p>
                                <div className="form-inline">
                                    <input className="form-control footer_parts_submit_input"/>
                                    <button className="btn btn-sm btn-secondary ml-3">Submit</button>
                                </div>
                            </div>    

                        </div>
                        <div className="footer-copyright text-center text-white-50 py-3">© 2021 Copyright:
                        </div>

                    </div>
                </div>




            </footer>
        </div>
    )
}

export default CoinFooter;