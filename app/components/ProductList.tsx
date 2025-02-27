"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductType } from '../types/ProductType'
import ProductBox from './products/ProductBox'

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
    <div className='w-full max-h-full flex flex-col items-center gap-2 p-2 overflow-scroll'>
     {products.map(prd => <ProductBox key={prd._id} product={prd}/>)} 
    </div>
  )
}

export default ProductList