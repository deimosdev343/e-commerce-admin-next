"use client";

import React, { useState } from 'react'
import DiscountHeader from './DiscountHeader'
import { discountType } from '@/types/DiscountType';
import AddEditDiscountModal from './modals/AddEditDiscountModal';


interface ParamsObj  {

  description?: string, 
  startDate?: Date,
  endDate?: Date
  limit: number
}

interface discountAddEditModalType  {
    show: boolean | undefined,
    discount: discountType | null,
    type: "Edit" | "Create"
  }

const DiscountList = () => {
  const [searchParams, setSearchParams] = useState<ParamsObj>({
    description:"",
    limit: 10
  })
  
  const [discountAddEditModal, setDiscountAddEditModal] = useState<discountAddEditModalType>({
    type: "Create",
    show:false,
    discount: null
  });


  return (
    <div className='w-full max-h-full flex flex-col items-center gap-2 p-2 overflow-scroll'>
      <AddEditDiscountModal modalState={discountAddEditModal} setModalState={setDiscountAddEditModal}/>
      <DiscountHeader
        params={searchParams} 
        setParams={setSearchParams}
        createDiscountFunc={() => {
          setDiscountAddEditModal({
            type: "Create",
            show: true,
            discount: null
          });
        }}
      />

    </div>
  )
}

export default DiscountList