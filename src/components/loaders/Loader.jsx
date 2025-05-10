import { LoaderCircle } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className=' w-100  h-80  flex flex-col justify-center items-center'>
      <LoaderCircle className=' animate-spin  text-gray-300 w-16 h-16'/> 
      <p className='text-gray-400 mt-2 '>Loading...</p>
    </div>
  )
}

export default Loader
