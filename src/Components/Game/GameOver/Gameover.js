import React, { useEffect, useState } from 'react';
import './Gameover.css';

function Gameover() {
    const [gameResult, setGameResult] = useState("");
    useEffect(() => {
        // var result = localStorage.getItem('result');
        setGameResult(localStorage.getItem('result'));
        console.log(localStorage.getItem('result'))
    });
    return(
        
            gameResult === "1" ? 
            (
                <div className="gameover-container" style={{ backgroundImage: "url('Assets/gameover.png')"}}>
                    <div className="row">
                        <div className="col-md-4" />
                        <div className="col-md-4">
                            <div style={{ backgroundImage: "url('Assets/win.png')" }} className="win-img">
                                <img alt="" src="Assets/avatar.png" className="image" id="avatar-img" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-white bold">You Win!</label>
                    </div>
                    <div>
                        <span className="text-white bold h5">drcyber1</span>
                    </div>
                    <div>
                        <span className="text-purple h6 bold">
                            6 level
                        </span>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-sm-3 col-3" />
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="coin-plus text-center">
                                <img alt="" src="Assets/coin2.png" />
                                    <span className="text-white bold">+10 000</span>
                                <div className="text-center">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="continue-panel">
                        <button className="btn btn-lg btn-purple" id="btn_continue">
                            Continue
                        </button>
                    </div>
                </div>
            )
            :
            (
                <div className="gameover-container" style={{ backgroundImage: "url('Assets/gameover.png')"}}>
                    <div className="row">
                        <div className="col-md-4" />
                        <div className="col-md-4">
                            <div style={{ backgroundImage: "url('Assets/lose.png')" }} className="win-img">
                                <img alt="" src="Assets/avatar.png" className="image" id="avatar-img" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-white bold">You Lose!</label>
                    </div>
                    <div>
                        <span className="text-white bold h5">drcyber1</span>
                    </div>
                    <div>
                        <span className="text-purple h6 bold">
                            5 level
                        </span>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-sm-3 col-3" />
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="coin-plus text-center">
                                <img alt="" src="Assets/coin2.png" />
                                    <span className="text-white bold">+200</span>
                                <div className="text-center">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="continue-panel">
                        <button className="btn btn-lg btn-purple" id="btn_continue">
                            Continue
                        </button>
                    </div>
                </div>
            )
        
        
    )
}

export default Gameover;