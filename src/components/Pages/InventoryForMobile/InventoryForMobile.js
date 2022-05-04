import React from 'react';
import { toast } from 'react-toastify';
import useItems from '../../../hooks/useItems';
import Spinner from '../../Shared/Spinner/Spinner';

const InventoryForMobile = ({ item }) => {

    const [items, setItems] = useItems();
    const { _id, img, name, price, description, quantity, supplier_name, sold, shipping } = item;

    const handleDeleteItem = () => {
        const sure = window.confirm("Are you sure! You want to delete?");
        if (sure) {
            const url = `http://localhost:5000/products/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== _id);
                        setItems(remaining);
                        toast.success('Item deleted successful');
                    };
                });
        }
        else {
            toast('Delete button cancel');
        }
    }

    return (
        <div>
            {
                item.length === 0 && <Spinner />
            }
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
                        <div className='absolute bottom-0 pl-2 w-full flex justify-center mb-2'>
                            <button
                                onClick={handleDeleteItem}
                                className='bg-red-500 text-white px-3 mt-1 rounded hover:bg-red-400 py-1'>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryForMobile;