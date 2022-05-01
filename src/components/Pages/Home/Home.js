import React from 'react';
import useItems from '../../../hooks/useItems';
import SingleItem from '../../Shared/SingleItem/SingleItem';
import Spinner from '../../Shared/Spinner/Spinner';
import Banner from './Banner/Banner';
import OurSpecialty from './OurSpecialty/OurSpecialty';

const Home = () => {
    const ourSpecialty = [
        { id: 1, img: "https://i.ibb.co/98LMbYv/2-1.png", name: "Free Delivery", des: "Free shopping on off offer" },
        { id: 2, img: "https://i.ibb.co/BrcTKCT/3-1.png", name: "Money Return", des: "Money back guaranty in 7 days" },
        { id: 3, img: "https://i.ibb.co/d7gsjTP/1-1.png", name: "Member Discount", des: "Delivery order over $1000" },
        { id: 4, img: "https://i.ibb.co/54PBjMg/4-1.png", name: "Online Support", des: "Support 24 hours a day" },
    ];

    const [items] = useItems();

    return (
        <div className='md:px-10'>
            <Banner />

            {/* Our specialty  */}
            <div className='grid grid-cols-1 md:grid-cols-4 my-10 gap-4 px-4 md:px-0'>
                {
                    ourSpecialty.map(specialty => <OurSpecialty key={specialty.id} specialty={specialty} />)
                }
            </div>

            {/* Our Items section  */}
            <h1 className='text-center md:text-5xl text-3xl my-4 md:mb-8 md:mt-16 text-neutral-600'>Our Items</h1>
            {
                items.length === 0 && <Spinner />
            }
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0'>
                {
                    items.slice(0, 6).map(item => <SingleItem key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Home;