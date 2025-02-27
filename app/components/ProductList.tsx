"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductList = () => {
  const fetchData = async () => {
    try {
      await axios.get('/api/products', {
        params:{
          "govno":"govno",
          "govno2":"govno2"
        }
      });
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
   fetchData(); 
  }, [])
  const [products, setProducts] = useState([]);
  return (
    <div>ProductList</div>
  )
}

export default ProductList