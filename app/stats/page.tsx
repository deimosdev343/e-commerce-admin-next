import MostPurchasedItemsComponent from '@/components/statistics/MostPurchasedItemsComponent'
import MostViewedItemsComponent from '@/components/statistics/MostViewedItemsComponent'
import React from 'react'

const StatsPage = () => {
  return (
    <div className='w-full flex gap-2 h-screen p-5'>
      <MostViewedItemsComponent/>
      <MostPurchasedItemsComponent/>
    </div>
  )
}

export default StatsPage