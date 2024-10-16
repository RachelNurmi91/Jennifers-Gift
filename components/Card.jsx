import React from 'react'

const Card = ({ image, title, subtitle, desc}) => {
  return (
    <div className='border border-solid border-gray-400 rounded-md my-8'>
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr]">
        <div className='rounded-l-md bg-gray-200'>{image}</div>
        <div className='p-6'>
          <span className='font-bold text-lg'>{title}</span>
          <p className='text-sm text-gray-500 italic'>{subtitle}</p>
          <div className='text-sm mt-5'>{desc}</div>
        </div>
      </div>
    </div>

  )
}

export default Card
