import React, { Component } from 'react';
import { NavLink }  from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                    <button className="myButton"><NavLink href="/skincare" >Skincare</NavLink></button>
                    <button className="myButton"><NavLink href="/makeup" >Makeup</NavLink></button>
            </div>
        )
    }
}
