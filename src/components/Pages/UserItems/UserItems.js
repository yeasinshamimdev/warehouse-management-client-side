import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const UserItems = ({ userItem }) => {
    const { _id, img, name, price, description, quantity, supplier_name, sold, shipping, email } = userItem;


    return (
        <div>
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
                    <p className='font-semibold text-sm mt-2'>Sold: <button className='bg-yellow-300 hover:bg-yellow-400 px-2 ml-2 font-bold rounded'>{sold}</button></p>
                    <p className='mt-2 text-sm'>Shipping: {shipping}$</p>
                    <p className='text-sm mt-2 mb-2'>Id: {_id}</p>
                    <div className='absolute bottom-0 pl-2 w-full flex justify-center'>
                        <button
                            className='bg-red-400 px-4 py-1 my-2 hover:bg-red-500 text-white rounded'>Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItems;