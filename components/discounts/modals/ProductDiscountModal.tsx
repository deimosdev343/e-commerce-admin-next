import { DiscountType } from '@/types/DiscountType'
import { ProductType } from '@/types/ProductType'
import axios from 'axios'
import { Modal } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import DiscountComponent from '../DiscountComponent'
import Image from 'next/image'
import PictureLogo from '../../../assets/ImageLogo.png'


interface modalStateType {
  show: boolean | undefined,
  product: ProductType | null,
}



const ProductDiscountModal = ({modalState, setModalState}: {modalState: modalStateType, setModalState: Function}) => {
  const [discount, setDiscount] = useState<DiscountType | null>(null);

  const reomveDiscount = async () => {
    try {
      const res = await axios.put('/api/discounts/deleteFromDiscount', {discountId: discount?.discountId, prodId: modalState.product?._id});
      setModalState({show:false, product: null});
    } catch (err) {
      console.log(err);
    }
  }
  const fetchData = async () => {
    try {
      const discountRes = await axios.get(`/api/discounts/getDiscount`,{params: {discountId: modalState.product!.discountId}});
      setDiscount(discountRes.data.discount);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(modalState.product?.discountId) {
      fetchData();
    }
  }, [modalState.show])
  const [fallback, setFallback] = useState(false);
  return (
    <Modal
      show={modalState.show}
      className='bg-black'
      onClose={() => {
        setModalState((mdlstate: modalStateType) =>  ({...mdlstate, show: false, product: null}));
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

        {discount && 
        <div className='w-full flex flex-col items-center'>
          <div className='w-full flex items-center gap-5 p-2 border-2 border-slate-200 shadow-md'>
            <Image
              alt="discount image"
              title='discount image'
              src={fallback ? PictureLogo : discount.image}
              onError={() => {setFallback(true)}}
              width={120}
              height={120}
              className='border-gray-800 border-4 rounded-md h-[25%] w-[25%]'
            />
            <p className='text-md font-bold'>{discount.description}</p>
          </div>
          <button
            className='mt-5 w-[60%] border-2 border-slate-400 bg-white p-2 
              rounded-lg font-bold text-2xl shadow-lg text-black 
              hover:bg-s late-100'
            onClick={() => reomveDiscount()}
          >
            Remove Item From Discount
          </button>
        </div>}
      </Modal.Body>
    </Modal>
  )
}

export default ProductDiscountModal