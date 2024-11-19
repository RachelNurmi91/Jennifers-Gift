import React from 'react'
import { TextField, FormControl } from '@mui/material'

interface InputProps {
  label: string;
  id: string;
  placeholder: string;
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputStyle: React.FC<InputProps> = ({ label, id, placeholder, action }) => {
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
