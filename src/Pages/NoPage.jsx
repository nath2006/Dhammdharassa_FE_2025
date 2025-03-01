import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <h1 className="text-[150px] font-bold text-black">404</h1>
            <h1 className="text-[40px] font-bold text-black mb-4">Something Wrong</h1>
            <Link to="/">
                <button className="bg-black text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg">
                    Back to Homepage
                </button>
            </Link>
        </div>
    );
}

export default NoPage;