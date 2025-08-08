"use client"

import axios from "axios";
import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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
      const newTopViews = res.data.map((d:any) => ({...d, views: d.views, name: d.product.name}));
      setTopViews(newTopViews)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchMostViewed();
  }, [])

  return (
    <div className="w-[45%] h-[45%] p-5 flex flex-col items-center justify-center shadow-xl bg-gray-200 rounded-lg border-2">
      <h2 className="text-xl text-black font-bold">Top Views</h2>
      <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={topViews}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="views" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default MostViewedItemsComponent