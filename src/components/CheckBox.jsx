import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
        main: grey[100],
    },
  },
});

const listItems = [
    {
        id: 2,
        title: 'Bateas Ultrasonido',
        value: 'Batea',
    },
    {
        id: 3,
        title: 'Diagnostico Directo',
        value: 'Diagnostico Directo',
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
        value: 'Escaner Profesional',
    },
    {
        id: 7,
        title: 'GNC',
        value: 'Gnc',
    },
    {
        id: 8,
        title: 'Proyectos Especiales',
        value: 'Proyectos Especiales',
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
        <ThemeProvider theme={darkTheme}>
            <Box component='div' sx={{
                    position: 'sticky',
                    margin: '1rem',
                    top: '9rem',
                }}>
                <FormGroup>
                        <FormControlLabel key={'00'} label={'Todos Los Productos'} 
                                control={
                                <Checkbox
                                    color='primary'
                                    checked={filters.length === 0}
                                    onChange={(e) => setFilters([])}
                                />}
                            />
                    {listItems.map((item) => {
                        return(
                            <FormControlLabel key={item.id} label={item.title} 
                                control={
                                <Checkbox
                                    color='primary'
                                    checked={filters.includes(item.value)}
                                    value={item.value}
                                    onChange={(e) => handleCheck(e)}
                                />}
                            />
                        )
                    })}
                </FormGroup>
            </Box>
        </ThemeProvider>
    </>
    )
}

export default CheckBox