"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductType } from '../types/ProductType'
import ProductBox from './products/ProductBox'
import TopBarProductList from './products/TopBarProductList'
import EditProduct from './products/modals/EditProduct'
import DeleteProduct from './products/modals/DeleteProduct'

const ProductList = () => {
  const [productParams, setProductParams] = useState({
    limit:10,
    category: null,
    sortBy: "CreatedAtDesc",
    name:""
  });

  const [productEditModal, setProductEditmodal] = useState<{
    show: boolean | undefined, 
    product: ProductType | null, 
    type: "Edit" | "Create" }
  >
  ({
    show: false,
    product: null,
    type:"Create"
  });

  const [productDeleteModal, setProductDeleteModal] = useState<{
    show: boolean | undefined,
    id:string
  }>
  ({
    show: false,
    id: ""
  });
  
  
  
  const createItemFunc = async () => {
    setProductParams(prms =>  ({
      ...prms,
      category: null,
      sortBy: "CreatedAtDesc",
      name:""
    }));

    setProductEditmodal({
      show: true,
      product: {
        _id:"",
        name:"",
        category:"",
        description:"",
        extraImages: [],
        sizes: [],
        colors:[],
        image: "",
        price: 0,
      },
      type:"Create"
    })
  }
  
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
    if(!productEditModal.show && !productDeleteModal.show) {
      fetchData(); 
    }
  }, [productParams,productEditModal, productDeleteModal]);

  const [products, setProducts] = useState<Array<ProductType>>([]);
  return (
    <div className='w-full max-h-full flex flex-col items-center gap-2 p-2 overflow-scroll'>
      <DeleteProduct modalState={productDeleteModal} setModalState={setProductDeleteModal}/>
      <EditProduct modalState={productEditModal} setModalState={setProductEditmodal}/>
      <TopBarProductList params={productParams} setParams={setProductParams} />
      {products.map(prd => <ProductBox 
        key={prd._id}
        product={prd} 
        setEditModal={setProductEditmodal} 
        setDeleteModal={setProductDeleteModal}
      />)} 
    </div>
  )
}

export default ProductList