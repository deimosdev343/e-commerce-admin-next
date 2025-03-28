"use client";

import { categoryType, ProductType } from '@/types/ProductType'
import axios from 'axios';
import { Modal, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ProductColor from '../ProductColor';

const ColorPickerColors = [
  "#fcba03",
  "#fce303",
  "#03cafc",
  "#93cbd9",
  "#93add9",
  "#174fad",
  "#8a24e3",
  "#e324d3",
  "#ffa6f8",
  "#ffffff",
  "#000000",
  "#ff0000",
  "#75cc68",
  "#6cb04f"
]

const EditProduct = ({modalState, setModalState} :{
  modalState: {show: boolean | undefined, product: ProductType | null}
  setModalState: Function
}) => {

  const [categories, setCategories] = useState<Array<categoryType>>([]);
  const [ColorPicker, setColorPicker] = useState({
    show:false,
    color:""
  })
  const fetchData = async () => {
    const data = (await axios.get('/api/category')).data;
    setCategories(data);
    console.log(data)
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
      <div className="w-full flex flex-col justify-start items-start p-2 gap-2">
        <h2 className='font-bold text-2xl'>
          Category
        </h2>
        <select
          name="sort"
          id=""
          className=" rounded-md text-md  bg-white ring-1 ring-gray-400 text-black font-semibold w-full" 
          onChange={(e) => setModalState((
            mdlstate: {show: boolean | undefined, product: ProductType | null} ) => (
              {...mdlstate, product: {...mdlstate.product, category: e.target.value}}))}
        >
          <option>Sort By</option>
          {categories.map((cat: categoryType) => <option value={cat.name}>{cat.name}</option>)}
        </select>
      </div>
      <div className='flex flex-col p-4 '>
        <h2 className='font-bold text-2xl'>
          Colors
        </h2>
        <div className="w-[89%] p-4 flex flex-row justify-start items-center gap-5 overflow-x-scroll">
          
          {modalState.product?.colors.map(clr => <ProductColor color={clr} onRemoveColor={() => { }}/>)}
        </div>
      </div>
     </Modal.Body>
    </Modal>
  )
}

export default EditProduct