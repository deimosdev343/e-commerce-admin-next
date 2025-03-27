"use client"

//only way to have a fallback image is to use useState... :\ вот хуйна 

import { ProductType } from '@/types/ProductType'
import React, { useState } from 'react'
import PictureLogo from '../../assets/ImageLogo.png'
import Image from 'next/image'
const ProductBox = ({product, setEditModal} : {product: ProductType, setEditModal: Function}) => {
  const [fallback, setFallback] = useState<boolean>(false);
  return (
   <div className="p-5 flex w-full items-center bg-slate-700 rounded-xl border-2 border-gray-500">
     <div className="w-[33%] flex flex-col h-full justify-center items-center">
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
      <div className='w-[28%] flex flex-col h-full items-start justify-start gap-2 '>
        <h2 className='text-white font-bold text-2xl'>
          {product.name}
        </h2>
        <h2 className='text-white font-bold text-xl italic'>
          {product.description.length > 40 ? product.description.substring(0, 40) + "..." : product.description }
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
      <div className='w-[33%] gap-5 h-full flex flex-col justify-center items-center '>
        <button 
          className='w-[60%] border-white bg-slate-900 border-2 p-2 rounded-lg
            font-bold text-2xl shadow-lg hover:bg-slate-800'
          onClick={() => {
            setEditModal({show:true, product: product})
          }}
        >
          Edit Item
        </button>
        <button className='w-[60%] border-white border-2 bg-slate-900 p-2 rounded-lg font-bold text-2xl shadow-lg hover:bg-slate-800'>
          Delete Item
       </button>
      </div>
    </div>
  )
}

export default ProductBox 