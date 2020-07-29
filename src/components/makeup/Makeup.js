import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json'

export default class Makeup extends Component {
    constructor(){
        super()
        this.state = {
            info:[],
            searchProduct: ''
        };
    }

    componentDidMount(){
        axios.get(BASE_URL)
        .then(res => this.setState({info:res.data}))
        .catch(err => console.error(err.message))
    }
    render() {
        return (
            <div className="makeup-component">
                <h2> I am the makeup Component</h2>
                <input type="text" placeholder="search brand, name or category" />
                {
                    this.state.info.map(makeup => {
                        //console.log(makeup);
                        return(
                            <div>
                               
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
