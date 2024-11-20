import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material'
import { SelectTypes } from './interfaces/types';


const SelectStyle: React.FC<SelectTypes> = ({ label, id, action, options, value, desc }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}    
        label={label}
        onChange={action}  // onChange now uses SelectChangeEvent
      >
        {options?.map((option, i) => (
          <MenuItem key={i} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{desc}</FormHelperText>
    </FormControl>
  );
};

export default SelectStyle;
