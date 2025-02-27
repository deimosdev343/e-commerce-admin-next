"use client"

//only way to have a fallback image is to use useState... :\ вот хуйна 

import { ProductType } from '@/app/types/ProductType'
import React, { useState } from 'react'
import PictureLogo from '../../../assets/ImageLogo.png'
import Image from 'next/image'
const ProductBox = ({product} : {product: ProductType}) => {
  const [fallback, setFallback] = useState<boolean>(false);
  return (
   <div className="p-5 flex w-full bg-slate-700 rounded-xl border-2 border-gray-500">
     <div className="flex flex-col h-full justify-center items-center">
        <Image
          alt='product image'
          src={fallback ? PictureLogo : product.image }
          onError={(err) => {setFallback(true)}}
          width={360}
          height={360}
          className='border-gray-300 border-4 rounded-md'
        />
        <h2 className='text-white font-bold text-lg'>
          ID: {product._id}
        </h2> 
      </div>
    </div>
  )
}

export default ProductBox 