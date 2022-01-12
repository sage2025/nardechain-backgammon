import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Button from 'react-bootstrap/Button'
import { coin } from "../../Action/coin";
import './Sidebar.css';

const Sidebar = (props) => {
    function fn_Coin_Page() {
        window.localStorage.setItem('coin', "1")
        props.coin_passed({coin_passed: "1"});
    }
    return(
        <div className="sidebar shadow">
            <div>
                <Button className="btn btc">0.00 TC</Button>
                <Link type="button" onClick={fn_Coin_Page} to="/" className="btn coin"><i className="fab fa-bitbucket sub_coin"></i>&nbsp;&nbsp;<span className="sub_coin">Get Tournament Coins</span></Link>
            </div>
            <MDBTable responsive className="sidebar_list">
                <MDBTableHead>
                    <tr className="sidebar_header">
                        <th>Ranking Top 10</th>
                        <th>Rating</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr className="sidebar_body">
                        <td>drCyber1</td>
                        <td>4000000</td>
                    </tr>
                    <tr className="sidebar_body">
                        <td>Marcelo</td>
                        <td>2450948</td>
                    </tr>
                    <tr className="sidebar_body">
                        <td>Alexey</td>
                        <td>2148762</td>
                    </tr>
                    <tr className="sidebar_body">
                        <td>tourney</td>
                        <td>2124322</td>
                    </tr>
                    <tr className="sidebar_body">
                        <td>sage</td>
                        <td>2112322</td>
                    </tr>
                    <tr className="sidebar_body">
                        <td>Haland</td>
                        <td>1978987</td>
                    </tr>
                    <tr className="sidebar_body">
                        <td>Kain</td>
                        <td>1976987</td>
                    </tr>
                    <tr className="sidebar_body">
                        <td>Sharlin</td>
                        <td>1932327</td>
                    </tr>
                    <tr className="sidebar_body">
                        <td>Jenkins</td>
                        <td>1878987</td>
                    </tr>
                    <tr className="sidebar_body">
                        <td>John</td>
                        <td>1978987</td>
                    </tr>                                                                                                                                                               
                </MDBTableBody>
            </MDBTable>
        </div>
    )
} 

const mapStateToProps = (props) => {
    return{
        item: props.credential
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ coin_passed: coin }, dispatch);
}

export default connect(mapStateToProps, mapDistachToProps)(Sidebar)