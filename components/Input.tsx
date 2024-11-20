import React from 'react'
import { TextField, FormControl } from '@mui/material'
import { InputTypes } from './interfaces/types'

const InputStyle: React.FC<InputTypes> = ({ label, id, placeholder, action }) => {
  return (
    <FormControl fullWidth>
      <TextField
        id={id}
        label={label}
        defaultValue={placeholder}
        onChange={action}
      />
    </FormControl>
  )
}

export default InputStyle
