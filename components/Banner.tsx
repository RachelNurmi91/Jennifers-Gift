import React from 'react'
import { BannerTypes } from './interfaces/types'


const Banner: React.FC<BannerTypes> = ({ title }) => {
  return (
<div className='bg-gray-50' style={{ height: "200px" }}>
  <div className="mx-auto p-10" style={{ maxWidth: "900px", height: "100%" }}>
    <div className='flex items-center h-full'>
      <h1 className='text-5xl text-black font-extrabold'>
        {title}
      </h1>
    </div>
  </div>    
</div>

  )
}

export default Banner
