import React from 'react'
import { useGlobalContext } from '../data/context'

const Fetched = () => {
  const { selectedVid } = useGlobalContext();
  const { selectedVideoTitle, selectedVideoThumbnail, selectedVideoChannel } = selectedVid

  return (
    <div className='bg-gray-600/0 h-4/5 md:h-4/5 rounded p-3 flex flex-col gap-12 mt-8 w-4/5'>
      <div className='bg-black rounded-xl md:rounded-lg w-full h-2/5 md:h-3/5 overflow-hidden'>
        {
          selectedVideoThumbnail !== undefined ?
            <img src={selectedVideoThumbnail} alt="video-thumbnail" className='w-full h-full object-cover' /> : null
        }
      </div>
      <div className='bg-gray-800 rounded w-full h-1/3 md:h-2/5 flex flex-col justify-between p-2 items-center text-center'>
        {
          selectedVideoTitle !== undefined ?
            <>
              <h3 className='font-bold text-lg text-gray-200'>{selectedVideoTitle.substring(0, 75)}</h3>
              <h4 className='font-bold text-sm text-gray-200'>{selectedVideoChannel}</h4>
            </> :
            null
        }
      </div>
    </div>
  )
}

export default Fetched