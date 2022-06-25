import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const listItems = [
    {
        id: 2,
        title: 'Bateas Ultrasonido',
        value: 'Batea',
    },
    {
        id: 3,
        title: 'Diagnostico Directo',
        value: 'DiagnosticoDirecto',
    },
    {
        id: 4,
        title: 'Electrónica / Portones automáticos',
        value: 'Porton',
    },
    {
        id: 5,
        title: 'Escáneres',
        value: 'Escaner',
    },
    {
        id: 6,
        title: 'Escáneres Profesionales AUTEL',
        value: 'EscanerProfesional',
    },
    {
        id: 7,
        title: 'GNC',
        value: 'Gnc',
    },
    {
        id: 8,
        title: 'Proyectos Especiales',
        value: 'ProyectosEspeciales',
    },
    {
        id: 9,
        title: 'Tacómetro',
        value: 'Tacometro',
    },
    {
        id: 10,
        title: 'Testers',
        value: 'Testers',
    },
]

const CheckBox = ({filters, setFilters}) => {

    const handleCheck = e => {
        let Lfilters = [...filters]
        if(filters.includes(e.target.value)) {
            Lfilters = Lfilters.filter(filter => filter !== e.target.value)
        } else {
            Lfilters.push(e.target.value)
        }
        setFilters(Lfilters)
    }

    return (
    <>
        <Box sx={{padding: '1rem'}}>
            <FormGroup >
                     <FormControlLabel key={'00'} label={'Todos Los Productos'} 
                            control={
                            <Checkbox
                                checked={filters.length === 0}
                                onChange={(e) => setFilters([])}
                            />}
                        />
                {listItems.map((item) => {
                    return(
                        <FormControlLabel key={item.id} label={item.title} 
                            control={
                            <Checkbox
                                checked={filters.includes(item.value)}
                                value={item.value}
                                onChange={(e) => handleCheck(e)}
                            />}
                        />
                    )
                })}
            </FormGroup>
        </Box>
    </>
    )
}

export default CheckBox