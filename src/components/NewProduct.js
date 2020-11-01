import React from 'react';

const NewProduct = () => {
    return (
        <div className="card">
            <h2 className="product-title">Add a Product</h2>
            <h3>Product name</h3>
            <input></input>
            <h3>Price</h3>
            <input></input>
            <button className="submit-button">Submit</button>
        </div>
    );
};

export default NewProduct;