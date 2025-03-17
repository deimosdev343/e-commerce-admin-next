import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

const LinkBox = ({title, link, image} : {title: string, link: string, image:string | StaticImageData})  => {

  return (
    <Link href={link}
      className=' rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600
        transition-all h-auto p-5 flex flex-col border-2 border-white hover:cursor-pointer items-center'
    >
      <h2 className='text-white text-2xl font-bold'>{title}</h2>
      <Image src={image} alt={title} className='w-10 h-10'/>
    </Link>
  )
}

export default LinkBox