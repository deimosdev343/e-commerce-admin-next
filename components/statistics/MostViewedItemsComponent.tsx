"use client"

import axios from "axios";
import { useEffect, useState } from "react"
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const MostViewedItemsComponent = () => {
  const [topViews, setTopViews] = useState([]);

  const fetchMostViewed = async () => {
    try {
      const res = await axios.get('/api/statistics/mostViewed');
      const newTopViews = res.data.map((d:any) => ({...d, value: d.views, name: d.product.name}));
      setTopViews(newTopViews)
    } catch (err) {
      console.log(err);
    }
  }
  console.log(topViews)
  useEffect(() => {
    fetchMostViewed();
  }, [])

  return (
    <div className="w-[30%] h-[45%] p-5 flex flex-col items-center justify-center bg-slate-600 rounded-lg shadow-lg">
      <h2 className="text-xl text-white font-bold">Top Views</h2>
      <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={topViews}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    </div>
  )
}

export default MostViewedItemsComponent