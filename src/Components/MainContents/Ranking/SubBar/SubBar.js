import React from 'react'
import './SubBar.css';

const SubBar = (props) => {
    let input;
    const handleClick = () => {
        console.log(input.value);
        props.onSearch(input.value);
    }
    return(
        <div className="searchbar form-inline">
            <div className="">
                <input className="form-control" ref={n => input = n} placeholder="Find player" />
                <button className="btn createGM mr-3" onClick={handleClick}><i className="fa fa-search"></i></button>
            </div>
        </div>
    )
}

export default SubBar;