"use client"
import { useEffect, useState } from "react"

const ViewsAndOrdersByDateComponent = () => {
  const [viewsAndOrdersData, setViewsAndOrdersData] = useState();
  const fetchData = async () => {
    try {
      const newData = await axios.get('/api/statistics/ViewsAndOrdersChart');
      setViewsAndOrdersData({...newData});
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData();
  });

  console.log(viewsAndOrdersData)
  return (
    <div className="w-full h-[45%] p-5 flex flex-col items-center justify-center shadow-xl bg-slate-600 rounded-lg border-2">
        Loading...
      </div>
  )
}

export default ViewsAndOrdersByDateComponent