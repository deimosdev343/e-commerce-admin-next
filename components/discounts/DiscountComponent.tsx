import { DiscountType } from '@/types/DiscountType'
import Image from 'next/image'
import React, { useState } from 'react'
import PictureLogo from '../../assets/ImageLogo.png'

type DiscountComponentType =  {
  discount: DiscountType,
  setEditModal: Function,
  setDeleteModal: Function
}

const DiscountComponent = ({discount, setEditModal, setDeleteModal} : DiscountComponentType) => {
  const [fallback, setFallback] = useState<boolean>(false);
  const startDate = discount.startDate.toLocaleString().split("T")[0]
  const startTime = discount.startDate.toLocaleString().split("T")[1].split(".")[0].split(":").slice(0,2).join(":")
  const endDate = discount.endDate.toLocaleString().split("T")[0]
  const endTime = discount.endDate.toLocaleString().split("T")[1].split(".")[0].split(":").slice(0,2).join(":")
  return (
    <div className='p-5 flex w-full items-start bg-white rounded-xl border-2 shadow-md'>
      <div className='w-[33%] flex flex-col h-full justify-center items-center gap-2'>
        <h2 className='font-bold'>Discount Image:</h2>
        <Image
          alt="discount image"
          title='discount image'
          src={fallback ? PictureLogo : discount.image}
          onError={() => {setFallback(true)}}
          width={240}
          height={240}
          className='border-gray-800 border-4 rounded-md'
        />
        <h2 className='font-bold'>Background:</h2>
        <div className={`h-[10%] w-[240] p-5 ${discount.background} border-gray-800 border-4 rounded-lg`}>
        </div>
      </div>
      <div className='w-[50%] flex flex-col h-full items-center  gap-2'>
        <h2 className='text-xl font-bold underline'>Promo Description:</h2>
        <div className='w-full min-h-[250px] rounded-2xl border-4 p-2 shadow-lg flex flex-col items-center'>
          <p className='text-lg font-semibold text-black'>{discount.description}</p>
        </div>
        <div className='w-[60%] flex justify-between items-center gap-2'>
          <div className='flex flex-col items-center '>
            <h2  className='text-lg font-bold '>Start Date:</h2>
            <p className='text-md font-bold'>{startDate} - {startTime}</p>
          </div>
          <div className='flex flex-col items-center '>
            <h2 className='text-lg font-bold'>End Date:</h2>
            <p className='text-md font-bold'>{endDate} - {endTime}</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default DiscountComponent