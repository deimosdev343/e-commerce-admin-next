import { ProductType } from '@/types/ProductType';
import Image from 'next/image';
import React, { useState } from 'react';
import PictureLogo from '../../assets/ImageLogo.png';

const ModalProductComponent = ({product}: {product: ProductType}) => {
  const [fallback, setFallback] = useState<boolean>(false);
  
  return (
    <div className='w-full p-5 flex items-center border-2 border-gray-50 rounded-xl'>
      <div className="flex flex-col h-full justify-start items-center">
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
      <div className="flex flex-col h-full justify-start items-center">
        
      </div>
    </div>
  )
}

export default ModalProductComponent