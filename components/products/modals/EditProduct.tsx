"use client";

import { categoryType, ProductType } from '@/types/ProductType'
import axios from 'axios';
import { Modal, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ProductColor from '../ProductColor';
import AddIcon from '../../../assets/add.png';
import Image from 'next/image';
import {CirclePicker} from 'react-color';
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

const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "XXXL"
]

interface modalStateType {
  show: boolean | undefined,
  product: ProductType | null,
  type: "Edit" | "Create" 
}
const EditProduct = ({modalState, setModalState} :{
  modalState: modalStateType
  setModalState: Function
}) => {

  const [categories, setCategories] = useState<Array<categoryType>>([]);
  const [colorPicker, setColorPicker] = useState({
    show:false,
    color:""
  }); 
  
  const submitProduct = async () => {
    try {
      const productToSend = {
        id:modalState.product?._id,
        name:modalState.product?.name,
        image: modalState.product?.image,
        description:modalState.product?.description,
        price: Number(modalState.product?.price),
        category: modalState.product?.category,
        colors: modalState.product?.colors,
        sizes: modalState.product?.sizes,
        extraImages: modalState.product?.extraImages

      }
      if(modalState.type === "Edit") {
        await axios.put(`/api/products`, {product:productToSend})
      }
      else if(modalState.type === "Create") {
        await axios.post(`/api/products`, {product:productToSend})
      }

      setModalState((mdlState: modalStateType) => ({...mdlState, show:false}))
    } catch (err) {
      console.log(err)
    }
  }
  const onRemoveColor = async (color: string) => {
    setModalState((mdlState : modalStateType) => {
      const newProd = {...mdlState.product};
      newProd.colors = mdlState.product?.colors.filter(clr => clr != color);
      return {...mdlState, product: newProd};
    });
  }

  const onAddColor = async () => {
    if(colorPicker.color) {
      setModalState((mdlState: modalStateType) =>  {
        const prod = mdlState.product;
        if(prod?.colors.findIndex(col => col === colorPicker.color) == -1) {
          prod.colors = [...prod.colors, colorPicker.color];
        }
        return {...mdlState,product: prod };
      })
    }
    setColorPicker({show:false, color:""});
  }
  const onAddRemoveSize = (size: string) => {
    setModalState( (mdlstate: modalStateType) => {
      const newProd = {...mdlstate.product};
      if(!newProd.sizes) {
        newProd.sizes = [size];
      }
      else if(newProd.sizes.findIndex(sz => sz == size) == -1) {
        newProd.sizes = [...newProd.sizes, size]

      }
      else {
        newProd.sizes = newProd.sizes.filter(sz => sz !== size)
      }

      return {...mdlstate, product: newProd};
    })
  }

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
        setModalState((mdlstate: ProductType) =>  ({...mdlstate, show: false}));
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
            mdlstate: modalStateType ) => (
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
            mdlstate: modalStateType ) => (
              {...mdlstate, product: {...mdlstate.product, price: e.target.value}}))}
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start p-2 gap-2">
        <h2 className='font-bold text-2xl'>
          Image
        </h2>
        <TextInput 
          className="w-full font-semibold"
          value={modalState.product?.image} 
          onChange={(e) => setModalState((
            mdlstate: modalStateType ) => (
              {...mdlstate, product: {...mdlstate.product, image: e.target.value}}))}
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
          value={modalState.product?.category}
          onChange={(e) => setModalState((
            mdlstate: modalStateType ) => (
              {...mdlstate, product: {...mdlstate.product, category: e.target.value}}))}
        >
          {categories.map((cat: categoryType) => <option key={cat._id} value={cat.name}>{cat.name}</option>)}
        </select>
      </div>
      <div className='flex flex-col p-4 '>
        <h2 className='font-bold text-2xl'>
          Colors
        </h2>
        <div className="w-[15%] mt-2 flex flex-row">
          <Image 
            src={AddIcon}
            alt="add color"
            className="w-7 cursor-pointer"
            onClick={() => setColorPicker(colorP => ({...colorP, show: !colorP.show}))}
          />
        </div>
        <div className="w-auto p-4 grid grid-cols-4 justify-start items-center gap-5 overflow-x-scroll">
          {modalState.product?.colors.map(clr => <ProductColor key={clr} color={clr} onRemoveColor={onRemoveColor}/>)}
        </div>
        {colorPicker.show && 
          <div className="w-full flex flex-row justify-between
            items-center gap-5 p-5  bg-slate-800 rounded-xl"
          >
            <CirclePicker  
              colors={ColorPickerColors}  
              onChange={(color) => {setColorPicker(colorP => ({...colorP, color: color.hex}))}}
            />
            <button
              onClick={onAddColor} 
              className="p-2 bg-slate-700 text-white rounded-lg shadow-lg hover:bg-slate-600 transition-all"
            >
              Add Color
            </button> 
          </div>
        }
        <div className="w-full flex flex-col justify-start items-center gap-2 p-2 border-slate-500 border-2 rounded-xl">
          <h2 className="text-white text-2xl font-bold">Sizes</h2>
          <div className="grid grid-cols-6 w-full items-center">
            {sizes.map( size => <div key={size} className="flex p-2 justify-center items-center gap-2">
              <h2 className="text-white font-bold">{size}</h2>
              <input type="checkbox" className="" checked={modalState.product?.sizes.includes(size)} onChange={() => onAddRemoveSize(size)}/>
            </div>)}
          </div>
        </div>
        <div className='w-full flex flex-col items-center'>
          <button
            className='p-2 text-white font-bold 
              bg-slate-800 rounded-lg m-2 hover:bg-slate-700 transition-all
              border-white border-2'
            onClick={() => submitProduct()}
          >
            Save
          </button>
        </div>
      </div>
     </Modal.Body>
    </Modal>
  )
}

export default EditProduct