import React from 'react';
import Product from './Product';

// Looping through the data and sorting the results. 

export default function ProductList(props) {
    let products = props.filteredProducts.map((product) => {
        return <Product key={product.id} name={product.name} brand={product.brand} ingredient={product.ingredient_list} />
    })
    return (
        <div>
            {
            products
            }
        </div>
    )
}
