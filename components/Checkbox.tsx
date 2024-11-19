import React from 'react'
import { Checkbox, FormControlLabel, FormHelperText, FormGroup } from '@mui/material'

interface CheckboxProps {
  text: string;
  id: string;
  desc?: string;
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxStyle: React.FC<CheckboxProps> = ({ text, id, desc, onSelect }) => {
  return (
    <FormGroup>
    <FormControlLabel 
      control={
        <Checkbox           
          id={id} 
          name={id}
          onChange={onSelect}
        />
      } 
      label={text} 
      />
    <FormHelperText>{desc}</FormHelperText></FormGroup>
  )
}

export default CheckboxStyle
