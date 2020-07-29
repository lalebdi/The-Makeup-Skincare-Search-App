import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'https://skincare-api.herokuapp.com/product?q=rose&limit=25&page=1'

export default class componentName extends Component {
    constructor(){
        super()
        this.state = {
            info:[]
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
                {
                    this.state.info.map(cream =>
                        {console.log(cream);
                        return(
                            <div>
                                <h2> the name is : {cream.name}</h2>
                            </div>
                        )
                        })
                }
            </div>
        )
    }
}
