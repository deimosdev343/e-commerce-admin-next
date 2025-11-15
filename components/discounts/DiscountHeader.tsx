"use client"
import React from 'react'


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
  return (
    <div className='w-[99%] p-2 flex flex-col rounded-lg  bg-white shadow-lg border-2 border-gray-200'>

    </div>
  )
}

export default DiscountHeader