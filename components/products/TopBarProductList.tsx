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
    setParams,
    createItemFunc
  } : {
    params: ParamsObj,
    setParams: Function
    createItemFunc: Function
  }
) => {

  const [searchTerm, setSearchTerm] = useState(params.name);
  console.log(searchTerm)
  return (
    <div className='w-full p-2 flex flex-col rounded-lg border-2 border-white bg-slate-700'>
      <div className='w-full flex justify-center p-2'>
        <h2 className='text-2xl font-bold'>
          Search Settings
        </h2>
      </div>
      <div className='w-full flex items-between justify-between p-5 gap-2 '>
        <input
          className='rounded-md bg-white w-[80%] p-3 text-black'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className='rounded-md bg-slate-900 text-white font-bold w-[18%] p-2 border-2 text-2xl'
          onClick={() => setParams((prms: ParamsObj) => ({...prms, name: searchTerm}))}
        >
          Search
        </button>
      </div>
      <div className='w-full flex p-2 justify-between px-5 '>
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-lg  bg-white ring-1 ring-gray-400 text-black font-bold w-[30%]" 
          onClick={(e) => {
            const value = (e.target as HTMLInputElement).value
            setParams((prms: ParamsObj) => ({...prms, sortBy:value}))
          }}
        >
          <option>Sort By</option>
          <option value="priceAsc">Price (low to high)</option>
          <option value="priceDesc">Price (high to low)</option>
          <option value="createdAtDesc">Newest</option>
          <option value="createdAtAsc">Oldest</option>
        </select>
        <button 
          className='rounded-md bg-slate-900 text-white font-bold w-[18%] p-2 border-2 text-2xl'
          onClick={() => createItemFunc()}
        >
          Add Item
        </button>
      </div>
    </div> 
  )
}

export default TopBarProductList