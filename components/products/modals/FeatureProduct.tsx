"use client";

import axios from "axios";
import { Modal } from "flowbite-react";

interface modalStateType {
  id: string,
  show: boolean | undefined,
  featured: boolean
}

const FeatureProduct = (
  {modalState, setModalState}:
  {modalState: modalStateType, setModalState: Function}
) => {
  
  const updateFeatureProductCall = async () => {
    try {
        await axios.put(`/api/feature`, {id:modalState.id, feature: !modalState.featured});
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
        className='bg-white border-b-0 shadow-sm'
      >
        <p className='text-3xl font-bold text-black '>
          {!modalState.featured ? "Feature this Product?" : "Unfeature this product?"}
        </p>
      </Modal.Header>
      <Modal.Body>
        <div className="w-full flex items-center flex-col">
          <div className="w-full flex items-center justify-between">
            <button
              className="bg-white border-2 border-slate-400 hover:bg-gray-100 rounded-lg p-2 w-[45%] text-lg font-bold text-black"
              onClick={ async () => {
                await updateFeatureProductCall();
                setModalState((mdlstate: modalStateType) =>  ({...mdlstate, show: false}));
              }}
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
          </div>
        </div>
      </Modal.Body>
      </Modal>
  )
}

export default FeatureProduct