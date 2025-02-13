"use client";

import React from 'react'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen bg-slate-900 flex flex-col justify-center items-center'>

      <form 
        className='w-[50%] p-5 shadow-xl bg-white h-[80%] flex flex-col
          items-center justify-between rounded-2xl border-yellow-950 border-[1px]'
        onSubmit={() => {}}
      >
        <div className='w-full flex flex-col justify-center items-center'>
          <h2 className='font-bold text-3xl text-black'>Control Panel Login</h2>
          <h2 className='font-semibold- text-lg text-gray-700'>Your credentials should be provided by the service provider</h2>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='w-[100%] flex flex-col justify-center items-center p-2 gap-2'>
            <h2 className='text-2xl font-bold text-black'>Username</h2>
            <input
              className='bg-white border-2 border-black rounded-lg'
            />
          </div>
          <div className='w-full flex flex-col justify-center items-center p-2 gap-2'>
            <h2 className='text-2xl font-bold text-black'>Password</h2>
            <input
              className='w-1/2 bg-white border-2 border-black rounded-lg'
            />
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