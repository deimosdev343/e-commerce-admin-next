import { discountType } from '@/types/DiscountType'
import { Modal, Textarea, TextInput } from 'flowbite-react'
import React from 'react'

interface modalStateType {
  show: boolean | undefined,
  discount: discountType | null,
  type: "Edit" | "Create" 
}


const AddEditDiscountModal = ({modalState, setModalState}:{
    modalState: modalStateType,
    setModalState: Function
}) => {

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
          Edit Discount
        </p>
      </Modal.Header>
      <Modal.Body className='bg-gray-100  shadow-xl'>
        <div className="w-full flex flex-col justify-start items-start p-2 gap-2">
          <p className='text-xl font-bold text-black '>
            Description
          </p>
          <Textarea 
            className="w-full font-semibold bg-white border-2 rounded-xl border-slate-300"
            value={modalState.discount?.description} 
            onChange={(e) => setModalState((
              mdlstate: modalStateType ) => (
                {...mdlstate, discount: {...mdlstate.discount, description: e.target.value}}))}
          />
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddEditDiscountModal