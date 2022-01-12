import React from "react";
import './Home.css'

const Home = () => {
    return(
        <div className="home">
            <div className="img_home text-center">
                <button className="btn btn_buy_coins_home"><i className="fas fa-coins"></i>Buy Tournament Coins</button>
                <h1 className="title_home">Join the top Backgammon players around the world,</h1>
                <h1 className="subtitle_home">and stay tuned with the latest world wide tournaments</h1>
                <button className="btn_becomemem_home btn btn-danger btn-lg">bacome a memeber</button>
            </div>
            <div className="form-inline">
                <div className="exp_left_home">
                    <h6>HOME</h6>
                    <h2>MINDSKILLZ FZCO</h2>
                    <h6>About Us</h6>
                    <h6>About Us</h6>
                    <h6>About Us</h6>
                    <h6>About Us</h6>
                    <h6>About Us</h6>
                    <h6>About Us</h6>
                    <h6>About Us</h6>
                    <h6>About Us</h6>
     

                </div>
                <div className="exp_right">
                </div>
            </div>
        </div>
    )
}

export default Home;