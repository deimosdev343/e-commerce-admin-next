import MostPurchasedItemsComponent from '@/components/statistics/MostPurchasedItemsComponent'
import MostViewedItemsComponent from '@/components/statistics/MostViewedItemsComponent'
import ViewsAndOrdersByDateComponent from '@/components/statistics/ViewsAndOrdersByDateComponent';
import React from 'react'

const StatsPage = () => {
  return (
    <div className='w-full flex-col flex gap-2 h-screen p-5'>
      <div className='w-full flex gap-2 p-5 h-[50%]'>
        <MostViewedItemsComponent/>
        <MostPurchasedItemsComponent/>
      </div>
      <div className='w-full flex gap-2 h-[50%]'>
        <ViewsAndOrdersByDateComponent/>
      </div>
    </div>
  )
}

export default StatsPage