import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import history from "../../../history";
import TourTable from "./TourTable/TourTable";
import './PreTournament.css';
import TourMatches from "./TourMatches.js/TourMatches";
import TourTC from "./TourTC/TourTC";

const PreTournament = () => {
    const [key, setKey] = useState('players');

    return(
        <div>
            <div style={{width:"100%", backgroundColor:"#F1F5FF", padding:"10px"}} className="text-left">
                <button className="btn pretour_btn_back shadow" onClick={() => {history.push("/tournaments")}} style={{fontWeight:"600"}}><i className="mr-2 fa fa-arrow-left" aria-hidden="true"></i> back</button>
            </div>
            <div className="pretour_board text-center">
                <div className="pretour_subnav form-inline">
                    <div className="" style={{width:"5%", marginLeft:"1%"}}>
                        <img alt="" src="Assets/Logo.png" alt="" style={{width:"100%", height:"70%"}} />
                    </div>
                    <div>
                        <img alt="" src="Assets/avatar2.png" alt="" style={{ width:"100px", height:"100px" }} />
                    </div>
                    <div>
                        <h4 style={{color:"white", fontWeight:"600"}}>Freeroll Tournament 2 TC Added #226</h4>
                        <h6 style={{color:"white"}}>Lift off: Friday, November 9th 2021, 21:00 Countdown: 03:04</h6>

                    </div>
                </div>
                <div className="pretour_subnav_below form-inline">
                    <div className="pre_sub_left form-inline">
                        <div className="ml-3">
                            <strong>Buy-in: </strong>
                            <span>0.00 + 0.00 TC</span>
                        </div>
                        <div className="ml-3">
                            <strong>Format: </strong>
                            <span>Single Elimination</span>
                        </div>                    
                        <div className="ml-3">
                            <strong>Lenght: </strong>
                            <span>7 points</span>
                        </div>             
                        <div className="ml-3">
                            <strong>Clock: </strong>
                            <span>Speed</span>
                        </div>         
                        <div className="ml-3">
                            <strong>Schedule: </strong>
                            <span>Dynamic</span>
                        </div>     
                    </div>
                    <div className="pre_sub_right">
                        <button className="ml-3 btn btn_tour_moreinfo">More Info</button>                                     
                    </div>
                </div>
                <button className="btn btn_tour_join mb-3 btn-lg">Join Tournament</button>
                <Tabs
                    id="tab_account"
                    activeKey={key}
                    defaultActiveKey="players"
                    onSelect={(k) => setKey(k)}
                    className="mb-3 myClass"
                >
                    <Tab eventKey="players" tabClassName="players" title={<p>60 players</p>}>
                        <TourTable/>
                    </Tab>
                    <Tab eventKey="match" title={<p>0 Matches</p>}>
                        <TourMatches/>
                    </Tab>
                    <Tab eventKey="tc" tabClassName="tc" title={<p>0.00 TC</p>}>
                        <TourTC/>
                    </Tab>
                    <Tab eventKey="bracket" tabClassName="bracket" title={<p>Brackets</p>}>
                        <p>bb</p>
                    </Tab>
                </Tabs>
            </div>


        </div>
    )
}

export default PreTournament;