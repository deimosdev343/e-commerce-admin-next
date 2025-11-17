"use client"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const LinkBox = ({title, link, image} : {title: string, link: string, image:string | StaticImageData})  => {
  
  const router = useRouter();
  const onClick = () => {
    router.push(link)
  }
  return (
    <div
      onClick={onClick} 
      className=' rounded-xl bg-white w-[50%] hover:bg-gray-200 active:bg-slate-100 shadow-lg
        transition-all h-auto p-5 flex flex-col border-2 border-white hover:cursor-pointer items-center'
    >
      <h2 className='text-black text-2xl font-bold'>{title}</h2>
      <Image src={image} alt={title} className='w-10 h-10'/>
    </div>
  )
}

export default LinkBox