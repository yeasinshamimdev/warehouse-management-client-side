import React from 'react';

const SingleItem = ({ item }) => {
    const { img, name, price, description, quantity, supplier_name } = item;

    return (
        <div className='border-2 rounded'>
            <div className='p-1 mb-4'>
                <img className='w-full rounded' src={img} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <h5>Price: {price}$</h5>
                <p>{description}</p>
                <h6>Quantity: {quantity} items</h6>
                <h5>Supplier name: {supplier_name}</h5>
            </div>
        </div>
    );
};

export default SingleItem;