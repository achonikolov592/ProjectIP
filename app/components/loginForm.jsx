'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';


 const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLoginClick = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        if ( email == "acho123@gmail.com" && password=="asdfghjkl"){
            router.push('/login/user');
        }
        
    };
    return (
    <div className='bg-sky-500 w-full flex items-center justify-center h-1/2'>
        <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                    email
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                    Password
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-20">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                <button onClick={handleLoginClick} className="flex items-center justify-center bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Log In</button>
                </div>
            </div>
        </form>
                
        
    </div>
  );
};

export default Form