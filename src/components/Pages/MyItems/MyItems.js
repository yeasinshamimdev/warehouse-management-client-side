import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import auth from '../../../firebase.init';
import useItems from '../../../hooks/useItems';
import Spinner from '../../Shared/Spinner/Spinner';
import UserItems from '../UserItems/UserItems';
import { signOut } from 'firebase/auth';

const MyItems = () => {
    const [myItem, setMyItem] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {

        const getMyItem = async () => {
            const email = user.email;
            const url = `https://whispering-garden-12680.herokuapp.com/products?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItem(data);
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getMyItem()

    }, [user, myItem])


    if (myItem.length === 0) {
        return <Spinner />
    }
    const filterUser = myItem?.filter(item => item?.email === user?.email);

    return (
        <div className='my-6'>
            <h1 className='md:text-3xl text-xl text-center font-mono my-6'>Your Added Products</h1>
            {
                filterUser.length === 0 ? <div>
                    <h1 className='text-xl md:text-3xl text-red-400 text-center my-10 font-mono'>Please add some product. Then you will see your product here!!!</h1>
                    <div className='flex justify-center'>
                        <button className='bg-green-400 hover:bg-green-500 mt-6 px-6 py-2 rounded text-white mx-auto' onClick={() => navigate('/additem')}>Go to add item page</button>
                    </div>
                </div> : ''
            }
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10'>
                {
                    filterUser.map(userItem => <UserItems key={userItem._id} userItem={userItem}></UserItems>)
                }
            </div>
        </div>
    );
};

export default MyItems;