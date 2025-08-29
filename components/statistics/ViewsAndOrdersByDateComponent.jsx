"use client"

import { useEffect, useState } from "react"
import axios from "axios";
import { LineChart } from "@mui/x-charts";

const ViewsAndOrdersByDateComponent = () => {
  const [viewsAndOrdersData, setViewsAndOrdersData] = useState();
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const newData = (await axios.get('/api/statistics/ViewsAndOrdersChart')).data;
      const newDataSet = [];
      Object.keys(newData).forEach(k => {
        newDataSet.push({"date":k, viewCount: newData[k].viewCount, orderCount: newData[k].orderCount})
      });
      setViewsAndOrdersData(newDataSet);
      setLoading(false);
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  if(loading) {
    return (
      <div className="w-full h-[45%] p-5 flex flex-col items-center justify-center shadow-xl bg-slate-600 rounded-lg border-2">
          Loading...
      </div>
    )
  } 
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  return (
    <div className="w-full h-full p-5 flex flex-col items-center justify-center shadow-xl bg-slate-600 rounded-lg border-2">
      <h2 className="text-xl text-white font-bold">Order and View Count</h2>
      <div className="w-full min-h-[80%] flex flex-col">
        <LineChart
          
          dataset={viewsAndOrdersData}
          
          series={[
            {curve:"bumpX", data:viewsAndOrdersData.map(e => e.viewCount), label:"View Count"},
            {curve:"bumpX",data:viewsAndOrdersData.map(e => e.orderCount), label:"Order Count"},

          ]}
          xAxis={[{scaleType:'point', data:viewsAndOrdersData.map(e => e.date)}]}
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

export default ViewsAndOrdersByDateComponent