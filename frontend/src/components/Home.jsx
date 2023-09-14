import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-full m-0 p-0 bg-slate-100 min-h-screen'>
            {/* Navbar */}
            <div className='py-5 px-10 lg:px-20 flex justify-between'>
                <div className='text-2xl text-slate-500 font-bold'>Splitwise Clone</div>
                <div className='space-x-2'>
                    <button className='text-green-500 font-medium hover:cursor-pointer'><Link to='/login'>Login</Link></button>
                    <button className='p-2 text-white bg-green-500 font-medium rounded shadow-md hover:cursor-pointer'><Link to='/signup'>Signup</Link></button>
                </div>
            </div>

            {/* Hero Section */}
            <div className='flex p-20'>
                <div className='flex flex-col space-y-3'>
                    <div className='text-5xl w-1/2 font-medium text-slate-700'>Less stress when sharing expenses with mates.</div>
                    <div className='w-1/2'>
                        <i class="material-icons">flight</i>
                        <i class="material-icons">home</i>
                        <i class="material-icons">favorite</i>
                        <i class="material-icons">star</i>
                    </div>
                    <div className='w-1/2'>
                        Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
                    </div>
                    <div className='w-1/2'>
                        <button className='py-3 px-5 rounded shadow-lg text-white bg-green-500 hover:pointer w-40'><Link to='/signup'>Sign up</Link></button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJAD3vH6fzp-rhqwL3p6muJId_JBo1dJPkA&usqp=CAU"></img>
                </div>
            </div>

        </div>
    )
} 

export default Home;