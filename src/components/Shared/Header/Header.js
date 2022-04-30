import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='sticky-top'>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-slate-200 text-black shadow-lg navbar navbar-expand-lg navbar-light">
                <div className="container-fluid w-full flex flex-wrap md:items-center justify-between md:px-10 px-4">
                    <div className='hidden md:block'>
                        <Link className="text-xl pr-2 font-semibold font-mono" to='/'>Sports Gear Warehouse </Link>
                    </div>
                    <div>
                        <button className="navbar-toggler text-black border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent1"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation" >
                            <svg aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="bars"
                                className="w-6"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512" >
                                <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                ></path>
                            </svg>
                        </button>
                        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
                            <ul className="navbar-nav font-semibold flex flex-col pl-0 list-style-none mr-auto">
                                <li className="nav-item p-2">
                                    <CustomLink className="nav-link opacity-80 hover:opacity-100 p-0" to='/home'>Dashboard</CustomLink>
                                </li>
                                <li className="nav-item p-2">
                                    <CustomLink className="nav-link opacity-80 hover:opacity-100 p-0" to='/inventory'>Team</CustomLink >
                                </li>
                                <li className="nav-item p-2">
                                    <CustomLink className="nav-link opacity-80 hover:opacity-100 p-0" to='/blog'>Projects</CustomLink >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex md:items-center relative md:mt-0 mt-2">
                        <div>
                            <button onClick={() => navigate('/signup')} className='text-xs md:text-sm hover:bg-green-500 mr-2 bg-green-400 py-1 px-2 text-white rounded'>Sign Up</button>
                            <button onClick={() => navigate('/login')} className='text-xs md:text-sm hover:bg-green-500 mr-2 bg-green-400 py-1 px-2 text-white rounded'>Login</button>
                        </div>
                        <div className="dropdown relative">
                            <Link className="dropdown-toggle flex items-center hidden-arrow"
                                to='/'
                                id="dropdownMenuButton2"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"  >
                                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full" style={{ height: "25px", width: "25px" }} alt="" loading="lazy" />
                            </Link>
                            <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                                aria-labelledby="dropdownMenuButton2" >
                                <li>
                                    <Link className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        to='/'
                                    >Action</Link >
                                </li>
                                <li>
                                    <Link className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        to='/' >Another action</Link >
                                </li>
                                <li>
                                    <Link className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        to='/' >Something else here</Link >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;