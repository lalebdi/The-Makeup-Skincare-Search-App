import React from 'react';
import { NavLink }  from 'reactstrap';
import Bella from '../assets/Images/junior developer.jpg';

export default function NotFound() {
    return (
        <div className="NotFound-page">
            <br />
            <div className="not-found-text">
            <h2>Oh no, you've found my junior developer's homepage!!</h2>
            <br />
            <h4> Despite sleeping on the couch most of the day, my junior web developer still finds time to do some coding... </h4>
            <br />
            <button><NavLink href="/" >Back to the home page</NavLink></button>
            </div>
            <div className="bella" >
                <img src={Bella} alt = "developer hard at work" className="bella-pic"/>
            </div>
        </div>
    )
}
