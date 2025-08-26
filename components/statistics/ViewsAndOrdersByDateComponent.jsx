"use client"
import { useEffect, useState } from "react"
import axios from "axios";

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
    } catch (err) {
      console.log(err)
    }
  }
  console.log(viewsAndOrdersData)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-[45%] p-5 flex flex-col items-center justify-center shadow-xl bg-slate-600 rounded-lg border-2">
        Loading...
    </div>
  )
}

export default ViewsAndOrdersByDateComponent