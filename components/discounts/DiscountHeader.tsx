"use client"
import React from 'react'


interface ParamsObj  {

  name?: string, 
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
    <div>DiscountHeader</div>
  )
}

export default DiscountHeader