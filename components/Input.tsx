import React from 'react'
import { TextField, FormControl } from '@mui/material'

const InputStyle = ({ label, id, placeholder, action }) => {
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
