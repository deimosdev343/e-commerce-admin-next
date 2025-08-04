"use client"

import axios from "axios";
import { useEffect } from "react"

const MostViewedItemsComponent = () => {
  
  const fetchMostViewed = async () => {
    try {
      const res = await axios.get('/api/statistics/mostViewed');
      console.log(res);    
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMostViewed();
  }, [])
  return (
    <div>
    </div>
  )
}

export default MostViewedItemsComponent