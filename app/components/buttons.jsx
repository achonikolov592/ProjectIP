
'use client'
import React from 'react'
import { useRouter } from 'next/navigation';


 const Buttons = () => {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push('/login');
    };
    const handleSignUpClick = () => {
        router.push('/signup');
    };
    const handleGalleryClick = () => {
        router.push('/gallery');
    };
    return (
    <div className='bg-sky-500 w-full flex items-center justify-center h-1/2'>
        <div className="flex flex-col items-center space-y-1">
            <button onClick={handleLoginClick} className="flex items-center justify-center bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Log In</button>

            <button onClick={handleSignUpClick} className="flex items-center justify-center bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Sign Up</button>

            <button onClick={handleGalleryClick} className="flex items-center justify-center bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Gallery</button>
  </div>
    </div>
  )
}

export default Buttons