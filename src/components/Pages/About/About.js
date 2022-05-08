import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <div className='grid md:grid-cols-2 gap-6 md:w-4/3 w-full md:py-24 py-10 md:px-10 px-4 bg-green-100'>
            <div className='md:mr-5'>
                <img className='border-2 p-1' src="https://i.ibb.co/kynKfJ1/about-us.webp" alt="about us" />
            </div>
            <div>
                <h1 className='md:text-5xl text-2xl my-6 text-center'>About Us</h1>
                <p className='text-justify'>Hey, There you can find your favorite sports gear in our sports gear warehouse. We are provide the best sports gear all over city. And we provide number one sports gear in the city. We also exports our products all over the world. Like as UAE, USA, UKS, India etc. Our product selling rating is so high. We sell 1000+ products in a day. So, don't mistake to chose the best sports gear warehouse in the city.</p>
                <div className='flex justify-center pt-10'>
                    <button onClick={() => navigate('/inventory')}
                        className='bg-green-400 font-bold hover:bg-green-500 text-white rounded cursor-pointer px-10 py-1'>All Products</button>
                </div>
            </div>
        </div>
    );
};

export default About;