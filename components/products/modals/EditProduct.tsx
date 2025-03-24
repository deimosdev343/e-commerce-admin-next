"use client";

import { ProductType } from '@/app/types/ProductType'
import axios from 'axios';
import { Modal, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

const EditProduct = ({modalState, setModalState} :{
  modalState: {show: boolean | undefined, product: ProductType | null}
  setModalState: Function
}) => {

  const [categories, setCategories]  = useState([]);

  const fetchData = async () => {
    const data = (await axios.get('/api/category')).data;
    setCategories(data);
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <Modal 
      show={modalState.show}
      className='bg-black'
      onClose={() => {
        setModalState({show: false, product: null});
      }}
    >
     <Modal.Header
      className='bg-gray-600 border-b-0 shadow-xl'

     >
      <p className='text-3xl font-bold text-white '>
        Edit Product
      </p>
     </Modal.Header>
     <Modal.Body className='bg-gray-600  shadow-xl'>
      <div className="w-full flex flex-col justify-start items-start p-2 gap-2">
        <h2 className='font-bold text-2xl'>
          Item Name
        </h2>
        <TextInput 
          className="w-full font-semibold"
          value={modalState.product?.name} 
          onChange={(e) => setModalState((
            mdlstate: {show: boolean | undefined, product: ProductType | null} ) => (
              {...mdlstate, product: {...mdlstate.product, name: e.target.value}}))}
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start p-2 gap-2">
        <h2 className='font-bold text-2xl'>
          Price
        </h2>
        <TextInput 
          className="w-full font-semibold"
          value={modalState.product?.price} 
          onChange={(e) => setModalState((
            mdlstate: {show: boolean | undefined, product: ProductType | null} ) => (
              {...mdlstate, product: {...mdlstate.product, price: e.target.value}}))}
        />
      </div>
     </Modal.Body>
    </Modal>
  )
}

export default EditProduct