import React from 'react';

const TabularForm = ({ item }) => {
    const { _id, img, name, price, quantity, supplier_name } = item;

    const handleDeleteItem = () => {
        const url = ``
    }

    return (
        <tbody>
            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {_id}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <img className='w-14' src={img} alt="" />
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {name}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {price}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {quantity}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {supplier_name}
                </td>
                <td className='flex justify-center'>
                    <button
                        onClick={handleDeleteItem}
                        className='bg-red-500 text-white px-3 mt-2 rounded hover:bg-red-400 py-1'>Delete</button>
                </td>
            </tr>
        </tbody>
    );
};

export default TabularForm;