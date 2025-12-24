import { DiscountType } from '@/types/DiscountType'
import { ProductType } from '@/types/ProductType'
import { Modal } from 'flowbite-react'
import React, { useEffect, useState } from 'react'


interface modalStateType {
  show: boolean | undefined,
  product: ProductType | null,
}



const ProductDiscountModal = ({modalState, setModalState}: {modalState: modalStateType, setModalState: Function}) => {
  const [discount, setDiscount] = useState<DiscountType | null>(null);

  const fetchData = async () => {
    try {

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    
  }, [modalState.product?.discountId])

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
          Item Discount
        </p>
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
    </Modal>
  )
}

export default ProductDiscountModal