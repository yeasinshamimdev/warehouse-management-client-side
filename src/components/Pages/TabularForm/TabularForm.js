import React from 'react';
import { toast } from 'react-toastify';
import useItems from '../../../hooks/useItems';

const TabularForm = ({ item }) => {
    const [items, setItems] = useItems();
    const { _id, img, name, price, quantity, supplier_name } = item;

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
            toast('Not deleted');
        }
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
                        className='bg-red-500 text-white px-3 mt-2 rounded hover:bg-red-400 py-1'>Delete
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default TabularForm;