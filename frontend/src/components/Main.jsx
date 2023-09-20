import React from 'react'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center'>
                <Sidenav />
                <Outlet />
            </div>
        </>
    )
}

export default Main