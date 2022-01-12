import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import MatchList from "../Match_List/MatchList";
import './Analysis.css';

const Analysis = () => {
    const [key, setKey] = useState('MatchList');

    return(
        <Tabs
            id="tab_ana"
            activeKey={key}
            defaultActiveKey="MatchList"
            onSelect={(k) => setKey(k)}
            className="mb-3 myClass"
        >
            <Tab eventKey="MatchList" tabClassName="matchlist" title="Match List">
                <MatchList/>
            </Tab>
            <Tab eventKey="blunder"  title="Blunder Database" tabClassName="running">
                <p>No events</p>
            </Tab>

        </Tabs>
    )
}

export default Analysis