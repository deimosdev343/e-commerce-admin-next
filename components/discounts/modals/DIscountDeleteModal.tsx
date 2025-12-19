import axios from 'axios';
import { Modal } from 'flowbite-react';
import React from 'react'

interface modalStateType {
  id: string,
  show: boolean | undefined,
}

const DIscountDeleteModal = (
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
        <Modal.Body className='bg-white  shadow-xl'>
          
        </Modal.Body>
      </Modal>
  )
}

export default DIscountDeleteModal