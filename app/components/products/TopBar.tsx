"use client"

import React, { useState } from 'react'

interface ParamsObj  {
  category: string,
  name: string, 
  sortBy: string,
  limit: number
}
const TopBar = (
  {
    setSearchInput,
    params, 
    setParams
  } : {
    setSearchInput: Function,
    params: ParamsObj,
    setParams: Function}
  ) => {

  return (
    <div className='w-full p-2 flex flex-col rounded-lg border-2 border-white'>
      <div className='w-full flex items-center '>

      </div>
    </div> 
  )
}

export default TopBar