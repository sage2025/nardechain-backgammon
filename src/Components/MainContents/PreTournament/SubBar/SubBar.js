import React from 'react'
import './SubBar.css';

const SubBar = (props) => {
    let input;
    const handleClick = () => {
        console.log(input.value);
        props.onSearch(input.value);
    }
    return(
        <div className="searchbar_tour form-inline">
            <div className="w-100 form-inline">
                <input className="form-control input_player_tour" placeholder="Find player" ref={n => input = n} />
                <button className="btn createGM_tour mr-3" onClick={handleClick}><i className="fa fa-search"></i></button>
            </div>       
        </div>
    )
}

export default SubBar;