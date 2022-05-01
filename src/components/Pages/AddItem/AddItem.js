import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState();

    return (
        <div className='md:w-1/2 mx-auto px-4 my-12'>
            <h1 className='text-center text-4xl mb-4'>Add Item</h1>
            <div className='bg-slate-200 rounded-lg border-4 px-2 py-4 shadow-lg'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label htmlFor="email">Email</label>
                    <input className='border rounded w-full outline-none px-2 my-2 h-8' type="email" name="email" id="email" {...register("email")}
                        value={value ?? ""}
                        onClick={(e) => setValue(user?.email)} readOnly
                    />

                    <label htmlFor="name">Name</label>
                    <input className='border rounded w-full outline-none px-2 my-2 h-8' type="text" {...register("name")} placeholder="Item name" required name='name' />

                    <label htmlFor="price">Price</label>
                    <input className='border rounded outline-none w-full px-2 my-2 h-8' type="number" {...register("price")} required placeholder='price' name='price' />

                    <label htmlFor="quantity">Quantity</label>
                    <input className='border rounded outline-none w-full px-2 my-2 h-8' type="number" {...register("quantity")} required placeholder='quantity' name='quantity' />

                    <label htmlFor="supplier_name">Supplier name</label>
                    <input className='border rounded w-full outline-none px-2 my-2 h-8' type="text" {...register("supplier_name")} required placeholder='supplier name' name='supplier_name' />

                    <label htmlFor="img">Image link</label>
                    <input className='border rounded w-full outline-none px-2 my-2 h-8' type="text" {...register("img")} required placeholder='image' name='img' />

                    <label htmlFor="description">Description</label>
                    <textarea className='border rounded w-full outline-none px-2 my-2' {...register("description")} required placeholder='description' name='description' />

                    <div className='mb-4'>
                        <p className='inline'>Sold:</p>
                        <select {...register("sold")}>
                            <option value="unsold">unsold</option>
                            <option value="sold">sold</option>
                        </select>
                        <p className='inline ml-2'>Shipping:</p>
                        <select {...register("shipping")}>
                            <option value="free">free</option>
                            <option value="paid">paid</option>
                        </select>
                    </div>

                    <div className='flex justify-center'>
                        <input type="submit" value="Add Item" className='bg-green-500 hover:bg-green-400 text-white rounded cursor-pointer px-10 py-1' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;