"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductType } from '../types/ProductType'

const ProductList = () => {
  const [productParams, setProductParams] = useState({
    limit:10,
    category: null,
    sortBy: "CreatedAtDesc",
    name:""
  })
  const fetchData = async () => {
    try {
      const data = (await axios.get('/api/products', {
        params:{
          limit: productParams.limit,
          category: productParams.category,
          sortBy: productParams.sortBy,
          name: productParams.name
        }
      })).data;
      setProducts(data);
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
   fetchData(); 
  }, [])
  const [products, setProducts] = useState<Array<ProductType>>([]);
  return (
    <div>ProductList</div>
  )
}

export default ProductList