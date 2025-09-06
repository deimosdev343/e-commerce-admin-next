"use client"
import { BarChart } from '@mui/x-charts';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MostPurchasedItemsComponent = () => {
  const [topPurchases, setTopPurchases] = useState<Array<{
    name?: string,
    purchases: number
  }>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchMostViewed = async () => {
    try {
      const res = await axios.get('/api/statistics/mostOrdered');
      const newtopPurchases = res.data.map((d:any) => ({...d, purchases: d.orders, name: d.product.name}));
      setTopPurchases(newtopPurchases)
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMostViewed();
  }, [])
  
  if(loading) {
    return (
      <div className="w-[50%] h-full p-5 flex flex-col items-center justify-center shadow-xl bg-white rounded-lg border-2">
        <h2 className="text-xl  font-bold">Top Ordered Items</h2>
        Loading...
      </div>
    ) 
  }
  return (
    <div className="w-[50%] h-full p-5 flex flex-col items-center justify-center shadow-xl bg-white rounded-lg border-2">
      <h2 className="text-xl  font-bold">Top Sales</h2>
      <div className="w-full min-h-[80%] flex flex-col">
        <BarChart
          xAxis={[
            {
              id:"Product Name",
              data:topPurchases.map(v => v.name),
            
            }
          ]}
          series={[
            {
              data:topPurchases.map(v => v.purchases),
              color:"#4d5bab"
            }
          ]}
          sx={{
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
              fill: "white", // your color here
            },
         
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              fill: "white",
            },
          }}
        />
      </div>
      

    </div>
  )
}

export default MostPurchasedItemsComponent