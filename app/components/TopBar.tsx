"use client"

import React, { useEffect } from 'react'
import { loginUser, logoutUser, useAppDispatch, useAppSelector } from '../lib/store'
import { getAuth } from '../services/getAuth';
import { useRouter } from 'next/navigation';
import axios from 'axios';


const TopBar = ({token}: {token: string}) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state=> state.userData);
  const router = useRouter();
  const fetchAuth = async () => {
    try {
      const res = await axios.get(`/api/auth`,{headers:{token}});
      dispatch(loginUser(res.data.user));
    } catch (err) {
      console.log(err);
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
    <div>TopBar</div>
  )
}

export default TopBar