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
        <div>
          <h2 className='text-2xl font-bold text-gray-800'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</h2>
          <p className='text-gray-600 mt-2'>{state === 'Sign Up' ? 'Create Your Account' : 'Login to your account!'}</p>

          <form className='mt-6'>

            <div>
              <img src={assets.person_icon} alt="person icon" />
              <input type="text" placeholder='Full Name' required />
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login