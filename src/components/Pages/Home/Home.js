import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import SingleItem from '../../Shared/SingleItem/SingleItem';
import Spinner from '../../Shared/Spinner/Spinner';
import Banner from './Banner/Banner';
import OurSpecialty from './OurSpecialty/OurSpecialty';
import Review from './Review/Review';
import { toast } from 'react-toastify';

const Home = () => {
    const ourSpecialty = [
        { id: 1, img: "https://i.ibb.co/98LMbYv/2-1.png", name: "Free Delivery", des: "Free shopping on off offer" },
        { id: 2, img: "https://i.ibb.co/BrcTKCT/3-1.png", name: "Money Return", des: "Money back guaranty in 7 days" },
        { id: 3, img: "https://i.ibb.co/d7gsjTP/1-1.png", name: "Member Discount", des: "Delivery order over $1000" },
        { id: 4, img: "https://i.ibb.co/54PBjMg/4-1.png", name: "Online Support", des: "Support 24 hours a day" },
    ];
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://whispering-garden-12680.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const navigate = useNavigate();
    const [items] = useItems();

    const handleFeedback = e => {
        e.preventDefault();
        e.target.reset()
        toast.success('Feedback received')
    }

    return (
        <div className='md:px-10'>
            <Banner />

            {/* Our specialty  */}
            <div className='grid grid-cols-1 md:grid-cols-4 mt-10 gap-4 px-4 md:px-0'>
                {
                    ourSpecialty.map(specialty => <OurSpecialty key={specialty.id} specialty={specialty} />)
                }
            </div>

            {/* Our Items section  */}
            <div className='flex justify-center'>
                <h1 className='text-center md:text-5xl text-3xl my-4 md:mb-6 md:mt-12 text-neutral-600 border-b-2'>Our Items</h1>
            </div>
            {
                items.length === 0 && <Spinner />
            }
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0'>
                {
                    items.slice(0, 6).map(item => <SingleItem key={item._id} item={item} />)
                }
            </div>
            <div className='flex justify-center'>
                <button onClick={() => navigate('/inventory')} className='bg-green-400 hover:bg-green-500 mt-6 px-8 py-1 rounded text-white shadow-md'>Manage inventory</button>
            </div>
            <div className='flex justify-center md:mt-8'>
                <h1 className='mt-10 text-center text-xl md:text-4xl border-b-2'>Customer Reviews</h1>
            </div>
            <div className='grid md:gird md:grid-cols-3 gap-x-14 gap-y-6 px-4 md:px-0 my-6'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
            <div className='flex justify-center mb-2'>
                <h1 className='mt-8 text-2xl md:text-4xl text-center border-b-2'>Feedback for us</h1>
            </div>
            <div className='gird md:grid md:grid-cols-2 gap-x-20 gap-y-10 p-4'>
                <div className='flex items-center'>
                    <div className='md:px-10'>
                        <h1 className='text-center text-2xl'>Give us a feedback</h1>
                        <p className='text-sm my-4 text-justify'>We hope you are very enjoy our fancy warehouse website. So, now time give us a feedback. So that we can improve our website. Our Customer feedback is very important for us. We love to receive feedback from our user. So, please give us a feedback for improvement. Thank you. </p>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-xl'>Leave a feedback for us</h1>
                    <div>
                        <form onSubmit={handleFeedback}>

                            <label htmlFor="name">Your Name</label>
                            <input className='w-full text-sm outline-none px-2 h-7 mb-4 rounded' type="text" name="name" id="name" placeholder='Your name' required />

                            <label htmlFor="email">Email</label>
                            <input className='w-full text-sm outline-none px-2 h-7 mb-4 rounded' type="email" name="email" id="email" placeholder='Your email' required />

                            <label htmlFor="comment">Your feedback</label>
                            <textarea className='w-full text-sm outline-none px-2 h-16 mb-4 rounded' name="comment" id="comment" placeholder='Your comment' required></textarea>

                            <input
                                className='bg-green-500 hover:bg-green-400 px-4 py-1 rounded text-white cursor-pointer' type="submit" value="Feedback" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;