import React from 'react'
import './SearchBar.css';

const SearchBar = (props) => {
    let input;
    const handleClick = () => {
        console.log(input.value);
        props.onSearch(input.value);
    }
    return(
        <div className="searchbar_tour">
            <div className="w-100 form-inline">
                <input className="form-control input_player_tour" placeholder="Find player" ref={n => input = n} />
                <button className="btn createGM_tour" onClick={handleClick}><i className="fa fa-search"></i></button>

            </div>
        </div>
    )
}

export default SearchBar;