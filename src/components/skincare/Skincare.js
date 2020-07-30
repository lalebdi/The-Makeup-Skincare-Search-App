import React, { Component } from 'react';
import SearchBox from './SearchBox';
import ProductList from './ProductList';
import axios from 'axios';

const BASE_URL = 'https://skincare-api.herokuapp.com/product?q=rose&limit=25&page=1'

export default class Skincare extends Component {
    constructor(props){
        super(props)
        this.state = {
            info:[],
            searchProduct: '' //to store the user's input
        };
    }

    // Imporing the data the storing it in the state
    componentDidMount(){
        axios.get(BASE_URL)
        .then(res => this.setState({info:res.data}))
        .catch(err => console.error(err.message))
    }
    // to get the user's input and store it in the state
    handleInput = (e) =>{
        console.log(e.target.value);
        this.setState({ searchProduct: e.target.value})
    };

    render() {
        // Searching through the data. user .toLowerCase to make sure the user's input = the data in the state
        let filteredProducts = this.state.info.filter((product) => {
            // console.log(product)
            return (product.name.toLowerCase().includes(this.state.searchProduct.toLowerCase()) || product.brand.toLowerCase().includes(this.state.searchProduct.toLowerCase()))
        }) 

        return (
            <div className="skincare-component">
                <br />
                <SearchBox handleInput={this.handleInput} /> 
                <br />
                <ProductList filteredProducts={filteredProducts}/>
            </div>
        )
    }
}
