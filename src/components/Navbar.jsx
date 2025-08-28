import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate() 

  return (
    <div className='w-full flex items-center justify-between px-4 py-3 sm:px-6 lg:px-24'>
        <img src={assets.logo} alt="" className='w-24 sm:w-28 lg:w-32 ml-2 sm:ml-4 lg:ml-8'/>

        <button onClick={()=>navigate('/login')}
          className='flex items-center justify-center gap-3 border border-gray-500 rounded-full text-gray-800 
          hover:bg-gray-100 transition-all min-w-[110px] h-[40px] text-base sm:min-w-[180px] sm:h-14 sm:text-lg lg:min-w-[200px]'>
          Login <img src={assets.arrow_icon} alt='' className='w-4 h-4 sm:w-5 sm:h-5 ' />
        </button>
    </div>
  )
}

export default Navbar