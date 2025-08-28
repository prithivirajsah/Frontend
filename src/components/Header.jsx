import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div style={{marginTop: '55px'}}
      className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
        <img src={assets.header_img} alt="" 
          width={130} height={130}
          className='rounded-full mb-6' />
        <h1
          className='flex items-center gap-2'
          style={{ marginBottom: 0, fontSize: 30, fontWeight: 400 }}
        >
          Hey Developer
          <img src={assets.hand_wave} alt="" width={38} height={38} className='w-5 h-5' />
        </h1>
        <h2 style={{ fontSize: 48, fontWeight: 600, marginTop: 0, marginBottom: '-0.5rem' }}>Welcome to our app</h2>

        <p className='mb-8 max-w-md'>Let's start with a quick product tour and we will have you up and 
        <br></br>
        running in no time!
        </p>

        <button
          style={{ width: 150, height: 50, fontSize: 18, marginTop: '12px' }}
          className='border border-gray-500 rounded-full hover:bg-gray-100 transition-all'
        >
          Get Started
        </button>
    </div>
  )
}

export default Header