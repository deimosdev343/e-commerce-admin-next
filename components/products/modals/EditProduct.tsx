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
      onClose={() => {
        setModalState({show: false, product: null});
      }}
    >
     <Modal.Header>
      <h2 className='text-2xl font-bold text-white'>
        Edit Product
      </h2>
     </Modal.Header>
    </Modal>
  )
}

export default EditProduct