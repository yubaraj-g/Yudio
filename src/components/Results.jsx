import React from 'react'
import thumbnail from "../img/thumbnail.jpg"

const Results = () => {

  return (
    <div className='flex flex-col gap-2 p-2 w-3/4 mx-auto mb-8'>
        <div className='w-full flex flex-col mx-auto md:flex-row lg:flex-row gap-6 justify-between border rounded border-gray-500 p-6'>
            <picture className='w-full md:w-1/2 lg:w-1/2'>
                <img src={thumbnail} alt="dummy-thumbnail" className='w-full object-fill h-full' />
            </picture>

            <div className='flex flex-col text-white justify-between gap-4'>
                <h2 className='title font-bold'>James Arthur - Falling Like The Stars (Lyrics)</h2>
                <h6 className='channel text-sm'>Ethereal Music</h6>
            </div>
        </div>
    </div>
  )
}

export default Results