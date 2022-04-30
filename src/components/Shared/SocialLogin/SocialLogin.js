import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    return (
        <div className='px-5'>
            <div className='flex'>
                <div className='w-1/2 h-1  '></div>
                <div >or</div>
                <div className='w-1/2 h-1 '></div>
            </div>

            <div className='flex justify-center'>
                <div>
                    <button className='bg-red-400 px-10 py-2 rounded text-white' onClick={() => signInWithGoogle()}>Google Login</button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;