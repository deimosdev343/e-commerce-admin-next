import Image from 'next/image'
import React from 'react'

const ExtraImage = ({img}: {img:string}) => {
  return (
    <div className='flex flex-col p-2 w-[25%] border-gray-600 border-4'>
      <Image
        src={img}
        alt='extra image'
        className='w-full'
      />
    </div>
  )
}

export default ExtraImage