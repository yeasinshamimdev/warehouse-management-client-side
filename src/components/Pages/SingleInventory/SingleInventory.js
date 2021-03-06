import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSingleItem from '../../../hooks/useSingleItem';

const SingleInventory = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    const { itemId } = useParams();
    const [singleItem] = useSingleItem(itemId);

    const { _id, img, name, price, description, quantity, supplier_name, sold, shipping } = singleItem;

    const onSubmit = data => {
        const restockQuantity = data.quantity;
        const newQuantity = parseInt(quantity) + parseInt(restockQuantity);

        if (newQuantity <= 0) {
            toast.error('quantity can not be less than 0');
        }
        else {
            const url = `https://whispering-garden-12680.herokuapp.com/products/${itemId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.matchedCount) {
                        toast.success('Update successful')
                    }
                })
        }
    };

    const handleQuantity = e => {
        const newQuantity = parseInt(quantity) - 1;

        if (newQuantity < 0) {
            toast.error('quantity can not be less than 0');
            return;
        }
        else {
            const url = `https://whispering-garden-12680.herokuapp.com/products/${itemId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.matchedCount) {
                        toast.success('Update successful')
                    }
                })
        }
    }

    return (
        <div className='md:px-10 mb-4'>
            <h1 className='text-center md:text-4xl text-2xl my-4 md:mb-8 md:mt-10 text-slate-800'>Single Item</h1>

            <div className='md:flex justify-center px-4 md:px-0'>
                <div className='border rounded relative shadow-lg bg-slate-50 md:w-1/3 md:mr-10'>
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
                                onClick={handleQuantity}
                                className='bg-green-400 hover:bg-green-500 rounded py-1 px-8 mb-4 text-white'>Delivered</button>
                        </div>
                    </div>
                </div>
                <div className='px-4 md:my-auto shadow-md py-4 bg-slate-200 rounded mt-6 '>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className='text-xl' htmlFor="quantity">Restock</label>
                        <input className='border rounded w-full outline-none px-2 my-2 h-8' type="number" {...register("quantity")} placeholder="add quantity" required name='quantity' />

                        <div className='flex justify-center mt-2'>
                            <input
                                type="submit" value="Restock" className='bg-green-500 hover:bg-green-400 text-white rounded cursor-pointer px-10 py-1' />
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex justify-center'>
                <button onClick={() => navigate('/inventory')} className='bg-green-400 hover:bg-green-500 mt-6 px-6 py-1 rounded text-white '>Manage inventory</button>
            </div>
        </div>
    );
};

export default SingleInventory;