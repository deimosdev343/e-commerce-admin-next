import { DiscountType } from '@/types/DiscountType'
import { Modal } from 'flowbite-react'
import React from 'react'

interface modalStateType {
  show: boolean | undefined,
  discount: DiscountType | null,
}

const DiscountItemsModal = ({modalState, setModalState}:{
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
          Discount Items
        </p>
      </Modal.Header>
      <Modal.Body className='bg-gray-100  shadow-xl min-h-[80vh]'>
        <div className='flex flex-col items-center'>
          {modalState.discount?.productIds?.map(prod => <p>{prod}</p>)}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default DiscountItemsModal