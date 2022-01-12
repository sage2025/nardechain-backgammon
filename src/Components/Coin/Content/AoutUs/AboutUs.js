import React from "react";
import './AboutUs.css';

const AboutUs = () => {
    return(
        <div className="w-100">
            <div className="img_aboutus">
                <button className="btn btn_buy_coins_about"><i className="fas fa-coins"></i>Buy Tournament Coins</button>
                <h1 className="title">About Us</h1>
            </div>
            <div className="form-inline">
                <div className="exp_left">
                    <h6>About Us</h6>
                    <h2>MINDSKILLZ FZCO</h2>
                    <p className="exp_left_label">Mindskillz FZCO, is an approved event company by Dubai Sports Council and exclusive agent for the Worldwide Backgammon Federation (WBF) to organize events and tournaments in the UAE.</p>
                    <br/>
                    <p className="exp_left_label">Mindskillz has 5 entities. Each kind would have leagues and tournaments of its own, and would be held at different venues each game.</p>
                    <p className="exp_left_label">Backgammon</p>
                    <p className="exp_left_label">Nackgammon</p>
                    <p className="exp_left_label">Jailgammon</p>
                    <p className="exp_left_label">Chess League</p>
                    <p className="exp_left_label">Cards League</p>

                </div>
                <div className="exp_right">
                </div>
            </div>
        </div>
    )
}

export default AboutUs;