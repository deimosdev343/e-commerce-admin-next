"use client"

import { discountType } from '@/types/DiscountType'
import { Datepicker, Modal, Textarea, TextInput } from 'flowbite-react'
import React from 'react'
import dayjs from 'dayjs';

interface modalStateType {
  show: boolean | undefined,
  discount: discountType | null,
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
        <div className='w-full h-[200px] grid grid-cols-3 gap-2 '>
          {backgrounds.map((bg,index) => <div key={index} className={`${bg} p-5 w-full`}>
            <input
              type='radio'

            />
          </div>)}
        </div>

      </Modal.Body>
    </Modal>
  )
}

export default AddEditDiscountModal