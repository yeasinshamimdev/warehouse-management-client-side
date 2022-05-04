import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className='mt-1'>
            <div id="carouselDarkVariant"
                className="carousel slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-2">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"></button>
                </div>

                <div className="carousel-inner relative w-full overflow-hidden">

                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src="https://i.ibb.co/6XHFwDW/shop-2.png"
                            className="block w-full"
                            alt="Motorbike Smoke" />
                        <div className="carousel-caption md:block absolute text-center">
                            <h5 className="md:text-4xl text-xl text-white shadow-lg md:mb-8">Best sports gear warehouse in the city</h5>
                            <p className='text-center text-white hidden md:block mx-auto shadow-lg'>This warehouse is the best warehouse in the city. Here you can buy your favorite sports gear. If you want to buy something, you can come our warehouse.</p>
                            <button onClick={() => navigate('/inventory')} className='bg-green-500 md:block px-6 py-1 md:px-10 md:py-2 md:mt-4 rounded text-white text-xs mt-4 md:text-xl cursor-pointer mx-auto hover:bg-green-400 md:mb-2'>Explore</button>
                        </div>
                    </div>

                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://i.ibb.co/yX7JTdz/shop-3.png"
                            className="block w-full"
                            alt="Mountaintop" />
                        <div className="carousel-caption md:block absolute text-center">
                            <h5 className="md:text-4xl text-xl text-white shadow-lg md:mb-8">Your favorite sports gear will be there</h5>
                            <p className='text-center text-white hidden md:block mx-auto shadow-lg'>Are you searching for any kind of sports gear? Ok, come in our sports gear warehouse. We are providing the best products in this city.</p>
                            <button onClick={() => navigate('/inventory')} className='bg-green-500 md:block px-6 py-1 md:px-10 md:py-2 md:mt-4 rounded text-white text-xs mt-4 md:text-xl cursor-pointer mx-auto hover:bg-green-400 md:mb-2'>Explore</button>
                        </div>
                    </div>

                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://i.ibb.co/QY6jg09/shop-1.png"
                            className="block w-full"
                            alt="Woman Reading a Book" />
                        <div className="carousel-caption md:block absolute text-center">
                            <h5 className="md:text-4xl text-xl text-white shadow-lg md:mb-8">Looking for best sports gear warehouse?</h5>
                            <p className='text-center text-white hidden md:block mx-auto shadow-lg'>We are the only one warehouse owner in this city who providing all kind of sports gear. Are you Looking for any kind of sports gear then you can come there with hope and trust.</p>
                            <button onClick={() => navigate('/inventory')} className='bg-green-500 md:block px-6 py-1 md:px-10 md:py-2 md:mt-4 rounded text-white text-xs mt-4 md:text-xl cursor-pointer mx-auto hover:bg-green-400 md:mb-2'>Explore</button>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;