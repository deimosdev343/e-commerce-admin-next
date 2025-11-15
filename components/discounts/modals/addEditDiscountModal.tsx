import { discountType } from '@/types/DiscountType'
import React from 'react'

interface modalStateType {
  show: boolean | undefined,
  discount: discountType | null,
  type: "Edit" | "Create" 
}


const addEditDiscountModal = ({modalState, setModalState}:{
    modalState: modalStateType,
    setModalState: Function
}) => {
  
  return (
    <div>addEditDiscountModal</div>
  )
}

export default addEditDiscountModal