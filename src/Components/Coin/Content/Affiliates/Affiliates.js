import React from "react";
import './Affiliates.css';

const Affiliates = () => {
    return(
        <div className="w-100">
            <div className="img_aff">
                <button className="btn btn_buy_coins_aff"><i className="fas fa-coins"></i>Buy Tournament Coins</button>
                <h1 className="title_aff">AFFILIATES</h1>
                <h1 className="title_aff">Weekly Tournaments Every Sunday in Israel</h1>
            </div>
            <div >
                <div className="row img_rooms">
                    <div id="container_aff">
                        <img alt="" className="img_room" src="Assets/Coin/Affiliates/Back1.png"/>
                    </div>
                    <div id="container_aff">
                        <img alt="" className="img_room" src="Assets/Coin/Affiliates/Back4.png"/>
                    </div>
                    <div id="container_aff">
                        <img alt="" className="img_room" src="Assets/Coin/Affiliates/Back5.png"/>
                    </div>

                </div>
                {/* <div className="img_room">
                    <img alt="" src="Assets/Coin/Affiliates/Back3.png" />
                </div>
                <div className="img_room">
                    <img alt="" src="Assets/Coin/Affiliates/Back3.png" />
                </div> */}
            </div>
        </div>
    )
}

export default Affiliates;