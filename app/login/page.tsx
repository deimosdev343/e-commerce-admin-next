"use client";

import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { loginUser, useAppDispatch } from '../../lib/store';
const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm({
    defaultValues: {
      email:"",
      password:""
    }
  }); 

  const onSubmit = async (data : {email: string, password: string}) => {
    try {
      console.log(data);
      const res = await axios.post(`/api/login`,data);
      dispatch(loginUser(res.data.user));
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='w-screen h-screen   flex flex-col justify-center items-center'>

      <form 
        className='w-[50%] p-5 shadow-xl bg-white h-[50%] flex flex-col  
          items-center justify-between rounded-3xl border-slate-600 border-[4px]'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='w-full flex flex-col justify-center items-center'>
          <h2 className='font-bold text-3xl text-black'>Control Panel Login</h2>
          <h2 className='font-semibold text-lg text-gray-700'>Your credentials should be provided by the service provider</h2>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='w-[100%] flex flex-col justify-center items-center p-2 gap-2'>
            <h2 className='text-2xl font-bold text-black'>email</h2>
            <input 
              className={`text-black p-2 w-[50%] bg-white border-2 ${errors?.email?.type ? "border-red-500" : "border-black"} border-black rounded-lg`} 
              {...register("email", {required: true})}
            />
            {errors.email?.type === "required" && <h2 className='text-red-500 font-semibold text-lg'>
              email Required
            </h2>}
          </div>
          <div className='w-full flex flex-col justify-center items-center p-2 gap-2'>
            <h2 className='text-2xl font-bold text-black'>Password</h2>
            <input 
              className={`text-black p-2 w-[50%] bg-white border-2 ${errors.password?.type ? "border-red-500" : "border-black"} rounded-lg`}
              {...register("password", {required: true})}
              type='password'
            />
            {errors.password?.type === "required" && <h2 className='text-red-500 font-semibold text-lg'>
              Password Required
            </h2>}
          </div>
        </div>

        <button className='bg-blue-500 w-[50%] px-3 py-2 rounded-xl text-white text-2xl font-extrabold '>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage