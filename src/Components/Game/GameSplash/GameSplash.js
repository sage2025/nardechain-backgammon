import React, {useEffect} from "react";
import './GameSplash.css';
import queryString from 'query-string';
import Spinner from 'react-bootstrap/Spinner';
import history from "../../../history";

const GameBoard = ({ location }) => {
    const { name, room } = queryString.parse(location.search);

    useEffect(() => {
        var time_out = setInterval(() =>{
            clearInterval(time_out);
            history.push('/gameplay?name='+name+'&room='+room);
        }, 5000);
    })     
    return(
        <div className="splash-container bg-image" style={{ backgroundImage: "url('Assets/game_background.png')" }}>
            <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="user-avatar">
                                <img alt="" src="Assets/avatars/Ava00.png" className="avatar-img" />
                            </div>
                            <p className="text-center"> 
                                <h3 className="username">drcyber1</h3>
                                <span className="user-level">5 level</span>
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12 text-center">
                            <img alt="" src="Assets/vs.png" className="vs-img" />
                        </div>
                        <div className="col-md-4 col-sm-12 col-12">
                            <div className="user-avatar">
                                <img alt="" src="Assets/avatar2.png" className="avatar-img" />
                            </div>
                            <p className="text-center">
                                <h3 className="username">Takil0</h3>
                                <span className="user-level">10 level</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4" />
                <div className="col-md-4 stake-panel text-center">
                    <img alt="" src="Assets/coin-box.png" id="coin-box" />
                    <h2 className="text-uppercase" id="stake-label">stake: 10 000</h2>
                    <img alt="" src="Assets/coin.png" id="coin" />
                </div>
            </div>
            <div className="spinner-panel">
                <h5 className="text-center">
                    <Spinner animation="border" variant="primary" id="game-spinner" />&nbsp;
                    <label id="prepare-label">
                        Preparing the game...
                    </label>
                </h5>
            </div>
        </div>
    )
    
}

export default GameBoard;