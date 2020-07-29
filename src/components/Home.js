import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <h4> Home Component</h4>

                <div className="buttons">
                    <button><a href="/skincare" className="myButton">Skincare</a></button>
                    <button><a href="/makeup" className="myButton">Makeup</a></button>
                </div>
            </div>
        )
    }
}
