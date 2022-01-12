import React from "react";
import Card from './Card/Card'
import './Tutorial.css';

const Tutorial = () => {
    return(
        <div className="w-100">
            <div className="img_tour">
                <button className="btn btn_buy_coins_tour"><i className="fas fa-coins"></i>Buy Tournament Coins</button>
                <h1 className="title_tour">TUTORIALS</h1>
            </div>
            <div >
                <h1 className="elearn_label mt-5">
                    E-LEARNING PACKAGES
                </h1>
                <div className="mt-5 mb-5">
                    <button className="btn btn_tour">1</button>
                    <i className="fa fa-arrow-right arrow" aria-hidden="true"></i>
                    <button className="btn btn_tour">2</button>
                    <i className="fa fa-arrow-right arrow" aria-hidden="true"></i>
                    <button className="btn btn_tour">3</button>
                    <i className="fa fa-arrow-right arrow" aria-hidden="true"></i>
                    <button className="btn btn_tour">4</button>
                    <i className="fa fa-arrow-right arrow" aria-hidden="true"></i>
                    <button className="btn btn_tour">5</button>
                </div>
                <div className="form-inline justify-content-center mb-5">
                    {/* <Card title="Beginer" label="Playing a match with live comment pointing on mistakes."/>
                    <Card title="Professional" label="Playing a match with live comment and analysis afterwards."/>
                    <Card title="Master" label="The same as Professional + additional analysis using reference positions."/> */}
                </div>
            </div>
        </div>
    )
}

export default Tutorial;