import React, { useEffect, useState } from 'react';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';
import { toast } from 'react-toastify';

const Login = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        signInWithEmailAndPassword(email, password);
    };
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || emailUser) {
            navigate(from, { replace: true });
            toast.success('Login successful')
        }
        if (loading || emailLoading) {
            <> <Spinner /></>
        }
        if (emailError || error) {
            toast.error('Login failed')
        }
    })

    const handleResetPassword = () => {
        const inputEmail = document.getElementById('email').value;
        if (inputEmail === '') {
            toast.error('Please give an email')
        }
        else {
            sendPasswordResetEmail(inputEmail);
            toast.success('Check your email for reset password')
        }
    }

    return (
        <div className='md:w-1/2 mx-auto my-12 px-4 md:px-0'>
            <h1 className='text-4xl text-center'>Login</h1>
            <div className='border-2 mt-6 px-5 py-4 rounded-lg bg-slate-200 shadow-lg'>
                <div className='mb-8'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label htmlFor="email"> Email</label>
                        <input type='email' className='w-full  border mt-1 mb-4 h-10 px-2 rounded focus:outline-none' {...register("email")} id="email" name="email" required placeholder='Your email' />

                        <label htmlFor="password">Password</label>
                        <input type='password' className='w-full border mt-1 mb-4 h-10 px-2 rounded focus:outline-none' {...register("password")} name="password" placeholder='password' required />
                        <p onClick={handleResetPassword}
                            className='cursor-pointer btn-link underline pl-2 mb-2'>Forget password?</p>
                        <div className='flex justify-center'>
                            <input className='bg-green-400 px-12 text-white rounded hover:bg-green-500 font-semibold cursor-pointer py-2' value="Login" type="submit" />
                        </div>
                        <p className='mt-4 pl-2'>New in sports gear warehouse?
                            <span onClick={() => navigate('/signup')} className='text-yellow-500 font-bold underline ml-1 cursor-pointer hover:text-yellow-400'>Login</span></p>
                    </form>
                </div>

                {/* Social login section  */}
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;