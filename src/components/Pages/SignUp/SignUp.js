import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const navigate = useNavigate();
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    let from = location?.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    })

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='md:w-1/2 mx-auto my-12 px-4 md:px-0'>
            <h1 className='text-4xl text-center'>Sign Up</h1>
            <div className='border-2 mt-6 px-5 py-4 rounded-lg bg-slate-200'>
                <div className='mb-8'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name"> Name</label>
                        <input type='text' className='w-full border mb-4 mt-1 h-10 px-2 rounded focus:outline-none' {...register("name", { required: true, maxLength: 20 })} name="name" placeholder='Your name' required />

                        <label htmlFor="email"> Email</label>
                        <input type='email' className='w-full  border mt-1 mb-4 h-10 px-2 rounded focus:outline-none' {...register("email")} name="email" required placeholder='Your email' />

                        <label htmlFor="password">Password</label>
                        <input type='password' className='w-full border mt-1 mb-4 h-10 px-2 rounded focus:outline-none' {...register("password")} name="password" placeholder='password' required />

                        <label htmlFor="password">Confirm Password</label>
                        <input type='password' className='w-full border mt-1 mb-4 h-10 px-2 rounded focus:outline-none' {...register("confirmPassword")} name="password" placeholder='confirm password' required />

                        <div className='flex justify-center'>
                            <input className='bg-green-400 px-12 text-white rounded hover:bg-green-500 font-semibold cursor-pointer py-2' value="Sign Up" type="submit" />
                        </div>
                        <p className='mt-4 pl-2'>Already have an account?
                            <span onClick={() => navigate('/login')} className='text-yellow-500 font-bold underline ml-1 cursor-pointer hover:text-yellow-400'>Login</span></p>
                    </form>
                </div>

                {/* Social login section  */}
                <SocialLogin />
            </div>
        </div>
    );
};

export default SignUp;