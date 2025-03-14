"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductType } from '../types/ProductType'
import ProductBox from './products/ProductBox'
import TopBarProductList from './products/TopBarProductList'

const ProductList = () => {
  const [productParams, setProductParams] = useState({
    limit:10,
    category: null,
    sortBy: "CreatedAtDesc",
    name:"shirt"
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
  }, [productParams]);

  const [products, setProducts] = useState<Array<ProductType>>([]);
  return (
    <div className='w-full max-h-full flex flex-col items-center gap-2 p-2 overflow-scroll'>
      <TopBarProductList params={productParams} setParams={setProductParams} />
     {products.map(prd => <ProductBox key={prd._id} product={prd}/>)} 
    </div>
  )
}

export default ProductList