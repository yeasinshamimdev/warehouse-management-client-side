import React from 'react';
import useItems from '../../../hooks/useItems';
import SingleItem from '../../Shared/SingleItem/SingleItem';
import TabularForm from '../TabularForm/TabularForm';
import Spinner from '../../Shared/Spinner/Spinner';

const Inventory = () => {
    const [items] = useItems();

    return (
        <div className='md:px-10'>
            <h1 className='text-center md:text-5xl text-3xl my-4 md:mb-8 md:mt-16 text-slate-900'>Manage Inventory</h1>
            {
                items.length === 0 && <Spinner />
            }
            <div className='grid grid-cols-1 md:hidden gap-6 px-4 md:px-0'>
                {
                    items.map(item => <SingleItem key={item._id} item={item} />)
                }
            </div>

            <div className='hidden md:grid md:grid-cols-1 gap-6 px-4 md:px-0'>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                ID
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Item image
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Price
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Quantity
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Supplier name
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        items.map(item => <TabularForm key={item._id} item={item} />)
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;