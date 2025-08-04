import axios from "axios";
import { useEffect } from "react"

const MostViewedItemsComponent = () => {
  
  const fetchMostViewed = async () => {
    try {
      const res = await axios.get('/api/statistics')    
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {

  }, [])
  return (
    <div>


    </div>
  )
}

export default MostViewedItemsComponent