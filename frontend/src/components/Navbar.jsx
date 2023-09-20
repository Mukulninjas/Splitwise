import React from 'react'

const Navbar = () => {
  const logout =()=>{
    alert("logout user");
  }
  return (
      <div className='w-full h-10 bg-green-500 px-20 flex justify-between items-center'>
          <div className='text-xl font-bold text-slate-100'>Splitwise Clone</div>
          <div className='font-bold text-slate-100'>
            <button className='bg-green-400 rounded p-2 text-white font-bold hover:pointer'
            onClick={logout}>my name</button>
</div>
    </div>
  )
}

export default Navbar