import React from "react";
import './Join.css';

const Join = () => {
    return(
        <div className="w-100">
            <div className="img_join">
                <button className="btn btn_buy_coins_join"><i className="fas fa-coins"></i>Buy Tournament Coins</button>
                <h1 className="title_join">JOIN</h1>
            </div>
            <div >
                <div className="row img_rooms">
                    <div id="container_join">
                        <img alt="" className="img_room" src="Assets/Coin/Affiliates/Back1.png"/>
                    </div>
                    <div id="container_join">
                        <img alt="" className="img_room" src="Assets/Coin/Affiliates/Back4.png"/>
                    </div>
                    <div id="container_join">
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

export default Join;