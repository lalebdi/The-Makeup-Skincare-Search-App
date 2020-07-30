import React from 'react';

// we passed the handleInput function here a prop

export default function SearchBox(props) {
    return (
        <div>
            <input type="text" onChange={props.handleInput} className="search-box" placeholder="Search by product brand or name..."/>
        </div>
    )
}
