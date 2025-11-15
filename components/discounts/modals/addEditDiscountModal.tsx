import { discountType } from '@/types/DiscountType'
import { Modal } from 'flowbite-react'
import React from 'react'

interface modalStateType {
  show: boolean | undefined,
  discount: discountType | null,
  type: "Edit" | "Create" 
}


const AddEditDiscountModal = ({modalState, setModalState}:{
    modalState: modalStateType,
    setModalState: Function
}) => {

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
          Edit Product
        </p>
      </Modal.Header>
    </Modal>
  )
}

export default AddEditDiscountModal