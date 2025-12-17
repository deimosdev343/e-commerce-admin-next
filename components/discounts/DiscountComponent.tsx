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
  
  return (
    <div className='p-5 w-full items-center bg-white rounded-xl border-2 shadow-md'>
      <div className='w-[33%] flex flex-col h-full justify-center items-center gap-2'>
        <h2 className='font-bold'>Discount Image:</h2>
        <Image
          alt="discount image"
          title='discount image'
          src={fallback ? PictureLogo : discount.image}
          onError={() => {setFallback(true)}}
          width={360}
          height={360}
          className='border-gray-800 border-4 rounded-md'
        />
        <h2 className='font-bold'>Background:</h2>
        <div className={`h-[10%] w-[360] p-5 ${discount.background} border-gray-800 border-4 rounded-lg`}>
        </div>
      </div>
    </div>
  )
}

export default DiscountComponent