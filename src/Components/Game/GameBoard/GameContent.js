import React from 'react';

const GameContent = () => {
    return (
        <div className="col-md-9 col-sm-12">
            <div className="row">
                <div className="col-md-10 col-sm-12">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="d-flex align-items-stretch game-content" style={{ marginLeft: "1.5rem" }}>
                                <div className="game-score-bar">
                                    <div className="bg-light text-center border-radius-10 game-score">
                                        <label className="h3 bold">0</label>
                                    </div>
                                    <div id="game-level-panel" className="border-radius-10 text-center">
                                        <div>
                                            <span className="text-white game-time">10:00</span>
                                        </div>
                                        <div id="game-level">
                                            <span className="text-white">5</span>
                                        </div>
                                        <div>
                                            <span className="text-white game-time">10:00</span>
                                        </div>
                                    </div>
                                    <div className="bg-light text-center border-radius-10 game-score">
                                        <label className="h3 bold">0</label>
                                    </div>
                                </div>
                                <div className="game-panel">
                                    <div className="d-flex align-items-stretch game-panel-up">
                                        <div style={{ backgroundImage: "url('Assets/column1.png')" }} className="column">
                                            <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column2.png')" }} className="column">
                                            
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column1.png')" }} className="column">
                                            <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column2.png')" }} className="column">
                                            <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column1.png')" }} className="column">
                                            <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column2.png')" }} className="column">
                                            <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                        </div>
                                    </div>
                                    <div className="game-panel-middle" style={{ backgroundImage: "url('Assets/game-back.png')" }} />
                                    <div className="d-flex align-items-stretch game-panel-down">
                                        <div style={{ backgroundImage: "url('Assets/column-down2.png')" }} className="column">
                                            <div>
                                                <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                                <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                                <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                                <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column-down1.png')" }} className="column">
                                            <div>
                                                <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column-down2.png')" }} className="column">
                                            <div>
                                                <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column-down1.png')" }} className="column">
                                            <div>
                                                <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column-down2.png')" }} className="column">
                                            <div>
                                                <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                                <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column-down1.png')" }} className="column">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="d-flex align-items-stretch game-content">
                                <div className="game-score-bar">
                                    <div className="text-center game-score">
                                        <label className="h3 bold text-white">161</label>
                                    </div>
                                    <div className="text-center border-radius-10 bg-lightblue game-user-score">
                                        <label className="text-white h2 bold">64</label>
                                    </div>
                                    <div className="text-center game-score">
                                        <label className="h3 bold text-white">167</label>
                                    </div>
                                </div>
                                <div className="game-panel">
                                    <div className="d-flex align-items-stretch game-panel-up">
                                        <div style={{ backgroundImage: "url('Assets/column1.png')" }} className="column">
                                            <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                            <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                            <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                            <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column2.png')" }} className="column">
                                            <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                            
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column1.png')" }} className="column">
                                            <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                            
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column2.png')" }} className="column">
                                            <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                            
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column1.png')" }} className="column">
                                            <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                            
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column2.png')" }} className="column">
                                            <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                            
                                        </div>
                                    </div>
                                    <div className="game-panel-middle" style={{ backgroundImage: "url('Assets/game-back.png')" }} />
                                    <div className="d-flex align-items-stretch game-panel-down">
                                        <div style={{ backgroundImage: "url('Assets/column-down2.png')" }} className="column">
                                            <div>
                                                <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column-down1.png')" }} className="column">
                                            <div>
                                                <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column-down2.png')" }} className="column">
                                            <div>
                                                <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column-down1.png')" }} className="column">
                                            <div>
                                                <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                                <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column-down2.png')" }} className="column">
                                            <div>
                                                <img alt="" src="Assets/white-stone.png" className="stone-img" />
                                            </div>
                                        </div>
                                        <div style={{ backgroundImage: "url('Assets/column-down1.png')" }} className="column">
                                            <div>
                                                <img alt="" src="Assets/black-stone.png" className="stone-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-12" id="game-stone-bar">
                    <div className="row">
                        <div className="col-md-12 col-sm-4 col-4">
                            <div className="game-stones">
                                <div className="game-stone bg-white" />
                                <div className="game-stone bg-white" />
                                <div className="game-stone bg-white" />
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-4 col-4">
                            <div style={{ padding: "40% 0" }}>
                                <div id="game-dices">

                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-12 col-sm-4 col-4">
                            <div className="game-stones">
                                <div className="game-stone bg-purple" />
                                <div className="game-stone bg-purple" />
                                <div className="game-stone bg-purple" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameContent;