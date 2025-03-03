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
          onError={() => {setFallback(true)}}
          width={360}
          height={360}
          className='border-gray-300 border-4'
        />
        <h2 className='text-white font-bold text-lg'>
          ID: {product._id}
        </h2> 
      </div>
      <div className='flex flex-col h-full justify-between gap-2 p-5'>
        <h2 className='text-white font-bold text-2xl'>
          {product.name}
        </h2>
        <h2 className='text-white font-bold text-xl italic'>
          {product.description.length > 20 ? product.description.substring(0, 40) + "..." : product.description }
        </h2>
        <div className='flex w-full items-center gap-5'>
          <h2 className='text-white font-bold text-2xl'>
            Colors: [
          </h2>
          {product.colors.map(clr => <div
            key={clr}
            className='flex flex-row p-3 rounded-xl shadow-lg'
            style={{backgroundColor:clr}}
          > 
          </div>)}
          <h2 className='text-white font-extrabold text-2xl'>]</h2>
        </div>
        <div className='w-full flex items-center gap-2'>     
          <h2 className='text-white font-extrabold text-2xl'> sizes: [</h2>
          {product.sizes.map(sz => <h2 key={sz} className='text-2xl font-bold'>{sz}</h2>)}

          <h2 className='text-white font-extrabold text-2xl'> ]</h2>
        </div> 
      </div>
    </div>
  )
}

export default ProductBox 