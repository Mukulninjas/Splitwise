import React from 'react'

const AllExpenses = () => {
  return (
    <div className='w-1/2 flex'>
      <div className='flex flex-col w-52 h-screen space-y-3 p-2'>
        <div className='h-screen w-[600px] shadow-2xl rounded flex flex-col'>
          <div className='h-16 bg-slate-200 p-2 flex justify-between items-center'>
            <div className='text-lg font-bold text-slate-700'>All Expenses</div>
            <div className='space-x-1'>
              <button className='bg-orange-400 rounded p-2 text-white font-bold hover:pointer'>Add an expense</button>
              <button className='bg-green-400 rounded p-2 text-white font-bold hover:pointer'>Settle up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllExpenses