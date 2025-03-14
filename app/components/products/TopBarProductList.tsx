"use client"

import React, { useState } from 'react'

interface ParamsObj  {
  category: string | null,
  name: string, 
  sortBy: string,
  limit: number
}
const TopBarProductList = (
  {
   
    params, 
    setParams
  } : {
    params: ParamsObj,
    setParams: Function}
  ) => {

  return (
    <div className='w-full p-2 flex flex-col rounded-lg border-2 border-white bg-slate-700'>
      <div className='w-full flex justify-center p-2'>
        <h2 className='text-2xl font-bold'>
          Search Params
        </h2>
      </div>
      <div className='w-full flex items-center p-2 gap-2 '>
        <input
          className='rounded-md bg-white w-[80%] p-2'
        />
        <button className='rounded-md bg-blue-400 text-white font-bold w-[18%] p-2'>
          Search
        </button>
      </div>
    </div> 
  )
}

export default TopBarProductList