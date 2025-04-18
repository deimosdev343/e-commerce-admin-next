import Image from 'next/image';
import React from 'react'

const ExtraImage = ({img}: {img:string}) => {
  return (
    <div className='flex flex-col items-center p-1 w-[100%] bg-gray-500 rounded-lg '>
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