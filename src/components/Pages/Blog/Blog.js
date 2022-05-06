import React from 'react';

const Blog = () => {
    return (
        <div className='md:px-10'>
            <h1 className='text-2xl md:text-4xl text-center my-4'>This is blogs</h1>
            <div className='md:w-3/4 mx-auto'>
                <div className='p-2'>
                    <h1 className='text-xl font-bold mb-4 text-center'>What is the difference between javascript and nodejs?</h1>
                    <div className='md:flex'>
                        <ul className='border-2 mr-2 md:w-1/2 p-1 rounded mb-2'>
                            <h1 className='text-xl text-center my-2 font-bold'>JavaScript</h1>
                            <li className='mb-2'>1.  Javascript is a programming language used for writing scripts on the website. </li>
                            <li className='mb-2'>2.  Javascript can only be run in the client side. </li>
                            <li className='mb-2'>3.  Javascript is capable enough to change HTML document. </li>
                            <li className='mb-2'>4.  Javascript is used in frontend development. </li>
                        </ul>
                        <ul className='border-2 mr-2 md:w-1/2 p-1 rounded mb-2'>
                            <h1 className='text-xl text-center my-2 font-bold'>Nodejs</h1>
                            <li className='mb-2'>1.  NodeJS is a Javascript runtime environment. </li>
                            <li className='mb-2'>2.  Javascript can run outside the browser with the help of NodeJS. </li>
                            <li className='mb-2'>3.  Nodejs can't able to add HTML tags. </li>
                            <li className='mb-2'>4.  Nodejs is used in server-side development. </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:w-3/4 mx-auto'>
                <div className='p-2'>
                    <h1 className='text-xl font-bold mb-4 text-center'>When should you use nodejs and when should you use mongodb?</h1>
                    <div className='md:flex'>
                        <ul className='border-2 mr-2 md:w-1/2 p-1 rounded mb-2'>
                            <h1 className='text-xl text-center my-2 font-bold'>NodeJs </h1>
                            <li className='mb-2'>1.  When I need to create server than I need to use NodeJs. </li>
                            <li className='mb-2'>2.  When need to connect my client site to mongodb for data then I need to use NodeJs for connect them. </li>
                            <li className='mb-2'>3.  When I need to create api for my client site then I need to used NodeJS. </li>
                        </ul>
                        <ul className='border-2 mr-2 md:w-1/2 p-1 rounded mb-2'>
                            <h1 className='text-xl text-center my-2 font-bold'>MongoDb </h1>
                            <li className='mb-2'>1.  When I need to stored data for my site than I need to use Mongodb. </li>
                            <li className='mb-2'>2.  When I need to load some dynamic data then I used mongodb. </li>
                            <li className='mb-2'>3.  We can stored data in mongodb as document and collection. </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:w-3/4 mx-auto'>
                <div className='p-2'>
                    <h1 className='text-xl font-bold mb-4 text-center'>What is the differences between Sql and noSql databases?</h1>
                    <div className='md:flex'>
                        <ul className='border-2 mr-2 md:w-1/2 p-1 rounded mb-2'>
                            <h1 className='text-xl text-center my-2 font-bold'>SQL </h1>
                            <li className='mb-2'>1. Relational Database Management System (RDBMS) is called SQL </li>
                            <li className='mb-2'>2.  SQL databases are not suited for hierarchical data storage. </li>
                            <li className='mb-2'>3.  SQL data is Vertically Scalable. </li>
                            <li className='mb-2'>4.  SQL databases have fixed  or predefined schema </li>
                        </ul>
                        <ul className='border-2 mr-2 md:w-1/2 p-1 rounded mb-2'>
                            <h1 className='text-xl text-center my-2 font-bold'>noSQL </h1>
                            <li className='mb-2'>1.  Non-relational database system is called noSQL. </li>
                            <li className='mb-2'>2.  noSQL databases are best suited for hierarchical data storage. </li>
                            <li className='mb-2'>3.  noSQL data is Horizontally scalable. </li>
                            <li className='mb-2'>4.  noSQL data have dynamic schema. </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:w-3/4 mx-auto'>
                <div className='p-2'>
                    <h1 className='text-xl font-bold mb-4 text-center'>What is the purpose of jwt and how does it work?</h1>
                    <div className='border-2 mr-2 md:w-1/2 p-1 rounded mb-2'>
                        <p>JWT, or JSON Web Token, is an open standard way to used share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;