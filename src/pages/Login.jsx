import React, { useState } from 'react'
import { assets } from '../assets/assets.js'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-blue-200 to-purple-400'
      style={{ background: 'linear-gradient(to bottom right, #dbeafe, #c4b5fd)' }}>
      {/* Header div for logo */}
      <div className='absolute top-0 left-0 p-5'>
        <img src={assets.logo} alt="" className='w-24 sm:w-28 lg:w-32 cursor-pointer' />
      </div>

      {/* Main content div */}
      <div className='flex items-center justify-center min-h-screen px-6 sm:px-0'>
        <div className='bg-slate-800 p-8 rounded-lg border-2 border-gray-600 shadow-xl w-full max-w-md'>
          <h2 className='text-3xl font-bold text-white text-center'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
          <p className='text-gray-400 mt-2 text-center'>{state === 'Sign Up' ? 'Create your account' : 'Login to your account!'}</p>

          <form className='mt-6 space-y-4'>
            {state === 'Sign Up' && (
              <div className='flex items-center gap-3  px-5 py-3 rounded-full bg-[#333A5C]'>
                <img src={assets.person_icon} alt="person icon" />
                <input type="text" placeholder='Full Name' required className='flex-1 bg-transparent text-white placeholder-gray-300 outline-none' />
              </div>
            )}
            
            <div className='flex items-center gap-3 px-5 py-3 rounded-full bg-[#333A5C]'>
              <img src={assets.mail_icon} alt="email icon" />
              <input type="email" placeholder='Email id' required className='flex-1 bg-transparent text-white placeholder-gray-300 outline-none' />
            </div>
            
            <div className='flex items-center gap-3 px-5 py-3 rounded-full bg-[#333A5C]'>
              <img src={assets.lock_icon} alt="password icon" />
              <input type="password" placeholder='Password' required className='flex-1 bg-transparent text-white placeholder-gray-300 outline-none' />
            </div>
            
            <p>Forgot password?</p>
            
            <div className='mt-6 flex justify-center'>
              <button type="submit" className=' py-4 rounded-full bg-gray-100 text-black font-semibold border-2 border-black hover:bg-gray-200 transition-colors'>
                {state === 'Sign Up' ? 'Sign' : 'Get Started'}
              </button>
            </div>
            
            <div className='text-center mt-4'>
              <p className='text-gray-600'>
                {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button 
                  type="button" 
                  onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
                  className='text-blue-600 hover:text-blue-700 font-semibold'
                >
                  {state === 'Sign Up' ? 'Login' : 'Sign Up'}
                </button>
              </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login