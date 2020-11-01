import React from 'react';

const ProductList = () => {
    return (
        <div className="container">
            <h2 className="table-heading">Product List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cacahuetes y nueces</td>
                        <td>200</td>
                        <td><button className="table-button edit">Edit</button></td>
                        <td><button className="table-button delete">Delete</button></td>
                    </tr>
                    <tr>
                        <td>Grosellas</td>
                        <td>180</td>
                        <td><button className="table-button edit">Edit</button></td>
                        <td><button className="table-button delete">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;