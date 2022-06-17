import React, {useState} from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { CardAllItems } from './items/CardAllItems';

const CheckBox = () => {
    const [checked, setCheck] = useState(true);

    const handleCheck = e => {
        {checked ? handleShow(e) : console.log('jejewp')}
    }

    const handleShow = e => {
        const result = e.target.value;
        const card = document.getElementsByClassName(`${result}`);
        const allCards = document.getElementsByClassName('container-card');
        
        for(let i = 0; i < allCards.length; i++){
            allCards[i].style.display = 'none';
        }
        for(let j = 0; j < card.length; j++){
            card[j].style.display = 'block';
        }

        if(result === 'Todos'){
            for(let i = 0; i < allCards.length; i++){
                allCards[i].style.display = 'block';
            }
        }
    }

    return (
    <>
        <Box sx={{padding: '1rem'}}>
            <FormGroup >
                <FormControlLabel
                    label='Todos los Productos'
                    control={<Checkbox 
                        value='Todos'
                        onClick={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel
                    label='BateasUltrasonido'
                    control={<Checkbox 
                        value='Batea'
                        onClick={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Diagnostico Directo'
                    control={<Checkbox 
                        value='DiagnosticoDirecto'
                        onClick={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Electrónica / Portones automáticos'
                    control={<Checkbox 
                        value='Porton'
                        onClick={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Escáneres'
                    control={<Checkbox 
                        value='Escaner'
                        onClick={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Escáneres Profesionales AUTEL'
                    control={<Checkbox 
                        value='EscanerProfesional'
                        onClick={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='GNC'
                    control={<Checkbox 
                        value='Gnc'
                        onClick={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Proyectos Especiales'
                    control={<Checkbox 
                        value='ProyectosEspeciales'
                        onClick={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Tacómetro'
                    control={<Checkbox 
                        value='Tacometro'
                        onClick={(e) => handleCheck(e)}
                    />
                    }/>
                <FormControlLabel 
                    label='Testers'
                    control={<Checkbox 
                        value='Testers'
                        onClick={(e) => handleCheck(e)}
                    />
                    }/>
            </FormGroup>
        </Box>
    </>
    )
}

export default CheckBox