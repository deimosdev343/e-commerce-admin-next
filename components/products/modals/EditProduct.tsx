import { ProductType } from '@/app/types/ProductType'
import { Modal } from 'flowbite-react'
import React from 'react'

const EditProduct = ({modalState, setModalState} :{
  modalState: {show: boolean | undefined, product: ProductType | null}
  setModalState: Function
}) => {

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
      <h2 className='text-3xl font-bold text-white '>
        Edit Product
      </h2>
     </Modal.Header>
     <Modal.Body className='bg-gray-600  shadow-xl'>

     </Modal.Body>
    </Modal>
  )
}

export default EditProduct