import React from 'react';

export default function SearchBox(props) {
    return (
        <div>
            <input type="text" onChange={props.handleInput} className="skin-search-box" placeholder="Search by product brand or name..."/>
        </div>
    )
}
