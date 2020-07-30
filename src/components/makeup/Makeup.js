import React, { Component } from 'react';
import SearchBox from './SearchBox';
import ProductList from './ProductList';
import axios from 'axios';

const BASE_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json'

export default class Makeup extends Component {
    constructor(){
        super()
        this.state = {
            info:[],
            searchProduct: ''  // to store the user's input
        };
    }

    // getting the data from the API
    componentDidMount(){
        axios.get(BASE_URL)
        .then(res => this.setState({info:res.data}))
        .catch(err => console.error(err.message))
    }
    // Taking the user's input and storing it in the state
    handleInput = (e) =>{
        console.log(e.target.value);
        this.setState({ searchProduct: e.target.value})
    };

    
    render() {
        let filteredProducts1 = this.state.info.filter((product) => {
            // debugger;
            // console.log(product, this.state.searchProduct);
          if(product.name && product.brand) {           //used .toLowerCase to make sure the user's input == the data in the state
            return (product.name.toLowerCase().includes(this.state.searchProduct.toLowerCase()) || product.brand.toLowerCase().includes(this.state.searchProduct.toLowerCase()))
          }
        })
        return (
            <div className="makeup-component">
                <br />
                <SearchBox handleInput={this.handleInput} />
                <br />
                <ProductList filteredProducts1={filteredProducts1}/>
            </div>
        )
    }
}
