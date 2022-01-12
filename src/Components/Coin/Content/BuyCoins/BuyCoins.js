import React from "react";
import './BuyCoins.css'

const BuyCoins = () => {

    return(
        <div className="buycoins">
            <div className="img_tranaction">
                <img alt="" src="Assets/Coin/BuyCoins/transaction.png" />
            </div>
            <h1 className="coin_label_header">Buy Tournament Coins</h1>
            <h3 className="coin_label">Small transaction fee will be added upon checkout</h3>
            <h1 className="coin_label_header">Withdraw Tournament Coins</h1>
            <div className="form-inline justify-content-center">
                <input className="form-control cash_out" placeholder="Enter Coins" />
                <button className="btn btn_cash_out cash_out">Cash out</button>
            </div>
        </div>
    )
}

export default BuyCoins;