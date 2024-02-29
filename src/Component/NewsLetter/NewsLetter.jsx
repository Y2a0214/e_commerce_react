import React from 'react'

const NewsLetter = () => {
  return (
    <div style={{height: '40vh'}} className=' newletter bg-gradient-to-b from-pink-100 w-8/12 m-auto my-16 flex flex-col justify-evenly items-center'>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold text-mycolor mb-12'>Get Exclusive Offer On Your Email</h1>
        <p className='text-2xl font-semibold text-mycolor'>Subscribe To Our NewsLetter And Stay Updated</p>
        </div>
        <div className='flex w-1/2 h-16 justify-center items-center'>
            <input className='w-full text-base text-mycolor p-6 rounded-l-full border border-slate-200 outline-0' type="email" placeholder='Your Email'/>
            <button className=' px-8 py-6 text-white rounded-r-full bg-black'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter