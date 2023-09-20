import React from 'react'
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className='flex flex-col w-52 h-screen space-y-3 p-2'>
      <Link to='/dashboard'><button className='flex text-slate-400 focus:text-green-500 text-lg font-semibold focus:font-bold hover:bg-slate-200 p-1 items-center'><i className="material-icons">home</i>Dashboard</button></Link>
      <Link to='/dashboard/activity'><button className='flex text-slate-400 focus:text-green-500 text-lg font-semibold focus:font-bold hover:bg-slate-200 p-1 items-center'><i className="material-icons">flag</i>Recent Activity</button></Link>
      <Link to='/dashboard/all'><button className='flex text-slate-400 focus:text-green-500 text-lg font-semibold focus:font-bold hover:bg-slate-200 p-1 items-center'><i className="material-icons">list</i>All expenses</button></Link>
      <button className='flex text-slate-400 focus:text-green-500 text-lg font-semibold focus:font-bold hover:bg-slate-200 p-1 items-center'><i className="material-icons">sell</i>Groups</button>
      <button className='flex text-slate-400 focus:text-green-500 text-lg font-semibold focus:font-bold hover:bg-slate-200 p-1 items-center'><i className="material-icons">sell</i>Friends</button>
    </div>
  )
}

export default Sidenav;