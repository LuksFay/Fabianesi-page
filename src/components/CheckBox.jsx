import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const listItems = [
    {
        id: 1,
        title: 'Todos los Productos',
        value: 'Todos',
    },
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

const CheckBox = () => {
    let prod = [];

    const handleCheck = e => {
        const result = e.target.value;
        const res = prod.find((item) => item === result);
        const index = prod.findIndex((item) => item === res);
        const card = document.getElementsByClassName(result);

        if(!res){
            prod.push(result);
            for(let i = 0; i < card.length; i++){
                if(prod.includes(result) && card[i].classList.contains(result)){
                    console.log('se muestra cards FILTRADAS')
                }
            }
        } else {
            prod.splice(index, 1);
            if(!prod || prod === 'Todos'){
                console.log('muestra TODAS las card')
            }
        }
        console.log(prod)

    }

    return (
    <>
        <Box sx={{padding: '1rem'}}>
            <FormGroup >
                {listItems.map((item) => {
                    return(
                        <FormControlLabel key={item.id} label={item.title} 
                            control={<Checkbox 
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