import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Setting from "../Setting/Setting";
import './SubBar.css';

const SubBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {setClick(!click)};
    return(
        <Nav className="SubBar" variant="pills" defaultActiveKey="/tournaments">
            <Nav.Item  className={ click ? "navitem active" : "navitem" }>
                <Nav.Link eventKey="link-1" onClick={handleClick}><strong className="strong">Settings</strong></Nav.Link>
            </Nav.Item>
            <Nav.Item className={ click ? "navitem active" : "navitem" }>
                <Nav.Link eventKey="link-2" onClick={handleClick}><strong className="strong">Avatar</strong></Nav.Link>
            </Nav.Item >
            <Nav.Item className={ click ? "navitem active" : "navitem" }>
                <Nav.Link eventKey="link-3" onClick={handleClick}><strong className="strong">Board</strong></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default SubBar;