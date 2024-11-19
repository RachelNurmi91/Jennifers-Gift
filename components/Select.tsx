import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material'

interface Options {
  value: string;
  label: string;
}
interface SelectProps {
  label: string;
  id: string;
  action:  (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: Options[];
  value: string;
  desc?: string;
}

const SelectStyle: React.FC<SelectProps> = ({ label, id, action, options, value, desc }) => {
  return (
    <FormControl fullWidth>
      <InputLabel 
        id="demo-simple-select-label"
      >
        {label}
      </InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}    
        label={label}
        onChange={action}
      >
        {options?.map((option, i) => (
              <MenuItem 
                key={i}
                value={option.value}
              >
                {option.label}
              </MenuItem>
          ))
        }
      </Select>
      <FormHelperText>{desc}</FormHelperText>
    </FormControl>
  )
}

export default SelectStyle
