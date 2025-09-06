"use client"
import React, { useEffect } from 'react'
import { loginUser, logoutUser, useAppDispatch, useAppSelector } from '../lib/store';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import Logout from '../assets/logout.png';
import MainDashboardIcon from '../assets/dashboards.png';
import Link from 'next/link';
import Logo from '../assets/Logo.png';

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
    <div className="hidden md:flex bg-white w-[25%] md:w-[15%] h-screen  flex-col items-center shadow-2xl">
        <div className="w-full p-3 pr-5 pl-5 flex flex-row justify-start items-center gap-3   border-gray-300">
          <Image
            src={Logo}
            alt=''
            className='w-10'
          />
          <h2 className='font-bold text-black text-sm'>
            Shop 
            Management
          </h2>
          
      </div>
      <div className='w-full flex flex-col items-start p-8 gap-5'>
        <Link className='flex items-center gap-2' href={'/'}>
          <Image
            src={MainDashboardIcon}
            alt="logo"
            className='w-8'
          />
          <h2 className='font-bold text-black'>
            Dashboard
          </h2>
        </Link>
        <button className='flex items-center gap-2' onClick={logoutCall}>
          <Image
            src={Logout}
            alt="logo"
            className='w-8'
          />
          <h2 className='font-bold text-black'>
            logout
          </h2>
        </button>
      </div>
      
    </div>
  )
}

export default SideBar;