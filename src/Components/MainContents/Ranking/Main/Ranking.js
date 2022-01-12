import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Rating from "../Rating/Rating";
import './Ranking.css';

const Ranking = () => {
    const [key, setKey] = useState('rating');

    return(
        <Tabs
            id="tab_rank"
            activeKey={key}
            defaultActiveKey="MatchList"
            onSelect={(k) => setKey(k)}
            className="mb-3 myClass"
        >
            <Tab eventKey="rating" tabClassName="rating" title="Rating">
                <Rating/>
            </Tab>
            <Tab eventKey="experience"  title="Experience Points" tabClassName="experience">
                <p>No events</p>
            </Tab>

        </Tabs>
    )
}

export default Ranking