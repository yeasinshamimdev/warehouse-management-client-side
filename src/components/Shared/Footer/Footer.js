import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faAppleAlt, faGift, faInbox, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='bg-slate-900 text-white px-10 pt-6 pb-1'>
            <div className='md:grid grid-cols-4 gap-10 mb-4'>
                <div>
                    <h1 className='text-2xl text-center font-mono'>Sports Gear Warehouse </h1>
                    <p className='text-sm mt-3 text-justify font-thin'>Hello, This is Sports Gear Warehouse. Here you can get all of your favorite sports gears. If you need any cricket bat, football, hocky et. you can contract with us. Follow us on social media.</p>
                </div>
                <div>
                    <h1 className='text-center text-xl font-mono mt-4 md:mt-0'>Products</h1>
                    <ul className='text-center mt-4'>
                        <li className='cursor-pointer mt-2'>Cricket Ball</li>
                        <li className='cursor-pointer mt-2'>Football</li>
                        <li className='cursor-pointer mt-2'>Baseball</li>
                        <li className='cursor-pointer mt-2'>Basket Ball</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-center text-xl font-mono mt-4 md:mt-0'>Useful Links</h1>
                    <div className='flex flex-col text-center mt-4'>
                        <Link className='cursor-pointer' to='/home'>Home</Link>
                        <Link className='cursor-pointer mt-2' to='/inventory'>Inventory</Link>
                        <Link className='cursor-pointer mt-2' to='/blog'>Blog</Link>
                        <Link className='cursor-pointer mt-2' to='/additem'>Add Item</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-xl font-mono mt-4 md:mt-0'>Address</h1>
                    <div className='text-center mt-2 md:mt-8'>
                        <p className='text-sm'>Sadar Noakhali, Maijdee Court, </p>
                        <p className='text-sm'>3850, Road no. 2. Noakhali, Bangladesh.</p>
                        <p className='text-sm'>Mob: 017100111999</p>
                        <ul className='mt-4 text-2xl text-center'>
                            <FontAwesomeIcon className='ml-4 text-sky-500 cursor-pointer' icon={faMailBulk} />
                            <FontAwesomeIcon className='ml-4 text-sky-500 cursor-pointer' icon={faInbox} />
                            <FontAwesomeIcon className='ml-4 text-sky-500 cursor-pointer' icon={faGift} />
                            <FontAwesomeIcon className='ml-4 text-sky-500 cursor-pointer' icon={faAddressBook} />
                            <FontAwesomeIcon className='ml-4 text-sky-500 cursor-pointer' icon={faAppleAlt} />
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-center text-xs mt-4'>All rights reserved by © Yeasin Shamim {year}</p>
        </div>
    );
};

export default Footer;