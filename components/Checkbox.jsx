import React from 'react'

const Checkbox = ({ label, id, desc, onSelect }) => {
  return (
    <div className="relative flex gap-x-3 my-6">
      <div className="flex h-6 items-center">
        <input 
          id={id} 
          name={id}
          type="checkbox"
          onClick={onSelect}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="text-sm leading-6">
        <label 
          htmlFor={id}
          className="font-bold text-gray-900"
        >
          {label}
        </label>
        {desc && <p className="text-gray-500">{desc}.</p>}
      </div>
    </div>
  )
}

export default Checkbox
