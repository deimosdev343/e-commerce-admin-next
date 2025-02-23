"use client"
import React, { useEffect } from 'react'
import { loginUser, logoutUser, useAppDispatch, useAppSelector } from '../lib/store';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const SideBar = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector(state=> state.userData);
    const router = useRouter();
    const fetchAuth = async () => {
      try {
        const res = await axios.get(`/api/auth`);
        dispatch(loginUser(res.data.user));

      } catch (err) {
        console.log(err);
        dispatch(logoutUser());
        router.push('/login');
      }
    }
  
    const logoutCall = async () => {
      try {
        await axios.get(`/api/logout`);
      } catch (err) {
        console.log(err)
      } finally {
        dispatch(logoutUser());
        router.push('/login');
      }
    }
    useEffect(() => {
      if(!userData.loggedIn) {
        fetchAuth();
      } 
    }, [userData])
  
  return (
    <div className="hidden md:flex bg-slate-800 w-[25%] md:w-[15%] h-screen  flex-col items-center border-r-2 border-black shadow-2xl">
        <div className="w-[90%] p-3 pr-5 pl-5 flex flex-row justify-start items-start gap-3 border-b-2 border-gray-300">
        <h2 className='font-bold text-white text-md'>
          Shop 
          Management
        </h2>
      </div>
    </div>
  )
}

export default SideBar;