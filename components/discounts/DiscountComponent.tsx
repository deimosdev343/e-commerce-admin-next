import { DiscountType } from '@/types/DiscountType'
import React from 'react'

type DiscountComponentType =  {
  discount: DiscountType,
  setEditModal: Function,
  setDeleteModal: Function
}

const DiscountComponent = ({discount, setEditModal, setDeleteModal} : DiscountComponentType) => {
  return (
    <div>DiscountComponent</div>
  )
}

export default DiscountComponent