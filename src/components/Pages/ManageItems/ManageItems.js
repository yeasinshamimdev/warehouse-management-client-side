import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useItems from '../../../hooks/useItems';
import Spinner from '../../Shared/Spinner/Spinner';

const ManageItems = () => {
    const [items] = useItems();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    if (items.length === 0) {
        return <Spinner />
    }
    const filterUser = items?.filter(item => item?.email === user?.email);

    return (
        <div>
            <h1 className='md:text-3xl text-xl text-center my-4 font-mono'>Mange your items</h1>
            {
                filterUser.length === 0 ? <div>
                    <h1 className='text-xl md:text-3xl text-red-400 text-center my-10 font-mono'>Please add some product. Then you will see your product here!!!</h1>
                    <div className='flex justify-center'>
                        <button className='bg-green-400 hover:bg-green-500 mt-6 px-6 py-2 rounded text-white mx-auto' onClick={() => navigate('/additem')}>Go to add item page</button>
                    </div>
                </div> : ''
            }
        </div>
    );
};

export default ManageItems;