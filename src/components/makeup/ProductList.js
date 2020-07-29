import React from 'react';
import Product from './Product';

export default function ProductList(props) {
    let products = props.filteredProducts.map((product) => {
        return <Product key={product.id} name={product.name} brand={product.brand} description={product.description} />
    })
    return (
        <div>
            {products}
        </div>
    )
}
