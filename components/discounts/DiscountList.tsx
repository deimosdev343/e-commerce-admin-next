"use client";

import React, { useEffect, useState } from 'react'
import DiscountHeader from './DiscountHeader'
import { DiscountType } from '@/types/DiscountType';
import AddEditDiscountModal from './modals/AddEditDiscountModal';
import axios from 'axios';
import DiscountComponent from './DiscountComponent';


interface ParamsObj  {

  description?: string, 
  startDate?: Date,
  endDate?: Date
  limit: number
}

interface discountAddEditModalType  {
    show: boolean | undefined,
    discount: DiscountType | null,
    type: "Edit" | "Create"
  }

const DiscountList = () => {
  const [searchParams, setSearchParams] = useState<ParamsObj>({
    description:"",
    limit: 10
  })
  const [discounts, setDiscounts] = useState<Array<DiscountType>>([]);

  const [discountAddEditModal, setDiscountAddEditModal] = useState<discountAddEditModalType>({
    type: "Create",
    show:false,
    discount: null
  });

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/discounts');
      console.log(res);
      debugger;
      setDiscounts(res.data);
    } catch (err) {
     console.log(err); 
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  console.log(discounts);
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
      <div className='w-full p-5 items-center flex flex-col '>
        {discounts.map(discount => <DiscountComponent discount={discount} setEditModal={() => {}} setDeleteModal={() => {}}/>)}
      </div>

    </div>
  )
}

export default DiscountList