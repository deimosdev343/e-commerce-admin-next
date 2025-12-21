"use client";

import React, { useEffect, useState } from 'react'
import DiscountHeader from './DiscountHeader'
import { DiscountType } from '@/types/DiscountType';
import AddEditDiscountModal from './modals/AddEditDiscountModal';
import axios from 'axios';
import DiscountComponent from './DiscountComponent';
import DiscountDeleteModal from './modals/DiscountDeleteModal';
import DiscountItemsModal from './modals/DiscountItemsModal';


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

interface discountDeleteModalType {
  show: boolean | undefined,
  id: string 
}

interface discountItemModalType {
  show: boolean | undefined,
  discount: DiscountType | null
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
  const [discountDeleteModalState, setDiscountDeleteModalState] = useState<discountDeleteModalType>({
    show: false,
    id:""
  });
  const [discountItemModalState, setDiscountModalState] = useState<discountItemModalType>({
    show:false,
    discount: null
  })

  const fetchData = async () => {
    try {
      const res = await axios.get('/api/discounts');
      setDiscounts(res.data);
    } catch (err) {
     console.log(err); 
    }
  }

  useEffect(() => {
    if(!discountDeleteModalState.show && !discountAddEditModal.show) {
      fetchData();
    }
  }, [discountDeleteModalState.show, discountAddEditModal.show]);

  return (
    <div className='w-full max-h-full flex flex-col items-center gap-2 p-2 overflow-scroll'>
      <AddEditDiscountModal modalState={discountAddEditModal} setModalState={setDiscountAddEditModal}/>
      <DiscountDeleteModal modalState={discountDeleteModalState} setModalState={setDiscountDeleteModalState}/>
      <DiscountItemsModal  modalState={discountItemModalState} setModalState={setDiscountModalState}/>
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
      <div className='w-full p-5 items-center flex flex-col gap-5'>
        {discounts.map(discount => 
          <DiscountComponent 
            discount={discount} 
            setEditModal={() => {
              setDiscountAddEditModal({
                show: true,
                discount: discount,
                type: "Edit"
              });
            }} 
            setDeleteModal={(discount: DiscountType) => {
              setDiscountDeleteModalState({show: true, id: discount.discountId});
            }}
            setItemModal={() => {
              setDiscountModalState({show: true, discount: discount})
            }}
          />
        )}
      </div>

    </div>
  )
}

export default DiscountList