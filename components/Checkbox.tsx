import React from 'react'
import { Checkbox, FormControlLabel, FormHelperText, FormGroup } from '@mui/material'
import { CheckboxTypes } from './interfaces/types'


const CheckboxStyle: React.FC<CheckboxTypes> = ({ text, id, desc, onSelect }) => {
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
