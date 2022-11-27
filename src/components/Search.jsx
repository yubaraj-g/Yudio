import React from 'react'

const Search = () => {
  return (
    <div className='search p-6 md:p-12 flex justify-center'>
        <form className='w-full md:w-4/5'>
            <input type='text' className='py-3 px-5 text-sm w-full rounded-full outline-none border border-gray-500 focus:border-gray-300 bg-transparent focus:text-white' placeholder='Type something here' />
        </form>
    </div>
  )
}

export default Search