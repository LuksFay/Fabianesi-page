import React, {useState} from 'react';
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
    const [checked, setChecked] = useState(
        listItems.map((i) => false)
    );

    const handleCheck = e => {
        setChecked(!checked)
        const result = e.target.value;
        checked === true ? handleCategory(result) : handleAllCategory();
    }

    const handleCategory = value => {
        const card = document.getElementsByClassName(value);
        const allCards = document.getElementsByClassName('container-card');

        for(let i = 0; i < allCards.length; i++){
            allCards[i].style.display = 'none'
        }

        for(let i = 0; i < card.length; i++){
            if(card[i].classList.contains(value)){
                card[i].style.display = 'block';
            }
        }
    }

    const handleAllCategory = () => {
        const allCards = document.getElementsByClassName('container-card');

        for(let i = 0; i < allCards.length; i++){
            allCards[i].style.display = 'block'
        }
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