"use client";

import React, { useState } from 'react'
import DiscountHeader from './DiscountHeader'


interface ParamsObj  {

  description?: string, 
  startDate?: Date,
  endDate?: Date
  limit: number
}

const DiscountList = () => {
  const [searchParams, setSearchParams] = useState<ParamsObj>({
    description:"",
    limit: 10
  })
  return (
    <div className='w-full max-h-full flex flex-col items-center gap-2 p-2 overflow-scroll'>
      <DiscountHeader params={searchParams} setParams={setSearchParams} createDiscountFunc={() => {}}/>
    </div>
  )
}

export default DiscountList