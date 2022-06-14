import React, {useState} from 'react';
import { Box, Checkbox, FormControlLabel } from '@mui/material';

const CheckBox = () => {
  return (
    <>
        <Box sx={{padding: '1rem'}}>
            <FormControlLabel
                label='Bateas Ultrasonido'
                control={<Checkbox />}/>
            <FormControlLabel 
                label='Diagnostico Directo'
                control={<Checkbox />}/>
            <FormControlLabel 
                label='Electrónica / Portones automáticos'
                control={<Checkbox />}/>
            <FormControlLabel 
                label='Escáneres'
                control={<Checkbox />}/>
            <FormControlLabel 
                label='Escáneres Profesionales AUTEL'
                control={<Checkbox />}/>
            <FormControlLabel 
                label='GNC'
                control={<Checkbox />}/>
        </Box>
    </>
  )
}

export default CheckBox