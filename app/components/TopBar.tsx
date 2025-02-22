"use client"

import React, { useEffect } from 'react'
import { loginUser, logoutUser, useAppDispatch, useAppSelector } from '../lib/store'
import { getAuth } from '../services/getAuth';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Logo from '../../assets/Logo.png';
import Logout from '../../assets/logout.png';
import Image from 'next/image';

const TopBar = () => {
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
    <div className='w-full flex items-center justify-between
      p-2 h-[10%]  bg-slate-700 rounded-b-lg'
    >
      <div className='flex justify-start'>
        <h2 className='font-bold md:text-xl'> Hello, {userData.name}</h2>
      </div>
      <div className='hidden  md:flex justify-center items-center'>
        <h2 className='font-bold'>
          Management Dashboard
        </h2>
        <Image
          src={Logo}
          alt="logo"
          className='w-14'
        />
      </div>
      <button className='flex items-center gap-2' onClick={logoutCall}>
      <h2>
        log out
      </h2>
      <Image
          src={Logout}
          alt="logo"
          className='w-10'
        />
      </button>
    </div>
  )
}

export default TopBar