import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = ''

export default class componentName extends Component {
    constructor(){
        super()
        this.state = {

        };
    }

    componentDidMount(){
        axios.get(BASE_URL)
        .then(res => this.setState({info:res.data}))
        .catch(err => console.error(err.message))
    }
    render() {
        return (
            <div className="skincare-component">
                <h2> I am the skincare component</h2>
            </div>
        )
    }
}
