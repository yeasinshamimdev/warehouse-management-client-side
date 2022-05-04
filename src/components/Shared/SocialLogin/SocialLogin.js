import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    useEffect(() => {
        if (facebookError?.message === 'Firebase: Error (auth/account-exists-with-different-credential).' || googleError?.message === 'Firebase: Error (auth/account-exists-with-different-credential).' || githubError?.message === 'Firebase: Error (auth/account-exists-with-different-credential).') {
            toast.error('This email already login with another auth provider!');
        };
    }, [githubError, facebookError, googleError]);

    return (
        <div className='px-5'>
            <div className='flex mb-4'>
                <div className='w-1/2 h-1  '></div>
                <div >or</div>
                <div className='w-1/2 h-1 '></div>
            </div>

            <div className='flex flex-col justify-center align-middle'>

                <button className='hover:bg-red-400 bg-red-500 px-14 md:w-1/2 md:mx-auto mb-4 py-2 rounded flex text-white' onClick={() => signInWithGoogle()}><img className='w-7 mr-2' src="https://i.ibb.co/NKQxKHd/Untitled-design-5-1.png" alt="" /> Google Login</button>
                <button className='hover:bg-sky-400 bg-sky-500 pl-14 mb-4 md:w-1/2 md:mx-auto py-2 rounded flex text-white' onClick={() => signInWithFacebook()}><img className='w-7 mr-2' src="https://i.ibb.co/2vMRL50/Untitled-design-6-1.png" alt="" /> Facebook Login</button>
                <button className='hover:bg-slate-800 bg-slate-900 px-14 md:w-1/2 md:mx-auto mb-4 py-2 rounded flex text-white' onClick={() => signInWithGithub()}><img className='w-7 mr-2' src="https://i.ibb.co/PhXvLcd/Untitled-design-7-1.png" alt="" /> Github Login</button>

            </div>
        </div>
    );
};

export default SocialLogin;