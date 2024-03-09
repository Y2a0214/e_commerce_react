import React from 'react'

export const LoginSingup = () => {
  return (
    <div className='h-screen flex  bg-gradient-to-b from-pink-100 justify-center items-center'>
      <div className='w-1/3 h-3/5 bg-white px-10 py-12'>
        <h1 className='font-normal text-3xl mb-3'>Sing Up</h1>
        <div className='flex flex-col'>
          <input className='my-3 p-4 outline-none border border-gray-300 rounded-md' type="text"  placeholder='Your Name'/>
          <input className='my-3 p-4 outline-none border border-gray-300 rounded-md' type="email" placeholder='Your Email'/>
          <input className='my-3 p-4 outline-none border border-gray-300 rounded-md' type="password" placeholder='Your Password'/>
        </div>
        <button className='w-full align-middle p-4 my-5  bg-red-500 hover:bg-red-400 font-semibold text-lg rounded-md text-white'>Continue</button>
        <p className='font-normal'>Already have an account ? <span className='text-red-500 font-semibold'>Login here</span></p>
        <div className='flex items-center mt-2'>
              <input type="checkbox" />
              <p className='ml-2 text-sm  font-medium'>I agree to T&C and privacy policy</p>
        </div>
      </div>
    </div>
  )
}
