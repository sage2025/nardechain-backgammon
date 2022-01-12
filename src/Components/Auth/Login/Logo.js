import React from "react";

//, width, marginLeft

const Logo = ({ logo, label}) => {
    return(
        <div className="col-lg-12 text-center" >
            <img alt="" src={logo} alt="" style={{width:"5%", height:"5%"}} />
            <div className="shadow text-center" style={{height:"40px", marginTop:"-15px" }}>
                <span style={{fontSize:"15px", fontWeight:"600", color:"#6C50FA"}}>{label}</span>
            </div>
        </div>
    )
}

export default Logo;