import React from 'react'
import { Checkbox, FormControlLabel, FormHelperText, FormGroup } from '@mui/material'

const CheckboxStyle = ({ text, id, desc, onSelect }) => {
  return (
    <FormGroup>
    <FormControlLabel 
      control={
        <Checkbox           
          id={id} 
          name={id}
          type="checkbox"
          onClick={onSelect}
        />
      } 
      label={text} 
      />
    <FormHelperText>{desc}</FormHelperText></FormGroup>
  )
}

export default CheckboxStyle
