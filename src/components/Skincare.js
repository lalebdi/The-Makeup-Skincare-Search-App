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
        let filteredProducts = this.state.info.filter((product) => {
            return product.name.toLowerCase().includes(this.state.searchProduct.toLowerCase())
        }) 

        return (
            <div className="skincare-component">
                <SearchBox handleInput={this.handleInput} />
                <ProductList filteredProducts={filteredProducts}/>
            </div>
        )
    }
}
