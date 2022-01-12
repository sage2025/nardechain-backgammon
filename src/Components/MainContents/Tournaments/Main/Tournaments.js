import { useState } from "react";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import UpComing from "../UpComing/UpComing";
// import SearchBar from "../SubBar/SearchBar";
import './Tournaments.css';

const Tournaments = () => {
    const [key, setKey] = useState('upcoming');

    return(
        <Tabs
            id="tab_account"
            activeKey={key}
            defaultActiveKey="Upcoming"
            onSelect={(k) => setKey(k)}
            className="mb-3 myClass"
        >
            <Tab eventKey="upcoming" tabClassName="upcoming" title={<p>Upcoming</p>}>
                <p className="text-left">Mindskillz tournaments are hosted by BackgammonGalaxy.com</p>
                <UpComing/>
            </Tab>
            <Tab eventKey="Running" title={<p>Running</p>}>
                <p className="text-left">Mindskillz tournaments are hosted by BackgammonGalaxy.com</p>
                <p>bb</p>
            </Tab>
            <Tab eventKey="Finished" tabClassName="finished" title={<p>Finished</p>}>
                <p className="text-left">Mindskillz tournaments are hosted by BackgammonGalaxy.com</p>
                <p>bb</p>
            </Tab>
            {/* <Tab
                className=""
                tabClassName="tab_right_tour"
                title={
                    <SearchBar/>
                }>
            </Tab> */}


        </Tabs>
    )
}

export default Tournaments