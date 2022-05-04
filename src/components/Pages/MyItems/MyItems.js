import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';

const MyItems = () => {

    return (
        <div className='my-6'>
            <h1 className='md:text-3xl text-xl text-center'>Your Added Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10'>

            </div>
        </div>
    );
};

export default MyItems;