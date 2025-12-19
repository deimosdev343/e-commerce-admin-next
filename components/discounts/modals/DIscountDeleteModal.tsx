import axios from 'axios';
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
    <div>DIscountDeleteModal</div>
  )
}

export default DIscountDeleteModal