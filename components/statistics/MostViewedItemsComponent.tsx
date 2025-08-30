"use client"

import axios from "axios";
import { useEffect, useState } from "react"
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from "@mui/x-charts";

const MostViewedItemsComponent = () => {
  const [topViews, setTopViews] = useState<Array<{
    name?: string,
    views: number
  }>>([]);
  const [loading, setLoading] = useState<boolean>(true);


  const fetchMostViewed = async () => {
    try {
      
      const res = await axios.get('/api/statistics/mostViewed');
      const newTopViews = res.data.map((d:any) => ({...d, views: d.views, name: d.product.name}));
      setTopViews(newTopViews);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchMostViewed();
  }, [])

  if(loading) {
    return (
      <div className="w-[50%] h-[100%] p-5 flex flex-col items-center justify-center shadow-xl bg-slate-600 rounded-lg border-2">
        <h2 className="text-xl text-white font-bold">Top Views</h2>
        Loading...
      </div>
    ) 
  }
  return (
    <div className="w-[50%] h-full p-5 flex flex-col items-center justify-center shadow-xl bg-slate-600 rounded-lg border-2">
      <h2 className="text-xl text-white font-bold">Top Views</h2>
      <div className="w-full min-h-[80%] flex flex-col">
        <BarChart
          xAxis={[
            {
              id:"Product Name",
              data:topViews.map(v => v.name),
            
            }
          ]}
          series={[
            {
              data:topViews.map(v => v.views),
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

export default MostViewedItemsComponent