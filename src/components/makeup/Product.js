import React from 'react'

export default function Product(props) {
    return (
        <div>
            <p> Name: {props.name} </p>
            <p> Brand: {props.brand} </p>
            <p> Description : {props.description}</p>
        </div>
    )
}
