"use client"
import UploadImageIcon from '../../../assets/photo.png';

import { DiscountType } from '@/types/DiscountType'
import { Datepicker, Modal, Textarea, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import dayjs from 'dayjs';
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from 'next-cloudinary';
import Image from 'next/image';
import axios from 'axios';

interface modalStateType {
  show: boolean | undefined,
  discount: DiscountType | null,
  type: "Edit" | "Create" 
}

const backgrounds = [
  "bg-gradient-to-r from-yellow-50 to-pink-50",
  "bg-gradient-to-r from-pink-50 to-blue-50",
  "bg-gradient-to-r  from-blue-50 to-yellow-50"
]

const AddEditDiscountModal = ({modalState, setModalState}:{
    modalState: modalStateType,
    setModalState: Function
}) => {
  const currDate = dayjs().format('DD/MM/YYYY');




  const submitData = async () => {
    try {
      if(!modalState.discount?.description) {
        setError("Description is Required");
        setTimeout(() => {
          setError("");
        },3000)
      }
      if(!modalState.discount?.startDate) {
        setError("Start date is required");
        setTimeout(() => {
          setError("");
        },3000)
      }
      if(!modalState.discount?.endDate) {
        setError("End date is required");
        setTimeout(() => {
          setError("");
        },3000)
      }
      if(!modalState.discount?.image) {
        setError("Image is required");
        setTimeout(() => {
          setError("");
        },3000)
      }
      if(!modalState.discount?.background) {
        setError("background is required");
        setTimeout(() => {
          setError("");
        },3000)
      }
      if(modalState.type === "Edit") {
        await axios.put(`/api/products`, {product:productToSend})
      }
      else if(modalState.type === "Create") {
        await axios.post(`/api/discounts`, modalState.discount);
      }
      setModalState((mdlState: modalStateType) => ({...mdlState, show:false}));
    } catch (err) {
      console.log(err)
    }
  }

  const [error, setError] = useState<string>("");
  return (
    <Modal
      show={modalState.show}
      className='bg-black'
      onClose={() => {
        setModalState((mdlstate: modalStateType) =>  ({...mdlstate, show: false}));
      }}
    >
      <Modal.Header
        className='bg-gray-100 border-b-0 shadow-xl'  
      >
        <p className='text-3xl font-bold text-black '>
          Edit Discount
        </p>
      </Modal.Header>
      <Modal.Body className='bg-gray-100  shadow-xl min-h-[80vh]'>
        <div className="w-full flex flex-col justify-start items-start p-2 gap-2">
          <p className='text-xl font-bold text-black '>
            Description
          </p>
          <Textarea 
            className="w-full font-semibold bg-white border-2 rounded-xl border-slate-300"
            value={modalState.discount?.description} 
            onChange={(e) => setModalState((
              mdlstate: modalStateType ) => (
                {...mdlstate, discount: {...mdlstate.discount, description: e.target.value}}))}
          />
        </div>
        <div className="w-full flex items-center p-2 gap-2">
          <div className="w-full flex flex-col justify-start items-start p-2 gap-2">
            <p className='text-xl font-bold text-black'>
              Start Date
            </p>
            <Datepicker
              value={modalState.discount?.startDate}
              onChange={(date: Date | null) => {
                setModalState((mdlState: modalStateType) => ({...mdlState,discount: {...mdlState.discount, startDate: date}}))
              }}
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start p-2 gap-2">
            <p className='text-xl font-bold text-black'>
              End Date 
            </p>
            <Datepicker
              value={modalState.discount?.endDate}
              onChange={(date: Date | null) => {
                setModalState((mdlState: modalStateType) => ({...mdlState,discount: {...mdlState.discount, endDate: date}}))
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start p-2 gap-2">
          <h2 className='font-bold text-2xl text-black'>
            Image
          </h2>
          <CldUploadWidget
            signatureEndpoint="/api/upload"
            onSuccess={({info, event}, { widget }) => {
              setModalState((mdlstate: modalStateType) => 
                ({...mdlstate,
                  discount: {...mdlstate.discount, image: (info as CloudinaryUploadWidgetInfo).secure_url}}));  
            }}
            onQueuesEnd={(result, { widget }) => {
              widget.close();
            }}
          >
            {({ open }) => {
              function handleOnClick() {
                open();
              }
              return (
                <button className='flex w-full relative' onClick={handleOnClick}>
                  <Image
                    src={UploadImageIcon}
                    alt='Upload Image'
                    className='top-3 left-0 absolute w-9 z-10'
                  />
                </button>
              );
            }}
          </CldUploadWidget>
          <TextInput 
            className="pl-10 w-full font-semibold"
            value={modalState.discount?.image} 
            onChange={(e) => setModalState((
              mdlstate: modalStateType ) => (
                {...mdlstate, discount: {...mdlstate.discount, image: e.target.value}}))}
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start p-2 gap-2">
          <h2 className='font-bold text-2xl text-black'>
            Discount Amount
          </h2>
          <p className='font-semibold text-gray-600'>(accepts values between 1 and 99)</p>
          <TextInput
            className=' w-full font-semibold'
            value={!modalState.discount?.discountAmount ? 0 : modalState.discount?.discountAmount}
            type='number'

            onChange={(e) => {
              const num = parseInt(e.target.value);
              if(num < 0) {
                setModalState((mdlState: modalStateType ) => ({...mdlState, discount: {...mdlState.discount, discountAmount: 1}}))
              }
              else if(num > 99) {
                setModalState((mdlState: modalStateType ) => ({...mdlState, discount: {...mdlState.discount, discountAmount: 99}}))
              } 
              else {
                setModalState((mdlState: modalStateType ) => ({...mdlState, discount: {...mdlState.discount, discountAmount: num}}))

              }

            }}
          />
        </div>
        <div className="w-full flex flex-col  p-2 gap-2">
          <h2 className='text-black font-bold text-lg'>Image Background</h2>
          <div className='w-full  grid grid-cols-3 gap-2 '>
            {backgrounds.map((bg,index) => <div key={index} className={`${bg} p-5 w-full rounded-2xl border-gray-300 border-2`}>
              <input
                type='radio'
                onChange={() => {
                  setModalState((mdlState: modalStateType) => ({...mdlState, discount: {...mdlState.discount, background: bg}}))
                }}
                checked={bg == modalState.discount?.background}

              />
            </div>)}
          </div>
          
        </div>
        <div className='w-full flex flex-col items-center'>
          <button
            className='p-2 text-black font-bold border-slate-400 border-2 
              bg-white rounded-lg m-2 hover:bg-gray-100 transition-all
              '
            onClick={() => submitData()}
          >
            Save
          </button>
          <h2 className='text-red-500 font-bold'>{error}</h2>     
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddEditDiscountModal