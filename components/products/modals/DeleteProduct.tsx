"use client";

import axios from "axios";
import { Modal } from "flowbite-react";

interface modalStateType {
  id: string,
  show: boolean | undefined,
}

const DeleteProduct = (
  {modalState, setModalState}: 
  {modalState: modalStateType, setModalState: Function}
) => {

  const onDelete = async () => {
    try {
      await axios.delete('/api/products',{
        params:{
          id:modalState.id
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
      <Modal.Body className='bg-gray-600  shadow-xl'>
        <div className="w-full flex items-center flex-col">
          <div className="w-full flex items-center justify-between">
            <button
              className="bg-slate-800 rounded-lg p-2 w-[45%] text-lg font-bold text-black"
              onClick={onDelete}
            >
              Yes
            </button>
            <button
              className=" bg-slate-800 rounded-lg p-2 w-[45%] text-lg font-bold text-black"
              onClick={() => {
                setModalState((mdlstate: modalStateType) =>  ({...mdlstate, show: false}));
              }}
            >
              No
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default DeleteProduct