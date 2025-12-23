import { DiscountType } from '@/types/DiscountType';
import { ProductType } from '@/types/ProductType';
import axios from 'axios';
import { Modal } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import DiscountComponent from '../DiscountComponent';
import ModalDiscountComponent from '../ModalDiscountComponent';



interface modalStateType {
  show: boolean | undefined,
  product: ProductType | null,
}

const AddItemToDiscountsModal = ({modalState, setModalState}:{
    modalState: modalStateType,
    setModalState: Function
}) => {
  const fetchData = async () => {
    try {
      const res = await axios.get('/api/discounts');
      setDiscounts(res.data);
    } catch (err) {
     console.log(err); 
    }
  }

  const [discounts, setDiscounts] = useState<Array<DiscountType>>([]);

  const addItemToDiscount = async (prodId:string, discountId:string) => {
    try {
      const res = await axios.put('/api/discount/addToDiscount', {
        prodId,
        discountId
      });
      setModalState({show:false, product: null});
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

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
          Add Item to Discount
        </p>
      </Modal.Header>
      <Modal.Body className='bg-gray-100  shadow-xl min-h-[80vh]'>
        <div className='w-full flex-col flex items-center gap-5 p-5 '>
          {discounts.map(ds => 
            <div className='w-full' onClick={() => {
              addItemToDiscount(modalState.product!._id, ds.discountId)
            }}>
              <ModalDiscountComponent
                discount={ds} 
              />
            </div>
            )}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddItemToDiscountsModal