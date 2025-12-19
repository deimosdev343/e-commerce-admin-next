import axios from 'axios';
import { Modal } from 'flowbite-react';
import React from 'react'

interface modalStateType {
  id: string,
  show: boolean | undefined,
}

const DiscountDeleteModal = (
  {modalState, setModalState}: 
  {modalState: modalStateType, setModalState: Function}) => {
  
  const onDelete = async () => {
    try {
      await axios.delete('/api/discounts',{
        params:{
          discountId:modalState.id
        }
      });
      setModalState({id:null, show: false});
    } catch (err) {
      console.log(err);
    }
  }
  return (
     <Modal 
        show={modalState.show}
        className='bg-black'
        onClose={() => {
          setModalState((mdlstate: modalStateType) =>  ({...mdlstate, show: false}));
        }}
      >
        <Modal.Header
          className='bg-white border-b-0 shadow-xl'
        >
          <p className='text-3xl font-bold text-black '>
            Delete this Product?
          </p>
        </Modal.Header>
        <Modal.Body className='bg-white  shadow-xl flex w-full justify-between p-5'>
          <button
              className="bg-white border-2 border-slate-400 hover:bg-gray-100 rounded-lg p-2 w-[45%] text-lg font-bold text-black"
              onClick={onDelete}
            >
              Yes
            </button>
            <button
              className=" bg-white border-2 border-slate-400 hover:bg-gray-100 rounded-lg p-2 w-[45%] text-lg font-bold text-black"
              onClick={() => {
                setModalState((mdlstate: modalStateType) =>  ({...mdlstate, show: false}));
              }}
            >
              No
            </button>
        </Modal.Body>
      </Modal>
  )
}

export default DiscountDeleteModal