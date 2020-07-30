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
            searchProduct: ''
        };
    }

    componentDidMount(){
        axios.get(BASE_URL)
        .then(res => this.setState({info:res.data}))
        .catch(err => console.error(err.message))
    }

    handleInput = (e) =>{
        console.log(e.target.value);
        this.setState({ searchProduct: e.target.value})
    };

    
    render() {
        let filteredProducts1 = this.state.info.filter((product) => {
            // debugger;
            // console.log(product, this.state.searchProduct);
          if(product.name && product.brand) {
            return (product.name.toLowerCase().includes(this.state.searchProduct.toLowerCase()) || product.brand.toLowerCase().includes(this.state.searchProduct.toLowerCase()))
          }
        })
        return (
            <div className="makeup-component">
                <SearchBox handleInput={this.handleInput} />
                <ProductList filteredProducts1={filteredProducts1}/>
            </div>
        )
    }
}
