import React from 'react'
import { useGlobalContext } from '../context';

const Nav = () => {
  const data = useGlobalContext();
  return (
    <div className='h-12 w-full md:h-16 lg:h-16 bg-gray-700 text-white flex justify-center font-bold items-center fixed top-0 left-0 z-50'>{data}</div>
  )
}

export default Nav