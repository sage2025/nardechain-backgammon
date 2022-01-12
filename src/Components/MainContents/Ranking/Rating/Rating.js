import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './Rating.css'
import RatingTable from "./RatingTable";

const Rating = () => {
    const [key, setKey] = useState('current');

    return(
        <Tabs
            activeKey={key}
            defaultActiveKey="current"
            onSelect={(k) => setKey(k)}
            className="mb-3 ranking_rating"
        >
            <Tab eventKey="current" tabClassName="current" title="Current">
                <RatingTable/>
            </Tab>
            <Tab eventKey="all"  title="All" tabClassName="all">
                <p>No events</p>
            </Tab>

        </Tabs>
    )
}

export default Rating