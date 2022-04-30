import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    return (
        <div className='px-5'>
            <div className='flex mb-4'>
                <div className='w-1/2 h-1  '></div>
                <div >or</div>
                <div className='w-1/2 h-1 '></div>
            </div>

            <div className='flex flex-col justify-center align-middle'>

                <button className='hover:bg-red-400 bg-red-500 px-14 md:w-1/2 md:mx-auto mb-4 py-2 rounded flex text-white' onClick={() => signInWithGoogle()}><img className='w-7 mr-2' src="https://i.ibb.co/NKQxKHd/Untitled-design-5-1.png" alt="" /> Google Login</button>
                <button className='hover:bg-sky-400 bg-sky-500 pl-14 mb-4 md:w-1/2 md:mx-auto py-2 rounded flex text-white' onClick={() => signInWithGoogle()}><img className='w-7 mr-2' src="https://i.ibb.co/2vMRL50/Untitled-design-6-1.png" alt="" /> Facebook Login</button>
                <button className='hover:bg-slate-800 bg-slate-900 px-14 md:w-1/2 md:mx-auto mb-4 py-2 rounded flex text-white' onClick={() => signInWithGoogle()}><img className='w-7 mr-2' src="https://i.ibb.co/PhXvLcd/Untitled-design-7-1.png" alt="" /> Github Login</button>

            </div>
        </div>
    );
};

export default SocialLogin;