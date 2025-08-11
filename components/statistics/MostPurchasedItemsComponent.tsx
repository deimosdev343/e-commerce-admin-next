import axios from 'axios';
import React, { useState } from 'react'

const MostPurchasedItemsComponent = () => {
  const [topViews, setTopViews] = useState<Array<{
    name?: string,
    views: number
  }>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchMostViewed = async () => {
    try {
      const res = await axios.get('/api/statistics/mostOrdered');
      const newTopViews = res.data.map((d:any) => ({...d, views: d.views, name: d.product.name}));
      setTopViews(newTopViews)
    } catch (err) {
      console.log(err);
    }
  }

  if(loading) {
    return (
      <div className="w-[45%] h-[45%] p-5 flex flex-col items-center justify-center shadow-xl bg-slate-600 rounded-lg border-2">
        <h2 className="text-xl text-white font-bold">Top Ordered Items</h2>
        Loading...
      </div>
    ) 
  }
  return (
    <div className="w-[45%] h-[45%] p-5 flex flex-col items-center justify-center shadow-xl bg-slate-600 rounded-lg border-2">


    </div>
  )
}

export default MostPurchasedItemsComponent