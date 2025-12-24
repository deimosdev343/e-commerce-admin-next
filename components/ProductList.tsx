"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductType } from '../types/ProductType'
import ProductBox from './products/ProductBox'
import TopBarProductList from './products/TopBarProductList'
import EditProduct from './products/modals/EditProduct'
import DeleteProduct from './products/modals/DeleteProduct'
import FeatureProduct from './products/modals/FeatureProduct'
import AddItemToDiscountsModal from './discounts/modals/AddItemToDiscountsModal'
import ProductDiscountModal from './discounts/modals/ProductDiscountModal'

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
  >({
    show: false,
    product: null,
    type:"Create"
  });

  const [productDiscountModalState, setProductDiscountModalState] = useState<{
    show: boolean | undefined,
    product: ProductType | null
  }>({
    show: false,
    product: null
  });

  const [productDeleteModal, setProductDeleteModal] = useState<{
    show: boolean | undefined,
    id:string
  }>({
    show: false,
    id: ""
  });
  
  const [productFeatureModal, setProductFeatureModal] = useState<{
    show: boolean | undefined,
    id:string,
    featured: boolean
  }>({
    show: false,
    id: "",
    featured: false
  });
  
  const [productAddDiscountModalState, setProductAddDiscountModalState] = useState<{
    show: boolean | undefined,
    product: ProductType | null
  }>({
    show: false,
    product: null,
  })
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
        discountId:""
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
    if(!productEditModal.show && !productDeleteModal.show && !productFeatureModal.show) {
      fetchData(); 
    }
  }, [productParams,productEditModal, productDeleteModal, productFeatureModal]);

  const [products, setProducts] = useState<Array<ProductType>>([]);

  return (
    <div className='w-full max-h-full flex flex-col items-center gap-2 p-2 overflow-scroll'>
      <DeleteProduct modalState={productDeleteModal} setModalState={setProductDeleteModal}/>
      <EditProduct modalState={productEditModal} setModalState={setProductEditmodal}/>
      <FeatureProduct modalState={productFeatureModal} setModalState={setProductFeatureModal}/>
      <AddItemToDiscountsModal modalState={productAddDiscountModalState} setModalState={setProductAddDiscountModalState}/>
      <ProductDiscountModal modalState={productDiscountModalState} setModalState={setProductDiscountModalState}/>
      <TopBarProductList params={productParams} setParams={setProductParams} createItemFunc={createItemFunc}/>
      {products.map(prd => <ProductBox 
        key={prd._id}
        product={prd} 
        setEditModal={setProductEditmodal} 
        setDeleteModal={setProductDeleteModal}
        setProductFeatureModal={setProductFeatureModal}
        setProductAddDiscountModal={setProductAddDiscountModalState}
        setProductDiscountModal={setProductDiscountModalState}
      />)} 
    </div>
  )
}

export default ProductList