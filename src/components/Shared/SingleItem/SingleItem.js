import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleItem = ({ item }) => {
    const { _id, img, name, price, description, quantity, supplier_name, sold, shipping } = item;
    const navigate = useNavigate();

    return (
        <div className='border rounded relative shadow-lg bg-slate-50'>
            <div className='p-1 mb-4'>
                <img className='w-full rounded' src={img} alt="" />
            </div>
            <div className='px-2 pb-16'>
                <h1 className='text-2xl mb-3'>{name}</h1>
                <h5 className='font-bold mb-2'>Price: {price}$</h5>
                <p className='text-justify text-sm mb-2'>{description}</p>
                <h6 className='font-semibold text-sm'>Quantity: {quantity} items</h6>
                <h5 className='font-semibold text-sm'>Supplier name: {supplier_name}</h5>

            </div>
            <div className='absolute bottom-0 pl-2 w-full flex justify-center'>
                <button onClick={() => navigate(`/inventory/${_id}`)} className='bg-green-400 hover:bg-green-500 rounded py-1 px-8 mb-2 text-white '>stock update</button>
            </div>
        </div>
    );
};

export default SingleItem;