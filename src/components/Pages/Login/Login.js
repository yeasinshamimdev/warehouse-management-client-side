import React from 'react';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='md:w-1/2 mx-auto my-12 px-4 md:px-0'>
            <h1 className='text-4xl text-center'>Login</h1>
            <div className='border-2 mt-6 px-5 py-4 rounded bg-slate-200'>
                <div className='mb-8'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name"> Name</label>
                        <input type='text' className='w-full border mb-4 h-10 px-2 rounded focus:outline-none' {...register("name", { required: true, maxLength: 20 })} name="name" placeholder='Your name' />

                        <label htmlFor="email"> Email</label>
                        <input type='email' className='w-full  border mb-4 h-10 px-2 rounded focus:outline-none' {...register("email")} name="email" required placeholder='Your email' />

                        <label htmlFor="password">Password</label>
                        <input type='password' className='w-full border mb-4 h-10 px-2 rounded focus:outline-none' {...register("password")} name="password" placeholder='password' required />
                        <p className='cursor-pointer btn-link underline pl-2 mb-2'>Forget password?</p>
                        <div className='flex justify-center'>
                            <input className='bg-green-400 px-12 text-white rounded hover:bg-green-500 font-semibold cursor-pointer py-2' value="Login" type="submit" />
                        </div>
                        <p className='mt-4 pl-2'>Already have an account? <span className='text-yellow-500 font-bold underline ml-1 cursor-pointer'>Login</span></p>
                    </form>

                </div>

                {/* Social login section  */}
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;