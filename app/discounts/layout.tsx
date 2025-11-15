import React from 'react'
import SideBar from '../../components/SideBar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full h-screen flex'>
      
      <SideBar/>
    
      
      {children}
    </div>
  )
}

export default layout