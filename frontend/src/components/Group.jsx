import React from 'react'

const Group = () => {
  return (
      <div className='flex flex-col w-1/2 min-h-full space-y-2'>
          <div className='text-slate-400 font-semibold'>START A NEW GROUP</div>
          <div className='text-2xl font-normal text-slate-700'>My group shall be called...</div>
          <input className='border-2 h-12 rounded-md' type="text"></input>
          <div className='text-slate-400 font-semibold'>GROUP MEMBERS</div>
          <div>
              <input className='border-2 h-12 rounded-md' placeholder='Name' type="text"></input>
              <input className='border-2 h-12 rounded-md' placeholder='Email' type="text"></input>
          </div>
    </div>
  )
}

export default Group