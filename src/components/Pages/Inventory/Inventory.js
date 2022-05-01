import React from 'react';
import useItems from '../../../hooks/useItems';
import SingleItem from '../../Shared/SingleItem/SingleItem';
import Spinner from '../../Shared/Spinner/Spinner';

const Inventory = () => {
    const [items] = useItems();

    return (
        <div className='md:px-10'>
            <h1 className='text-center md:text-5xl text-3xl my-4 md:mb-8 md:mt-16 text-slate-900'>Manage Inventory</h1>
            {
                items.length === 0 && <Spinner />
            }
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0'>
                {
                    items.map(item => <SingleItem key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Inventory;