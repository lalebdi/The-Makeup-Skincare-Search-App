import React from 'react';
import Product from './Product';

// looping through the data using the .map to sort it was wanted and passing the output as a prop to the the product component

export default function ProductList(props) {
    let products = props.filteredProducts1.map((product) => {
        return <Product key={product.id} name={product.name} brand={product.brand} description={product.description} image={product.image_link} price={product.price} link={product.product_link} />
    })
    return (
        <div>
            {products}
        </div>
    )
}
