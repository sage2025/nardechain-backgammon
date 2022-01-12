import React from 'react'
import './SearchBar.css';

const SearchBar = (props) => {
    let input;
    const handleClick = () => {
        console.log(input.value);
        props.onSearch(input.value);
    }
    return(
        <div className="searchbar_ana form-inline">
            <div className="w-100 form-inline">
                <input className="form-control input_player_ana" placeholder="Find player" ref={n => input = n} />
                <button className="btn createGM_ana mr-3" onClick={handleClick}><i className="fa fa-search"></i></button>
            </div>       
        </div>
    )
}

export default SearchBar;