import Image from 'next/image';
import React from 'react'

const ExtraImage = ({img, removeExtraImage, index}: {img:string, removeExtraImage: Function, index:number}) => {
  return (
    <div className='flex flex-col items-center p-1 w-[100%] bg-gray-500 rounded-lg '>
      <div className='w-full items-center flex justify-end p-2'>
        <h2 
          className='p-2 hover:bg-slate-400 rounded-lg 
            transition-all cursor-pointer'
          onClick={() => removeExtraImage(index)}
        >
          X
        </h2>
      </div>
      <Image
        src={img}
        alt='extra image'
        width={300}
        height={400}
        className='w-[90%] rounded-lg'
      />
    </div>
  )
}

export default ExtraImage