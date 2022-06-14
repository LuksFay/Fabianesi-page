import React, {useState} from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const CheckBox = () => {
  return (
    <>
        <Box sx={{padding: '1rem'}}>
            <FormGroup>
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
            </FormGroup>
        </Box>
    </>
  )
}

export default CheckBox