import React from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Performance = () => {
    return (
        <div className='px-4 md:px-40 sm:px-1'>
  <h1 className='text-lg font-semibold py-3'>Performance Indicators</h1>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
  <div className='border-2 rounded-lg px-5 py-9 bg-slate-200 relative'>
    <BiDotsHorizontalRounded size={30} color='black' className="absolute top-0 right-0 text-gray-500 text-xl mt-2 mr-2" />
    <h3 className='text-lg py-2'>Percentage Profitable</h3>
    <p className='font-bold text-4xl'>80%</p>
  </div>

  <div className='border-2 rounded-lg px-5 py-9 bg-slate-200 relative'>
    <BiDotsHorizontalRounded size={30} color='black' className="absolute top-0 right-0 text-gray-500 text-xl mt-2 mr-2" />
    <h3 className='text-lg py-2'>Total Net Profit</h3>
    <p className='font-bold text-4xl'>$1,000</p>
  </div>

  <div className='border-2 rounded-lg px-5 py-9 bg-slate-200 relative md:mt-5'>
    <BiDotsHorizontalRounded size={30} color='black' className="absolute top-0 right-0 text-gray-500 text-xl mt-2 mr-2" />
    <h3 className='text-lg py-2'>Profit Factor</h3>
    <p className='font-bold text-4xl'>1.98</p>
  </div>

  <div className='border-2 rounded-lg px-5 py-9 bg-slate-200 relative md:mt-5'>
    <BiDotsHorizontalRounded size={30} color='black' className="absolute top-0 right-0 text-gray-500 text-xl mt-2 mr-2" />
    <h3 className='text-lg py-2'>Average Trade Profit</h3>
    <p className='font-bold text-4xl'>$50.00</p>
  </div>
</div>

</div>

    )
}

export default Performance




