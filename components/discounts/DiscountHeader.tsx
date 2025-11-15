"use client";
import React, { useState } from 'react'


interface ParamsObj  {

  description?: string, 
  startDate?: Date,
  endDate?: Date
  limit: number
}

const DiscountHeader = ({
  params,
  setParams,
  createDiscountFunc
}: {
  params: ParamsObj,
  setParams: Function,
  createDiscountFunc: Function
}) => {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='w-[99%] p-2 flex flex-col rounded-lg  bg-white shadow-lg border-2 border-gray-200'>
      <div className='w-full flex justify-center p-2'>
        <h2 className='text-2xl font-bold text-black'>
          Search Settings
        </h2>
      </div>
      <div className='w-full flex items-between justify-between p-5 gap-2 '>
        <input
          className='rounded-md bg-white w-[80%] p-3 text-black shadow-md border-2 border-slate-400'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className='rounded-md shadow-md text-black font-bold w-[18%] p-2 border-2 border-slate-400 text-2xl hover:bg-slate-100'
          onClick={() => setParams((prms: ParamsObj) => ({...prms, description: searchTerm}))}
        >
          Search
        </button>
      </div>
      <div className='w-full flex p-2 justify-between px-5'>
        <button 
          className='rounded-md shadow-md text-black font-bold w-[18%] p-2 border-2 border-slate-400 text-2xl hover:bg-slate-100'
          onClick={() => createDiscountFunc()}
        >
          Add Discount
        </button>
      </div>
    </div>
  )
}

export default DiscountHeader