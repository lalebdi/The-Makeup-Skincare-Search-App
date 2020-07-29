import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://skincare-api.herokuapp.com/product?q=rose&limit=25&page=1'

export default class Skincare extends Component {
    const [skincare, setSkincare] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() =>{
        setLoading(true);
        axios
        .get(BASE_URL)
        .then(res =>{
            setSkincare(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        });
    }, [])


    render() {
        return (
            <div className="skincare-component">
                <input type="text" placeholder="search brand, name or ingredient" />
                <h2> I am the skincare component</h2>
                {
                    this.state.info.map(cream =>
                        { //console.log(cream);
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
