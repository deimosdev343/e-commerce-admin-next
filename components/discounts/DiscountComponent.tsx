import { DiscountType } from '@/types/DiscountType'
import React from 'react'

type DiscountComponentType =  {
  discount: DiscountType,
  setEditModal: Function,
  setDeleteModal: Function
}

const DiscountComponent = ({discount, setEditModal, setDeleteModal} : DiscountComponentType) => {
  return (
    <div className='p-5 w-full items-center bg-white rounded-xl border-2 shadow-md'>
      <p>test</p>
    </div>
  )
}

export default DiscountComponent