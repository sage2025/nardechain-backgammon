import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Setting from './Setting/Setting'
import Avatar from "./Avatar/Avatar";
import './Account.css';


const Account = () => {
    const [key, setKey] = useState('Setting');

    return(
        <div className="justify-content-center">
            <Tabs
                id="tab_account"
                activeKey={key}
                defaultActiveKey="Setting"
                onSelect={(k) => setKey(k)}
                className="mb-3 myClass w-100"
            >
                <Tab eventKey="Setting" tabClassName="setting_account" title="Setting">
                    <Setting/>
                </Tab>
                
                <Tab eventKey="Profile"  title="Profile" tabClassName="profile_account">
                    <Avatar/>
                </Tab>
                <Tab eventKey="Board" tabClassName="board_account" title="Board">
                </Tab>

            </Tabs>

        </div>
    )
}

export default Account;