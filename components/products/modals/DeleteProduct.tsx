"use client";

import { Modal } from "flowbite-react";

interface modalStateType {
  id: string,
  show: boolean | undefined,
}

const DeleteProduct = (
  {modalState, setModalState}: 
  {modalState: modalStateType, setModalState: Function}
) => {

  return (
    <Modal 
      show={modalState.show}
      className='bg-black'
      onClose={() => {
        setModalState((mdlstate: modalStateType) =>  ({...mdlstate, show: false}));
      }}
    >
      <Modal.Header
        className='bg-gray-600 border-b-0 shadow-xl'
      >
        <p className='text-3xl font-bold text-white '>
          Delete this Product?
        </p>
      </Modal.Header>
      <Modal.Body className='bg-gray-600  shadow-xl'>
        <div className="w-full flex items-center flex-col">
          <div className="w-full flex items-center justify-between">
            <button
              className="bg-slate-800 rounded-lg p-2"
            >
              Yes
            </button>
            <button
              className=" bg-slate-800 rounded-lg p-2"
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