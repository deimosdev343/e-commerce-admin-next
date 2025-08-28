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
  return (
    <div className="w-full h-full p-5 flex flex-col items-center justify-center shadow-xl bg-slate-600 rounded-lg border-2">
      <h2 className="text-xl text-white font-bold">Order and View Count</h2>
      <div className="w-full min-h-[80%] flex flex-col">
        <LineChart
          dataset={viewsAndOrdersData}
          xAxis={[
            {
              dataKey: "date",
              scaleType: "time",
              valueFormatter: (date) => date
            },
          ]}
          series={[
            {
              dataKey: "viewCount",
              label: "View Count",
              color: "#1976d2",
             
            },
            {
              dataKey: "orderCount",
              label: "Order Count",
              color: "#d32f2f",
              
            },
          ]}
         
        />
      </div>
    </div>
    
  
  )
}

export default ViewsAndOrdersByDateComponent