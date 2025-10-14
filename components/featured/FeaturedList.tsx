"use client"

import { useState } from "react";


const FeaturedList = () => {
  const [productParams, setProductParams] = useState({
    limit:100,
    category: null,
  });


  return (
    <div>FeaturedList</div>
  )
}

export default FeaturedList