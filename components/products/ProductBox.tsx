"use client"

//only way to have a fallback image is to use useState... :\ вот хуйна 

import { ProductType } from '@/types/ProductType'
import React, { useState } from 'react'
import PictureLogo from '../../assets/ImageLogo.png'
import Image from 'next/image'
const ProductBox = ({
  product, 
  setEditModal,
  setDeleteModal,
  setProductFeatureModal,
  setProductAddDiscountModal
} : {
  product: ProductType, 
  setEditModal: Function,
  setDeleteModal: Function
  setProductFeatureModal: Function,
  setProductAddDiscountModal: Function
}) => {
  const [fallback, setFallback] = useState<boolean>(false);
  return (
   <div className="p-5 flex w-[99%] items-center bg-white rounded-xl border-2 shadow-md">
     <div className="w-[33%] flex flex-col h-full justify-center items-center">
        <Image
          alt='product image'
          src={fallback ? PictureLogo : product.image }
          onError={() => {setFallback(true)}}
          width={360}
          height={360}
          className='border-gray-300 border-4'
        />
        <h2 className='text-black font-bold text-lg'>
          ID: {product._id}
        </h2> 
      </div>
      <div className='w-[28%] flex flex-col h-full items-start justify-start gap-2 '>
        <h2 className='text-black font-bold text-2xl'>
          {product.name}
        </h2>
        <h2 className='text-black font-bold text-xl italic'>
          {product.description.length > 40 ? product.description.substring(0, 40) + "..." : product.description }
        </h2>
        <div className='flex flex-col w-full items-start gap-5 '>
          <h2 className='text-black font-bold text-3xl'>
            Colors 
          </h2>
          
          <div className='grid grid-cols-5 gap-5  items-center bg-white p-2 shadow-xl rounded-md border-2 border-slate-400 '>
            {product.colors.map(clr => <div
              key={clr}
              className='flex flex-row p-3 rounded-xl shadow-lg border-white '
              style={{backgroundColor:clr}}
            > 
            </div>)}
          </div>

          
        </div>
        <div className='w-full flex items-center gap-2'>     
          <h2 className='text-black font-extrabold text-2xl'> sizes: [</h2>
          {product.sizes.map(sz => <h2 key={sz} className='text-2xl font-bold text-black'>{sz}</h2>)}

          <h2 className='text-black font-extrabold text-2xl'> ]</h2>
        </div> 
      </div>
      <div className='w-[33%] gap-5 h-full flex flex-col justify-center items-center '>
        <button 
          className='w-[60%]  bg-white  p-2 rounded-lg border-2 border-slate-400
            font-bold text-2xl shadow-lg hover:bg-slate-100 text-black'
          onClick={() => {
            setEditModal({show:true, product: {...product}, type: "Edit"})
          }}
        >
          Edit Item
        </button>
        <button 
          className='
            w-[60%] border-2 border-slate-400 bg-white p-2 
            rounded-lg font-bold text-2xl shadow-lg
          text-black hover:bg-slate-100'
          onClick={() => {
            setDeleteModal({
              id: product._id,
              show: true
            });
          }}
          >
          Delete Item
       </button>
       <button 
          className='
            w-[60%] border-2 border-slate-400 bg-white p-2 
            rounded-lg font-bold text-2xl shadow-lg
          text-black hover:bg-slate-100'
          onClick={() => {
            setProductFeatureModal({
              id: product._id,
              show: true,
              featured: product.featured
            });
          }}
          >
          Feature Item
       </button>
       <button 
          className='
            w-[60%] border-2 border-slate-400 bg-white p-2 
            rounded-lg font-bold text-2xl shadow-lg
          text-black hover:bg-slate-100'
          onClick={() => {
            setProductAddDiscountModal({
              show: true,
              product: product
            });
          }}
          >
          Add Discount
       </button>
       
      </div>
    </div>
  )
}

export default ProductBox 