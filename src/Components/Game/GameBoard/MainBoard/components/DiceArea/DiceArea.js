import React from 'react';
import './DiceArea.css';

import Dice from './Dice/Dice';
import RollButton from './RollButton/RollButton';

const diceArea = (props) => {
    console.log(props, "roll");
    const dice = props.dice.map((number, index) => {
        if (number === 0) {
            return <RollButton label="Roll Dice" key={'RollButton' + index} clicked={props.clicked} />
        }
        else {
            return <Dice diceNumber="index" number={number} key={'dice' + index} />
        }
    });
    
    let  noMove = null;
    if (props.gameStatus === 50){
        noMove = <RollButton className="nomove" label="" />;
    }
    
    return (
        <div className="diceArea">
            {dice}
            {noMove}
        </div>
    )
}

export default diceArea