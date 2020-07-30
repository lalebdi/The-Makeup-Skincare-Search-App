import React from 'react';

export default function SearchBox(props) {
    return (
        <div>
            <input type="text" onChange={props.handleInput} className="search-box" placeholder="Search by product brand or name..."/>
        </div>
    )
}
