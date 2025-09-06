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
          className='rounded-md shadow-md text-black font-bold w-[18%] p-2 border-2 border-slate-400 text-2xl hover:bg-slate-100'
          onClick={() => createItemFunc()}
        >
          Add Item
        </button>
      </div>
    </div> 
  )
}

export default TopBarProductList