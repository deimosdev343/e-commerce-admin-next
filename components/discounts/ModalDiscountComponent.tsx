import { DiscountType } from '@/types/DiscountType'
import Image from 'next/image'
import React, { useState } from 'react'
import PictureLogo from '../../assets/ImageLogo.png'

const ModalDiscountComponent = ({discount}: {discount: DiscountType}) => {
    const [fallback, setFallback] = useState<boolean>(false);
  
  return (
    <div className='w-full flex items-center gap-5 p-2 border-2 border-slate-200 shadow-md'>
      <Image
        alt="discount image"
        title='discount image'
        src={fallback ? PictureLogo : discount.image}
        onError={() => {setFallback(true)}}
        width={120}
        height={120}
        className='border-gray-800 border-4 rounded-md h-[25%] w-[25%]'
      />
      <p className='text-md font-bold'>{discount.description}</p>
    </div>
  )
}

export default ModalDiscountComponent