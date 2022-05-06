import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center py-24 px-2 bg-green-400'>
            <div>
                <h1 className='text-9xl text-center'>404</h1>
                <h1 className='my-5 text-3xl'>The page you were looking for does not exist</h1>
                <p>It seems that you're lost in a perpetual black hole. Let's us help guide you out and get you back home.</p>
                <div className='flex justify-center'>
                    <button onClick={() => navigate('/home')}
                        className='bg-slate-800 hover:bg-slate-700 mt-6 px-8 py-2 rounded text-white shadow-md'>Go back to home
                    </button>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default NotFound;